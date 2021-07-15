import React from 'react';
import img1 from '../../imgs/showcase.png';
import {Common1} from '../CommonMain';

const MidPart1 = () => {
    return (
        <>

        <Common1 heading="Showcase your app in our integrations directory"
                text = "Building something special? We're always looking to work with partners who wants to help the world bring their idea to life."
                btn1 = 'Become a partner'
                btn2 = 'View Intergrations'
                img ={img1}
         />
        </>
    )
}

export default MidPart1;