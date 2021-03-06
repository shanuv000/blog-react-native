import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    index: IndexScreen,
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
