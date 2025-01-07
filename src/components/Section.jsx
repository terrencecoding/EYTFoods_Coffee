import React from 'react';

const Section = ({ id, title }) => {
  return (
    <section id={id} className="section">
      <div className="title">
        <h2>{title.split(' ')[0]} <span>{title.split(' ')[1]}</span></h2>
      </div>
      <p>More information about {title.toLowerCase()}...</p>
    </section>
  );
};

export default Section;