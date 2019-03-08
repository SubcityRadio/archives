import Layout from "../components/Layout.js";
import YearNavigator from "../components/YearNavigator.js";
import axios from "axios";
import PostGallery from "../components/PostGallery";
import Modal from "react-responsive-modal";

export default class Index extends React.Component {
  state = {
    years: [],
    open: false
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
        <PostGallery year="1995" />
      </Layout>
    );
  }
}
