import React, {useEffect,useState} from 'react'
import {db} from './Firebase.js'
import {Button} from 'react-bootstrap'
import {AuthProvider, useAuth} from '../components/AuthProvider'



function About() {

    const {currentUser}=useAuth();
    var [description, setNewDesc]=useState('')
    var [desc, setDesc]=useState('')
    const [load, setLoading]=useState(false)
    
    const handleOnChange=(e)=>{
        setNewDesc(e.target.value);
        console.log(e.target.value)
    }
    const createDesc=()=>{
        const descRef=db.ref('description');
        /*const desc1={
            description
        };
        */
       descRef.update({
           description:description
       });
        //descRef.push(desc1)
    }

    useEffect(()=>{
        const todoRef=db.ref('description').child('description');
        todoRef.on('value', (snapshot)=>{
            setDesc(snapshot.val());
            console.log(snapshot.val());
            setLoading(true)
        })
        
    }, [])

    return (
        <div className='about'>
            <div className='about-bg'>
            <h1>Kate Geer</h1>
            </div>
           
            {load &&<p>{desc}</p>}
            {!load && <p>loading...</p>}
           {currentUser &&<div className='text-butt'> <textarea className='edit-box' type='text' onChange={handleOnChange} value={description} />
            <Button onClick={createDesc}>Add desc</Button>
            </div>}
            
        </div>
    )
}

export default About
