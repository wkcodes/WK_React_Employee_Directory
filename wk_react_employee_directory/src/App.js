import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
      <div className="app">
        <Wrapper>
          <Header />
            <Main />
        </Wrapper>
      </div>
    )
  }

export default App;

//describe dom
//data table component: body, header, rows 