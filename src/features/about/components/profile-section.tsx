import classes from "./profile-section.module.css";
import { IdentificationCard } from "@phosphor-icons/react/dist/ssr/index";

import { Section } from "./section";

export function ProfileSection() {
  return (
    <Section icon={IdentificationCard} title="김찬우">
      <p>자기소개</p>
      <Contact />
    </Section>
  );
}

function Contact() {
  return (
    <ul>
      <li>
        <span className={classes.label}>Email</span>
        <span className="before:mr-2 before:border-l-2 before:border-primary-600">
          <a
            href="mailto:chnwu.kim@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            chnwu.kim@gmail.com
          </a>
        </span>
      </li>
      <li>
        <span className={classes.label}>Github</span>
        <span className="before:mr-2 before:border-l-2 before:border-primary-600">
          <a
            href="https://github.com/a-ryang"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            https://github.com/a-ryang
          </a>
        </span>
      </li>
    </ul>
  );
}
