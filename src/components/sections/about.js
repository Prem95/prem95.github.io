import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 20px 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      color: rgb(255, 255, 255);

      &:before {
        content: '> ';
        position: absolute;
        left: 0;
        color: var(--darkNavy);
        font-size: var(--fz-sm);
        line-height: 19px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      border: 3px solid var(--green);
      top: 15px;
      left: 15px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'Tensorflow', 'OpenCV', 'Jupyter', 'Docker', 'Git', 'Linux', 'Flask', 'Pandas', 'Dash'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            At <a href="https://wiseai.tech/">WISE AI</a>, I develop Passive Face Anti-Spoofing algorithms using Deep Learning.
            During the development, I actively try to get my hands deep into some of the popular frameworks and tools such as:
          </div>

          <ul className="skills-list">{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <p>Lastly, I enjoy the variety of work that I do, and as I continuously make progress, I hope to contribute by building tools and solutions that are useful for the business along the way.</p>

        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={550}
              height={800}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
