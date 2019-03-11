import Shell from "./Shell";
import Head from "next/head";
import Header from "./Header";
import YearNavigator from "../components/YearNavigator.js";
import axios from "axios";

export default class Layout extends React.Component {
  state = {
    years: []
  };

  componentDidMount() {
    axios.get(`https://subcity-admin.appspot.com/years/`).then(res => {
      const years = [];
      for (let yearEntry of res.data) {
        years.push(yearEntry.year);
      }
      years.sort();
      this.setState({ years });
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Subcity Archives</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <Shell>
          <YearNavigator years={this.state.years} />
          {this.props.children}
        </Shell>

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
  }
}
