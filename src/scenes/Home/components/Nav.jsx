import React, { useRef, useState } from 'react'
import './index.css'

function Nav() {

    const BtnAnimation = (e) => {
        const pos_btn = {
            "Home": 134,
            "AboutMe": 225,
        }
        let root = document.querySelector(':root');
        if (e.pageX<225) {
            root.style.setProperty('--pos1', `${pos_btn["Home"]}px`);
            root.style.setProperty('--pos1_1', `${pos_btn["Home"]-15}px`);
        }
        else {
            root.style.setProperty('--pos1', `${pos_btn["AboutMe"]}px`);
            root.style.setProperty('--pos1_1', `${pos_btn["AboutMe"]-15}px`);
        }
        console.log(e.pageX);
    }

    const DrawingMouse = (e) => {
        console.log("hi");
    }

    return (
        <div className='NavBar' onMouseMove={DrawingMouse}>
            <nav className='NavBarp1'>
                <div className='Option'>

                    <div className="OptionNavBarp1" onClick={BtnAnimation}>Home<span>i</span></div>
                    <div className="OptionNavBarp2" onClick={BtnAnimation}>AboutMe<span>i</span></div>
                    <div className="ColorChanger"></div>

                </div>
            </nav>
            <nav className='NavBarp2'>
                
            </nav>
        </div>

    )
}

export default Nav
