import React, { useState } from 'react'
import style from './Header.module.css'

const Header = () => {
  const [isMobile, setMobile] = useState(false)
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.logo}><h2>Onclick</h2></div>
        <div className={isMobile ? style.navbarMobile : style.navbar}
        >
          <ul className={style.list}>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className={style.userProfile}>
        <div className={style.login}><button>Login</button></div>
        <div className={style.signup}><button>Sign Up</button></div>
        <div className={style.menuBtn}><button
          onClick={() => setMobile(!isMobile)}
        >
          {isMobile ? (<i className='fas fa-times'></i>) :
            (<i className='fas fa-bars'></i>)
          }
        </button></div>
      </div>
    </div>
  )
}

export default Header