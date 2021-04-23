import React, { Component } from 'react';
import CatTemplate  from "./src/components/Unit3/index";
const _onPressButton = () => {
  alert('You tapped the button!')
};
const App = () => {
// render()
  return (
    <>
    
     <CatTemplate name="Con mèo ngu" img="'./imgs/meo.jpg'"></CatTemplate>
     <CatTemplate name="Con mèo ngu" img="'./imgs/meo.jpg'"></CatTemplate>
     <CatTemplate name="Con mèo ngu" img="'./imgs/meo.jpg'"></CatTemplate>
    </>
  );
};




export default App;