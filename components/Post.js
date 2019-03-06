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
        <button className="btn btn-action" onClick={this.onOpenModal}>
          {this.props.post.post_id}
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>{this.props.post.post_content}</div>
        </Modal>
      </div>
    );
  }
}

export default Post;
