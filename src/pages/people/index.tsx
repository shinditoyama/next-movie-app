// import { GetServerSideProps } from "next";
import { Pagination } from "flowbite-react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { pageState } from "../../atoms/genreAtom";
import Layout from "../../components/Layout";
import PersonCard from "../../components/PersonCard";
import { IPerson } from "../../types/Typings";
import { getPerson } from "../../utils/requests";

export default function People() {
  const [page, setpage] = useRecoilState(pageState);
  const { data } = useSWR(getPerson(page));

  const onPageChange = (selected: number) => {
    setpage(selected);
  };

  return (
    <Layout title="Lista de atores">
      <section>
        <div className="text-2xl font-sans font-semibold mb-4">Pessoas</div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.results.map((item: IPerson) => (
            <PersonCard key={item.id} result={item} />
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
      </section>
    </Layout>
  );
}

/* export const getServerSideProps: GetServerSideProps = async () => {
  const [person] = await Promise.all([
    fetch(requests.fetchPopularPeople).then((response) => response.json()),
  ]);

  return {
    props: {
      person: person.results,
    },
  };
}; */
