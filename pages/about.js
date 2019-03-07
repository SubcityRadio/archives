import Layout from "../components/Layout.js";
import YearNavigator from "../components/YearNavigator.js";
import axios from "axios";
import { withRouter } from "next/router";

class About extends React.Component {
  state = {
    years: []
  };

  componentDidMount() {
    axios.get(`https://subcity-admin.appspot.com/years/`).then(res => {
      const years = [];
      console.log(res.data);
      for (let yearEntry of res.data) {
        years.push(yearEntry.year);
      }
      years.sort();
      console.log(years);
      this.setState({ years });
    });
  }

  render() {
    return (
      <Layout>
        <YearNavigator years={this.state.years} />
        <div id="about-section">
          <p>
            Since 1995, Subcity has been broadcasting alternative community
            radio in Glasgow, Scotland. Along the way, station team members,
            contributors and fans alike have produced an endless array of
            posters, music, photographs that all offer a unique perspective on
            the station. These artifacts had remained dormant in the Glasgow
            University archives and our own personal hard drives, until now.
            Over the last few months, the Subcity Archives Team has curated over
            100 unique artifacts, ranging from party posters and photographs to
            internal documents, and developed this digital exhibition to offer
            an alternative timeline of Subcity history. Use the left sidebar to
            navigate the artifacts by year. Click on an artifact to enlarge the
            accompanying image and learn more about it. The links for audio
            artifacts can be found in their text descriptions. We’d like to
            thank the Glasgow University Archives for their continued
            maintenance of our physical artifact collection. We’d also like to
            thank any and all past Subcity team members who made efforts to
            digitally and physically preserve our history over the last 23
            years. The Subcity Archives Team is Jake Witz, Ole Peder Brandtzæg,
            Hannah Read, Holly Aloysius, and Mark Faulkner. Website by Bryan
            Mutai
          </p>
        </div>
        <style global jsx>{`
          #about-section {
            margin-top: 2%;
            float: right;
            width: 75%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            grid-auto-rows: 1fr;
            grid-gap: 1rem;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withRouter(About);
