import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div class='container'>
        <div class='jumbotron bg-light p-3 mt-5'>
          <h1 class='display-4'>Hi 👋 I'm an aspiring developer</h1>
          <p class='lead'>
            I thought I wanted to be in the hardware industry for a long time, but I've realized I was wrong.
          </p>
          <hr />
          <p>
            It has felt like a long road to get to the point of recognizing this, but in preparing for the transition it feels like I'm finally coming home.<br />
            Also I don't know what I want this website to be just yet, so for now it's just filler text.
          </p>
          <button type='button' class='btn btn-primary btn-lg' onClick={() => alert('Thanks for your interest! I\'ll be adding new content soon!')}>Learn more</button>
        </div>
      </div>
    </>
  );
}

export default App;
