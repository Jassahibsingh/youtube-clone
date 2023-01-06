import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import pic from "./images/pic.jpeg"
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SeacrhPage.css";
import express from "./images/express.jpg";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon />
                <h2>Filters</h2>
            </div>
            <hr />
            <ChannelRow
                image={pic}
                channel="Jassahib Singh"
                verified
                subs="1M"
                noOfVideos={382}
                description="You can find awesome programming lessons here!"
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />

            <VideoRow
                views="1.4M"
                subs="1M"
                description="Do you want a Free one hour training... Check this out"
                timestamp="59 seconds ago"
                channel="Jassahib Singh"
                title="Let's Build a Youtube Clone with React JS for Beginners"
                image={express}
            />
        </div>
    )
}

export default SearchPage;