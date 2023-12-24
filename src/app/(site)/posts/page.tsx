import Link from "next/link";

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  return (
    <div>
      <Link
        href={{
          pathname: "",
          query: {
            page: page > 1 ? page - 1 : 1,
          },
        }}
        className="h-8 py-2 px-4 text-sm leading-normal inline-flex justify-center items-center border rounded-lg bg-white font-medium"
      >
        이전
      </Link>
      <Link
        href={{
          pathname: "",
          query: {
            page: page + 1,
          },
        }}
        className="h-8 py-2 px-4 text-sm leading-normal inline-flex justify-center items-center border rounded-lg bg-white font-medium"
      >
        다음
      </Link>
    </div>
  );
}
