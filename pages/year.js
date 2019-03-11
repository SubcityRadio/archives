import Layout from "../components/Layout.js";
import PostGallery from "../components/PostGallery.js";
import YearNavigator from "../components/YearNavigator.js";
import { withRouter } from "next/router";
import axios from "axios";

class Page extends React.Component {
  state = {
    years: [],
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
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
      <Layout>
        {/* <YearNavigator years={this.state.years} /> */}
        <PostGallery year={this.props.router.query.year} />
      </Layout>
    );
  }
}

export default withRouter(Page);
