// export default () => (
//   <ul className="year-list">
//     <li>About </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <li>Hey </li>
//     <style global jsx>{`
//       .year-list {
//         display: grid;
//         list-style-type: none;
//       }
//     `}</style>
//   </ul>
// );

export default class YearNavigator extends React.Component {
  render() {
    const years = this.props.years;
    return (
      <ul className="year-list">
        <li> About</li>
        {years && years.length > 0 ? (
          years.map(year => (
            //   <Year info={year} />
            <li>{year}</li>
          ))
        ) : (
          <p>Error loading the years</p>
        )}
        <style global jsx>{`
          .year-list {
            display: grid;
            list-style-type: none;
          }
        `}</style>
      </ul>
    );
  }
}
