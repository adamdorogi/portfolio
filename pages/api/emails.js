import axios from 'axios';
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { name, email, message, token } = JSON.parse(req.body);

        const recaptchaResult = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}&remoteip=${req.ip}`)

        if (!recaptchaResult.data.success) {
            throw Error('Invalid captcha')
        }

        await transport.sendMail({
            to: process.env.GMAIL_EMAIL,
            subject: `Message from ${name} (${email})`,
            text: message
        })

        res.status(200).json({ success: "Email sent" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
}
