import React from 'react';
import logo from '../../imgs/logo-white.svg';
import FooterData from '../footerData';
import FooterComponent from '../FooterComp';

const Footer = () => {
    return (
        <>
        <footer className="container">
            <section className="columns">
                <div className="container text-center mt-5">  
                    <div className="row mt-3">
                    <div className="col-md-1 col-lg-2 col-xl-1 mx-auto mb-4">
                        <div className="mb-3">
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                    {
                    FooterData.map((val,ind) => {
                        return <FooterComponent key={ind}
                            footerHead = {val.footerHead}
                            footerText1 = {val.footerText1}
                            footerText2 = {val.footerText2}
                            footerText3 = {val.footerText3}
                            footerText4 = {val.footerText4}
                            footerText5 =  {val.footerText5}
                            footerText6 = {val.footerText6}
                            footerText7 =  {val.footerText7}
                            />
                        })
                    }
                    </div>
                </div>
            </section>
        </footer>
        </>
    )
}
export default Footer;
