import React from "react";

function VideoList(props){

    const videos  = props.videos || [];

    return(
        <ul className="video-list">

        {
            videos.map( video => (

                <li key={video.id} className="video">
                <img src={video.img} alt={video.name}></img>
                <div>{video.name}</div>
            </li>

            ))
        }
        </ul>
    )
}

export default VideoList;