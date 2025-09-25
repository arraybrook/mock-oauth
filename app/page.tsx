import ReadMe from "@/README.md";
import "@/app/markdown.css";

export default function Home() {
  return (
    <>
      <article className="px-4 py-2">
        <div>
          <ReadMe />
        </div>
      </article>
      <footer className="m-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://www.arraybrook.com/" className="hover:underline">
              Arraybrook LLC
            </a>
          </span>
          <div className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
            <a href="mailto:contact@arraybrook.com" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
