import React from "react";
import "../css/wheel.css";
import {AiOutlineForward} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import {BiPause} from 'react-icons/bi';
import {AiOutlineBackward} from 'react-icons/ai';

export default class Wheel extends React.Component {
  render() {
    return (
        <div className="wheel-container" id="wheel-container">
            <div className="wheel" id="wheel">

                <div className="controll" id="menu">
                    <div>MENU</div>
                </div>
                <div className="controll" id="forward">
                    <AiOutlineForward />
                </div>
                <div className="controll" id="play-pause">
                    <div> 
                        <BsFillPlayFill /> 
                        <BiPause />
                    </div>
                </div>
                <div className="controll" id="reverse">
                    <AiOutlineBackward />
                </div>

                <div className="blank" id="blank"></div>

            </div>
        </div>
    );
  }
}
