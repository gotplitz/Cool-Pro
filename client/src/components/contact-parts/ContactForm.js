import React, { Fragment, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
import { addEmail } from '../../actions/email';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const ContactForm = ({ addEmail }) => {
    const recaptchaRef = createRef();
    let history = useHistory();
    const [warning, setWarn] = useState(false);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: '',
    });

    const { fullname, email, phone, message } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();

        if (!recaptchaValue) {
            setWarn(true);
        } else {
            setWarn(false);
            addEmail({
                fullname,
                email,
                phone,
                message,
            });
            history.push('/thank-you');
        }
    };

    return (
        <Fragment>
            <form
                className='box white shadow text-left'
                onSubmit={(e) => onSubmit(e)}
            >
                <label>Full Name</label>
                <input
                    name='fullname'
                    type='text'
                    value={fullname}
                    placeholder='John Doe'
                    onChange={(e) => onChange(e)}
                />
                <label>Email</label>
                <input
                    name='email'
                    type='email'
                    value={email}
                    placeholder='e.g. johndoe@example.com'
                    onChange={(e) => onChange(e)}
                />
                <label>Phone Number</label>
                <input
                    name='phone'
                    type='text'
                    value={phone}
                    placeholder='The number we can dial'
                    onChange={(e) => onChange(e)}
                />
                <label>Message</label>
                <textarea
                    name='message'
                    placeholder='How may we help?'
                    value={message}
                    onChange={(e) => onChange(e)}
                ></textarea>
                <Grid container>
                    <Grid item xs={12}>
                        {warning && (
                            <Fragment>
                                <Alert severity='warning'>
                                    <AlertTitle>Warning</AlertTitle>
                                    Check the box to prove you are not a robot
                                </Alert>
                            </Fragment>
                        )}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey='6Lcj-DEbAAAAAM_4ZMff5mWSPA4xn_iFsO0T5oM8'
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                </Grid>
                <button className='button' type='submit'>
                    Send Message
                </button>
            </form>
        </Fragment>
    );
};

ContactForm.propTypes = {
    addEmail: PropTypes.func.isRequired,
};

export default connect(null, { addEmail })(ContactForm);
