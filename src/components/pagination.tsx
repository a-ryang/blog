import Link from "next/link";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

import { siteConfig } from "@/config";

type Props = {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl = "",
}: Props) {
  const { sizePerPage } = siteConfig;

  const startPage =
    Math.floor((currentPage - 1) / sizePerPage) * sizePerPage + 1;
  const endPage = Math.min(startPage + sizePerPage - 1, totalPages);
  const pageNums = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav className="flex justify-center mt-10">
      <h1 className="hidden">페이지네이션</h1>
      <ul className="flex gap-2">
        <li>
          {hasPrev && (
            <Page href={`${baseUrl}/${currentPage - 1}`}>
              <CaretLeft weight="bold" size={16} />
            </Page>
          )}
        </li>
        {pageNums.map((pageNum) => (
          <li key={pageNum}>
            {pageNum === currentPage ? (
              <Page isActive={true} href={`${baseUrl}/${pageNum}`}>
                {pageNum}
              </Page>
            ) : (
              <Page href={`${baseUrl}/${pageNum}`}>{pageNum}</Page>
            )}
          </li>
        ))}
        <li>
          {hasNext && (
            <Page href={`${baseUrl}/${currentPage + 1}`}>
              <CaretRight weight="bold" size={16} />
            </Page>
          )}
        </li>
      </ul>
    </nav>
  );
}

function Page({
  isActive = false,
  href,
  children,
}: {
  isActive?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  if (isActive)
    return (
      <span className="inline-flex items-center justify-center rounded w-8 h-8 bg-base-900 text-inverte text-sm font-bold">
        {children}
      </span>
    );

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded w-8 h-8 text-sm hover:bg-gray-100 transition-[background-color] "
    >
      {children}
    </Link>
  );
}
