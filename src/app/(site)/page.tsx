import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Container } from "@/components/container/container";

export default function HomePage() {
  return (
    <Box>
      <Header title="Home" />
      <Container>Hello world</Container>
    </Box>
  );
}
