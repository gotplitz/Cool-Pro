import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';
import Spinning from '../layout/Spinning';
import DashActions from './DashActions';
import Products from './Products';
import Address from './Address';
import { deleteAccount } from '../../actions/profile';

import ScrollToTop from '../routing/ScrollToTop';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinning />
  ) : (
    <section className='section-size-2 lighter-bg'>
      <ScrollToTop />
      <div className='container'>
        <div className='grid'>
          <div className='column-4 profile-left'>
            <div className='profile-photo' style={{ marginBottom: 25 }}>
              <img src={`/uploads/${user && user.photo}`} alt='temp profile' />
            </div>
            <DashActions />
            <button
              style={{ marginTop: 30 }}
              onClick={() => deleteAccount()}
              className='red-button'
            >
              <i className='fas fa-trash'></i>{' '}
              <span style={{ fontSize: 12 }}>Delete Account</span>
            </button>
          </div>
          <div className='column-8 profile-main-area'>
            <h4>Hi, {user && user.name}</h4>
            <h1 className='animated-text'>Welcome to your Dashboard</h1>
            <div className='space-3'></div>
            {profile != null ? (
              <Fragment>
                <div className='space-3'></div>
                <div className='grid appointment-process'>
                  <div className='columns-12'>
                    <div className='step-description'>
                      {profile && profile.existingclient === 'Yes' ? (
                        <Fragment>
                          When we think about the things we appreciate, we think
                          of you! Thanks for being our customer.
                        </Fragment>
                      ) : (
                        <Fragment>
                          For consultations or if you are ready to start,
                          <br />
                          call or text at{' '}
                          <a href='tel:6314054161'>(631) 405-4161.</a>
                        </Fragment>
                      )}
                    </div>
                    <div className='step-description'>
                      <b>Your Interests:</b>
                      <br />
                      {profile &&
                        profile.yourinterests
                          .slice(0, 4)
                          .map((yourinterest, index) => (
                            <span key={index} className='interests'>
                              {yourinterest}
                            </span>
                          ))}
                    </div>
                    <div className='step-description'>
                      <b>Your Bio:</b> <br />
                      {profile && profile.aboutyou}
                    </div>
                    <div className='step-description'>
                      Website:{' '}
                      <a
                        href={profile && profile.website}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {profile && profile.website}
                      </a>
                    </div>
                    <div className='step-description'>
                      {profile && profile.address <= 0 ? (
                        <Link to='/new-address'>Please, add your address</Link>
                      ) : (
                        <Address address={profile.address} />
                      )}
                    </div>
                    <div className='step-description'>
                      <Products product={profile.product} />
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className='grid'>
                  <p>
                    You have not yet setup a profile, please update your Client
                    Area with your information
                  </p>
                  <Link
                    to='/create-profile'
                    className='register-sign-in about-cta-button'
                  >
                    Click to Create
                  </Link>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
