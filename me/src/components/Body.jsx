import React from 'react'
import './Body.css'
import Avatar from '@mui/material/Avatar';
import fr1 from '../frimage/Png.png'
import f2 from '../frimage/f2.jpeg'
import f3 from '../frimage/f3.jpg'
import f4 from '../frimage/f4.jpg'
import f5 from '../frimage/f5.jpg'
import green from '../image/green.png'

function Body() {
  return (
    <div className='bwrapper'>
     <h1>Friends</h1>
     <div className='friends' >
     <Avatar className='avatar' alt="Remy Sharp" src={fr1}  />
     <p>Emily Son</p> <img src={green} height={30} />
     <Avatar className='avatar' alt="Remy Sharp" src={f2}  />
     <p>Eva lizz</p> <img src={green} height={30} />
     <Avatar className='avatar' alt="Remy Sharp" src={f3}  />
     <p>Jack Lord</p> <img src={green} height={30} />
     <Avatar className='avatar' alt="Remy Sharp" src={f4}  />
     <p>Mike Kart</p> <img src={green} height={30} />
     <Avatar className='avatar' alt="Remy Sharp" src={f5}  />
     <p>Rose May</p> <img src={green} height={30} />
     </div>
    </div>
  )
}

export default Body
