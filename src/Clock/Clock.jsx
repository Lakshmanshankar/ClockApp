import React from 'react'

import './clock.css'
export default function Clock() {
   
    function HandlerMovements(){
        setInterval(() => {
            var Minutes=parseInt(new Date().getUTCMinutes())/60
            var Hours=parseInt((new Date().getHours()))+Minutes
            if (Hours > 12){
                Hours=Hours-12
            }
            var hrs=Hours*30
            var hours=document.getElementById('Hours').style.transform=`rotate(${hrs}deg)`;
            Timers()
        },1000); 
    }
    HandlerMovements()
    function Timers() {
        var Seconds=parseInt(new Date().getUTCSeconds())*6
        var setSec=document.getElementById('Second').style.transform=`rotate(${Seconds}deg)`;
        var Minutes=parseInt(new Date().getUTCMinutes())*6
        var setMin=document.getElementById('Minutes').style.transform=`rotate(${Minutes}deg)`;
    }
  return (
    <div>
    <div className="ClockBase">
        <div className="InnerComp">
            <div className="WidthHeight"></div>
            <div className="LeftRight"></div>
            <div className="Heading">Lakshman</div>
            <div className="Needle"></div>
            <div className="Hour-hand" id='Hours'></div>
            <div className="Min-hand" id='Minutes'></div>
            <div className="Sec-hand" id='Second'></div>
        </div>
    </div>
    </div>
  )
}
