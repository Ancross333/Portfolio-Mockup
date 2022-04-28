import React, { Component } from 'react';
import style from './mystyle.module.css';
import skills from './skills.png';
import square from './greysquare.png';
import purplesquare from './cert.png';
import skill from './skill.png';
class About extends Component {
    state = { text: " " } 
    render() { 
        return (<div>
            <div>

                <img src = {square} className = {style.square}>

                </img>

                <h1 className={style.aboutheader}>
                    About Me
                </h1>

                <img src = {skills} className = {style.skills}>
                </img>
                
                
                <p className = {style.aboutbody}>
                I have been an aspiring software engineer from a very young age. As a massive video game fan, I've accumulated a fair amount of knowledge in Unity and C#. I love being able to interact with my own creations, and game development has given me a chance to see my work come to life.  While I did share everyone's childhood dream of becoming a game developer, over time I've transitioned and gained experience as an industrial software developer. Outside of school, I've dedicated a lot of time to learning all there is to learn in the field of Java development and even took first place in the SkillsUSA Computer Programming competition for Washington State. As of now, I'm planning on pursuing a master's degree in computer science at Eastern Washington University, and working my way towards eventually becoming a software engineer.
                </p>

                <img src = {purplesquare} className = {style.certificate}>
                
                </img>

                <h1 className= {style.certheader}>
                    Qualifications/Employability
                </h1>

                <h1 className= {style.cert1title}>
                    Microsoft Technology Associate Certificate
                </h1>

                <h1 className= {style.cert1date}>
                    April 2022
                </h1>

                <p className= {style.cert1body}>
                    <a>
                    Exam 98-388 -
                    </a>
                {this.state.text} This certificate was awarded by taking an exam on the fundamentals of Java. Skills tested consisted of exception handling, flow control, debugging, adding code to fix a feature, and memory efficiency
                </p>

                <h1 className= {style.cert2title}>
                    State Champion
                </h1>

                <h1 className= {style.cert2date}>
                    March 2022
                </h1>

                <p className= {style.cert2body}>
                I had the privilege of competing in the 2022 SkillsUSA Computer Programming State Competition. We were given real-life programming prompts and I used Java to simulate a bank handling compounding interest with a graphical user interface. I took gold for Washington State, and I'm advancing to the national competition in June of this year.
                </p>

                <img src = {skill} className = {style.skillsetbg}>
                
                </img>

                <h1 className= {style.skillsetheader}>
                    Skills
                </h1>
            </div>
        </div>);
    }
}
 
export default About;