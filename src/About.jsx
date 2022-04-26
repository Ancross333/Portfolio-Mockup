import React, { Component } from 'react';
import style from './mystyle.module.css';
import skills from './skills.png';
class About extends Component {
    state = {  } 
    render() { 
        return (<div>
            <div>

                <img src = {skills} className = {style.skills}>
                </img>
                
                <p className={style.aboutbody}>
                I have been an aspiring software engineer from a very young age. As a massive video game fan, I've accumulated a fair amount of knowledge in Unity and C#. I love being able to interact with my own creations, and game development has given me a chance to see my work come to life.  While I did share everyone's childhood dream of becoming a game developer, over time I've transitioned and gained experience as an industrial software developer. Outside of school, I've dedicated a lot of time to learning all there is to learn in the field of Java development and even took first place in the SkillsUSA Computer Programming competition for Washington State. As of now, I'm planning on pursuing a master's degree in computer science at Eastern Washington University, and working my way towards eventually becoming a software engineer.
                </p>

            </div>
        </div>);
    }
}
 
export default About;