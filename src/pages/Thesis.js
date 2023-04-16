import React from 'react'
import './pages.css'
import JSZip from 'jszip';
import { Button } from 'react-bootstrap';
function Thesis() {

//Geer-Thesis Jpegs.zip

return (
    <div className='thesis'>
      <h1><a href='/Geer-Thesis Jpegs.zip' download>  Download Thesis</a></h1>
      <Button><p><a href='/Geer-Thesis Jpegs.zip' download>  Download !!</a></p></Button>
    </div>
  )
}

export default Thesis