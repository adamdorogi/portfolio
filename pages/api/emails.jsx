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
        const { name, email, message } = JSON.parse(req.body);

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
