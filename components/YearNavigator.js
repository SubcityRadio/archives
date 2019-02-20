import Year from "./Year";
export default class YearNavigator extends React.Component {
  render() {
    const years = this.props.years;
    return (
      <ul className="year-list">
        <li>
          <a> About</a>
        </li>
        {years && years.length > 0 ? (
          years.map(year => (
            <Year info={year} />
            // <li>
            //   <a>{year}</a>
            // </li>
          ))
        ) : (
          <p>Error loading the years</p>
        )}
        <style global jsx>{`
          .year-list {
            display: grid;
            list-style-type: none;
            padding: 0;
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
