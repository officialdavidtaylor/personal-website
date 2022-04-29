import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ODT Homepage</title>
        <link rel='icon' href='/favicon.png' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#212529' />
        <meta name='description' content='A site where I share the details of my projects!' />

        {/* Source Bootstrap from CDN */}
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossOrigin='anonymous' />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
          integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13'
          crossOrigin='anonymous'></script>
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossOrigin='anonymous'></script>

        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
      </Head>

      <Navbar />

      <div className='container'>
        <div className='jumbotron bg-light p-3 mt-5'>
          <h1 className='display-4'>Hi 👋 I'm an aspiring developer</h1>
          <p className='lead'>
            I thought I wanted to be in the hardware industry for a long time, but I've realized I was wrong.
          </p>
          <hr />
          <p>
            It has felt like a long road to get to the point of recognizing this, but in preparing for the transition it feels like I'm finally coming home.<br />
            Also I don't know what I want this website to be just yet, so for now it's just filler text.
          </p>
          <button type='button' className='btn btn-primary btn-lg' onClick={() => alert('Thanks for your interest! I\'ll be adding new content soon!')}>Learn more</button>
        </div>
      </div>
    </div>
  )
}
