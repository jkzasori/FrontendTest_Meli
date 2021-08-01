import { Helmet } from "react-helmet";

const HomeSearchBarContainer = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre</title>
        <meta
          name="description"
          content="Mercado Libre, el sitio dónde encuentras todo lo que necesitas - Pagá en cuotas - Envíos a todo el país."
        />
      </Helmet>
      Nunca dejes de buscar
    </div>
  );
};

export default HomeSearchBarContainer;
