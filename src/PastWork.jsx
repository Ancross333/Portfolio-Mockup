import React, { Component } from 'react';
import style from './mystyle.module.css';
import pw1 from './pastwork1.png';
import pw2 from './pastwork2.png';
import {BrowserRouter as Router, Routes, Link} from 'react-router-dom';
class PastWork extends Component {
 
    render() { 
        return (

        
        <div>
            <div>

               <img src = {pw1} className = {style.pastwork1}>
               </img>

               <h1 className={style.pastwork1title}>
                Past Work
               </h1> 

               <h1 className={style.pastwork1header}>
                   Messaging App
               </h1>

               <p className = {style.pastwork1body}>
               This app allows users to send messages to each other. Points of emphasis were storing information to specific accounts, and properly implementing communication in doing so.
               </p>

               <img src = {pw2}  className = {style.pastwork2}>
               </img>

               <h1 className = {style.pastwork2header}>
                Shopping Simulation
               </h1>

               <p className = {style.pastwork2body}>
               This is my first web development project. Created using JavaScript and the React framework, this web application is intended to simulate processing a user buying items from an online shopping site. Points of emphasis here were cleaning up the formatting, and making sure every element wasn't just on some random part of the screen.
               </p>

               <img src = {pw1} className = {style.pastwork3}>
               
               </img>

               <h1 className= {style.pastwork3header}>
                   Login Simulation
               </h1>

               <p className = {style.pastwork3body}>
               This app was designed to simulate a login screen. Developed using JavaFX, this app contains classes for users, and user information, to make the app display different results based on what user is logged in. It has a simple registration system and instance database, which contains all of the user information.
               </p>
                <a href='https://docs.google.com/presentation/d/1LqK9Kuj3RX2ps3BUWSrgV6YncdDVA3LZ133srhPe2dI/edit?usp=sharing' className={style.showme1}>
                    <span>
                        Show me
                    </span>
                </a>

                <a href='https://docs.google.com/presentation/d/1SuWI4Uf9UZiMfZUQ09F0OCvpBm8Q0tg5TKaXJwnOP8Y/edit?usp=sharing' className={style.showme2}>
                    <span>
                        Show me
                    </span>
                </a>

                <a href = 'https://docs.google.com/presentation/d/18joY_TGEyf9tJ0o8ebyUYFaJhlSZ-eI-58nuPsXlp3Y/edit?usp=sharing' className= {style.showme3}>
                    <span>
                        Show me
                    </span>
                </a>
            </div>
        </div>
     
        );
    }
}
 
export default PastWork;