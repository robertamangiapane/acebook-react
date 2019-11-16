import React, { Component } from "react";
import axios from "axios";
import "./newPosts.css";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    var self = this;
    console.log(self.props.authToken);
    axios
      .delete(
        "/api/v1/posts/" + self.props.path,
        {
          headers: {
            'ACCEPT': "application/json",
            'Authorisation': self.props.authToken
          }
        }
      )
      .then(function (response) {
        self.props.getPosts();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <small>
        <button
          name="delete-post"
          type="submit"
          className="delete-post btn-small btn-danger"
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </small>
    );
  }
}
export default DeleteButton;
