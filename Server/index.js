import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
import cors from 'cors';
import path from "path";
dotenv.config();
const PORT=process.env.port || 4000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//console.log(process.env.My_USERNAME);
//console.log(process.env.My_PASSWORD);
app.use(express.static(path.join(__dirname, 'Client/build')));

// Handle React routing, return all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/Client/build/index.html'));
});
app.post('/sendMail' ,(req,res)=>{
    const {name , email , phone ,text}=req.body;
    const transporter=nodemailer.createTransport({
       service:"gmail",
       auth:{
        user:process.env.My_USERNAME,
        pass:process.env.My_PASSWORD
       }
    });
let message={
    from:process.env.My_USERNAME,
    to:process.env.My_USERNAME,
    subject: `Contact Message from ${name}`,  // Email subject
    html: `
    <html>
      <body>
        <p>Hello,</p>
        <p>You have received a new contact message.</p>
        <p><strong>From:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${text}</p>
        <p>Best regards,<br>Your Website</p>
      </body>
    </html>`
}
transporter.sendMail(message)
.then((info)=>console.log("email sent"))
.catch((err)=>console.log(err)
)
res.send(message)
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));