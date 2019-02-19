import React from "react";
import { Layout } from "antd";
import VideoCardContainer from "./components/videoCard/VideoCardContainer";

const { Content } = Layout;

const App = () => (
  <Content>
    <VideoCardContainer />
  </Content>
);

export default App;
