// seeds.ts

type Question = {
	content: string;
	image: string;
	explanation: string;
	options: { content: string; isCorrect: boolean }[];
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Create a quiz object
	const drivingRulesQuiz = {
		title: "Exame completo",
		description:
			"O teste apresenta questao que sao avaliadas nos exames teoricos de Mozambique",
		thumbnail: "https://i.ibb.co/rM2dnVX/online-test-rafiki.png",
		passingPercentage: 72,
	};

	// Create an array of question objects with options
	const drivingTestQuestions1: Question[] = [
		
		{
			content: "Deve utilizar-se as luzes de perigo?",
			image:
				"https://i.ibb.co/p2wfyrJ/hd-3221660229771b54d03c281c031a0944-65d5b72be2459.png",
			options: [
				{ content: "Ao estacionar em segunda fila", isCorrect: false },
				{
					content:
						"Para avisar os outros utentes que o veículo vai fazer marcha atrás",
					isCorrect: false,
				},
				{
					content:
						"Em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via",
					isCorrect: true,
				},
				{
					content: "Apenas quando o veículo esteja a ser rebocado",
					isCorrect: false,
				},
			],
			explanation:
				"As luzes de perigo devem ser utilizadas em caso de imobilização por acidente ou avaria, se originar perigo para os demais utentes da via. Elas alertam os outros condutores sobre uma situação de emergência.",
		},
		{
			content: "As luzes devem ser usadas, durante o nevoeiro (cacimba):",
			image: "https://i.ibb.co/qnqFkZs/image-52-new.png",
			explanation:
				"De dia ou de noite. Em condições de nevoeiro, as luzes devem ser usadas a qualquer hora do dia ou da noite para melhorar a visibilidade.",
			options: [
				{ content: "De dia ou de noite.", isCorrect: true },
				{ content: "Só durante a noite.", isCorrect: false },
				{
					content: "Durante o dia, se o nevoeiro for muito denso.",
					isCorrect: false,
				},
				{
					content: "De dia e de noite, principalmente as luzes de estrada.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O que indica o sinal luminoso?",
			image: "https://i.ibb.co/C75WSBW/image-60-new.png",
			explanation:
				"Acesso ou passagem interdito. Um sinal luminoso vermelho indica que a passagem ou acesso está proibido.",
			options: [
				{ content: "Acesso ou passagem autorizado.", isCorrect: false },
				{ content: "Acesso ou passagem condicionado.", isCorrect: false },
				{ content: "Acesso ou passagem interdito.", isCorrect: true },
			],
		},
	];
}
