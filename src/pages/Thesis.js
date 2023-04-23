import React from 'react'
import './pages.css'
import JSZip from 'jszip';
import { Button } from 'react-bootstrap';
//
import bboardM from '../thesisImgs/BBoardM.jpg'; 
import img1 from '../thesisImgs/1.jpg';
import img2 from '../thesisImgs/2.jpg';
import img3 from '../thesisImgs/3.jpg';
import img4 from '../thesisImgs/4.jpg';
import img5 from '../thesisImgs/5.jpg';
import img6 from '../thesisImgs/6.jpg';
import img7 from '../thesisImgs/7.jpg';
import img8 from '../thesisImgs/8.jpg';
import img9 from '../thesisImgs/9.jpg';
import img10 from '../thesisImgs/10.jpg';

import img11 from '../thesisImgs/11.jpg';
import img12 from '../thesisImgs/12.jpg';
import img13 from '../thesisImgs/13.jpg';
import img14 from '../thesisImgs/14.jpg';
import img15 from '../thesisImgs/15.jpg';
import img16 from '../thesisImgs/16.jpg';
import img17 from '../thesisImgs/17.jpg';
import img18 from '../thesisImgs/18.jpg';
import img19 from '../thesisImgs/19.jpg';
import img20 from '../thesisImgs/20.jpg';

import img21 from '../thesisImgs/21.jpg';
import img22 from '../thesisImgs/22.jpg';
import img23 from '../thesisImgs/23.jpg';
import img24 from '../thesisImgs/24.jpg';


function Thesis() {


return (
    <div className='thesis'>
      <h1><a href='/Geer-Thesis Jpegs.zip' download>  Download Thesis</a></h1>
      <Button><p><a href='/Geer-Thesis Jpegs.zip' download>  Download !!</a></p></Button>
    <div className='thesisIMG'>
    {/* <img src={img1}/> */}
    <img src={bboardM}/>
    <img src={img1}/>
    <img src={img2}/>
    <img src={img3}/>
    <img src={img4}/>
    <img src={img5}/>
    <img src={img6}/>
    <img src={img7}/>
    <img src={img8}/>
    <img src={img9}/>
    <img src={img10}/>

    <img src={img11}/>
    <img src={img12}/>
    <img src={img13}/>
    <img src={img14}/>
    <img src={img15}/>
    <img src={img16}/>
    <img src={img17}/>
    <img src={img18}/>
    <img src={img19}/>
    <img src={img20}/>

    <img src={img21}/>
    <img src={img22}/>
    <img src={img23}/>
    <img src={img24} className='finalIMG'/>
    </div>

    </div>
  )
}

export default Thesis