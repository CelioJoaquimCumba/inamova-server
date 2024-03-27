import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../../errors/BadRequest.js";
import { generateResetToken } from "../../utils/generateResetToken.js";
import { sendMail } from "../../utils/sendMail.js";
import { InternalServerError } from "../../errors/InternalServer.js";
import { getCurrentInterface } from "./interfaceIP.js";

const prisma = new PrismaClient();

export const forgotPasswordService = async (email: string): Promise<void> => {
    try {
        await prisma.$connect();
        const user = await prisma.user.findFirst({ where: { email } });
        if (!user) {
            throw BadRequestError("Usuário não encontrado");
        }
        const resetToken = generateResetToken();
        const resetExpiry = new Date();
        resetExpiry.setHours(resetExpiry.getHours() + 1);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                resetToken,
                resetExpiry,
            },
        });

        const interfaceIP = getCurrentInterface();
        const resetLink = `exp://${interfaceIP}:8081/reset-password/${resetToken}`;
         const mailOptions = {
            to: email,
            subject: "Redefina sua senha",
            text: "Para redefinir sua senha, clique aqui:",
            html: `
            <html lang="pt-BR">
            <body>
                <div 
                    style="color: #134e4a;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: fit-content;
                    border: 1px solid #134e4a;
                    padding: 2rem;
                    border-radius: 2rem;"
                >
                    <h1 style="text-align: center;">Recuperar senha</h1>
                    <p>
                        Olá,
                        <br />
                        Você solicitou a redefinição da sua senha. Para isso,
                        pressione o botão abaixo para copiar o token de redefinição.
                    </p>
                    <h1>${resetToken}</h1>
                    <button 
                        id="copyTokenButton" 
                        style="padding: 1rem;
                        border-radius: 1rem;
                        color: white;
                        background-color: #042f2e;
                        border: 0;"
                    >
                        Copiar Token
                    </button>
                    <p>Se você não solicitou isso, por favor, ignore este email.</p>
                    <p>Inamova 🚗</p>
                </div>
                <script>
                    const copyTokenButton = document.getElementById('copyTokenButton');
                    copyTokenButton.addEventListener('click', () => {
                        const resetToken = document.querySelector('h1').innerText;
                        navigator.clipboard.writeText(resetToken);
                        alert('Token copiado para a área de transferência!');
                    });
                </script>
            </body>
        </html>`,
        };

        await sendMail(mailOptions);
    } catch (error) {
        throw InternalServerError(error.message);
    } finally {
        await prisma.$disconnect();
    }
};
