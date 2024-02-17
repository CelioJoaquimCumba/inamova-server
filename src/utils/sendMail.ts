import nodemailer from "nodemailer"

const  transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});


export const sendMail = async (mailOptions) => {
  try {
      await transporter.sendMail(mailOptions);
  } catch (error) {
      throw new Error(error.message);
  }
};
