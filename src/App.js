import React from "react";
import { Layout } from "antd";
import VideoCardContainer from "./components/videoCard/VideoCardContainer";
import TabsComponent from "./components/tabs/Tabs";

const { Content } = Layout;

const App = () => (
  <Content>
    <TabsComponent />
    {/* <VideoCardContainer /> */}
  </Content>
);

export default App;
