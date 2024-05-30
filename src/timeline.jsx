import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { year: 2008, text: 'Some event in 2008' },
    { year: 2009, text: 'Some event in 2009' },
    { year: 2011, text: 'В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк.' },
    { year: 2013, text: 'В 2013 году был образован отдел дизайна и архитектуры.' },
    { year: 2015, text: 'Some event in 2015' },
    { year: 2008, text: 'Some event in 2008' },
    { year: 2009, text: 'Some event in 2009' },
    { year: 2011, text: 'В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк.' },
    { year: 2013, text: 'В 2013 году был образован отдел дизайна и архитектуры.' },
    { year: 2015, text: 'Some event in 2015' },
    { year: 2008, text: 'Some event in 2008' },
    { year: 2009, text: 'Some event in 2009' },
    { year: 2011, text: 'В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк.' },
    { year: 2013, text: 'В 2013 году был образован отдел дизайна и архитектуры.' },
    { year: 2015, text: 'Some event in 2015' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const headerRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setCurrentIndex(index),
  };

  const handleYearClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentIndex(index);
  };

  // Calculate dot position
  const [dotPosition, setDotPosition] = useState(0);

  useEffect(() => {
    const updateDotPosition = () => {
      if (headerRef.current) {
        const slideWidth = headerRef.current.clientWidth / settings.slidesToShow;
        const centerPaddingOffset = (headerRef.current.clientWidth - slideWidth) / 2;
        setDotPosition(centerPaddingOffset + (slideWidth * (currentIndex % events.length)) + (slideWidth / 2) - 10);
      }
    };
    updateDotPosition();
    window.addEventListener('resize', updateDotPosition);
    return () => {
      window.removeEventListener('resize', updateDotPosition);
    };
  }, [currentIndex, settings.slidesToShow, events.length]);

  return (
    <div className="timeline-container">
      <div className="timeline-header" ref={headerRef}>
        <Slider ref={sliderRef} {...settings}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`timeline-year ${index === currentIndex ? 'highlight' : ''}`}
              onClick={() => handleYearClick(index)}
            >
              {event.year}
            </div>
          ))}
        </Slider>
      </div>
      <div className="timeline-dot-container">
        <div className="timeline-dot" style={{ left: `${dotPosition}px` }}></div>
      </div>
      <div className="timeline-detail">
        <div className="icon-large">{events[currentIndex].year}</div>
        <h2>{events[currentIndex].year}</h2>
        <p>{events[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Timeline;
