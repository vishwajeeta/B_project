import './Navbar.scss';
function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        Logo
      </div>
      <ul className="app__navhar-links">
      {['home','about','work','skills','contact'].map((item)=>(
        <li className="app__flex p-text" key={'link-'+item}>
          <div/>
          <a href={'link-'+item}>{item}</a>
          </li>
      ))}
      </ul>
      </nav>
  )
}

export default Navbar
