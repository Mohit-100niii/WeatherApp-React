import React from 'react';

const TodayDate = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <h1>{currentDate}</h1>
    </div>
  );
};

export default TodayDate;
