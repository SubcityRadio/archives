import Year from "./Year";
export default class YearNavigator extends React.Component {
  render() {
    const years = this.props.years;
    return (
      <ul className="year-list">
        <li>
          <a key="About"> About</a>
        </li>
        {years && years.length > 0 ? (
          years.map(year => <Year key={year} info={year} />)
        ) : (
          <p>Error loading the years</p>
        )}
        <style global jsx>{`
          .year-list {
            margin-top: 2%;
            position: fixed;
            float: left;
            padding: 0;
            width: 16%;
            list-style-type: none;
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
