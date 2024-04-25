import { useState } from "react"
import Mannual from "./Mannual/index.js"
import File from "./File/index.js"

function Input (props){
    const [mannual, setMannual] = useState(true)
    const updateMannual = (value)=>{
          setMannual(value)
    }
    return(
       <div>
        { mannual
            ? <Mannual updateMannual = {updateMannual} updateOutput ={props.updateOutput}/>
            : <File updateMannual = {updateMannual} updateOutput ={props.updateOutput}/>
        }
       </div>
    )
}
   
   export default Input