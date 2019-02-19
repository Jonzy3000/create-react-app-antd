import React from "react";
import { Card } from "antd";

const styles = {
  card: {
    borderRadius: 8,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
  },
  header: {
    fontSize: 14,
    color: "#b6c0e9",
    fontWeight: "bold",
    lineHeight: "24px",
    marginBottom: 0
  },
  title: {
    fontSize: 18,
    color: "rgb(255, 159, 159)"
  },
  img: {
    height: 100,
    width: 204
  },
  description: {
    marginTop: 45,
    fontSize: 16
  }
};

const VideoCard = ({ title, description, contentPartner, img }) => (
  <Card style={styles.card} bordered={false}>
    <section style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>By: {contentPartner}</p>
    </section>
    <section>
      <img style={styles.img} src={img} />
    </section>
    <section style={styles.description}>{description}</section>
  </Card>
);

export default VideoCard;
