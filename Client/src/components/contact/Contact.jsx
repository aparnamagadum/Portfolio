import React, { useState } from 'react'
import axios from "axios"
import Input from './Input'
import "./Contact.css"
import Button from '../projectSection/button'
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'
function Contact() {
  const [name , setName]=useState("");
  const [email , setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [text,setText]=useState("");
  const [msg , setMsg]=useState(false);
 async function handler(e){
  e.preventDefault();
  try{
    await axios.post("https://portfolio-backend-zr3g.onrender.com/sendMail" , {name , email , phone , text});
    //console.log("email sent");
    setMsg(true);
  }
  catch(err){
    console.log(err); 
  }
  }
  return (
    <div className='contact-container'>
    <Nav />    
    <form className='contact' onSubmit={handler}>
      <br />
      <h1>Contact</h1>
     <Input type="text" placeholder="enter your full name" onChange={(e)=>{setName(e.target.value)}}/>
     <Input type="email" placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
     <Input type="number" placeholder="enter your phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
     <textarea cols="40" rows="5" placeholder="add your text" onChange={(e)=>{setText(e.target.value)}}/>
     <Button title="Send Email" type="submit"/>
     <br />
     {msg && alert("Message sent successfully")}
    </form>
    <Footer/> 
    </div>
  )
}

export default Contact
