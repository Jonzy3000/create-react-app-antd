import React from "react";
import { Card } from "antd";
import styles from "./VideoCard.less";

const VideoCard = ({ title, description, contentPartner, img }) => (
  <Card className={styles.card} bordered={false}>
    <section className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>By: {contentPartner}</p>
    </section>
    <section className={styles.preview}>
      <img src={img} />
    </section>
    <section className={styles.description}>{description}</section>
  </Card>
);

export default VideoCard;
