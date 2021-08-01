import mail from "../services/mail";

export default {
  key: "registrationMail",

  async handle({ data }) {
    const { user } = data;

    mail.sendMail({
      from: "Queue Test <queueteste@email.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${user.name}, seja bem-vindo!`,
    });
  },
};
