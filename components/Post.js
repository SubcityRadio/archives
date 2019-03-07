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
          <img src={this.props.post.post_image} />
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.post_content}</p>
            <img
              src={this.props.post.post_image}
              alt={this.props.post.post_image_alt_text}
              className="post-image"
            />
          </div>
        </Modal>
        <style jsx>
          {`
            .post {
              display: inline-block;
              text-decoration: none;
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
            img {
              width: 80%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Post;
