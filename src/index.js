import React from 'react';
import { render } from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './functionBased/routes/About';
import NotMatch from './functionBased/routes/NotMatch';

import './functionBased/App.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoContainer />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
