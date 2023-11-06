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
      musicItems: [song1, song2, song3, song4, song5],
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
      currentmenu: -2, // for screen lock
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
  
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}
