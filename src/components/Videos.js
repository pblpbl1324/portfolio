import React, { Component } from "react";
import VIDEOS from "../data/videos";

const Video = props => {
    //tie all video attributes to props' keys and render it
    const { link, description } = props.video;
    return (
        <div>
            <iframe width="560" height="315" src={link} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; fullscreen"></iframe>
            <p>{description}</p>
            <hr/>
        </div>
    )
}

const Videos = () => (
    <div>
        <h2>Videos</h2>
        <p>A collection of videos I created for Info Index and MathSoc.</p>
        <hr/>
        <div>
        {
            //pass each project object to the Project class to convert it to jsx code
            VIDEOS.map(VIDEO => (
                <Video key={VIDEO.id} video={VIDEO}/>
            ))
        }
        </div>
    </div>
)

export default Videos;