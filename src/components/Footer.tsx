export default function Footer() {
  return (
    <footer className="p-6 bg-white dark:bg-gray-800">
      <span className="container text-sm text-gray-600 dark:text-gray-400">
        &copy; 2022{" "}
        <a
          href="https://www.themoviedb.org/"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          The Movie Database (TMDB).
        </a>
      </span>
    </footer>
  );
}
