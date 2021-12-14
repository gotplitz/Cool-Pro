import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const sliders = [
  {
    index: 1,
    testimonial:
      'Eric explained everything to us in a way we could understand and listened to what we wanted out of the system without trying to up sell us. We now have an AC and Heat pump we love and is right for us. I would recommend them highly to anyone putting in a system in an old house. Great work that looks like it belongs here.',
    who: 'Mark N.',
    from: 'Home Advisors'
  },
  {
    index: 2,
    testimonial:
      'They address my concerns promptly, service is always professional and timely. Cool Pro helped to identify a problem with my air conditioning system and fixed it immediately when others could not identify the problem.',
    who: 'Delia N.',
    from: 'CRM'
  },
  {
    index: 3,
    testimonial:
      'I plan on purchasing New A/C unit from them in the spring. Good follow up and competitive pricing. Good no interest financing.',
    who: 'Jeff B.',
    from: 'Google'
  }
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={7000}>
      {sliders.map((slider, index) => (
        <Carousel.Item key={index}>
          <Carousel.Caption>
            <p>{slider.testimonial}</p>
            <h5>{slider.who}</h5>
            <small>{slider.from}</small>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const CoolTest = () => {
  return (
    <section className="section-size-2">
      <div className="container">
        <div className="grid">
          <div className="column-12 why-cool-pro">
            <p>What our clients are saying about us</p>
            <h3>Satisfied Customers Speak for Us</h3>

            <section className="testimonials-slide-bg">
              <ControlledCarousel />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoolTest;
