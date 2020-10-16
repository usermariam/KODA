import React from 'react';
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";
import Logo from "../../../../../assets/images/logo.png"

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={DEMO.BLANK_LINK} className="b-brand">
                    <div className="b-bg">
                        <img src={Logo} className="img-fluid" alt=""/>
                    </div>
                    <span className="b-title font-weight-bold">KODA GRH</span>
                 </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')+"d-md-none"} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
