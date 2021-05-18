import "./App.css"
import React,{Component} from 'react';
import propTypes from "prop-types"
import {Getsdata} from './Profile/Profile component'


class App extends Component{
render (){
  function getdata () {
    alert("Stop")
  }
  return (
    <div className="App">
        <Getsdata FullName=" Akel Hosni" 

        BIO="I am a fullstack Js developer  with 2 years of experience in Javascript,react, mongo D8, etc. Received best Award and Best StudentTeam while working at Go my Code. "
        

        profession="FullStack Javascript developer." data={getdata}>
          <div style={{marginTop:30,marginLeft:25,display:'flex'}}><img src="akel.jpg" alt="text" /></div>

        
          </Getsdata>
    </div>
  );
  }
}

  
  
Getsdata.prototype={
  FullName:propTypes.string.isRequired ,
  BIO:propTypes.string.isRequired ,
  profession:propTypes.string.isRequired ,

};
export default App;