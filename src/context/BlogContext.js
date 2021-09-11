import React, { createContext, useReducer, useState } from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_BlogPost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [blogPost, dispatch] = useReducer(blogReducer, []);

  // const addBlogPost = () => {
  //   if (blogPost.length + 1 > 15) {
  //     return setBlogPost([...blogPost]);
  //   }
  //   setBlogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  // };

  const addBlogPost = () => {
    dispatch({ type: "add_BlogPost" });
  };
  const editBlogPost = () => {};
  // const editBlogPost = () => {};
  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
