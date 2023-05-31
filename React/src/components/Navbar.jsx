const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="title-logo">
          <a id="logo" className="animate_logo" href="./index.html">
            <img src="./assets/logo.jpeg" alt="logo" />
          </a>
          <h2>IPHONE - STORE</h2>
        </div>
        <div className="buttons">
          <div>
            <a href="../index.html">Inicio</a>
          </div>
          <div>
            <a href="../index.html">Contactanos</a>
          </div>
          <div>
            <a href="../index.html">Productos</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
