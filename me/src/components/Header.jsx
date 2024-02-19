import React from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../image/logo.jpg'
import pic from '../image/pic.jpg'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
function Header() {
  return (
    
      <div className='Wrapper' >
        <Avatar className='avatar' alt="Remy Sharp" src={logo} />
           <div className='links' >
           <Button variant="contained" color="success"  style={{ width: "20px", height: "25px",}} >
            Chat
          </Button>
          <Button variant="contained" color="success" style={{ width: "20px", height: "25px",}}  >
            Anime
          </Button>
          <Button variant="contained" color="success" style={{ width: "20px", height: "25px",}} >
            Manga
          </Button>
           </div>
        <div className='search' >
            <div className="cool-search-bar">
              <input type="text" placeholder="Search..." />
            </div>
              

        </div>
        <div>
        <Avatar className='avatar' alt="Remy Sharp" src={pic} />
        </div>
      </div>
    
  )
}

export default Header
