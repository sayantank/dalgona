require('dotenv').config()
const nodemailer = require('nodemailer')

const WEBSITE = "Dalgona Website"
const USER = process.env.user
const PASSWORD = process.env.password
const RECIPIENT = process.env.recipient

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: USER,
      pass: PASSWORD,
    },
    secure: true,
})


const sendMail = async function (req, res) {

    const { name, email, phone, message } = req.body 
    const mailData = {
        from: `${WEBSITE} <${USER}>`,
        to: RECIPIENT,
        subject: `Message From ${name || WEBSITE}`,
        html: `<div>Name: ${name} <br/><br/>Email: ${email} <br/><br/>Phone: ${phone} <br/><br/> Message: ${message || "None"} <br/><br/></div>`
    }

    transporter.sendMail(mailData, (err, respone) => {
        if(err){
            console.log("error in sending mail.")
            return res.status(500).send({ status: false })
        }else{
            console.log("successfully sent mail.")
            return res.status(200).send({ status: true })
        }
    })
}

export default sendMail
