const Header = () => (
  <div id="header">
    <h1> Header</h1>
    <div className="logos">
      <a href="https://subcity.org">
        <img
          src="/static/top-logo-white.png"
          alt="subcity logo"
          className="logo1"
        />
      </a>
      <a href="/about">
        <img
          src="/static/subcityHeaderText.png"
          alt="subcity logo text"
          width="85%"
          className="logo2"
        />
      </a>
    </div>

    <style jsx>{`
      #header {
        height: 60px;
        width: 100%;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        z-index: 1;
      }

      #header h1 {
        color: white;
        font-size: 24px;
        margin-left: 45%;
        float: left;
      }
      .float {
        float: left;
      }
      .logos {
        float: right;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 25%;
        max-width: 190px;
        height: 60px;
      }
      .logo1 {
        margin-left: 25%;
      }
      .logo2 {
        min-width: 42px;
        margin-top: 10%;
      }
      @media only screen and (min-width: 750px) {
        header h1 {
          left: 45%;
        }
      }
    `}</style>
  </div>
);

export default Header;
