import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

// Page parts
import Spinning from '../layout/Spinning';
import ProfileTop from './ProfileTop';
import ProfileOther from './ProfileOther';
import ScrollToTop from '../routing/ScrollToTop';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading || auth.user.usertype === 'client' ? (
        <Spinning />
      ) : (
        <section className="section-size-2 lighter-bg">
          <ScrollToTop />
          <div className="container">
            <div className="grid">
              <div className="column-2 client-navigation">
                <Link
                  to="/dashboard"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Back to Dashboard
                </Link>
                <Link
                  to="/clients-and-prospects"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Back to List
                </Link>
                <Link
                  to="/quotes"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Quotes
                </Link>
                <Link
                  to="/tickets"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Tickets
                </Link>
                {auth.isAuthenticated &&
                  auth.loading === false &&
                  auth.user._id === profile.user._id && (
                    <Link
                      to="/edit-profile"
                      className="white-button"
                      style={{ marginBottom: 30, display: 'block' }}
                    >
                      Edit Profile
                    </Link>
                  )}
              </div>
              <div className="column-10 profile-main-area">
                <ProfileTop profile={profile} />
                <ProfileOther profile={profile} />
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
