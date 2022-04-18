

const Navbar = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <span class='navbar-brand mb-0 px-3 h1'>officialdavidtaylor.com</span>
        <div class='justify-content-end' id='navbarText'>
          <span class='navbar-text'>
            > in the pursuit of becoming a better developer
          </span>
        </div>
      </nav>
      {/* Use a div with fixed height to fill the space in the document flow for the Navbar */}
      <div style={{ height: '50px' }}></div>
    </>
  )
}

export default Navbar;