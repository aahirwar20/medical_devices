import file_icon from './icons/4_file.png'
import download_icon from './icons/4_download.png'
import './index.css'

function Output (){
 return(
    <>
      <div className='File_section'>
          <div className='left'>
            <img src={file_icon} className = 'file_icon' alt='file'/>
          </div>
          <dic className ='right'>
            <img src={download_icon} className='download_icon' alt='download'/>
             <div>Device.pdf</div>
          </dic>
      </div>
      <div className='display_section'></div>
    </>
 )
}

export default Output