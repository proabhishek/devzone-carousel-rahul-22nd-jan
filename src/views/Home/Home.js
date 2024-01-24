import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { content } from './content';

function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-container">
      <Slider {...settings}>
        {content.map((card) => (
          <div key={card.id} className="card">
            <iframe
              src="https://www.youtube.com/embed/6UVfDLs5CCE?si=sG4zxqPSLCYlurmi" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p>{card.postLine}</p>
            <p>{card.decreption}</p>
            <p>📁 {card.category}</p>
            <p>👁️ {card.views}</p>
            <button className='btn'>Click</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
