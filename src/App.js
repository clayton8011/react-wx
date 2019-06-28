import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import RouterBox from './config/routerConfig'
console.log(RouterBox)

function App() {
  return (
    <div className="App">
        <Router>
            {
                RouterBox.map((val,key)=> {
                    if(val.exact){
                            return(<Route  key={key} exact path={val.path} component={val.component} />)
                    }else{
                        return(<Route  key={key} path={val.path} component={val.component} />)
                    }
                })
            }

        </Router>
    </div>
  );
}

export default App;
