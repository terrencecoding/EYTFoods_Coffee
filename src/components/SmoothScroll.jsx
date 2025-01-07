import React from 'react';

const SmoothScroll = ({ children }) => {
  const handleClick = (e) => {
    e.preventDefault();   // prevent from default scrolling
    const targetId = e.currentTarget.getAttribute('href').slice(1);   //extract the ID name by omitting '#'
    const targetElement = document.getElementById(targetId);      //target the element with ID name
    
    const navbar = document.getElementById('nav');
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = document.querySelector('.links-container').getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');   // const hold boolean of fixedNav
    
    let position = targetElement.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });

    // Close the links container after click on responsive mobile view
    document.querySelector('.links-container').style.height = 0;
  };

  return React.cloneElement(children, { onClick: handleClick });    //return a clone of the child element with handClick function onClick
};

export default SmoothScroll;