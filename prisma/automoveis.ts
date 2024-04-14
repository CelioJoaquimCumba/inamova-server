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
			content: "Os automóveis classificam-se em:",
			image:
				"https://i.ibb.co/GM26DWY/hd-534ea2218df55232f652fb48370e1539-65d4b57fa9333.png",
			options: [
				{ content: "Ligeiros e pesados", isCorrect: true },
				{ content: "Ligeiros, Pesados e Motociclos", isCorrect: false },
				{
					content:
						"Motociclos, Ciclomotores, Triciclos, Quadriciclos, ligeiros e Pesados",
					isCorrect: false,
				},
				{ content: "Ligeiros, Pesados e Mistos", isCorrect: false },
			],
			explanation:
				"Os automóveis classificam-se em ligeiros e pesados. Ligeiros incluem carros de passageiros, enquanto pesados incluem veículos maiores como camiões.",
		},
		{
			content:
				"Que veículo deve retroceder para dar passagem ao outro, numa passagem estreita sem sinalização onde não seja possível efetuar o cruzamento?",
			image:
				"https://i.ibb.co/SvHZyCc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d59a6c2d8cc.png",
			options: [
				{ content: "O veículo mais pesado", isCorrect: false },
				{ content: "O veículo com maior largura", isCorrect: false },
				{
					content:
						"O veículo que está mais próximo do local em que o cruzamento seja possível",
					isCorrect: true,
				},
				{
					content:
						"O veículo que desce se for numa via de inclinação acentuada",
					isCorrect: false,
				},
			],
			explanation:
				"Numa passagem estreita sem sinalização, onde não é possível efetuar o cruzamento, o veículo que deve retroceder é o que está mais próximo do local em que o cruzamento é possível.",
		},
		{
			content: "O trânsito de veículos ou de animais é feito...",
			image: "https://i.ibb.co/DwyfSQL/image-26.png",
			options: [
				{
					content:
						"Do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios",
					isCorrect: false,
				},
				{ content: "Próximo do eixo da via", isCorrect: false },
				{
					content:
						"Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente",
					isCorrect: true,
				},
			],
			explanation:
				"O trânsito de veículos ou animais é feito pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente. Esta regra ajuda a manter um fluxo de tráfego suave e seguro.",
		},
		{
			content:
				"Nos veículos de mercadorias, a carga deve ser disposta de modo a que:",
			image: "https://i.ibb.co/r2Qjyd5/image-34.png",
			options: [
				{
					content: "O principal peso fique sobre o eixo da retaguarda",
					isCorrect: false,
				},
				{
					content:
						"Fique livre o maior espaço possível a retaguarda da caixa de carga",
					isCorrect: false,
				},
				{
					content:
						"Seja assegurado o equilíbrio do veículo, parado ou em movimento",
					isCorrect: true,
				},
			],
			explanation:
				"Nos veículos de mercadorias, a carga deve ser disposta de modo a que seja assegurado o equilíbrio do veículo, parado ou em movimento. Isso ajuda a garantir uma condução estável e segura.",
		},
		{
			content:
				"Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de:",
			image: "https://i.ibb.co/JmcJSnc/image-37.png",
			options: [
				{ content: "80 km/h", isCorrect: false },
				{ content: "120 km/h", isCorrect: false },
				{ content: "100 km/h", isCorrect: true },
			],
			explanation:
				"Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de 100 km/h. Limites de velocidade específicos aplicam-se a diferentes tipos de veículos.",
		},
		{
			content: "Todos os condutores de veículos ou animais são obrigados a...",
			image: "https://i.ibb.co/Ptws569/image-38.png",
			options: [
				{
					content:
						"Abandonar os veículos nos locais de estacionamento sem motivo justificado",
					isCorrect: false,
				},
				{
					content:
						"Reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias",
					isCorrect: false,
				},
				{
					content:
						"Obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito",
					isCorrect: true,
				},
			],
			explanation:
				"Todos os condutores de veículos ou animais são obrigados a obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito. Esta é uma regra fundamental para manter a ordem e segurança nas estradas.",
		},
		{
			content:
				"Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?",
			image: "https://i.ibb.co/BCK8VSS/image-20-new.png",
			explanation: "Sim, desde que o peso bruto do reboque não exceda 750 kg.",
			options: [
				{ content: "Não, é necessária a da categoria C1E.", isCorrect: false },
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 3500 kg.",
					isCorrect: false,
				},
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 750 kg.",
					isCorrect: true,
				},
				{ content: "Não, é necessária a da categoria G.", isCorrect: false },
			],
		},
		{
			content: "Em situações de chuva forte:",
			image: "https://i.ibb.co/KFB3QQk/image-40-new.png",
			explanation:
				"A chuva forte aumenta a probabilidade de aquaplanagem (hidroplanagem), tornando a superfície da estrada escorregadia. Os condutores devem reduzir a velocidade para evitar acidentes.",
			options: [
				{
					content: "Aumenta a probabilidade de aquaplanagem (hidroplanagem).",
					isCorrect: true,
				},
				{
					content: "Reduz a probabilidade de aquaplanagem (hidroplanagem).",
					isCorrect: false,
				},
				{
					content:
						"Reduz a probabilidade de aquaplanagem (hidroplanagem), sobretudo a velocidade moderada.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Como medida de prevenção, quando o piso da via está molhado, deve:",
			image: "https://i.ibb.co/4TPsx43/image-43-new.png",
			explanation:
				"Reduzir a velocidade é uma medida de prevenção eficaz ao conduzir em estradas molhadas. Isso ajuda a evitar aquaplanagem e reduz a distância de travagem.",
			options: [
				{ content: "Parar.", isCorrect: false },
				{ content: "Reduzir a velocidade.", isCorrect: true },
				{
					content:
						"Aumentar um pouco a velocidade para que a distância de paragem diminua.",
					isCorrect: false,
				},
				{ content: "Reduzir a distância de segurança.", isCorrect: false },
			],
		},
		{
			content: "Um pára-brisas sujo, à noite e com chuva, pode:",
			image: "https://i.ibb.co/8dK7157/image-49-new.png",
			explanation:
				"Diminuir a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão. Pára-brisas sujos podem comprometer a visibilidade, especialmente em condições noturnas e de chuva.",
			options: [
				{
					content:
						"Aumentar a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão.",
					isCorrect: false,
				},
				{ content: "Diminuir o tempo de reação.", isCorrect: false },
				{
					content:
						"Diminuir a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão.",
					isCorrect: true,
				},
			],
		},
	];
}
