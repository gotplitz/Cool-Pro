import React, { Fragment, useState, createRef } from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

// Components
import Message from '../layout/Message';
import Progress from '../layout/Progress';
import ScrollToTop from '../routing/ScrollToTop';

const Register = ({ setAlert, register, isAuthenticated, history }) => {
    const recaptchaRef = createRef();
    const [warning, setWarn] = useState(false);
    const [file, setFile] = useState('');
    const [avatar, setAvatar] = useState('Your File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPer, setUploadPer] = useState(0);
    const [formData, setFormData] = useState({
        usertype: 'client',
        name: '',
        lastname: '',
        companyname: '',
        title: '',
        phonenumber: '',
        email: '',
        password: '',
        password2: '',
        photo: 'placeholder.png',
    });

    const {
        usertype,
        name,
        lastname,
        companyname,
        title,
        phonenumber,
        email,
        password,
        password2,
        photo,
    } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const inChange = (e) => {
        setFile(e.target.files[0]);
        setAvatar(e.target.files[0].name.replace(/ /g, '-'));
        setFormData({
            ...formData,
            photo: e.target.files[0].name.replace(/ /g, '-'),
        });
    };

    const onPress = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const res = await axios.post('/avatars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    setUploadPer(
                        parseInt(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        )
                    );
                    // Clear percentage
                    setTimeout(() => setUploadPer(0), 20000);
                },
            });

            const { avatar, filePath } = res.data;

            setUploadedFile({ avatar, filePath });
            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();

        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else if (!recaptchaValue) {
            setWarn(true);
        } else {
            register({
                usertype,
                name,
                lastname,
                companyname,
                title,
                phonenumber,
                email,
                password,
                photo,
            });
        }
    };

    // Redirect if registered in
    if (isAuthenticated) {
        return <Redirect to={`#/${history.goBack()}`} />;
    }

    return (
        <Fragment>
            <ScrollToTop />
            <section className='section-size-2 lighter-bg'>
                <div className='container'>
                    <div className='grid'>
                        <div className='column-6'>
                            <h4>Are you new to us?</h4>
                            <h1 className='animated-text'>Register Now</h1>
                            <p>
                                For a better customer experience, we have
                                created a cool customer area, were you will be
                                able to request for support easly, book
                                appointments for new services, interact and
                                egange with our blog posts, and more
                            </p>
                            <div className='space-3'></div>
                            <form
                                className='box white shadow text-left'
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <label>Name *</label>
                                <input
                                    name='name'
                                    type='text'
                                    placeholder='John'
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Last Name *</label>
                                <input
                                    name='lastname'
                                    type='text'
                                    placeholder='Doe'
                                    value={lastname}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Company Name</label>
                                <input
                                    name='companyname'
                                    type='text'
                                    placeholder='Cool Pro'
                                    value={companyname}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Title or Position</label>
                                <input
                                    name='title'
                                    type='text'
                                    placeholder='e.g. CEO or Office Manager'
                                    value={title}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Phone *</label>
                                <input
                                    name='phonenumber'
                                    type='text'
                                    placeholder='(844) 631-2665'
                                    value={phonenumber}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Email *</label>
                                <input
                                    name='email'
                                    type='email'
                                    placeholder='johndoe@example.com'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                />
                                <label>Password *</label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Use 6 or more characters'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    minLength='6'
                                />
                                <label>Confirm Password *</label>
                                <input
                                    name='password2'
                                    type='password'
                                    placeholder='Type password again'
                                    value={password2}
                                    onChange={(e) => onChange(e)}
                                    minLength='6'
                                />
                                <label>Profile photo</label>
                                <div className='grid'>
                                    <div className='column-8'>
                                        <input
                                            id='myph'
                                            className='avatar-input'
                                            type='text'
                                            name='photo'
                                            value={avatar}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                    <div className='column-4'>
                                        <input
                                            type='file'
                                            id='fileId'
                                            name='file'
                                            style={{ display: 'none' }}
                                            onChange={inChange}
                                        />
                                        <label
                                            className='upload-button'
                                            htmlFor='fileId'
                                            id='filelabel'
                                            value={uploadedFile.filePath}
                                        >
                                            <i className='fas fa-upload'></i>{' '}
                                            <span>Browse</span>
                                        </label>
                                    </div>
                                    <div className='column-12'>
                                        {message ? (
                                            <Message msg={message} />
                                        ) : null}
                                        <Button
                                            onClick={onPress}
                                            variant='primary'
                                            size='sm'
                                        >
                                            Upload Image
                                        </Button>

                                        {uploadedFile ? (
                                            <div className='grid placeholder'>
                                                <div className='column-12'>
                                                    <div className='uploaded-image'>
                                                        <img
                                                            src={
                                                                uploadedFile.filePath
                                                            }
                                                            alt={
                                                                uploadedFile.avatar
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='column-12'>
                                        <Progress percentage={uploadPer} />
                                    </div>
                                </div>
                                <Grid container style={{ paddingTop: 40 }}>
                                    <Grid item xs={12}>
                                        {warning && (
                                            <Fragment>
                                                <Alert severity='warning'>
                                                    <AlertTitle>
                                                        Warning
                                                    </AlertTitle>
                                                    Check the box to prove you
                                                    are not a robot
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
                                    Submit
                                </button>
                            </form>

                            <div className='space-3'></div>
                        </div>
                        <div className='column-5 offset-1 text-right'>
                            <h5>Are you a member?</h5>
                            <Link
                                to='/login'
                                className='register-sign-in about-cta-button'
                            >
                                Log In Here
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
