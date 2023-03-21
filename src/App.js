import React from 'react';
import './App.css';
import Free from "./components/free";
import Plus from "./components/plus";
import Pro from './components/pro';

function App() {
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
            <Free/>
            <Plus/>
            <Pro/>
        </div>
      </div>
    </section>
  );
}

export default App;
