import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center'>
           <a href='/'>Visit My Blog</a>
        </div>
        <div className='socials'>
         {socialImgs.map((img)=>(
            <a className='icon' target='_blank' href={img.url} >
                <img src={img.imgPath} alt="socials" />
            </a>
         ))}
        </div>
        <div className='flex flex-col justify-center md:items-start items-center'>
          <p className='text-center md:text-end'>
            ©{new Date().getFullYear()} AfrilAknaf | MernStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer