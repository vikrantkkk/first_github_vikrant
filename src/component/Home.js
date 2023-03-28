import React from 'react'
import home from './main.module.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={home.main_container}>
            <div className={home.content_section}>
                <p className={home.free}>Totally Free</p>
                <h2><span> I </span> Let's bring your <br /> team together <br /> in onclick</h2>
                <p className={home.content}>We help you to manage all of your work <br /> and daily task in office</p>
                <button className={home.btn_getStared}> Get Started </button>
                <button className={home.btn_howToUse}>How to use</button>
            </div>
            <div className={home.image_bg}>
                <img src="https://images.pexels.com/photos/10919342/pexels-photo-10919342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" />
            </div>
        </div>
        </>
  )
}