import React from "react";
import { Card } from "antd";
import "./VideoCard.less";

const VideoCard = ({ title, description, contentPartner, img }) => (
  <Card className="card" bordered={false}>
    <section className="header">
      <h1 className="title">{title}</h1>
      <p className="subtitle">By: {contentPartner}</p>
    </section>
    <section className="preview">
      <img src={img} />
    </section>
    <section className="description">{description}</section>
  </Card>
);

export default VideoCard;
