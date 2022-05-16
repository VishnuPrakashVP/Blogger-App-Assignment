import React from "react";
import { deletePost } from "./posts_api";


const PostDetail = (props) => {
  console.log("props: ", props);
  return (
    <div className="card bg-light mb-3">
      <h5 className="card-header">{props.post.title}</h5>

      <div className="card-body">
        <p className="card-text">{props.post.body}</p>
        <p className="card-text">Author: {props.post.author}</p>
        <p className="card-text">Category: {props.post.category}</p>
      </div>

      <div className="card-footer">
        <button
          className="btn btn-sm btn-outline-danger"
          type="button"
          onClick={() => {
            deletePost(props.post.id);
            window.location.reload();
          }}
        >
          Delete
        </button>
        
      </div>
    </div>
  );
};

export default PostDetail;
