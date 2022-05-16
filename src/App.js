import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Categories from "./Categories";
import PostForm from "./PostForm";
import Posts from "./Posts";

import { getCategories } from "./categories_api";


class App extends Component {
  state = {
    categories: [],
    selectedCategory: { code: "all", name: "All" },
  };

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({ categories: categories });
      })
      .catch((error) => {
        console.log("Get categories failed!");
        console.log("Error: ", error);
      });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />

          <Route
            path="/posts/form"
            render={() => {
              return <PostForm categories={this.state.categories} />;
            }}
          />
          <Route
            path="/posts"
            exact
            render={() => {
              return (
                <div className="row">
                  <Categories
                    categories={this.state.categories}
                    onCategorySelect={this.handleCategorySelect}
                  />
                  <Posts
                    categories={this.state.categories}
                    selectedCategory={this.state.selectedCategory}
                  />
                </div>
              );
            }}
          />

          <Route path="/" exact component={Home} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
