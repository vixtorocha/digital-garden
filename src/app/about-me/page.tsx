import Link from "@/components/Link";
import React from "react";

export default function AboutMePage() {
  return (
    <main>
      <p>Olá!!!</p>
      <p>
        Meu nome é João Victor Rocha e eu sou um Engenheiro de Software formado
        pela{" "}
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
  );
}
