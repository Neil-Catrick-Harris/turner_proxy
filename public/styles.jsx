import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'ReactDOM';

// const StyledProductOptionsApp = styled.div'
// ';

const StyledApp = () => {
  return (
    <div>
      <div id='productOptionsApp'></div>
      <div id='productView'></div>
      <div id='review-module'></div>
      <div id='BottomCarousel'></div>
    </div>
  );
};

ReactDOM.render(<StyledApp />, document.getElementById('styled-app'));
