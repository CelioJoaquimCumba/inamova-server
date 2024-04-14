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
			content:
				"Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:",
			image:
				"https://i.ibb.co/cFyq7Br/hd-4d73f54e76358e30d81a54e640da304c-65d5b8c5a8785.png",
			options: [
				{ content: "Pelo menos, 50 metros", isCorrect: true },
				{ content: "Pelo menos, 200 metros", isCorrect: false },
				{ content: "Pelo menos, 100 metros", isCorrect: false },
				{ content: "Pelo menos, 25 metros", isCorrect: false },
			],
			explanation:
				"Visibilidade reduzida ou insuficiente ocorre quando o condutor não pode avistar a faixa de rodagem em toda a sua largura numa extensão de pelo menos 50 metros. Isso pode ser devido a condições climáticas adversas, como nevoeiro intenso.",
		},
		{
			content:
				"Na condução noturna, os hábitos do condutor aumentam ou não a fadiga?",
			image: "https://i.ibb.co/dJDL7n1/image-5-new.png",
			explanation:
				"Sim, fatores como alimentação, seu tipo, quantidade e frequência.",
			options: [
				{
					content:
						"Fatores como alimentação, seu tipo, quantidade e frequência não acentuam a fadiga.",
					isCorrect: false,
				},
				{
					content:
						"Sim, fatores como alimentação, seu tipo, quantidade e frequência.",
					isCorrect: true,
				},
				{
					content: "Apenas a ingestão de bebidas alcoólicas acentuam a fadiga.",
					isCorrect: false,
				},
				{
					content: "Os hábitos do condutor não aumentam a fadiga.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O fato de conduzir de noite deve ter influência na velocidade a que segue?",
			image: "https://i.ibb.co/5rP5Xcs/image-21-new.png",
			explanation: "Sim",
			options: [
				{
					content: "Não, porque a utilização de luzes é obrigatória.",
					isCorrect: false,
				},
				{
					content: "Sim, mas apenas dentro das localidades.",
					isCorrect: false,
				},
				{ content: "Sim", isCorrect: true },
				{ content: "Não, se conheço bem a estrada.", isCorrect: false },
			],
		},
		{
			content:
				"Se estacionar o veículo na faixa de rodagem desde anoitecer até ao amanhecer, deve utilizar alguma luz?",
			image: "https://i.ibb.co/6RSJ7Q4/image-24-new.png",
			explanation:
				"Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.",
			options: [
				{
					content: "Não, mesmo que seja num local sem iluminação.",
					isCorrect: false,
				},
				{ content: "Sim, as de estrada (máximos)", isCorrect: false },
				{
					content:
						"Sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.",
					isCorrect: false,
				},
				{
					content:
						"Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.",
					isCorrect: true,
				},
			],
		},
		{
			content:
				"O condutor está sujeito ao aparecimento de fadiga quando circula com trânsito intenso?",
			image: "https://i.ibb.co/4RxtrKy/image-56-new.png",
			explanation:
				"Sim, porque é uma situação de trânsito monótona. O tráfego intenso pode criar uma situação monótona, aumentando a fadiga do condutor.",
			options: [
				{
					content: "Não está porque circula a velocidade reduzida.",
					isCorrect: false,
				},
				{
					content:
						"Não está porque nesta situação pode descansar devido à pouca velocidade do trânsito.",
					isCorrect: false,
				},
				{
					content:
						"Sim, porque é uma situação de trânsito monótona, o que provoca fadiga.",
					isCorrect: true,
				},
				{
					content:
						"Está e, para evitar a fadiga, deve beber café e bebidas estimulantes.",
					isCorrect: false,
				},
			],
		},
	];
}
