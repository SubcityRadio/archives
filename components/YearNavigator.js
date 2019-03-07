import Year from "./Year";
import Link from "next/link";

export default class YearNavigator extends React.Component {
  render() {
    const years = this.props.years;
    return (
      <ul className="year-list">
        <li>
          <Link key="About" as={`/about`} href={`/about`}>
            <a>About</a>
          </Link>
        </li>
        {years && years.length > 0 ? (
          years.map(year => <Year key={year} info={year} />)
        ) : (
          <p>Loading...</p>
        )}
        <style global jsx>{`
          .year-list {
            margin-top: 2%;
            position: fixed;
            float: left;
            padding-left: 1%;
            width: 16%;
            list-style-type: none;
            font-size: 25px;
          }
          li a {
            display: inline-block;
            text-decoration: none;
            width: 100%;
            background-color: #dadad9;
            color: black;
            text-align: center;
            border-width: 1pt;
            border-style: solid;
          }

          li a:focus,
          li a:hover,
          li a:active {
            background-color: #ececec;
            color: #ff00ff;
            border-width: 8pt;
            width: 95%;
          }
        `}</style>
      </ul>
    );
  }
}
