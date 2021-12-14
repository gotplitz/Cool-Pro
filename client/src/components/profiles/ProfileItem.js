import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
    return (
        <div className='column-6 users-l'>
            <div className='users-list'>
                {profile && (
                    <div className='caption'>
                        <img
                            src={`/uploads/${profile.user.photo}`}
                            alt={profile.user.name}
                            className='profile-item-avatar'
                        />
                        <h5 className='title'>
                            {profile.user.name} {profile.user.lastname}
                        </h5>
                        <p>
                            {profile.user.companyname && (
                                <span>{profile.user.companyname}</span>
                            )}{' '}
                            {profile.user.title && (
                                <span>• {profile.user.title}</span>
                            )}
                        </p>
                        <Link
                            to={`/profile/${profile.user._id}`}
                            className='white-button profiles-btn'
                        >
                            View Client
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileItem;
