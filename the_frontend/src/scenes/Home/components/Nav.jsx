import React, { useRef, useState } from 'react'
import './index.css'

function Nav() {

    const BtnAnimation = (e) => {
        const pos_btn = {
            "Home": 180,
            "AboutMe": 346,
        }
        let root = document.querySelector(':root');
        let optionnavbar1 = document.querySelector(".OptionNavBarp1")
        let optionnavbar2 = document.querySelector(".OptionNavBarp2")
        if (e.pageX<225) {
            root.style.setProperty('--pos1', `${pos_btn["Home"]}px`);
            root.style.setProperty('--pos1_1', `${pos_btn["Home"]-15}px`);
            optionnavbar1.style.setProperty("opacity", "1")
            optionnavbar2.style.setProperty("opacity", "0.7")
        }
        else {
            root.style.setProperty('--pos1', `${pos_btn["AboutMe"]}px`);
            root.style.setProperty('--pos1_1', `${pos_btn["AboutMe"]-15}px`);
            optionnavbar2.style.setProperty("opacity", "1")
            optionnavbar1.style.setProperty("opacity", "0.7")
        }
        console.log(e.pageX);
    }

    const DrawingMouse = (e) => {
        console.log(e.pageX);
    }

    return (
        <div className='NavBar' onMouseMove={DrawingMouse}>
            <nav className='NavBarp1'>
                <div className='Option'>

                    <div className="OptionNavBarp1" onClick={BtnAnimation}><u>Home</u><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg></div>
                    <div className="OptionNavBarp2" onClick={BtnAnimation}><u>AboutMe</u><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11"/>
</svg></div>
                    <div className="ColorChanger"></div>

                </div>
            </nav>
            <nav className='NavBarp2'>
                
            </nav>
        </div>

    )
}

export default Nav
