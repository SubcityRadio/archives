import Layout from "../components/Layout.js";
import YearNavigator from "../components/YearNavigator.js";
import axios from "axios";

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
        <div>
          <p>About</p>
        </div>
      </Layout>
    );
  }
}

export default withRouter(About);
