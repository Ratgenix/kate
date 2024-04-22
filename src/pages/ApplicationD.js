import React, {useState, useRef, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {db} from './Firebase.js'
import './pages.css'
import {store} from './Firebase.js'
import { getStorage, ref, deleteObject, getMetadata } from "firebase/storage";
import {AuthProvider, useAuth} from '../components/AuthProvider'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ApplicationD = () => {
  const {currentUser}=useAuth();
  var [loading, setLoad]=useState(false)
  let [name, setname] = useState('');
  const [imgUp, setImg]=useState(null);
  const[progress,setProg]=useState(0)
  const [files, setFiles] = useState();
  const [pop, setPop]=useState(false)
  const [pop2, setPop2]=useState(false)
  const [descPop, setDesc]=useState(false)
  var [clicked, SetClicked]=useState(0)
  var urls2=''
  var descRef;
  var [descriptions, setDescs] = useState({});
  //const fileInputRef=useRef();

  useEffect(() => {
      Aos.init({
          duration:1500,
          easing: 'ease-in-out-cubic'
      });
      
  }, []);
  useEffect(() => {
    fetchDesc()
      window.scrollTo(0, 0)
    }, [])

  useEffect(() => {
      const fetchImages = async () => {
        let result = await store.ref().child('appD').listAll();
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
  }, [loading]);
  
  const handleChange = (event) => {
      //var test1=event.target.value.reverse().split('\\')[0].reverse()
      setname(event.target.files[0].name);
      setImg(event.target.files[0]);

      console.log(name, 'is uploading', event.target.files[0].name)
      console.log(imgUp);
    }
    
    function upload(){
      console.log('uploading...')
      actDescBox()
    //   const uploadTask=store.ref(`appD/${name}`).put(imgUp);
    //   uploadTask.on(
    //       "state_changed",
    //       snapshot=>{
    //           const progress=Math.round(
    //               (snapshot.bytesTransferred/snapshot.totalBytes)*100
    //           )
    //           setProg(progress);
    //       },
    //       error=>{
    //           console.log(error)
    //       },
    //       ()=>{
    //           store
    //           .ref("appD")
    //           .child(name)
    //           .getDownloadURL()
    //           .then(url=>{
    //               console.log(url)
    //           },setLoad(false) );
    //       }
    //   )
  }

  function saveDesc(){
    var desc = document.getElementById('desc').value;
    setDesc(!descPop)
    console.log(desc)

    descRef = db.ref('appD/');
    descRef.set({
         desc
    })
    alert('Saved')
  }
  function fetchDesc(){
    descRef = db.ref('/appD');
    descRef.on("value", snapshot => {
      const data = snapshot.val()
      // console.log(data, 'data from db')
      setDescs(data);
      console.log(descriptions, 'data from db')
      console.log(Object.keys(data), 'keys')
      })
  }

  function Hi(props){
      //console.log(props2, "prop2")
      // let newVal=props.fName
      let newVal = props.fName.replace(/%20/g, ' ')
      let ind=props.ind
      
      console.log(clicked)
      console.log(newVal, "index")
     return(props.trigger && clicked ===ind)?(
      <div className='delete-back' >
          <div className='delete-box'>
             
          <p>Are you sure you want to delete {newVal}?</p>
         <span> <Button onClick={()=>delItem(newVal)}>Yes</Button> <Button className='butt2' onClick={()=>setPop(!pop)}>No</Button> </span>
          <p></p>
          </div>
          </div>
     ):"";
  }
  function Zoom(props){
      //console.log(props2, "prop2")
      let newName1;

      newName1 = props.fName.replace(/%20/g, ' ')
      let ind=props.ind
      console.log(clicked)
      
      //console.log(newVal, "index")
     return(props.trigger && clicked ===ind)?(
      <div className='zoom-back' onClick={()=>setPop2(!pop2)}>
          
          <div className='zoom-box'>
         <a href={props.fName2}> <img  title={newName1.split('.')[0]} src={props.portF} height='auto'/></a>
         <span> <Button onClick={()=>setPop2(!pop2)}>close</Button> </span>
          <p></p>
          </div>
          </div>
     ):"";
  }

  function DescBox(props){
    console.log('clicked')
    return(props.trigger )?(
        <div className='delete-back' >
            <div className='delete-box'>
            <input placeholder="Description" type ="text" id="desc"/>
            <span> <Button onClick={saveDesc}>close</Button> </span>
            </div>
            </div>
       ):"";
  }

  function test1(idTag){
      SetClicked(idTag)
      console.log(idTag)
      setPop(!pop)
  }

  function test2(idTag){
      SetClicked(idTag)
      console.log(idTag)
      setPop2(!pop2)
  }
  function actDescBox(){
    SetClicked(3)
    console.log('opening desc...')
    setDesc(!descPop)
  }

  var allImgs='';
  if(loading){
      
      allImgs=
  files.map((file, index)=>
  <li key={index} >
      {console.log(descriptions[file.split('%2F')[1].split('?')[0].split('.')[0].replace(/%20/g, ' ')], 'description') }
      <span className='img_p'><img onClick={()=>test2(index)} src={file} height='auto' width='250px'/>
      {currentUser && <p title='delete?'className='del' 
      onClick={()=>test1(index)}>X</p>}</span>
      <h2>{file.split('%2F')[1].split('?')[0].split('.')[0].replace(/%20/g, ' ')}</h2>
      <p>{descriptions[file.split('%2F')[1].split('?')[0].split('.')[0].replace(/%20/g, ' ')]}</p>
      <Hi ind={index} trigger={pop} fName={file.split('%2F')[1].split('?')[0]}/>
      <Zoom ind={index} trigger={pop2} portF={file} fName={file.split('%2F')[1].split('?')[0]} fName2={file}/>
  </li>
  );
  }
  else{
      allImgs=''
  }
// Delete the file
function delItem(imageName){

let newName1;

newName1 = imageName.replace(/%20/g, ' ')
console.log(newName1, 'imageName')

let newName="char/"+newName1  //imageName

deleteObject(ref(store, newName)).then(() => {
setLoad(false)
setPop(false)
setFiles(urls2)

console.log("Deleted successfully!")
}).catch((error) => {
// Uh-oh, an error occurred!
console.log("oops!", error)
});
}

  return (
      <div className='def'>
           {currentUser&&<div>
          <h1 className='stick'>hi bb</h1>
          
          <progress value={progress} max="100"/>
          <br/>

         
          <div>
              <p>Logged in, upload a file.</p>
          <input onChange={handleChange} type='file'>
              </input>
          <Button onClick={upload}>Upload</Button>
          <DescBox trigger={descPop}/>
          </div></div>}
          <hr/>
          {/*files.map((file, index)=>
          <li key={index}>
              <img src={file}/>
          </li>)
          */}
          <div className='main-body'>
          <h1>Application Design</h1>
          <div className='imgs-div'>{loading && allImgs}</div>
          </div>
          {console.log(files)}
      </div>
  )
}

export default ApplicationD