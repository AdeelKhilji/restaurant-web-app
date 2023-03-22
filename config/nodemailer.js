import nodemailer from 'nodemailer';

try{
  const email = process.env.EMAIL;
}
catch(e)
{
  console.log("ERROR: " + e);
}

try{
  const pass = process.env.EMAIL_PASS;
}
catch(e)
{
  console.log("ERROR: " + e);
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth:{
      user: email, pass
    },
    tls: {
      rejectUnauthorized: false
    }
});

export const mailOptions = {
  from:email,
  to:email,
};