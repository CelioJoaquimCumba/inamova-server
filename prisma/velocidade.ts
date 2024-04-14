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
			content: "Uma das consequências de aumentar a velocidade, é que...",
			image: "https://i.ibb.co/fHJqbB2/image-25.png",
			options: [
				{ content: "Melhora o tempo de reação", isCorrect: false },
				{
					content: "Aumenta a gravidade das lesões em caso de acidente",
					isCorrect: true,
				},
				{ content: "Reduz a distância de travagem", isCorrect: false },
				{ content: "Reduz as distrações", isCorrect: false },
			],
			explanation:
				"Aumentar a velocidade aumenta a gravidade das lesões em caso de acidente. Velocidades mais altas resultam em colisões mais severas e impactos mais graves em caso de acidente.",
		},
		{
			content: "O que é a força centrífuga?",
			image: "https://i.ibb.co/cxq22bw/image-3-new.png",
			explanation:
				"É a força aparente que “empurra” os veículos para o exterior das curvas",
			options: [
				{
					content:
						"É a força aparente que “empurra” os veículos para o interior das curvas",
					isCorrect: false,
				},
				{
					content:
						"É a força aparente que “empurra” os veículos para o exterior das curvas",
					isCorrect: true,
				},
				{
					content: "É a força aparente que trava os veículos nas curvas",
					isCorrect: false,
				},
				{
					content:
						"Uma força que só ocorre quando o veículo vai em linha reta.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Para conduzir com segurança, deve moderar especialmente a velocidade...",
			image: "https://i.ibb.co/S3vN1jM/image-4-new.png",
			explanation:
				"Nas curvas, lombas e outros locais de visibilidade reduzida.",
			options: [
				{
					content: "Só nas pontes, túneis e passagens de nível",
					isCorrect: false,
				},
				{
					content:
						"Nos cruzamentos e entroncamentos nós temos prioridade de passagem.",
					isCorrect: false,
				},
				{
					content:
						"Nas curvas, lombas e outros locais de visibilidade reduzida.",
					isCorrect: true,
				},
				{
					content: "Nos locais assinalados com sinais de obrigação.",
					isCorrect: false,
				},
			],
		},
		{
			content: "A recolha da informação é influenciada pela fadiga?",
			image: "https://i.ibb.co/vsbK6Yq/image-13-new.png",
			explanation: "Sim, assim como influencia toda a tarefa de condução",
			options: [
				{ content: "Não", isCorrect: false },
				{ content: "Sim, mas apenas em condução urbana", isCorrect: false },
				{
					content: "Sim, assim como influencia toda a tarefa de condução",
					isCorrect: true,
				},
				{
					content: "Não, a menos que o condutor esteja muito cansado",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
			image: "https://i.ibb.co/0QxshD6/image-46-new.png",
			explanation:
				"Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100. Esta é uma limitação de velocidade específica para automóveis pesados de passageiros.",
			options: [
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.",
					isCorrect: false,
				},
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 120.",
					isCorrect: false,
				},
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 120.",
					isCorrect: false,
				},
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.",
					isCorrect: true,
				},
			],
		},
	];
}
