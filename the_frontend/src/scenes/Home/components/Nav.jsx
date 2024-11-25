import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

function Nav() {
    
    let root = document.querySelector(':root');
    const works = [
        "Home",
        "AboutMe",
        "Contact",
        "Resume"
    ]
    const navigate = useNavigate()
    
    const [lightOrDark, setLightOrDark] = useState(false)
    const [lightOrDarkTransition, setLightOrDarkTransition] = useState("1s all ease-out")
    const [v1, setV1] = useState(1)
    const [v2, setV2] = useState(1)

    const resume = () => {
        navigate("/resume")
    }
    const contact = (e) => {
        console.log(e.pageY)
    }
    const searchBox = () => {
        root.style.setProperty("--v", 'visible')
    }
    const search = () => {
        root.style.setProperty("--v", 'hidden')
    }

    const light_dark = () => {
        console.log(lightOrDark)
        if (lightOrDark == false) {
            root.style.setProperty('--after_box_shadow', `inset -2px -2px 0px 0px #02092e`);
            root.style.setProperty('--after_bg', `#091e85`);
            root.style.setProperty('--_box_shadow', `inset -3px 1px 20px 0px #02092e`);
            root.style.setProperty('--_bg', `white`);
            root.style.setProperty('--pos2_1', `5px`);
            root.style.setProperty('--font_color', `black`);
            root.style.setProperty('--font_color_inverse', `white`);
            root.style.setProperty('--bg_nav', `linear-gradient(47deg, rgba(31,90,88,1) 0%, rgba(40,156,156,1) 41%, rgba(14,192,202,1) 100%)`);
            root.style.setProperty('--shadow_nav', `inset 12px -10px 20px 0px cyan`);
            root.style.setProperty('--shade', `rgb(9, 75, 75)`);
            root.style.setProperty('--bg_color', `black`);
            root.style.setProperty('--finish_line', `rgb(3, 225, 225)`);
            setLightOrDark(true)
        }
        else {
            root.style.setProperty('--after_box_shadow', `inset -2px -2px 0px 0px #907c7c`);
            root.style.setProperty('--after_bg', `#e2dbdb`);
            root.style.setProperty('--_box_shadow', `inset -3px 1px 20px 0px #d86060`);
            root.style.setProperty('--_bg', `white`);
            root.style.setProperty('--pos2_1', `36px`);
            root.style.setProperty('--font_color', `white`);
            root.style.setProperty('--font_color_inverse', `black`);
            root.style.setProperty('--bg_nav', `linear-gradient(48deg, rgba(181,90,9,1) 0%, rgba(255,0,102,1) 36%, rgba(255,0,0,1) 100%)`);
            root.style.setProperty('--shadow_nav', `inset 12px -10px 20px 0px brown`);
            root.style.setProperty('--shade', `brown`);
            root.style.setProperty('--bg_color', `white`);
            root.style.setProperty('--finish_line', `white`);
            setLightOrDark(false)
        }
    }

    const BtnAnimation = (e) => {
        const pos_btn = {
            "Home": 175,
            "AboutMe": 346,
        }
        let optionnavbar1 = document.querySelector(".OptionNavBarp1")
        let optionnavbar2 = document.querySelector(".OptionNavBarp2")
        if (e.pageX<225) {
            setV1(0)
            setV2(1)
            root.style.setProperty('--pos1', `${pos_btn["Home"]}px`);
            root.style.setProperty('--pos1_1', `${pos_btn["Home"]-15}px`);
            optionnavbar1.style.setProperty("opacity", "1")
            optionnavbar2.style.setProperty("opacity", "0.7")
        }
        else {
            setV2(0)
            setV1(1)
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

                    <div className="OptionNavBarp1" onClick={BtnAnimation}><u className='deco'>Home</u><svg className="iconOptionBar" style={{ opacity: `${v1}`, transition: "1s all ease-out"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg></div>
                    <div className="OptionNavBarp2" onClick={BtnAnimation}><u className="deco2">AboutMe</u><svg className="iconOptionBar" style={{ opacity: `${v2}`, transition: "1s all ease-out"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
  <path className="iconOptionBar" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11"/>
</svg></div>
                    <div className="ColorChanger" onClick={light_dark} style={{ transition: `${lightOrDarkTransition}`}}></div>

                </div>
            </nav>
            <nav className='NavBarp2'>
                <div className="Option2">
                    <div className="OptionNavBarp3" onClick={contact}>ContactMe</div>
                    <div className="input">
                        <button className="searchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
  <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
</svg></button>

                        <div className='searchBase'>
                            <input type="search" name="search" id="search" placeholder='Pages' onClick={searchBox} onMouseLeave={search}/>
                            <div>
                                <div className="searchContent">
                                    <button type="button" class="btn btn-outline-primary"style={{ visibility: "hidden"}}>{works[0]}</button>
                                    <button type="button" className="searchComponents" class="btn btn-outline-primary" style={{ background: "black", color: "white", boxShadow: "inset 10px 10px 10px 10px lightgrey", borderRadius: "10px 10px 10px 10px"}}>{works[0]}</button>
                                    <button type="button" className="searchComponents" class="btn btn-outline-secondary" style={{ background: "black", color: "white", boxShadow: "inset 10px 10px 10px 10px darkgrey", borderRadius: "10px 10px 10px 10px"}}>{works[1]}</button>
                                    <button type="button" className="searchComponents" class="btn btn-outline-success" onClick={contact} style={{ background: "black", color: "white", boxShadow: "inset 10px 10px 10px 10px grey", borderRadius: "10px 10px 10px 10px"}}>{works[2]}</button>
                                    <button type="button" className="searchComponents" class="btn btn-outline-danger" onClick={resume} style={{ background: "black", color: "white", boxShadow: "inset 10px 10px 10px 10px black", borderRadius: "10px 10px 10px 10px"}}>{works[3]}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OptionNavBarp4" onClick={resume}>Resume</div>
                </div>
            </nav>
        </div>

    )
}

export default Nav
