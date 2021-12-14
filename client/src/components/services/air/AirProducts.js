import React from 'react';

const features = [
  {
    id: 1,
    subt: 'Viruses',
    caption: 'Keep your environment free from annoying viruses',
  },
  {
    id: 2,
    subt: 'Bacteria',
    caption: 'Get a healthy environment at home or office',
  },
  {
    id: 3,
    subt: 'Mold',
    caption: 'Maintain your infraestructures free from mold',
  },
  {
    id: 4,
    subt: 'Odors',
    caption: 'Air purifiers clean your air even from odors',
  },
  {
    id: 5,
    subt: 'Pollen',
    caption: 'We love nature, but pollen causes 81% of allergies',
  },
  {
    id: 6,
    subt: 'Dust',
    caption: 'Dust is a mixture of substances that cause allergies',
  },
  {
    id: 7,
    subt: 'Tobbacco Smoke',
    caption: 'Get rid of the chemicals produced by cigarrettes',
  },
  {
    id: 8,
    subt: 'Dander',
    caption: 'Do not worry about allergies produced by dander',
  },
];

const AirProducts = () => {
  return (
    <section className='section-size-2 lighter-bg'>
      <div className='container'>
        <div className='grid'>
          <div className='column-12 text-center'>
            <h2>Enjoy a healthy environment while combating the real issue</h2>
            <p>
              Found below are the pollutants that are contaminating your
              environment. Do not let them affect your health and the health of
              loved ones anymore.
            </p>
            <div className='space-3'></div>
            <div className='box white'>
              <div className='grid columns-4 text-left'>
                {features.map((feature, id) => (
                  <div key={id} className='grid-item column'>
                    <div className='fetaured-wrap'>
                      <div className='featured-icon'>
                        <i
                          className='fas fa-minus-circle'
                          style={{ color: 'red' }}
                        ></i>
                      </div>
                      <div className='featured-txt'>
                        <h3>{feature.subt}</h3>
                        <p>{feature.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirProducts;
