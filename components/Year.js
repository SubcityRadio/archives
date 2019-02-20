import Link from "next/link";

export default class Year extends React.Component {
  render() {
    return (
      <li>
        <Link
          as={`/year/${this.props.info}`}
          href={`/year?year=${this.props.info}`}
        >
          <a>{this.props.info}</a>
        </Link>
      </li>
    );
  }
}
