import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
  // Outras configurações do Next.js podem ser adicionadas aqui
};

const withMDX = createMDX({
  // Adicione plugins de markdown aqui, se necessário
});

const withNextIntl = createNextIntlPlugin(
  // Configurações opcionais do next-intl podem ser adicionadas aqui
);

// Combine as configurações do MDX e do next-intl com o Next.js
export default withNextIntl(withMDX(nextConfig));