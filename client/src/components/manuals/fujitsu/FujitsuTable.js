import React from 'react';

const items = [
  {
    id: 1,
    type: 'fas fa-book',
    link:
      'https://www.fujitsugeneral.com/us/support/downloads/halcyon/manual.html',
    label: 'Fujitsu  Operational Manuals',
  },
  {
    id: 2,
    type: 'fas fa-file-signature',
    link:
      'https://www.fujitsugeneral.com/us/support/downloads/halcyon/warranty.html',
    label: 'Fujitsu Warranty',
  },
  {
    id: 3,
    type: 'fas fa-file-pdf',
    link:
      'https://www.fujitsugeneral.com/us/resources/pdf/support/downloads/halcyon-2019-full-line-brochure-02.pdf',
    label: 'Fujitsu  Mini-Split Heating and Cooling Systems Catalogue',
  },
  {
    id: 4,
    type: 'fas fa-list-ul',
    link: 'https://www.fujitsugeneral.com/us/products/split/index.html',
    label: 'Fujitsu  Single Room Mini-Split Systems',
  },
  {
    id: 5,
    type: 'fas fa-list-ul',
    link: 'https://www.fujitsugeneral.com/us/products/multi/index.html',
    label: 'Fujitsu  Multi Room Mini-Split Systems',
  },
  {
    id: 6,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/technology/ductless-comfort.html',
    label: 'Fujitsu  Ductless Comfort',
  },
  {
    id: 7,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/technology/air-filtration.html',
    label: 'Fujitsu  Ductless Filtration',
  },
  {
    id: 8,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/technology/inverters-constant-comfort.html',
    label: 'Fujitsu  Inverters: Constant Comfort',
  },
  {
    id: 9,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/technology/xlth-low-temp-heating.html',
    label: 'Fujitsu  Extra Low Temp Heating',
  },
  {
    id: 10,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/technology/user-friendly-controls.html',
    label: 'Fujitsu  User Friendly Controls',
  },
  {
    id: 11,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/benefits/energy-efficiency.html',
    label: 'Fujitsu  Energy Efficient',
  },
  {
    id: 12,
    type: 'fas fa-list-ul',
    link:
      'https://www.fujitsugeneral.com/us/residential/benefits/individual-control.html',
    label: 'Fujitsu  Individual Zoning',
  },
  {
    id: 13,
    type: 'fas fa-info-circle',
    link:
      'https://www.fujitsugeneral.com/us/residential/benefits/year-round-comfort.html',
    label: 'Fujitsu  Year Round Comfort',
  },
];

const FujitsuTable = () => {
  return (
    <section>
      <div className='container'>
        <div className='space-3'></div>
        <div className='grid'>
          <div className='column-6 offset-3 why-cool-pro'>
            <table className='manuals-and-links'>
              <tbody>
                {items.map((item, id) => (
                  <tr key={id}>
                    <td>
                      <i className={item.type}></i>
                    </td>
                    <td>{item.label}</td>
                    <td>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fas fa-link'></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='space-3'></div>
      </div>
    </section>
  );
};

export default FujitsuTable;
