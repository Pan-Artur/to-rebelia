import { useState, useEffect } from "react";
import { StyledTimer } from "./styles/StyledTimer";

export const Timer = ({ targetDate }) => {
  const getUkrainianTimezone = (date = new Date()) => {
    const year = date.getFullYear();
    
    const lastSundayOfOctober = new Date(year, 9, 31);
    lastSundayOfOctober.setDate(31 - (lastSundayOfOctober.getDay() || 7));
    
    const lastSundayOfMarch = new Date(year, 2, 31);
    lastSundayOfMarch.setDate(31 - (lastSundayOfMarch.getDay() || 7));

    const isWinterTime = date > lastSundayOfOctober || date < lastSundayOfMarch;
    
    return isWinterTime ? "+02:00" : "+03:00";
  };

  const calculateTimeLeft = () => {
    try {
      const target = new Date(targetDate);
      const now = new Date();

      const currentTimezone = getUkrainianTimezone(now);
      const targetTimezone = getUkrainianTimezone(target);
      
      let correctedTarget = new Date(target);
      
      if (!targetDate.includes('+')) {
        correctedTarget = new Date(target.getTime() + (currentTimezone === "+02:00" ? 0 : -60 * 60000));
      }
      
      const difference = correctedTarget.getTime() - now.getTime();
      
      let timeLeft = {};
      
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return timeLeft;
    } catch (error) {
      console.error("Помилка у розрахунку часу:", error);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsTimeUp(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <StyledTimer>
      <div>
        {isTimeUp ? (
          <span className="time-up-message">Наш час настав!</span>
        ) : (
          <>
            <span>До вистави 28 листопада:</span>
            <div className="timer-numbers">
              <span className="time-unit">{formatTime(timeLeft.days)}</span>:
              <span className="time-unit">{formatTime(timeLeft.hours)}</span>:
              <span className="time-unit">{formatTime(timeLeft.minutes)}</span>:
              <span className="time-unit">{formatTime(timeLeft.seconds)}</span>
            </div>
          </>
        )}
      </div>
    </StyledTimer>
  );
};