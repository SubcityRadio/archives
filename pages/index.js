import Layout from "../components/Layout.js";
import YearNavigator from "../components/YearNavigator.js";

export default () => (
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
      <p>there</p>
    </div>
  </Layout>
);
