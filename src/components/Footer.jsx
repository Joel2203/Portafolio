import React, { useState } from 'react';

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto items-center">
      <a href="https://www.linkedin.com/in/joel-mitsuo-hernandez-lumbe-bb2487295/" target="_blank" rel="noopener noreferrer" className='primary-color'>Joel Hernandez</a>
      <a href="https://www.linkedin.com/in/joel-mitsuo-hernandez-lumbe-bb2487295/" target="_blank" rel="noopener noreferrer" className='primary-color'>
        <img 
          src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" 
          alt="LinkedIn Icon" 
          className={isClicked ? "w-12 h-12 ml-auto cursor-pointer" : "w-6 h-6 cursor-pointer"} 
          onClick={handleClick} 
        />
      </a>
      <p className="text-gray-600">industriasjhernandez22@gmail.com <br/> #WebDev2024</p>
    </div>
  );
}

export default Footer;
