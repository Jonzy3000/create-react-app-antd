import React from "react";
import { Tabs, Layout } from "antd";
import styles from "./Tabs.less";

const { Content } = Layout;

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const TabsComponent = () => (
  <Content>
    <Tabs
      className="tabs"
      defaultActiveKey="1"
      onChange={callback}
      className={styles.tabs}
    >
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </Content>
);

export default TabsComponent;
