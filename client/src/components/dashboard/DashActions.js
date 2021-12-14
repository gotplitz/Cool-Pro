import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const DashActions = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <Fragment>
            <h5 style={{ margin: '30px 0 20px 0' }}>Account Navigation</h5>
            <div className='profile-navigation'>
                <ul className='profile-nav-block box white'>
                    {user && user.usertype === 'worker' ? (
                        <Fragment>
                            <li>
                                <Link to='/inbox'>Inquiries from Clients</Link>
                            </li>
                            <li>
                                <Link to='/user-comments'>
                                    Comments Moderation
                                </Link>
                            </li>
                            <li>
                                <Link to='/clients-and-prospects'>
                                    Registered Users
                                </Link>
                            </li>
                            <li>
                                <Link to='/new-post'>Publish an Article</Link>
                            </li>
                            <li>
                                <Link to='/new-address'>Add Your Address</Link>
                            </li>
                            <li>
                                <Link to='/quotes'>Quote Requests</Link>
                            </li>
                            <li>
                                <Link to='/tickets'>Support Tickets</Link>
                            </li>

                            <li>
                                <Link to='/register-product'>
                                    Register a Product
                                </Link>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li>
                                <Link to='/new-address'>Add Your Address</Link>
                            </li>
                            <li>
                                <Link to='/quotes'>Request a Quote</Link>
                            </li>
                            <li>
                                <Link to='/tickets'>Request Support</Link>
                            </li>

                            <li>
                                <Link to='/register-product'>
                                    Register your Products
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {profile != null ? (
                        <li>
                            <Link to='/edit-profile'>Update Profile</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to='/create-profile'>Create Profile</Link>
                        </li>
                    )}
                </ul>
            </div>
        </Fragment>
    );
};

DashActions.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(DashActions);
