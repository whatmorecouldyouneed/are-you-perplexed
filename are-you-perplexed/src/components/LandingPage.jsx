// src/components/LandingPage.js
import React from 'react';
import Countdown from 'react-countdown';
import './LandingPage.css';
import NewsletterSignup from './NewsletterSignup';

const LandingPage = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render any custom fallback here
      return <span>Time's up!!</span>;
    } else {
      return (
        <span className='countdownTimer'>
          {hours} {minutes} {seconds}
        </span>
      );
    }
  };

  return (
    <div className="landing-page">
      <div className='title'>
        PERPLEX
      </div>
      <div className="banner">
        <Countdown date={new Date('9/30/2023')} renderer={renderer} />
      </div>
      <NewsletterSignup/>
    </div>
  );
};

export default LandingPage;
