import React from 'react';

const FeatureCard = (props) => {
    return (
        <>  
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={props.img} alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text mt-3">{props.text}</p>
                        </div>
                    </div>
            </div>

        </>
    )
}
export default FeatureCard ;