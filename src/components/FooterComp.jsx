import React from 'react';


const FooterComponent = (props) => {
    return(
        <>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="footer-head mb-3">
                    {props.footerHead}
                </h6>
                    <p><a href="#!" className="text-reset">{props.footerText1}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText2}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText3}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText4}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText5}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText6}</a></p>
                    <p><a href="#!" className="text-reset">{props.footerText7}</a></p>
            </div>
        </>
    )
}
export default FooterComponent;