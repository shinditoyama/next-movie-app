import useSWR from "swr";
import { ListGroup, Spinner } from "flowbite-react";
import { useRecoilValue, useRecoilState } from "recoil";
import { nameState, typeState } from "../../atoms/searchAtom";
import Layout from "../../components/Layout";
import MovieCard from "../../components/MovieCard";
import PersonCard from "../../components/PersonCard";
import SearchBar from "../../components/SearchBar";
import { getSearch } from "../../utils/requests";
import { IMovie, IPerson } from "../../types/Typings";

export default function Search() {
  const search = useRecoilValue(nameState);
  const [type, setType] = useRecoilState(typeState);
  const { data } = useSWR(getSearch(type, search));

  return (
    <Layout title="Pesquisar">
      <section>
        <div className="pb-4">
          <SearchBar />
        </div>
        <div className="w-full rounded flex flex-col md:flex-row bg-white dark:bg-gray-800">
          <div className="md:w-1/3 lg:w-1/5 px-4 py-4">
            <ListGroup>
              <ListGroup.Item
                active={type === "movie"}
                onClick={() => setType("movie")}
              >
                Filme
              </ListGroup.Item>
              <ListGroup.Item
                active={type === "tv"}
                onClick={() => setType("tv")}
              >
                Serie
              </ListGroup.Item>
              <ListGroup.Item
                active={type === "person"}
                onClick={() => setType("person")}
              >
                Pessoas
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="md:w-2/3 lg:w-4/5 px-4 py-4">
            {search ? (
              <>
                <div
                  className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${
                    type === "person" &&
                    "grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4"
                  } `}
                >
                  {!data && <Spinner />}
                  {type !== "person"
                    ? data?.results.map((item: IMovie) => (
                        <MovieCard result={item} key={item.id} type={type} />
                      ))
                    : data?.results.map((item: IPerson) => (
                        <PersonCard result={item} key={item.id} />
                      ))}
                </div>
                {data?.total_results === 0 &&
                  "Não foram encontrados filmes que correspondam aos seus critérios de busca."}
              </>
            ) : (
              "Busque por um Filme, Série ou Pessoa..."
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
