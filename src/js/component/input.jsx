import React, { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [item, setItem] = useState([])
    const validateInput = () => {
        if(inputValue === "") alert("The input cannot be empty");
        else (setItem(item.concat(inputValue)));
    }
   const validate = (value) =>{
if (value === ' ' ){alert("The input its not correct")} else (setInputValue(value))
   }
   const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
        validateInput()
        setInputValue("")
    } ;}
    
    const validateTask = (item)=>{
        if(item == 0){return <p>No items yet</p>}
        else return <p>{item} items left</p>;}
    
    return (
        <div className="back">

                <h1 className="text-center">To Do List</h1>
                <ul>
                    <li >
                        <input type="text" onChange={e => validate(e.target.value)} value={inputValue} placeholder="Write your new task"
                            onKeyDown= {handleOnKeyDown}
                            />
                            
                    </li>
                    
                    {item.map((listitem, index) => (
                        <li className="listInput d-flex justify-content-between align-items-center ">
                      {listitem}{" "}

                    <i class="fa-solid fa-trash trash" onClick={()=> setItem(item.filter(
                        (x,currentIndex)=>index != currentIndex))}></i>
                     </li>
                        
                    ))}
                </ul>
                <div className="task">
                <p>{validateTask(item.length)}</p>
            </div>
             
            </div>
            

            );
};

            export default Input;
