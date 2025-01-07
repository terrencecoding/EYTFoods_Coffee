import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <>
      <footer className="section">
        <p>
          copyright &copy; Backroads Travel Tours Company <span>{year}</span>. 
          All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;