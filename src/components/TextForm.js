import React, {useState} from 'react'
import "../styiling/textForm.css"
import "../components/Navbar"


export default function TextForm(props) {
 
  const [red, setred] = useState(
    {
    color:"black"
     }
    
    )
    const [whitey, setwhitey] = useState(
      {
      color:"white"
       }
      )
  
  const [text,setText] = useState('');
  const [showpreview, setshowpreview] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('preview');
  
  const [copied, setCopied] = useState(false);
  //this satte changes the background color of prview
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  //yeh tb use hoga jb aap do words k bich me ek se zyada baar space daaloge ..it will automatically remove the extra spaces .and also it would not count the last space 
  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/); 
    setText(newtext.join(" "))
  }
  const handleonChange = (e)=>{
    console.log("onChange")
    setText(e.target.value)
    
  }
  const handleDownClick =()=>{
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const handlePreview = ()=>{
    setshowpreview(true);
    
    
  }
  const handlered =()=>{
    setBackgroundColor('previewred');
    setred({
      color: 'red',
    });
    setwhitey({
      color:"red"
    })
    
  }
  const handlepurple =()=>{
    setBackgroundColor('previewpurple');
    setred({
      color: 'purple',
    });
    setwhitey({
      color:"purple"
    })
  }
  const handlegreen = ()=>{
    setBackgroundColor('previewgreen')
    setred({
      color: 'green',
    });
    setwhitey({
      color: "green"
    })
  }
   
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
      })
  };
  


  return (
    <div className='cont' style={props.mystyle} >
   
    <div className='heading'>
    <h1 style={props.mystyle} >{props.heading}</h1>
    <button className='copy-text' onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy Text'}
      </button>
    </div>
    
       <div className="mb-3" style={props.mystyle} >
      
       <textarea style={props.textstyle}  className="formcontrol" value={text} onChange={handleonChange} id='myBox' rows="8"  placeholder='enter your text here'>  </textarea>
       <div className='btnss'>
       <button disabled = {text.length === 0} className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
       <button disabled = {text.length === 0} className=' btn btn-primary' onClick={handleDownClick}>convert to lowercase</button>
       <button disabled = {text.length === 0} className=' btn btn-primary' onClick={handleExtraSpaces}>Remove Extra spaces </button>
       <button disabled = {text.length === 0} className=' btn btn-primary' onClick={handlePreview} >preview</button>
      
       <div className='redbtn' onClick={handlered}></div>
       <div className='purplebtn' onClick={handlepurple}></div>
       <div className='greenbtn' onClick={handlegreen}></div>
       </div>
       <div className='details' style={props.mystyle}>
       <p>There are {text.length} Characters </p>
       <p>There are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words</p>
       <p> It takes {0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
       <div>
        <p className='preview-section' style={props.mystyle} >Preview</p>
       </div>
       </div>
        <div className={backgroundColor} style={props.mystyle.color ==="black"?red:whitey}   >{!showpreview?"Nothing to preview ":<p>{text}</p>} </div>
  </div>
  </div>
  )
}
