import React from "react";
import { Card } from "antd";

const VideoCard = ({ title, description, contentPartner, img }) => (
  <Card className="video-card" bordered={false}>
    <section className="video-header">
      <h1 className="title">{title}</h1>
      <p className="subtitle">By: {contentPartner}</p>
    </section>
    <section className="video-preview">
      <img src={img} />
    </section>
    <section className="description">{description}</section>
  </Card>
);

export default VideoCard;
