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
		{
			content:
				"Podem ser submetidos às provas para a detecção de álcool ou substâncias estupefacientes ou psicotrópicas:",
			image: "https://i.ibb.co/88p6xQk/image-6-new.jpg",
			options: [
				{
					content: "Apenas os condutores de veículos automóveis.",
					isCorrect: false,
				},
				{
					content:
						"Os peões, sempre que sejam intervenientes em acidentes de trânsito e os condutores. - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Todos os condutores e peões que transitam pela via pública.",
					isCorrect: false,
				},
				{
					content:
						"Só os condutores que sejam intervenientes em acidentes de trânsito.",
					isCorrect: false,
				},
			],
			explanation:
				"Os peões, sempre que sejam intervenientes em acidentes de trânsito, e os condutores podem ser submetidos a provas para detecção de álcool ou substâncias estupefacientes ou psicotrópicas.",
		},
		{
			content: "Fumar enquanto conduz...",
			image: "https://i.ibb.co/XsT09Wv/image-16-new.jpg",
			options: [
				{
					content: "É aconselhável, pois ajuda a manter a atenção",
					isCorrect: false,
				},
				{ content: "É proibido", isCorrect: false },
				{
					content: "Pode afetar a atenção na condução - opção correta",
					isCorrect: true,
				},
				{ content: "Reduz a agressividade do condutor.", isCorrect: false },
			],
			explanation:
				"Fumar enquanto conduz pode afetar a atenção na condução, sendo considerado perigoso.",
		},
		{
			content:
				"A ingestão de bebidas alcoólicas, mesmo que em pequenas quantidades, pode ter como consequência:",
			image: "https://i.ibb.co/5M8TLKM/image-26-new.jpg",
			options: [
				{
					content: "Diminuição do tempo de reação e da distância de paragem",
					isCorrect: false,
				},
				{
					content:
						"Aumento de tempo de reação e da distância de paragem - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Aumento do tempo de reação, mas não da distância de paragem",
					isCorrect: false,
				},
				{
					content: "Maior concentração na tarefa da condução.",
					isCorrect: false,
				},
			],
			explanation:
				"A ingestão de bebidas alcoólicas pode aumentar o tempo de reação e a distância de paragem.",
		},
		{
			content:
				"Pode transportar bebidas alcoólicas na parte do veículo reservada aos passageiros?",
			image: "https://i.ibb.co/cYPsKH5/image-43-new.jpg",
			options: [
				{
					content: "Sim, se o condutor não estiver sob influência de álcool.",
					isCorrect: false,
				},
				{
					content: "Sim, sempre que o condutor não tome nada de álcool",
					isCorrect: false,
				},
				{
					content:
						"Não, já que é proibido o porte e transporte de bebidas alcoólicas nesta parte do veículo. - opção correta",
					isCorrect: true,
				},
				{ content: "Sim.", isCorrect: false },
			],
			explanation:
				"É proibido o porte e transporte de bebidas alcoólicas na parte do veículo reservada aos passageiros.",
		},
		{
			content:
				"De que modo o consumo de álcool altera o comportamento do condutor?",
			image: "https://i.ibb.co/ySZDkJ4/image-6-new.jpg",
			explanation:
				"O consumo de álcool aumenta a autoconfiança do condutor, o que pode levar a um aumento dos riscos na condução. Portanto, é essencial evitar conduzir sob a influência de álcool.",
			options: [
				{ content: "Diminui o tempo de reação.", isCorrect: false },
				{
					content: "Aumenta a autoconfiança, e por isso aumentam os riscos.",
					isCorrect: true,
				},
				{ content: "Diminui os erros na condução.", isCorrect: false },
				{ content: "Reduz a agressividade na condução.", isCorrect: false },
			],
		},
		{
			content:
				"Considera-se sob influência de álcool o condutor que apresente uma taxa de álcool igual ou superior a:",
			image: "https://i.ibb.co/bHhXFDH/image-10-new.jpg",
			explanation:
				"Considera-se sob influência de álcool o condutor que apresente uma taxa de álcool igual ou superior a 0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l, em teste sanguíneo.",
			options: [
				{
					content:
						"0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l, em teste sanguíneo.",
					isCorrect: true,
				},
				{
					content:
						"0.1 mg/l no teste de ar expirado, ou de 0.3 mg/l em teste sanguíneo.",
					isCorrect: false,
				},
				{
					content:
						"0.6 mg/l no teste de ar expirado, ou de 0.9 mg/l em teste sanguíneo.",
					isCorrect: false,
				},
				{
					content:
						"0.5 mg/l no teste de ar expirado, ou de 0.8 mg/l em teste sanguíneo.",
					isCorrect: false,
				},
			],
		},
	];
}
