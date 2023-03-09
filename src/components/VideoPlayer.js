import React, { Component } from "react";


class VideoPlayer extends Component{

    render(){
        return(
            <div className="video-player">

                <video 
                src={'https://www.shutterstock.com/shutterstock/videos/1059957179/preview/stock-footage-a-female-weightlifter-performs-a-barbell-lift-in-a-dark-gym-a-woman-lifting-a-heavy-bar-over-her.webm'}
                controls autoPlay loop
                />
                <button >[ ]</button>

            </div>
        )
    }


}

export default VideoPlayer;