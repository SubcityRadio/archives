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
      <link
        href="https://fonts.googleapis.com/css?family=Homemade+Apple"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <Shell>{props.children}</Shell>

    <style global jsx>{`
      body {
        font-family: "Homemade Apple", cursive;
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
