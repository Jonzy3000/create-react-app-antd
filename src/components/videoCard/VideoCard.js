import React from "react";
import { Card } from "antd";
import "./VideoCard.less";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const Header = styled.section`
  font-size: 14px;
  color: #b6c0e9;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 0px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: rgb(255, 159, 159);
`;

const Subtitle = styled.p``;

const Img = styled.img`
  height: 100px;
  width: 204px;
`;

const Description = styled.section`
  margin-top: 45px;
  font-size: 16px;
`;

const VideoCard = ({ title, description, contentPartner, img }) => (
  <StyledCard className="card" bordered={false}>
    <Header>
      <Title>{title}</Title>
      <Subtitle>By: {contentPartner}</Subtitle>
    </Header>
    <section className="preview">
      <Img src={img} />
    </section>
    <Description className="description">{description}</Description>
  </StyledCard>
);

export default VideoCard;
