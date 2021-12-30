import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Pagina no encontrada</title>
      <h1 style={headingStyles}>Pagina no encontrada</h1>
      <p style={paragraphStyles}>
        Lo sentimos{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        no podimos encontrar lo que buscabas.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Intentando crear pagina enn{" "}
            <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Regresar al Home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
