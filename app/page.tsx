import Image from "next/image";
import GithubIcon from "@/components/icon/GithubIcon";

const Home = () => {
  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl ">
      <main className="py-20 flex flex-col items-center gap-4">
        <h1 className="text-2xl">a-ryang</h1>
        <h2 className="text-xl">김찬우</h2>
        <a
          target="_blank"
          rel="a-ryang github"
          href="https://github.com/a-ryang"
        >
          <GithubIcon height={32} width={32} className={"fill-neutral-600 "} />
        </a>
        <section>
          <h1>work</h1>
        </section>
        <section>
          <h1>education</h1>
        </section>
        <section>
          <h1>contribute</h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
