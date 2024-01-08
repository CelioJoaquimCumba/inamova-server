import nodemailer from "nodemailer"

const  transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});


export const sendMail = ( to: string, subject: string, text: string) => {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        throw new Error(error.message);
      } 
    });
}