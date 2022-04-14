import React from 'react';
import styled from 'styled-components';


function Slide({key, title, date}) {
  return (
    <div key={key}>
      <h3>{title}</h3>
      <p>개봉일자 : {date}</p>
    </div>
  )
};

export default Slide;