import React from 'react';
import { NavLink } from 'react-router-dom'

const Common1 = (props) => {
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                           <div className='col-md-5 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column intro-sec'>
                                <h1 className='main-head'> {props.heading} </h1>
                                <p className='main-text'>{props.text}</p>
                                <div className='mt-4'>
                                    <button className='btn btn-blue'><NavLink to=''> {props.btn1}</NavLink></button>
                                    <button className='btn btn-white ml-3'><NavLink className='light-btn' to=''> {props.btn2}</NavLink></button>
                                </div>
                            </div>
                            <div className='col-lg-7 order-2 order-lg-2 m1-auto header-img'>
                                <img src={props.img} alt='illustration' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
const Common2 = (props) => {
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>   
                            <div className='col-lg-7 order-1 order-lg-1 m1-auto header-img bot-img'>
                                <img src={props.img} alt='illustration' className='img-fluid' />
                            </div>
                            <div className='col-md-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column intro-sec'>
                                <h1 className='main-head'> {props.heading} </h1>
                                <p className='main-text'>{props.text}</p>
                                <div className='mt-4'>
                                    <button className='btn btn-blue'><NavLink to=''> {props.btn1}</NavLink></button>
                                    <button className='btn btn-white ml-3'><NavLink className='light-btn' to=''> {props.btn2}</NavLink></button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export {Common1,Common2};