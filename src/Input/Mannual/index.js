import { useState } from 'react'
import './index.css'
import '../button.css'
import './Add.css'
import delete_img from './icons/3_delete.png'
import edit_img from './icons/3_edit.png'
import download_img from './icons/3_download.png'
import add_img from './icons/3_add.png'
import file_img from './icons/3_file.png'
import exportToExcel from './export.js'
import Add from './Add/index.js'

function Mannual (props){
    const [useAdd, setUseAdd] = useState(false)
    const [devices, setDevices] = useState([])

    const saveDevice=(data)=>{
      setDevices([...devices, data])
      setUseAdd(false)
    }

    const handleDelete = (index) => {
        const newArray = devices.filter((item, i) => i !== index);
        setDevices(newArray);
    };

    const handleExport = () => {
      exportToExcel(devices, 'Device'); // Customize file name
    };

    const handleClose =()=>{ setUseAdd(false)}

    const handleSubmit=()=>{

    }
    
    return(
       <>
        <div className="input_section">
            <table>
              <tr > 
                  <td className='border_remove'></td>
                  <td className='border_remove'></td>
                  <td className='border_remove'></td>
                  <td className='border_remove'>
                    <div onClick={handleExport}> <img src={download_img}  className="edit" alt='download'></img></div>
                    <div onClick={()=>{setUseAdd(true) }}><img src={add_img} className="delete" alt='add'></img> </div>
                  </td>
              </tr>
              <tr>
                  <th className='no'>S.No.</th>
                  <th className='name'>Device Name</th>
                  <th className='uses'>Intended Uses</th>
                  <th className='button'></th>
              </tr>
              { devices.map((data, index)=>
                <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.name}</td>
                      <td>{data.use}</td>
                      <td>
                        <div><img src={edit_img}  className="edit" alt='edit'></img></div>
                        <div onClick={()=>{handleDelete(index)}}> <img src={delete_img} className="delete" alt='delete'></img></div>
                      </td>
                  </tr>
              ) }
            </table>   
        </div>

        <div className="button_section">
            <div className='switch_input' onClick={()=>{props.updateMannual(false)}}>
                <img src={file_img} className="file" alt='file'/>
                Upload File
            </div>
            <div 
              className='button_submit' 
              onClick={()=>{
                  props.updateOutput(true)
                  handleSubmit()
                  }}>Submit
            </div>
        </div>

        <div className='add_section' style={{display :useAdd?"block":"none"}}>
          <Add
            handleClose = {handleClose}
            saveDevice = {saveDevice}
            devicesLength = {devices.length}
            />
        </div>
       </>
    )
   }
   
   export default Mannual