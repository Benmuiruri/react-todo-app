import React from 'react';
import { render } from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './functionBased/App.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoContainer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
