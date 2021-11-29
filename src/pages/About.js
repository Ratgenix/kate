import React, {useEffect,useState} from 'react'
import {db, store} from './Firebase.js'
import {Button} from 'react-bootstrap'
import {AuthProvider, useAuth} from '../components/AuthProvider'
//import imgUrl from './tulip.webp'


function About() {

    const {currentUser}=useAuth();
    let [name, setname] = useState('');
    const [imgUp, setImg]=useState(null);
    var [description, setNewDesc]=useState('')
    var [desc, setDesc]=useState('')
    const [load, setLoad]=useState(false)
    const[progress,setProg]=useState(0)
    var urls2=''
    const [files, setFiles] = useState();
    
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

    const handleChange = (event) => {
        //var test1=event.target.value.reverse().split('\\')[0].reverse()
        setname('background.png');
        setImg(event.target.files[0]);

        console.log(name, 'is uploading', event.target.files[0].name)
        console.log(imgUp);
      }
      
      function upload(){
        console.log('uploading...')
        const uploadTask=store.ref(`bg/${name}`).put(imgUp);
        uploadTask.on(
            "state_changed",
            snapshot=>{
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                )
                setProg(progress);
            },
            error=>{
                console.log(error)
            },
            ()=>{
                store
                .ref("bg")
                .child(name)
                .getDownloadURL()
                .then(url=>{
                    console.log(url)
                },setLoad(false) );
            }
        )
    }

    useEffect(()=>{
        const todoRef=db.ref('description').child('description');
        todoRef.on('value', (snapshot)=>{
            setDesc(snapshot.val());
            console.log(snapshot.val());
            setLoad(true)
        })
        
    }, [])
    useEffect(() => {
        const fetchImages = async () => {
          let result = await store.ref().child('bg').listAll();
          let urlPromises = result.items.map((imageRef) =>
            imageRef.getDownloadURL()
          );
            
          return Promise.all(urlPromises);
        };
    
        const loadImages = async () => {
          const urls = await fetchImages();
         urls2=urls
          setFiles(urls);
          setLoad(true)
        };
        loadImages();
    }, [load]);

    var allImgs='';
    if(load){
        
        allImgs=files
   
    }
    else{
        allImgs=''
    }

    var divStyle = {
        backgroundImage: 'url(' + allImgs + ')',
        
      };
    

    return (
        <div className='about'>
            <div className='about-bg' style={divStyle}>
            <h1>Kate Geer</h1>
            </div>
            {currentUser&&
            <div>
                <p>Logged in, upload a file.</p>
            <input onChange={handleChange} type='file'>
                </input>
            <Button onClick={upload}>Upload</Button>
            </div>}
           
            {load &&<p>{desc}</p>}
            {!load && <p>loading...</p>}
           {currentUser &&<div className='text-butt'> <textarea className='edit-box' type='text' onChange={handleOnChange} value={description} />
            <Button onClick={createDesc}>Add desc</Button>
            </div>}
           
            
        </div>
    )
}

export default About
