import React, { useState, createRef } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import ScrollToTop from '../routing/ScrollToTop';

const Login = ({ login, isAuthenticated, history, match }) => {
    const recaptchaRef = createRef();
    const [warning, setWarn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();

        if (!recaptchaValue) {
            setWarn(true);
        } else {
            setWarn(false);
            login(email, password);
        }
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to={`/dashboard`} />;
    }

    return (
        <section className='section-size-2 lighter-bg'>
            <ScrollToTop />
            <div className='container'>
                <div className='grid'>
                    <div className='column-6'>
                        <h4>Welcome back!</h4>
                        <h1 className='animated-text'>
                            Sign in to your Account.
                        </h1>
                        <div className='space-3'></div>
                        <form
                            className='box white shadow text-left'
                            onSubmit={(e) => onSubmit(e)}
                        >
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={email}
                                placeholder='e.g. johndoe@example.com'
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <label>Password</label>
                            <input
                                name='password'
                                type='password'
                                value={password}
                                placeholder='Type Your Password Here'
                                onChange={(e) => onChange(e)}
                                minLength='6'
                            />
                            <Grid container>
                                <Grid item xs={12}>
                                    {warning && (
                                        <Alert severity='warning'>
                                            <AlertTitle>Warning</AlertTitle>
                                            Check the box to prove you are not a
                                            robot
                                        </Alert>
                                    )}
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey='6Lcj-DEbAAAAAM_4ZMff5mWSPA4xn_iFsO0T5oM8'
                                        onChange={(e) => onChange(e)}
                                    />
                                </Grid>
                            </Grid>
                            <button className='button' type='submit'>
                                Login
                            </button>
                        </form>
                        <div className='space-3'></div>
                    </div>
                    <div className='column-5 offset-1 text-right'>
                        <h5>Don't have have an account?</h5>
                        <Link
                            to='/register'
                            className='register-sign-in about-cta-button'
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(Login));
