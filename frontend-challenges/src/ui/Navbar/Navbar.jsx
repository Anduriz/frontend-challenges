import './Navbar.css'
import starbuckslogo from '../../assets/logo.png';
export const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img src={starbuckslogo} className="logo" alt="Starbucks logo" />
        <div className='navbar-menu'>
          <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>What's New</li>
              <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}
