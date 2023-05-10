import React, { useEffect, useState } from "react";
import "./styles/contacts.css"
import ModalWindoow from "./ModalWindoow";

function Contacts() {
    const URL = "https://jsonplaceholder.typicode.com/users"
    const [contacts, setContacts] = useState([])
    const [isOpenModalOpen, setIsModalOpen] = useState(false);

    const idUser = () => {
       return contacts.length + 1
    }

    useEffect(()=>{
            fetch(`${URL}`)
            .then(res => res.json())
            .then(contact => setContacts(contact))
    }, [])



    const deleteUser = (id) =>{
        fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(() => {setContacts(contacts.filter((el) => el.id !== id))})  

    }

     const newContact = () => {
        setIsModalOpen(!isOpenModalOpen)
    }

    const addContact = (inputVal) =>{
        fetch(`${URL}`, {
            method: "POST",
            body: JSON.stringify({
                ...inputVal, 
            })
        })
        .then((response) => response.json())
        .then(() => setContacts([
            ...contacts,
             inputVal
    ]));
    }
 
    return(
        <div className="container">
            <div className="contacks">
            <div className="username wrapper" >
                <ul className="list-contacts">
                    <h2 className="h2">Ім'я</h2> 
                    {contacts.map(contact => (<p key={contact.id} > {contact.name}</p>))}      
                </ul>
            </div>
            <div className="user-last-name wrapper">
                <ul className="list-contacts">
                    <h2 className="h2">Прізвище</h2>
                    {contacts.map(contact => (<p key={contact.id} className="contact"> {contact.username}</p>))}
                </ul>
            </div>
            <div className="phones wrapper">
                <ul className="list-contacts">
                <h2 className="h2">Телефон</h2>
                {contacts.map(contact => (<p key={contact.id} className="contact"> {contact.phone}</p>))}
                </ul>
            </div>
            <div className="wrapper">
                <ul className="list-contacts">
                    <h2 className="h2">Налаштування</h2>
                    {contacts.map(contact => (<p key={contact.id} className="contact"><button className="btn-delete" onClick={()=> {deleteUser(contact.id)}}>Видалити</button></p>))}
                </ul>
            </div>
            </div>
            <div className="add-contact">
                <button onClick={newContact} className="btn-add-contacts">Додати контакт</button>
            </div>
            {isOpenModalOpen && (<ModalWindoow newContact ={newContact} addContact={addContact} idUser = {idUser}/>)}
        </div>
    )
}

export default Contacts