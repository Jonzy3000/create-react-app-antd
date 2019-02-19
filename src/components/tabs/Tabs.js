import React from "react";
import { Tabs, Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const inactiveTabColor = "#c3d3f5";
const activeTabColor = "#0051bc";

const StyledTabs = styled(Tabs)`
  .ant-tabs-bar {
    margin: 0;
    border-bottom: 0px;
    color: ${inactiveTabColor};
  }

  .ant-tabs-ink-bar {
    background-color: ${activeTabColor};
    height: 4px;
  }

  .ant-tabs-tab-active.ant-tabs-tab {
    color: ${activeTabColor};
  }

  .ant-tabs-tab {
    padding: 0px 16px 6px;
  }
`;

const TabsComponent = () => (
  <Content>
    <StyledTabs className="tabs" defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </StyledTabs>
  </Content>
);

export default TabsComponent;
