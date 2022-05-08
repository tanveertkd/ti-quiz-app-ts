import { useState } from "react";

import { Login, SignUp } from "../../components/index"
import './Authentication.css';
import login from '../../assets/login.svg';

const Authentication = () => {
    
    // This is just for testing
    const [doesExist] = useState(true); 
    
    return(
        <section className="main-section">
            <div className="left">
                <img src={login} alt="login page asset" />
            </div>
            {doesExist ? <Login /> : <SignUp />}
            {/* <Login /> */}
        </section>
    )
}
export { Authentication }