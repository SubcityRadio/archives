import Post from "./Post";
import axios from "axios";

export default class PostGallery extends React.Component {
  state = {
    posts: []
  };

  getPosts = () => {
    axios
      .get(`https://subcity-admin.appspot.com/year/${this.props.year}`)
      .then(res => {
        const posts = [];
        console.log(res.data);
        for (let postEntry of res.data) {
          posts.push(postEntry);
        }
        console.log(posts);
        this.setState({ posts });
      });
  };
  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.year !== prevProps.year) {
      this.getPosts();
    }
  }

  render() {
    const posts = this.state.posts;
    return (
      <div id="gallery">
        {posts && posts.length > 0 ? (
          posts.map(post => <Post post={post} />)
        ) : (
          <p>Loading ...</p>
        )}
        <style global jsx>{`
          #gallery {
            margin-top: 2%;
            float: right;
            width: 80%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(415px, 1fr));
            grid-gap: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
