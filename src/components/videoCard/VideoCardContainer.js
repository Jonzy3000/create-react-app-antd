import React from "react";
import VideoCard from "./VideoCard";
import img from "../../../resources/CSS.jpg";

export default class VideoCardContainer extends React.Component {
  render() {
    return (
      <VideoCard
        title="How does CSS work?"
        description="Find out out CSS works for in 131 easy steps"
        releasedOn="1st August 1921"
        subjects={["Maths", "Chemistry", "CSS Guru"]}
        contentPartner="Css Skillz 2k8"
        img={img}
      />
    );
  }
}
