import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        existingclient: 'Yes',
        website: '',
        aboutyou: '',
        typeofservices: '',
        yourinterests: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        youtube: '',
        behance: '',
        slack: '',
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        website,
        aboutyou,
        typeofservices,
        yourinterests,
        facebook,
        instagram,
        twitter,
        linkedin,
        youtube,
        behance,
        slack,
    } = formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            existingclient: e.target.value,
        });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <section className='section-size-2 lighter-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-4 '>
                        <Link
                            to='/dashboard'
                            className='white-button'
                            style={{ marginBottom: 30, display: 'block' }}
                        >
                            Back to Dashboard
                        </Link>
                        <h4>
                            We would like to know more about you to improve your
                            experience
                        </h4>
                        <h1 className='animated-text'>Create your profile</h1>
                        <p>
                            Thanks for creating your user with Cool Pro
                            Mechanical. We would like to learn more about you
                            and do our best to give you the service that you
                            deserve
                        </p>
                        <p>
                            Do not forget to send START via SMS{' '}
                            <a href='text:6314054161'>(631) 405-4161</a> and
                            sign up to our VIP list for special discounts,
                            rebates and new products announcements.
                        </p>
                    </div>
                    <div className='column-8 profile-main-area'>
                        <form
                            className='box white shadow text-left'
                            onSubmit={(e) => onSubmit(e)}
                        >
                            <label>Are you a client already? *</label>
                            <div className='form-input-select'>
                                <select
                                    id='existingclient'
                                    name='existingclient'
                                    onChange={(e) => onChange(e)}
                                >
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </select>
                                <i className='fas fa-chevron-down'></i>
                            </div>
                            <label>Website</label>
                            <input
                                name='website'
                                type='text'
                                placeholder='e.g. coolproli.com'
                                value={website}
                                onChange={(e) => onChange(e)}
                            />
                            <label>About You</label>
                            <textarea
                                name='aboutyou'
                                placeholder='Tell us about you'
                                value={aboutyou}
                                onChange={(e) => onChange(e)}
                            ></textarea>
                            <label>Services for home, office or both?</label>
                            <input
                                name='typeofservices'
                                type='text'
                                placeholder='e.g. Office and house'
                                value={typeofservices}
                                onChange={(e) => onChange(e)}
                            />
                            <label>Your Interests (Separate with comas)</label>
                            <input
                                name='yourinterests'
                                type='text'
                                placeholder='e.g. Cooling Systems, Heating, Air Quality, etc...'
                                value={yourinterests}
                                onChange={(e) => onChange(e)}
                            />
                            <div className='profile-update-tabs'>
                                <button
                                    onClick={() =>
                                        toggleSocialInputs(!displaySocialInputs)
                                    }
                                    className='red-button'
                                    type='button'
                                >
                                    Your Social Profiles
                                </button>
                            </div>

                            {displaySocialInputs && (
                                <Fragment>
                                    <label>Facebook</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-facebook-f'></i>{' '}
                                        <input
                                            name='facebook'
                                            type='text'
                                            placeholder='Social Link'
                                            value={facebook}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>Twitter</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-twitter'></i>{' '}
                                        <input
                                            name='twitter'
                                            type='text'
                                            placeholder='Social Link'
                                            value={twitter}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>Instagram</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-instagram'></i>{' '}
                                        <input
                                            name='instagram'
                                            type='text'
                                            placeholder='Social Link'
                                            value={instagram}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>LinkedIn</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-linkedin-in'></i>{' '}
                                        <input
                                            name='linkedin'
                                            type='text'
                                            placeholder='Social Link'
                                            value={linkedin}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>YouTube</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-youtube'></i>{' '}
                                        <input
                                            name='youtube'
                                            type='text'
                                            placeholder='Social Link'
                                            value={youtube}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>Behance</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-behance'></i>{' '}
                                        <input
                                            name='behance'
                                            type='text'
                                            placeholder='Social Link'
                                            value={behance}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>

                                    <label>Slack</label>
                                    <div className='social-profiles'>
                                        <i className='fab fa-slack'></i>{' '}
                                        <input
                                            name='slack'
                                            type='text'
                                            placeholder='Social Link'
                                            value={slack}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                </Fragment>
                            )}

                            <button className='button' type='submit'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
