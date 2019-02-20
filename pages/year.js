import Layout from "../components/Layout.js";
import YearNavigator from "../components/YearNavigator.js";
import { withRouter } from "next/router";

const Page = withRouter(props => (
  <Layout>
    <YearNavigator
      years={[
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009"
      ]}
    />
    <div>
      <p>{props.router.query.year}</p>
    </div>
  </Layout>
));

export default Page;
