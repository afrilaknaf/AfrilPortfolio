import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { techStackIcons } from '../constants';
import Techicons from '../components/Models/Techlogos/Techicons';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      }
    );
  }, []);

 return (
  <div id='skills' className='flex-center section-padding min-h-screen'>
    <div className='w-full h-full md:px-10 px-5'>
      <TitleHeader
        title='My Preferred Tech Stack'
        sub=' 🤝  The Skills I Bring to the table'
      />
      <div className='flex justify-center items-center h-full'>
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <Techicons model={icon} />
                </div>
                <div className='padding-x w-full mb-8'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

};

export default Techstack;
