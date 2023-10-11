import classes from "./contributes-section.module.css";
import { BookBookmark } from "@phosphor-icons/react/dist/ssr/index";

import { ContributeItem, ContributeItemProps } from "./contribute-item";
import { Section } from "./section";

const contributes: ContributeItemProps[] = [
  {
    image: "/images/contributes/mantine.png",
    name: "mantine",
    description: "IME 버그 수정",
    href: "https://github.com/mantinedev/mantine/pull/4947",
    status: "merged",
    datetime: "2023-10-02",
  },
  {
    image: "/images/contributes/vuejs-docs-ko.png",
    name: "vuejs-translations",
    description: "문서 링크 수정",
    href: "https://github.com/vuejs-translations/docs-ko/pull/18",
    status: "merged",
    datetime: "2023-07-18",
  },
  {
    image: "/images/contributes/mdn.png",
    name: "MDN",
    description: "문서 링크 수정",
    href: "https://github.com/mdn/translated-content/pull/11384",
    status: "merged",
    datetime: "2023-02-13",
  },
  {
    image: "/images/contributes/docs-next.png",
    name: "Vuejs-kr",
    description: "문서 오타 수정",
    href: "https://github.com/vuejs-kr/docs-next/pull/292",
    status: "merged",
    datetime: "2023-02-06",
  },
  {
    image: "/images/contributes/loading-io.png",
    name: "loadingio",
    description: "문서 링크 수정",
    href: "https://github.com/loadingio/ldbutton/issues/6",
    status: "open",
    datetime: "2022-12-20",
  },
  {
    image: "/images/contributes/nodejs.png",
    name: "Nodejs",
    description: "문서 최신화",
    href: "https://github.com/nodejs/nodejs.org/pull/4733",
    status: "merged",
    datetime: "2022-07-21",
  },
  {
    image: "/images/contributes/nestia.png",
    name: "Nestia",
    description: "문서 링크 수정",
    href: "https://github.com/samchon/nestia/pull/95",
    status: "merged",
    datetime: "2022-05-24",
  },
];

export function ContributesSection() {
  return (
    <Section icon={BookBookmark} title="Contributes">
      <ul className={classes["contribute-list"]}>
        {contributes.map((item) => (
          <li key={item.name}>
            <ContributeItem {...item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
