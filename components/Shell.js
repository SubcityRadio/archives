const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        margin-top: 60px;
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default Shell;
