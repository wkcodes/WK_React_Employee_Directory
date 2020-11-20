import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import { Button } from 'react-bootstrap';

function App() {
    return (
      <div className="container mt-5">
        <h1>This is my React Employee Directory!</h1>
        <Wrapper>
            <Header></Header>
              <Main>
              <Button>Something else</Button>
              </Main>   
        </Wrapper>
      </div>
    )
  }

export default App;

//describe dom
//data table component: body, header, rows 