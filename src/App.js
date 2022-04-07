import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div class='container'>
        <div class='jumbotron bg-light p-5 mt-5'>
          <h1 class='display-4'>Hi 👋, I'm an aspiring developer</h1>
          <p class='lead'>
            I thought I wanted to be in hardware for a long time, but I've realized I was wrong.
          </p>
          <hr />
          <p>
            It's been a long road (not really but it sounds dramatic), and I'm finally coming home.<br />
            I don't know what I want this website to be just yet, so for now it's just filler text.
          </p>
          <a class='btn btn-primary btn-lg' href='#' role='button'>Learn more</a>
        </div>
      </div>
    </>
  );
}

export default App;
