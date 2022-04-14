import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MainSlide from '../components/Slide';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeBlock = styled.div`
  div {
    position: absolute;
    top: 100px;
    left: 0;
    color: #fff;
  }
`;


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d663bf07756ec7237664b2b019ecffb3&targetDt=20220413');

      setIsLoading(false);
      setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
    }

    getMovies();
  },[]);

  if (isLoading) {
    return (
      <HomeBlock>
        <div className='loader'>
          <span>Loading...</span>
        </div>
      </HomeBlock>
    )
  }
  if (!isLoading) {
    return (
      <HomeBlock>
        <Slider {...settings}>
          {movies.map(movie => (
                <MainSlide 
                  key={movie.rnum}
                  title={movie.movieNm}
                  date={movie.openDt}
                />
          ))}          
        </Slider>
      </HomeBlock>
    ) 
  }
};

export default Home;