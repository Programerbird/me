import React from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../image/logo.jpg'
import pic from '../image/pic.jpg'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    
      <div className='Wrapper' >
        <Avatar className='avatar' alt="Remy Sharp" src={logo} />
           <div className='links' >
            <a href='#' >Chat</a>
            <a href='#' >Anime</a>
            <a href='#' >Manga</a>
           </div>
        <div className='search' >
          <SearchIcon></SearchIcon>
          <input placeholder='Search' ></input>
        </div>
        <div>
        <Avatar className='avatar' alt="Remy Sharp" src={pic} />
        </div>
      </div>
    
  )
}

export default Header
