import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  const percentage = () => (Math.floor(Math.random() * 100));
  const { id } = props;

  const progressBar = () => {
    const parent = document.getElementById(id);
    const circle = parent.querySelector('.circleWrap');
    const number = parent.querySelector('.number');

    let progressValue = 0;
    const progressEndValue = percentage();
    const speed = 50;

    const progress = setInterval(() => {
      progressValue += 1;
      number.textContent = `${progressValue}%`;
      circle.style.background = `conic-gradient(
          #307bbe ${progressValue * 3.6}deg,
          #e8e8e8 ${progressValue * 3.6}deg
      )`;
      if (progressValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  };

  useEffect(() => {
    progressBar();
  }, []);

  return (
    <div className="progress" id={id}>
      <div className="circleWrap" />
      <div className="percentage">
        <div className="number" />
        <div className="completed">Completed</div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Progress;
