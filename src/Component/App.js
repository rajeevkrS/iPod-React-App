import React from "react";
import Wheel from "./Wheel";
import Display from "./Display";

// Import songs
import song1 from "../static/songs/Post Malone - White Iverson.mp3"
import song2 from "../static/songs/John Denver - Country Roads.mp3"
import song3 from "../static/songs/Sigrid - High Five.mp3"
import song4 from "../static/songs/Khalid - Young Dumb Broke.mp3"
import song5 from "../static/songs/Rick Astley - Never Gonna Give You Up.mp3"

// Import song cover images
import song1Img from "../static/Post Malone - White Iverson.png";
import song2Img from "../static/John Denver - Country Roads.jpg";
import song3Img from "../static/Sigrid - High Five.png";
import song4Img from "../static/Khalid - Young Dumb Broke.jpg";
import song5Img from "../static/Never Gonna Give You Up.png";

// Import wallpapers
import Wallpaper1 from "../static/wallpaper1.jpg"
import Wallpaper2 from "../static/wallpaper2.jpg"
import Wallpaper3 from "../static/wallpaper3.jpg"


export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      active: 0, //Active list items
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      musicItems: ["All Songs", "Artist", "Albums"], //Items in music
      songItemsUrl: [song1, song2, song3,song4,song5,],  //songs list
      songImgItemsUrl: [song1Img, song2Img, song3Img, song4Img,song5Img],
      wallpaperItems: [Wallpaper1, Wallpaper2, Wallpaper3],
      songItems: [
        "Post Malone - White Iverson", 
        "John Denver - Country Roads", 
        "Sigrid - High Five", 
        "Khalid - Young Dumb Broke", 
        "Rick Astley - Never Gonna Give You Up"
      ],
      songIndex: 0, //Current Song
      lengthMenuKey: {"-1":3, 1:2, 4:4, 8:4, 3:2, 9:3, 10:2}, //Length of particular menu
      menuMapping: { // It helps "menu" that can be rendered by key menu
        "-1": [0,1,2,3], //"Now Playing" Option has 4 index value
        1: [4,5,6], //"Music" Option has 3 index value
        3: [8,9,10] //"Settings" Option has 3 index value
        // "Games" option does not have any child options thats why does not included here- 2: [7] which has a text. 
      },
      currentmenu: -2, // Screen locked
      navigationStack: [], // used for forward and backward
      songUrl: song1, //current song URL
      playing: false, // it helps when the app loads for the first time, song will not play automatically
      theme: "rgb(210,210,210)", //current theme
      audio: new Audio(song1), //current song- song1
      songImgUrl: song1Img, //current song image
      wheelColor: 'white', 
      wallpaper: 0,
      noty: false, //initial notification
      notifyText: "Wallpaper Chnaged",
    }
  }

  // Function on long press of "forward" button tracks are seeked forward
  seekSongForward = (e) => {
    let {currentmenu , playing, audio, songItemsUrl, songImgItemsUrl} = this.state;

    // Screen is locked, I dont have to move forward
    if(currentmenu === -2){
      return;
    }

    // Current song is not playing, I dont have to move forward
    if(playing === false){
      return;
    }

    // If screen is unlocked and song is playing then,
    // Using Zingtouch Lib for forwarding
    // checking if my wheel angle is less then 250 degree
    if(e.detail.interval < 250){
      // Then pauses the current song and sets paused to TRUE.
      audio.pause();

      // Storing the current song index
      let songIndex = this.state.songIndex

      // Checking if the current song index is at the end of the playlist,
      if(songIndex === songItemsUrl.length-1){
        songIndex = 0; // then code sets songIndex to 0.
      }else{
        songIndex++; // Otherwise, increments to move forward to the next song in the playlist.
      }

      // Storing the current song URL and image URL
      const songUrl = songItemsUrl[songIndex];
      const songImgUrl = songImgItemsUrl[songIndex];

      // setting the state of song's index, image, Url and audio with the callback function to play the song.
      this.setState({
        songIndex: songIndex,
        songImgUrl: songImgUrl,
        songUrl: songUrl,
        audio: new Audio(songUrl)
      }, () => {
        audio.play()
      });
    }
    // Checking if the interval is greater than 250 but less than 10000. This range typically indicates a fast-forward action as it's presumed that rapid movement or a larger rotation of the seeking control (wheel, for instance) is being performed.
    else if(e.detail.interval > 250 && e.detail.interval < 10000){
      // Calculates a time interval for fast-forwarding.
      const interval = e.detail.interval / 100;

      // updating the state
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }

  }


  // Function on long press of "backward" button tracks are seeked backward
  seekSongReverse = (e) => {
    let {currentmenu , playing, audio, songItemsUrl, songImgItemsUrl} = this.state;

    // Screen is locked, I dont have to move backward
    if(currentmenu === -2){
      return;
    }

    // Current song is not playing, I dont have to move backward
    if(playing === false){
      return;
    }
// forward
    // If screen is unlocked and song is playing then,
    // Using Zingtouch Lib for backward
    // checking if my wheel angle is less then 250 degree
    if(e.detail.interval < 250){
      // Then pauses the current song and sets paused to TRUE.
      audio.pause();

      // Storing the current song index
      let songIndex = this.state.songIndex

      // Checking if the current song index is at the beginning,
      if(songIndex === 0){
        songIndex = songItemsUrl.length-1; // then code sets songIndex to last song of the list.
      }else{
        songIndex--; // Otherwise, decrements to move backward to the next song in the playlist.
      }

      // Storing the current song URL and image URL
      const songUrl = songItemsUrl[songIndex];
      const songImgUrl = songImgItemsUrl[songIndex];

      // setting the state of song's index, image, Url and audio with the callback function to play the song.
      this.setState({
        songIndex: songIndex,
        songImgUrl: songImgUrl,
        songUrl: songUrl,
        audio: new Audio(songUrl)
      }, () => {
        audio.play()
      });
    }
    // Checking if the interval is greater than 250 but less than 10000. This range typically indicates a fast-backward action as it's presumed that rapid movement or a larger rotation of the seeking control (wheel, for instance) is being performed.
    else if(e.detail.interval > 250 && e.detail.interval < 10000){
      // Calculates a time interval for fast-backwarding.
      const interval = e.detail.interval / 100;

      // updating the state
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }

  }


  // Toggle function on Play and Pause button.
  togglePlayPause = () => {
    let {currentmenu , playing, audio} = this.state;

    // Screen is locked, simply return
    if(currentmenu === -2){
      return;
    }

    // If current song is playing then, updating the playing state to false then pausing the song
    if(playing === true){
      this.setState({
        playing: false
      })
      audio.pause();
    }

    // If current song is pasue then, updating the playing state to true then playing the song
    if(playing === false){
      this.setState({
        playing: true
      })
      audio.play();
    }

  }

  
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}


