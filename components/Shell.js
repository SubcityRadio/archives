const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        margin-top: 60px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default Shell;
