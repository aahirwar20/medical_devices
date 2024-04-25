import '../button.css'
import './index.css'
import upload_icon from './icons/2_upload.png'
import { useRef } from 'react'

function File (props){
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile.name);
        const formData = new FormData();
        formData.append('file', selectedFile);
    };


    return(
       <>
        <div className="upload" onClick={handleClick}>
           <div>
              <img src={upload_icon} className='upload_icon' alt = "uplaod"/>
           </div>
           <div className='browse'>Browse</div>
           <div className='Drop_text'>Drop a file here</div>
           <div className='Info_text'>*File supported .pdf, .csv and .exl</div>
           <input ref={fileInputRef} onChange={handleChange} type="file" style={{ display: 'none' }} />
       </div>
       <div className="button_section">
            <div className='switch_input' onClick={()=>{props.updateMannual(true)}}>
               Enter Mannual
            </div>
            <div className='button_submit' onClick={()=>{props.updateOutput(true)}}>Submit</div>
       </div>
       </>
    )
   }
   
   export default File