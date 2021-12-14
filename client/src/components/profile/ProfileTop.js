import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
    profile: {
        existingclient,
        website,
        aboutyou,
        typeofservices,
        yourinterests,
        social,
        user: { name, lastname, companyname, title, phonenumber, email, photo },
    },
}) => {
    return (
        <div className='grid'>
            <div className='column-4'>
                <div className='client-details-img'>
                    <img src={`/uploads/${photo}`} alt={name} />
                </div>
                <div className='client-details-social'>
                    {social && social.facebook && (
                        <a
                            href={social.facebook}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </a>
                    )}
                    {social && social.twitter && (
                        <a
                            href={social.twitter}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                    )}
                    {social && social.instagram && (
                        <a
                            href={social.instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-instagram'></i>
                        </a>
                    )}
                    {social && social.linkedin && (
                        <a
                            href={social.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    )}
                    {social && social.youtube && (
                        <a
                            href={social.youtube}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-youtube'></i>
                        </a>
                    )}
                    {social && social.behance && (
                        <a
                            href={social.behance}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-behance'></i>
                        </a>
                    )}
                    {social && social.slack && (
                        <a
                            href={social.slack}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-slack'></i>
                        </a>
                    )}
                </div>
                <div className='client-details-contact'>
                    <a href={`tel:${phonenumber}`}>
                        <i className='fas fa-mobile'></i> {phonenumber}
                    </a>
                    <a href={`mailto:${email}`}>
                        <br />
                        <i className='fas fa-paper-plane'></i> {email}
                    </a>
                </div>
            </div>
            <div className='column-8'>
                <div className='client-details-txt'>
                    <h5>
                        {companyname && (
                            <span>
                                {title} at {companyname}
                            </span>
                        )}
                    </h5>
                    <h1 className='animated-text'>
                        {name} {lastname}
                    </h1>
                    <p>
                        {website && (
                            <span>
                                Has a website?{' '}
                                <a
                                    href={`http://${website}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {website}
                                </a>
                            </span>
                        )}
                    </p>
                    <p>
                        Interests? <b>{existingclient}</b>
                    </p>
                    <p>
                        Servicing: <b>{typeofservices}</b>
                    </p>
                    <h4>About {name}</h4>
                    <p>{aboutyou}</p>
                    <h4>{name}'s Interests</h4>
                    <p>
                        {yourinterests.map((yourinterest, index) => (
                            <span key={index} className='interests'>
                                {yourinterest}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileTop;
