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
          posts.map(post => <Post className="post" post={post} />)
        ) : (
          <p>Error loading the content</p>
        )}
        <style global jsx>{`
          #gallery {
            display: grid;
          }
          post {
            display: inline-block;
            text-decoration: none;
            width: 100%;
            background-color: #dadad9;
            color: black;
            text-align: center;
            border-width: 1pt;
            border-style: solid;
          }

          post:focus,
          post:hover,
          post:active {
            background-color: #ececec;
            color: #ff00ff;
            border-width: 8pt;
            width: 95%;
          }
        `}</style>
      </div>
    );
  }
}
