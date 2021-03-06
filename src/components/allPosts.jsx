import React, { Component } from "react";
import Post from "./singlePost";
import NewPost from "./newPosts";
import axios from "axios";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    var self = this;
    axios({
      url: "/api/v1/posts",
      mode: "no-cors"
    })
      .then(function(response) {
        self.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.posts !== null) {
      return (
        <div className="row post-list">
          <div className="col"></div>
          <div className="col">
            <NewPost
              authToken={this.props.authToken}
              getPosts={this.getPosts}
            />
            {this.state.posts.map(post => (
              <Post
                key={post.id}
                message={post.message}
                username={post.user.username}
                created_at={post.created_at}
                comments={post.comments}
                get_likes={post.get_likes}
                getPosts={this.getPosts}
                id={post.id}
                authToken={this.props.authToken}
              />
            ))}
          </div>
          <div className="col"></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default AllPosts;
