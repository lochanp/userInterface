import React from 'react';
import img1 from '../../imgs/illustration.png';
import {Common1 } from '../CommonMain';


const Intro = () => {
    return (
        <>   
        <Common1 heading="Let's build the future of design, now"
                img ={img1}
                text = "Create amazing tools and integrations for 1 million users or customise Marvel for your team."
                btn1 = 'Submit your app'
                btn2 = 'View API Docs'
         />

        </>
    )
}
export default Intro;