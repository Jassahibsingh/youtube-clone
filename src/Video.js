import React from 'react'
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';
import pic from './images/pic.jpeg'
import Mongodb from './images/Mongodb.jpg'
import './Video.css'
// import AR from './Video/AR.mp4'

export default function Video() {
    return (
        <div className='video'>
            <div className='player'>
                <iframe width="900" height="515"
                    src="https://www.youtube.com/embed/S8yn3-WpVV8?&autoplay=1"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true" />
            </div>
            <div className='side-content'>
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={pic}
                    channel="Jassahib Singh"
                    image={Mongodb}
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={pic}
                    channel="Jassahib Singh"
                    image={Mongodb}
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={pic}
                    channel="Jassahib Singh"
                    image={Mongodb}
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={pic}
                    channel="Jassahib Singh"
                    image={Mongodb}
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={pic}
                    channel="Jassahib Singh"
                    image={Mongodb}
                />
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
    );
};

