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
		{
			content:
				"A luz de cruzamento (médios) destina-se para frente do veículo numa distância até a via",
			image: "https://i.ibb.co/qdSFjWM/image-4-new.jpg",
			options: [
				{ content: "30 metros - opção correta", isCorrect: true },
				{ content: "40 metros", isCorrect: false },
				{ content: "50 metros.", isCorrect: false },
				{ content: "60 metros.", isCorrect: false },
			],
			explanation:
				"A luz de cruzamento (médios) destina-se para frente do veículo numa distância até a via de aproximadamente 30 metros.",
		},
		{
			content:
				"O feixe luminoso emitido pelas luzes de cruzamento (médios), deve projetar-se no solo:",
			image: "https://i.ibb.co/3pqn2hs/image-40-new.jpg",
			options: [
				{
					content:
						"E iluminá-lo eficazmente, numa distância não superior a 30 metros. - opção correta",
					isCorrect: true,
				},
				{ content: "E no mínimo, iluminá-lo a 100 metros", isCorrect: false },
				{
					content:
						"E luminá-lo eficazmente, numa distância não superior a 50 metros.",
					isCorrect: false,
				},
			],
			explanation:
				"O feixe luminoso emitido pelas luzes de cruzamento deve iluminar eficazmente o solo, numa distância não superior a 30 metros.",
		},
		{
			content:
				"Ao travar, o que pode acontecer se os travões atuarem de forma desigual sobre as rodas do mesmo eixo?",
			image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
			explanation:
				"Se os travões atuarem de forma desigual sobre as rodas do mesmo eixo, o veículo pode alterar a sua trajetória. Isso destaca a importância de manter os sistemas de travagem em bom estado.",
			options: [
				{ content: "As rodas bloqueiam.", isCorrect: false },
				{ content: "O veículo altera a sua trajetória.", isCorrect: true },
				{ content: "A distância de paragem diminui.", isCorrect: false },
				{ content: "Melhora a estabilidade do veículo.", isCorrect: false },
			],
		},
		{
			content:
				"Para a iluminação da via, os condutores devem ligar as luzes de:",
			image: "https://i.ibb.co/s1vM1Fx/image-22-new.jpg",
			explanation:
				"Para a iluminação da via, os condutores devem ligar as luzes médias ou máximas. Isso melhora a visibilidade e a segurança, especialmente em condições de pouca luz.",
			options: [
				{ content: "Mínimos ou máximos.", isCorrect: true },
				{ content: "Mínimos ou médios.", isCorrect: false },
				{ content: "Médios ou máximos.", isCorrect: false },
				{ content: "Mínimos apenas.", isCorrect: false },
			],
		},
		{
			content:
				"O que devem fazer os condutores se o sinal luminoso desta interseção está avariado?",
			image: "https://i.ibb.co/41YsDMM/image-6-new.png",
			explanation:
				"Ceder a passagem aos condutores que se apresentem pela direita.",
			options: [
				{
					content:
						"Ceder a passagem a todos os condutores que se apresentem pela via transversal.",
					isCorrect: false,
				},
				{
					content:
						"Ceder a passagem aos condutores que se apresentem pela direita.",
					isCorrect: true,
				},
				{
					content:
						"Ceder a passagem aos condutores que se apresentem pela esquerda.",
					isCorrect: false,
				},
				{
					content: "Continuar a marcha, já que tenho prioridade de passagem.",
					isCorrect: false,
				},
			],
		},
	];
}
