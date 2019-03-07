import Shell from "./Shell";
import Head from "next/head";
import Header from "./Header";
const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const Layout = props => (
  <div>
    <Head>
      <title>Subcity Archives</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Shell>{props.children}</Shell>

    <style global jsx>{`
      @font-face {
        font-family: "decima_monoregular";
        src: url("/static/fonts/decima_mono-webfont.woff2") format("woff2"),
          url("/static/fonts/decima_mono-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      body {
        font-family: "decima_monoregular", "Helvetica", "Arial";
        letter-spacing: 0.05em;
        margin: 0;
        background-color: white;
        display: grid;
      }
      button {
        font-family: "Homemade Apple", cursive;
      }
    `}</style>
  </div>
);

export default Layout;
