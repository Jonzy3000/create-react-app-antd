import React from "react";
import { Card } from "antd";
import "./VideoCard.less";

const VideoCard = ({ title, description, contentPartner, img }) => (
  <Card className="card" bordered={false}>
    <section className="card__header">
      <h1 className="card__title">{title}</h1>
      <p className="card__subtitle">By: {contentPartner}</p>
    </section>
    <section className="card__preview">
      <img src={img} />
    </section>
    <section className="card__description">{description}</section>
  </Card>
);

export default VideoCard;
