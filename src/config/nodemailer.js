import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: 'Bridgetown Bluegrass',
  to: ['maxskewes@gmail.com, bridgetownbluegrassfest@gmail.com'],
};
