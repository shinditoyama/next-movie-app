import { GetServerSideProps } from "next";
import { ListGroup, Spinner, Pagination } from "flowbite-react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { serieGenreState, pageState } from "../../atoms/genreAtom";
import Layout from "../../components/Layout";
import MovieCard from "../../components/MovieCard";
import { IMovie, IGenre } from "../../types/Typings";
import { requests, getSerieWithGenre } from "../../utils/requests";

interface Props {
  genres: IGenre[];
}

export default function Serie({ genres }: Props) {
  const [genre, setGenre] = useRecoilState(serieGenreState);
  const [page, setpage] = useRecoilState(pageState);
  const { data } = useSWR(getSerieWithGenre(genre, page));

  const onPageChange = (selected: number) => {
    setpage(selected);
  };

  return (
    <Layout title="Lista de Series">
      <section>
        <div className="text-2xl font-sans font-semibold mb-4">Séries</div>
        <div className="w-full rounded flex flex-col md:flex-row bg-white dark:bg-gray-800">
          <div className="md:w-1/3 lg:w-1/5 px-4 py-4">
            <ListGroup>
              {genres.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  active={genre === item.id}
                  onClick={() => setGenre(item.id)}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="md:w-2/3 lg:w-4/5 px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {!data && <Spinner />}
              {data?.results.map((item: IMovie) => (
                <MovieCard result={item} key={item.id} type="serie" />
              ))}
            </div>
            {data && (
              <div className="flex items-start justify-start pt-4">
                <Pagination
                  currentPage={page}
                  layout="pagination"
                  onPageChange={(e) => onPageChange(e)}
                  totalPages={data.total_pages}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [genres] = await Promise.all([
    fetch(requests.fetchGenreSeries).then((response) => response.json()),
  ]);

  return {
    props: {
      genres: genres.genres,
    },
  };
};
