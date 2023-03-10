import React, {Component} from 'react';

import './App.css';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      videos: [],
      selectedVideo: {
        img: 'https://ak.picdn.net/shutterstock/videos/1018031305/thumb/8.jpg' ,
        name: 'shutterstock',
        url: 'https://www.shutterstock.com/shutterstock/videos/1059957179/preview/stock-footage-a-female-weightlifter-performs-a-barbell-lift-in-a-dark-gym-a-woman-lifting-a-heavy-bar-over-her.webm'
      }
    }
  }

  render(){

    const {state} = this;

  return (
    <div className="App">
      <VideoPlayer video={state.selectedVideo} />
      <VideoList videos={state.video} />  
      <VideoCinema isActive={false} />
    </div>
  );
}

}

export default App;
