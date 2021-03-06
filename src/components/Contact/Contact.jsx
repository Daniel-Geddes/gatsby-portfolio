import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact Me" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta}
            </p>
            <p className="contact-wrapper__text">
              07568523047
            </p>
            <p className="contact-wrapper__text">
              dangeddes22@gmail.com
            </p>

          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
