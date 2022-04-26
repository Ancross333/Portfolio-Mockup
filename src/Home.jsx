import React, { Component } from 'react';
import style from './mystyle.module.css';
import logo  from './homeimage.png'
class Home extends Component { 
    render() { 
        return (<div>
            <div>
                <h1 className={style.home}>
                    Home
                </h1>

                <view className={style.imageview}>
                <img src={logo} className= {style.homeimage}>
                
                </img>
                </view>
                
                    
            </div>
        </div>);
    }
}
 
export default Home;