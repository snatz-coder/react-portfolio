import { Suspense } from "react";

async function SlowData() {
  const data = await new Promise<string>(res =>
    setTimeout(() => res("This content streamed after 1s 🚀"), 1000)
  );
  return <p>{data}</p>;
}

function SlowDataHost() {
  return <SlowData />;
}

export default function SuspenseDemo() {
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Suspense + Streaming</h2>
      <Suspense fallback={<p>Loading streamed content…</p>}>
        <SlowDataHost />
      </Suspense>
    </section>
  );
}
