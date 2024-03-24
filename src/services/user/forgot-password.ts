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
			throw BadRequestError("User not found");
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
		// const resetLink = `exp://${interfaceIP}:8081/reset-password/${resetToken}`
		const mailOptions = {
			to: email,
			subject: "Reset your password",
			text: "To reset your password, click here:",
			html: `
			<html lang="en">
			<body>
				<div 
					style="color: #134e4a;
					margin: auto;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: fit-content;
					/* background-color: #134e4a; */
					border: 1px solid #134e4a;
					padding: 2rem;
					border-radius: 2rem;"
				>
					<h1 style="text-align: center;"Recover password</h1>
					<p>
						Hi there, 
						<br />
						You requested to reset your password, for that
						press the button below
					</p>
					<a href="http://${interfaceIP}:8081/--/inamova/ChangePassword?email=${email}&token=${resetToken}">
					<input 
						type="button" 
						value="Recover password" 
						style="padding: 1rem;
						border-radius: 1rem;
						/* color: #042f2e; */
						color: white;
						background-color: #042f2e;
						border: 0;" onclick="alert("holla")"
					/>
					</a>
		
					<p>In case you didnt ask for this just ignore this email</p>
					<p>Inamova 🚗</p>
				</div>
			</body>
		</html>`,
		};
		// console.log(mailOptions.html)
		await sendMail(mailOptions);
		// const response = "Email was sent to "+user.email
	} catch (error) {
		throw InternalServerError(error.message);
	} finally {
		await prisma.$disconnect();
	}
};
