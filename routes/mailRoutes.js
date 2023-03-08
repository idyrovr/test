import {Router} from 'express';
import nodemailer from 'nodemailer'

const router = Router();


router.post('/kkargo', async (req, res) => {
    try {
    const {mailTo, ref, subject, text} = req.body
    
    let transporter = await nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        secure:false,
        auth: {
            user: 'kcargoreef@gmail.com',
            pass: 'jaffdhaodfnzihki'
        },
    })

    let info = await transporter.sendMail({
        from: '"Dispatch Kivekas" <kcargoreef@gmail.com>', // sender address
            to: mailTo, // list of receivers
            subject: subject, // Subject line
            text: `${ref}\n\n ${text}`, // plain text body
    })

    console.log("Message sent: %s", info.messageId);
    res.status(200).json(info)
} catch (error){
    res.status(405).json({error})
}
})
router.post('/eurokam', async (req, res) => {
    try {
    const {mailTo, ref, subject, text} = req.body
    
    let transporter = await nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        secure:false,
        auth: {
            user: 'global@eurokamcorp.com',
            pass: 'optubbfyrwysdcob'
        },
    })

    let info = await transporter.sendMail({
        from: '"Dispatch EUROKAM" <kcargoreef@gmail.com>', // sender address
            to: mailTo, // list of receivers
            subject: subject, // Subject line
            text: `${ref}\n\n ${text}`, // plain text body
    })

    console.log("Message sent: %s", info.messageId);
    res.status(200).json(info)
} catch (error){
    res.status(405).json({error})
}
})


router.post('/wta', async (req, res) => {
    try {
    const {mailTo, ref, subject, text} = req.body
    
    let transporter = await nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        secure:false,
        auth: {
            user: 'relay@wtaglobalinc.com',
            pass: 'oemsrtzdnyhjphhr'
        },
    })

    let info = await transporter.sendMail({
        from: '"Dispatch WTA" <relay@wtaglobalinc.com>', // sender address
            to: mailTo, // list of receivers
            subject: subject, // Subject line
            text: `${ref}\n\n ${text}`, // plain text body
    })

    console.log("Message sent: %s", info.messageId);
    res.status(200).json(info)
} catch (error){
    res.status(405).json({error})
}
})




export default router;