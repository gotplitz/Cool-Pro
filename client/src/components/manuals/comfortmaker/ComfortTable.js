import React from 'react';

const items = [
  {
    id: 1,
    type: 'fas fa-info-circle',
    link:
      'https://www.comfortmaker.com/en/us/buying-guide/the-comfortmaker-difference/',
    label: 'Comfort Maker   Overall Difference',
  },
  {
    id: 2,
    type: 'fas fa-info-circle',
    link: 'https://www.comfortmaker.com/en/us/buying-guide/comfort-difference/',
    label: 'Comfort Maker   Comfort Difference',
  },
  {
    id: 3,
    type: 'fas fa-list-ul',
    link: 'https://www.comfortmaker.com/en/us/products/air-conditioners/',
    label: 'Comfort Maker   Air Conditioners',
  },
  {
    id: 4,
    type: 'fas fa-list-ul',
    link: 'https://www.comfortmaker.com/en/us/products/heat-pumps/',
    label: 'Comfort Maker   Heat Pumps',
  },
  {
    id: 5,
    type: 'fas fa-list-ul',
    link: 'https://www.comfortmaker.com/en/us/products/gas-furnaces/',
    label: 'Comfort Maker   Gas Furnaces',
  },
  {
    id: 6,
    type: 'fas fa-file-signature',
    link: 'https://www.comfortmaker.com/en/us/product-registration-warranty/',
    label: 'Comfort Maker   Registration and Warranty',
  },
];

const ComfortTable = () => {
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

export default ComfortTable;
