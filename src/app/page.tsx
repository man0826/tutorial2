import { HelloUniverseLabel } from "@/components/hello-universe-label";

type Human = {
  name: string;
};

export default function Home() {
  const human: Human = {
    name: "masahiko",
  };

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloUniverseLabel />
          <p>{human.name}bbbb</p>
        </div>
      </div>
    </main>
  );
}
