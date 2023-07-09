import GithubIcon from "@/components/icon/GithubIcon";

const Home = () => {
  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl ">
      <main className="py-20 flex flex-col gap-4">
        <h2 className="text-5xl font-semibold">김찬우</h2>
        <div>
          <a
            aria-label="a-ryang github"
            target="_blank"
            rel="noopener"
            href="https://github.com/a-ryang"
          >
            <GithubIcon
              height={32}
              width={32}
              className={"fill-neutral-600 dark:fill-dark-100"}
            />
          </a>
        </div>
        <section className="py-5">
          <h1 className="text-4xl font-semibold">work</h1>
          <div className="mt-4 border-b-4 border-primary-600 content-none"></div>
        </section>
        <section className="py-5">
          <h1 className="text-4xl font-semibold">education</h1>
          <div className="mt-4 border-b-4 border-primary-600 content-none"></div>
        </section>
        <section className="py-5">
          <h1 className="text-4xl font-semibold ">
            contribute
            <div className="mt-4 border-b-4 border-primary-600 content-none"></div>
          </h1>

          <article className="py-4">
            <h1 className="text-xl font-semibold">MDN</h1>
            <p className="pt-s text-lg">
              문서 링크 수정
              <span className="text-gray-600 dark:text-dark-100">
                {" "}
                | 2023-02-13
              </span>
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/mdn/translated-content/pull/11384"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              바로가기
            </a>
          </article>

          <article className="py-4">
            <h1 className="text-xl font-semibold">Vuejs-kr</h1>
            <p className="pt-s text-lg">
              문서 오타 수정
              <span className="text-gray-600 dark:text-dark-100">
                {" "}
                | 2023-02-06
              </span>
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/vuejs-kr/docs-next/pull/292"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              바로가기
            </a>
          </article>

          <article className="py-4">
            <h1 className="text-xl font-semibold">loadingio</h1>
            <p className="pt-s text-lg">
              문서 링크 수정
              <span className="text-gray-600 dark:text-dark-100">
                {" "}
                | 2022-12-20
              </span>
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/loadingio/ldbutton/issues/6"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              바로가기
            </a>
          </article>

          <article className="py-4">
            <h1 className="text-xl font-semibold">Nodejs</h1>
            <p className="pt-s text-lg">
              문서 최신화
              <span className="text-gray-600 dark:text-dark-100">
                {" "}
                | 2022-07-21
              </span>
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/nodejs/nodejs.org/pull/4733"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              바로가기
            </a>
          </article>

          <article className="py-4">
            <h1 className="text-xl font-semibold">Nestia</h1>
            <p className="pt-s text-lg">
              문서 링크 수정
              <span className="text-gray-600 dark:text-dark-100">
                {" "}
                | 2022-05-24
              </span>
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/samchon/nestia/pull/95"
              className="text-blue-500 dark:text-blue-100 hover:underline"
            >
              바로가기
            </a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
