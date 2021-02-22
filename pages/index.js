import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Victor Rocha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center">
        <h1 className="text-red-500">
          Hi! I'm João Victor Rocha, I'm a Software Engineer currently studying
          at UFG (Goiânia, Brazil)
        </h1>
      </main>
    </div>
  );
}
