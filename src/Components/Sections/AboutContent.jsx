import React from 'react';
import img1 from '../../assets/aboutbook.png'
import Button from '../Common/Button';
import { useNavigate } from 'react-router';
const AboutContent = ({ title, descr, hidden }) => {
  const navigate = useNavigate()
  return (
    <section className="section-main">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img1}
            alt="Books hanging on a wall"
            className="rounded-2xl w-full h-[400px] md:h-[700px] object-cover shadow-lg"
          />
        </div>
        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-2">
          <h1 className="text-3xl text-center md:text-left md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-center text-sm md:text-lg md:text-left">
            {descr}
          </p>
          {!hidden && (
            <div className="pt-4 flex">
              <Button text="Learn more" onClick={() => navigate('/about')} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;