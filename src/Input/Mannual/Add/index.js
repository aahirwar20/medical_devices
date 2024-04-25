import { useState } from 'react'
import close_img from '../icons/3_close.png'


function Add(props){
    const [inputDevice, setInputDevice] = useState({name:'', use:''})

    const handleSave = () =>{
        props.saveDevice({name: inputDevice.name, use: inputDevice.use})
        setInputDevice({name:'', use:''})
    }
    return (
       <>
           <div onClick={props.handleClose}>
            <img src={close_img} className="close" alt='close'/>  
          </div>
          <div className='add_row_top'>Add New Device</div>
          <div className='add_row'>
            <input placeholder= {`Device No - ${props.devicesLength+1}`} disabled/>
          </div>
          <div className='add_row'>
            <input 
               placeholder='Device Name'
               value={inputDevice.name}
               onChange={(event)=>{
                setInputDevice((val)=>{
                    return {...val, name :event.target.value}
                })
               }}
            />
          </div>
          <div className='add_row'>
            <textarea 
               placeholder='Intented Uses'
               value={inputDevice.use}
               onChange={(event)=>{
                setInputDevice((val)=>{
                    return {...val, use :event.target.value}
                })
               }}
            />
          </div>
          <div className='add_row'> 
           <div className='save' onClick={handleSave}>Save</div>
          </div>
       </>
    )
}

export default Add