import Modal from "react-responsive-modal";

class Post extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div className="post" onClick={this.onOpenModal}>
          <img src="https://placeimg.com/200/200/any" />
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.post_content}</p>
            <img src="https://placeimg.com/200/200/any" />
          </div>
        </Modal>
        <style jsx>
          {`
            .post {
              display: inline-block;
              text-decoration: none;
              background-color: #dadad9;
              color: black;
              text-align: center;
              border-width: 1pt;
              border-style: solid;
            }

            .post:focus,
            .post:hover,
            .post:active {
              background-color: #ececec;
              color: #ff00ff;
              border-width: 5pt;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Post;
