import { Deferrer } from "@/components/deferrer/deferrer";
import { Loader } from "@/components/loader";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Deferrer>
        <Loader />
      </Deferrer>
    </div>
  );
}
