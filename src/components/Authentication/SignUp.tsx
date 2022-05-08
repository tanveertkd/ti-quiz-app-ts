import './LoginSignup.css';

const SignUp = () => {
    return (
        <div className="right login-container">
            <div className="login">
                <p className="login-header">Sign Up</p>

                <form className="login-input-form">
                    <div className="form-input">
                        <label htmlFor="login-name" className="input-label">
                            {' '}
                            Name:{' '}
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="login-name"
                            className="login-name input-form"
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="login-email" className="input-label">
                            {' '}
                            Email:{' '}
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            name="login-email"
                            className="login-email input-form"
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor="login-password" className="input-label">
                            {' '}
                            Passsword:{' '}
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="login-password"
                            className="login-password input-form"
                        />
                    </div>

                    <div className="form-input checkbox-reset">
                        <div>
                            <input type="checkbox" name="form-checkbox" className="form-checkbox" />
                            <label htmlFor="form-checkbox" className="checkbox-label">
                                {' '}
                                Remember me{' '}
                            </label>
                        </div>
                        <div>
                            <a href=" " className="password-reset">
                                Forgot Passsword?
                            </a>
                        </div>
                    </div>
                    <div className="form-submit-btn">
                        <button type="submit" className="btn form-btn">
                            Create Account
                        </button>
                    </div>
                </form>

                <div className="sign-up">
                    <a href="./signup.html" className="btn signup-cta">
                        I already have an account &#8594;
                    </a>
                </div>
            </div>
        </div>
    );
};

export { SignUp };
