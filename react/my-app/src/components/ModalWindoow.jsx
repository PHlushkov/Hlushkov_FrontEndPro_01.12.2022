import React, { useState,  } from "react";
import "./styles/modalWin.css"


function ModalWindoow(props) {

    const [inputVal, setInputVal] = useState({
        id: props.idUser(),
        name:"",
        username: "",
        phone: "",
    })


    const handleInput = (e) =>{
        setInputVal({ 
            ...inputVal, 
            [e.target.name]: e.target.value,
        })}


    const clearFormFields = (e) => {
        e.preventDefault()
        setInputVal({name: "",username: "", phone: ""})
        props.newContact()
    }

    const handleSbm = (e) => {
            e.preventDefault()
            props.newContact()
            props.addContact(inputVal)

    }

    return(
        <div>
            <form action="" onSubmit={handleSbm} >
                <div className="form">
                    <input className="input-form" type="text" name="name" placeholder="Ім'я" onChange={handleInput} value={inputVal.userName} required/>
                    <input className="input-form" type="text" name="username" placeholder="Призвіще" onChange={handleInput}  value={inputVal.surname} required />
                    <input className="input-form" type="text" name="phone" placeholder="Телефон" onChange={handleInput}  value={inputVal.phone} required/>
                </div>
                <div className="btn-form">
                    <button className="setting-btn" type="submit" >Зберегти</button>
                    <button className="setting-btn" onClick={clearFormFields}>Скасувати</button>
                </div>
            </form>
        </div>
    )
}

export default ModalWindoow;
