import nodeMailer from "nodemailer";
import mailConfig from "../config/mail";

export default nodeMailer.createTransport(mailConfig);
