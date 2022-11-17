import React, { Component } from "react";
import Film from "./Film";

import Count from "./Count";
import Map from "./Map";
import Review from "./Component/Birthday/Review";
import Acc from "./Component/Accordion/Acc";
import Fun from "./Fun";
import Filter from "./Component/Filter";

import Studentform from "./Studentform.jsx"
import Api from "./Api";
import Crud from "./Crud/Crud";
import Player from "./Player";
import {BrowserRouter, Route, Routes,Link } from "react-router-dom"


class App extends Component {
  render() {
    return (
  
      <div>

   

        {/* <h1>Followers</h1> */}
        {/* <Name/> */}
        {/* <Player/> */}

        {/* <Film window="PS1"/>
      <Film window="Vikram"/>
      <Film window="Nanae varuven"/> */}

        {/*  */}

        {/* <Map/>
         */}

        {/* <Acc/> */}

        {/* <Api/>
         */}

{/* <ul>

       <li>  <Link to="/Students" >Form</Link></li>
         
       <li>    <Link to="/Accordion">Accord</Link></li>
         
       <li>   <Link to="/Crud">Crud</Link></li>

         </ul> */}

{/*          
 <Routes>
          <Route path="/Students"   element={<Studentform/>}              />
          <Route path="/Accordion"    element={ <Acc/> }            />
          <Route path="/Crud"         element={<Crud/>}             />

          <Route path="*"  element={<Player/>}/>

         </Routes>  */}
    <h1>vfgfg</h1>
    <Crud/>










       
      </div>
      
    );
  }
}

export default App;
