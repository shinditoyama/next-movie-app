import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const { asPath } = router;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Shindi Toyama" />
        <meta name="description" content="Movie app com next e tailwind" />
        <meta name="keywords" content="movie, serie" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {asPath !== `/movie/${id}` && asPath !== `/tv/${id}` && <Header />}
        <main className="flex-grow">{children}</main>
        {asPath !== `/movie/${id}` && asPath !== `/tv/${id}` && <Footer />}
      </div>
    </>
  );
}
