import React from "react";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Blogger App Home</h2>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          props.history.push("/posts");
        }}
      >
        Go To Posts
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          props.history.push("/posts/form");
        }}
        style={{
          marginLeft: "10px",
        }}
      >
        Go To Post Form
      </button>
    </div>
  );
};

export default Home;
