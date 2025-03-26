import { useState } from "react";

const AddContact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handleChange=()=>{
        console.log(name);
        console.log(email);
    }

    return(
        <>
              <h2 align='center'>Add user</h2>
        <div class='outer-form'>
        <form>
            <div class='form-div'>
                <div class='inside'>
            <label class='form-label'>Name :</label>
            <input type="text" name="name" class='input-box' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div class='inside'>
            <label class='form-label' >Email :</label>
            <input type="text" name="email" class='input-box' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div class='button-div'>
            <button onClick={handleChange}>Add</button>
            </div>
            </div>
        </form>
        </div>
        </>
    )
}
export default AddContact;