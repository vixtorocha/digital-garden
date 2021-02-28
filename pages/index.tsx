import Head from "next/head";
import Link from "components/Link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Victor Rocha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <p>Olá!!!</p>
        <p>
          Meu nome é João Victor Rocha e eu sou estudante de Engenharia de
          Software na{" "}
          <Link href="https://www.ufg.br/">Universidade Federal de Goiás</Link>.
        </p>
        <p>
          Você pode me encontrar no{" "}
          <Link href="https://twitter.com/vixtorocha">Twitter</Link>, no{" "}
          <Link href="https://www.linkedin.com/in/vixtorocha/">LinkedIn</Link> e
          ver meus projetos no{" "}
          <Link href="https://github.com/vixtorocha">Github</Link>.
        </p>
      </main>
    </div>
  );
}
