import React from 'react';
import GoogleMapReact from 'google-map-react';

import pointLoc from '../../assets/images/location-on-map.svg';

const Location = () => {
    return (
        <div>
            <img src={pointLoc} alt='Cool Pro Mechanical Location' />
        </div>
    );
};

const defaultProps = {
    center: {
        lat: 40.8572501,
        lng: -73.4034961,
    },
    zoom: 14,
};

const ContactMap = () => {
    return (
        <section style={{ height: '545px', marginTop: '-70px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyAch_9Qk6XtqtcrV0eVFVwZ9slv6POKuss',
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Location lat={40.8572501} lng={-73.4034961} />
            </GoogleMapReact>
        </section>
    );
};

export default ContactMap;
