import React from 'react'
import DP from '../images/DP.jpeg'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCsswizardry} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiPostman} from 'react-icons/si'
import {SiJsonwebtokens} from 'react-icons/si'
import {BiMessageAltDots} from 'react-icons/bi'
import {DiMongodb} from 'react-icons/di'

const About = () => {
    return (
        <div className="main-abt-cont">
            <div className="abt-cont">
                <div className="abt-img">
                    <img src={DP} alt="porfilepic"/>
                </div>
                <div className="abt-info">
                    <div className="info-style">
                        <p >
                            <BiMessageAltDots style={{fontSize:'1.9em', color:'#00fff2'}}/>Hi!. I am an aspiring Front End web developer. 
                            I am passionate about learning new
                            technologies and coding. Do check out my project gallery
                            in this portfolio website.
                        </p>
                    </div>
                    <div className="skill-cont">
                        <div className="icons-holder">
                            <IoLogoJavascript style={style}/>
                            <FaReact style={style}/>
                            <SiCsswizardry style={style}/>
                            <AiOutlineHtml5 style={style}/>
                            <FaNodeJs style={style}/>
                            <SiPostman style={style}/>
                            <SiJsonwebtokens style={style}/>
                            <DiMongodb style={style}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>               
    )
}
const style = {
    fontSize:'1.8em',
    color:'#00fff2'
  
}
export default About
