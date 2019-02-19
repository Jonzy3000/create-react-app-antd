import React from "react";
import { Tabs, Layout } from "antd";
import "./App.less";
import VideoCardContainer from "./components/videoCard/VideoCardContainer";

const { Content } = Layout;

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const App = () => (
  <Content>
    <VideoCardContainer />
  </Content>
);

export default App;
