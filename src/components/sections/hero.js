import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one_A = <h1>  </h1>;
  const one_B = <h1>  </h1>;
  const one_C = <h1>  </h1>;
  const one = <h1>Hi there!</h1>;
  const two = <h2 className="big-heading">Prem Kumar</h2>;
  const three = <h3 className="medium-heading">AI Product Manager</h3>;

  const four = (
    <p>
      I'm a Engineer passionate in Generative AI and Digital Identity solutions!
    </p>
  );

  const four_A = (
    <p>
      Currently, I am a AI Product Manager in <a href="https://wiseai.tech/">WISE AI</a> where I lead the development of our Generative AI solution, the first in SEA!
    </p>
  );

  const four_B = (
    <p>
      Apart from work, I actively write technology articles at <a href="https://medium.com/">Medium</a> and explore on some of the interesting things elated to Science, Technology and Finance

      I love building my own products. One of the recent product that I have built is <a href="https://chat-with-database.com/">Chat-With-Database</a>
    </p>
  );

  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Contact Me
    </a>
  );

  const items = [one_A, one_B, one_C, one, two, three, four, four_A, four_B, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
