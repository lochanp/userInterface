import React from 'react';
import FeatureCard from '../FeatureCard';
import img1 from '../../imgs/apiTeam.png';
import img2 from '../../imgs/graphQL.png';
import img3 from '../../imgs/superchargeWorkflow.png';

const Feature = () => {
    return (
        <div className='feature'>  
            <div className="my-5">
                <h1 className="text-center mx-auto feature-heading">Experience the freedom to build features, right away.</h1>
                <p className="text-center mx-auto mt-4 main-feature">You can now harness components of our platform and build powerful intergrations for our 2 million users - or simply just for your team.</p>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className='row gx-5'>
                            <FeatureCard img={img1} 
                                title='Dedicated API Team'
                                text="Our team is available for user's question via our Slack Developer Community and Email"
                            />
                            <FeatureCard img={img2} 
                                title='Our API uses Graph QL'
                                text="No handling server side. Get many APIs's responses in a single request."
                            />
                            <FeatureCard img={img3} 
                                title='Supercharge your workflow'
                                text='Automate workflows, integrate and analyse data and take Marvel to the next level'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature  ;