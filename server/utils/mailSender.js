const nodemailer=require("nodemailer");
const mailSender=async(email,title,body)=>{
    try{
           let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
              },
              secure: false
           })
           let info=await transporter.sendMail({
            from:'StudyNotion || DasvirHelp--by Singh',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
           })
           console.log(info);
           return info;
    }
    catch(error){
        console.log(error.message);
        //return resizeBy.status(500).json({
           // success:false,
         //   message:error.message,
       // })
    }
};
module.exports=mailSender;