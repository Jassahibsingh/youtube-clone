import React, { useState } from 'react'
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";
import Mongodb from "./images/Mongodb.jpg";
import pic from "./images/pic.jpeg";
import { Link } from 'react-router-dom';
import Video from './Video';

function RecommendedVideos(props) {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__video">
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>
        <div onClick={() => { props.showVideo(false) }}>
          <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage={pic}
            channel="Jassahib Singh"
            image={Mongodb}
          />
        </div>

      </div>
    </div>
  );
}

export default RecommendedVideos