import React from 'react'
import style from './MainBody.module.css'
const MainBody = () => {
  return (
    <div className={style.container}>
    
        <div className={style.styleleftSide}>
          <div className={style.left1}>
              <p>TOTALLY FREE</p>
              <h1>Let's bring your team together in onclick</h1>
          </div>
          <div className={style.left2}>
              <p>We help you to manage all of your Work and daily task in offic</p>
          </div>
          <div className={style.left3}>
              <button>Get Started</button>
              <div className={style.round}>
                <i className='fa fa-play'></i>
              </div>
              <p>How to use</p>
          </div>
        </div>


        <div className={style.stylerightSide}>
          <div className={style.right1}>
            <img src="https://www.bdtask.com/sp/graphics/img/banner.png" alt="image" />
          </div>
        </div>


    </div>
  )
}

export default MainBody