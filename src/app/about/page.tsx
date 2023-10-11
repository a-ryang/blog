import { Box } from "@/components/box";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import {
  ProfileSection,
  ContributesSection,
  WorkExperienceSection,
} from "@/features/about/components";

export default function AboutPage() {
  return (
    <Box>
      <Header title="About" />
      <Container>
        <ProfileSection />
        <WorkExperienceSection />
        <ContributesSection />
      </Container>
    </Box>
  );
}
