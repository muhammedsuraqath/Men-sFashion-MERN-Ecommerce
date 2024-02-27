import React from 'react'
import Footer from '../../Components/Footer'
import { Helpbot } from '../Helpbot/Helpbot'
import Details from './Details'


function Single () {
  
  return (
    <div className='container'>
 
     <Details/>
     <Helpbot/>
     <Footer/>
    </div>
  )
  
}

export default Single;