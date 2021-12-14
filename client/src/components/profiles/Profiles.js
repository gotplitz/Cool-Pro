import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles, getCurrentProfile } from '../../actions/profile';

import Spinning from '../layout/Spinning';
import ProfileItem from './ProfileItem';
import ScrollToTop from '../routing/ScrollToTop';

const Profiles = ({
    getProfiles,
    getCurrentProfile,
    profile: { profiles, loading },
    auth: { user },
}) => {
    useEffect(() => {
        getProfiles();
        getCurrentProfile();
    }, [getProfiles, getCurrentProfile]);

    return (
        <Fragment>
            <ScrollToTop />
            {user && user.usertype === 'worker' ? (
                <Fragment>
                    <section className='section-size-2 lighter-bg'>
                        <div className='container'>
                            <div className='grid'>
                                <div className='column-4 '>
                                    <Link
                                        to='/dashboard'
                                        className='white-button'
                                        style={{
                                            marginBottom: 30,
                                            display: 'block',
                                        }}
                                    >
                                        Back to Dashboard
                                    </Link>
                                    <h4>Registered users in CoolProLI.com</h4>
                                    <h1 className='animated-text'>
                                        Clients & Prospects
                                    </h1>
                                    <p>
                                        Find the list of registered clients and
                                        prospects.
                                    </p>
                                </div>
                                <div className='column-8 profile-main-area'>
                                    {loading ? (
                                        <Spinning />
                                    ) : (
                                        <Fragment>
                                            <div className='grid'>
                                                <div className='column-12 text-center animated-text'>
                                                    <div className='grid'>
                                                        {profiles.length > 0 ? (
                                                            profiles.map(
                                                                (profile) => (
                                                                    <ProfileItem
                                                                        key={
                                                                            profile._id
                                                                        }
                                                                        profile={
                                                                            profile
                                                                        }
                                                                    />
                                                                )
                                                            )
                                                        ) : (
                                                            <p>
                                                                No Profiles
                                                                Found
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </Fragment>
            ) : (
                <section className='section-size-2 lighter-bg'>
                    <div className='container'>
                        <p>You are not authorized to see this page</p>
                    </div>
                </section>
            )}
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProp, { getProfiles, getCurrentProfile })(
    Profiles
);
