import classes from "./work-experience-section.module.css";
import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr/index";

import { Section } from "./section";

export function WorkExperienceSection() {
  return (
    <Section icon={ReadCvLogo} title="Work Experience">
      {/* TODO: refactor */}
      <div>
        <h2 className={classes.company}>(주)뉴렉처</h2>
        <div>
          <time className={classes.duration}>2023.02-2023.07</time>
        </div>
      </div>
    </Section>
  );
}
