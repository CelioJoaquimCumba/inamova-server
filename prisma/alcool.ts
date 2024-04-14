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
			content: "O sinal indica:",
			image:
				"https://i.ibb.co/9pyNTSc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d4bacb327aa.png",
			options: [
				{ content: "Existência de tráfego adiante", isCorrect: false },
				{ content: "Controlo policial por pirilampos", isCorrect: true },
				{ content: "Congestionamento do tráfego", isCorrect: false },
			],
			explanation:
				"Este sinal indica controlo policial por pirilampos. Os pirilampos são luzes utilizadas em controlos policiais.",
		},
		{
			content: "Depois de ter tomado bebidas alcoólicas:",
			image: "https://i.ibb.co/BN5YSWq/image-58-new.png",
			explanation:
				"O álcool entra rapidamente no sistema circulatório. Após consumir bebidas alcoólicas, o álcool é absorvido rapidamente pelo sistema circulatório, afetando a capacidade de condução.",
			options: [
				{
					content: "O álcool entra diretamente no sistema urinário.",
					isCorrect: false,
				},
				{
					content:
						"O álcool demora duas horas a entrar no sistema circulatório.",
					isCorrect: false,
				},
				{
					content: "O álcool entra rapidamente no sistema circulatório.",
					isCorrect: true,
				},
			],
		},
	];
}
