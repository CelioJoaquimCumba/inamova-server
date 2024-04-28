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
		{
			content:
				"Que veículos devem ter seguro de responsabilidade civil para transitar na via pública?",
			image: "https://i.ibb.co/zNmn7S3/image-8-new.jpg",
			options: [
				{ content: "Todos os veículos", isCorrect: false },
				{ content: "Os veículos a motor. - opção correta", isCorrect: true },
				{ content: "Só os ciclomotores.", isCorrect: false },
				{ content: "Apenas os veículos automóveis", isCorrect: false },
			],
			explanation:
				"Os veículos a motor devem ter seguro de responsabilidade civil para transitar na via pública.",
		},
		{
			content:
				"Na situação apresentada, pode ultrapassar o veículo pela esquerda?",
			image: "https://i.ibb.co/rs33J5H/image-18-new.jpg",
			options: [
				{
					content:
						"Sim, se esse veículo circula por baixo do limite máximo de velocidade",
					isCorrect: false,
				},
				{ content: "Não - opção correta", isCorrect: true },
				{
					content: "Sim, pode-se sempre ultrapassar pela esquerda.",
					isCorrect: false,
				},
				{ content: "Sim, porque a linha é descontínua.", isCorrect: false },
			],
			explanation:
				"Na situação apresentada, não é seguro ultrapassar o veículo pela esquerda, pois a linha é contínua, indicando proibição de ultrapassagem.",
		},
		{
			content:
				"Os automóveis ligeiros de passageiros, devem estar equipados com sinais de pré-sinalização de perigo?",
			image: "https://i.ibb.co/HGDRCJF/image-27-new.jpg",
			options: [
				{
					content:
						"Sim, um colete refletor e um triângulo de pré-sinalização de perigo",
					isCorrect: false,
				},
				{ content: "Não.", isCorrect: false },
				{
					content:
						"Sim, dois triângulos de pré-sinalização de perigo e um colete refletor - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Sim, apenas são obrigatórios dois triângulos de pré-sinalização de perigo",
					isCorrect: false,
				},
			],
			explanation:
				"Os automóveis ligeiros de passageiros devem estar equipados com dois triângulos de pré-sinalização de perigo e um colete refletor.",
		},
		{
			content:
				"O condutor do veículo amarelo ao mudar de direção para a direita, a quem deve ceder a passagem?",
			image: "https://i.ibb.co/whqK9h7/image-28-new.jpg",
			options: [
				{
					content: "Apenas aos condutores que se apresentem pela direita.",
					isCorrect: false,
				},
				{
					content:
						"Aos que circulam em sentido contrário e pretendam seguir em frente ou mudar de direção para a esquerda - opção correta",
					isCorrect: true,
				},
				{
					content: "A todos os condutores que circulem pela via transversal",
					isCorrect: false,
				},
				{
					content:
						"Só aos condutores que circulam em sentido contrário e sigam em frente.",
					isCorrect: false,
				},
			],
			explanation:
				"O condutor do veículo amarelo ao mudar para a direita deve ceder a passagem aos que circulam em sentido contrário e pretendem seguir em frente ou mudar para a esquerda.",
		},
		{
			content:
				"Se pretender inverter o sentido de marcha numa via cuja largura não permite fazê-lo sem prejudicar o trânsito, deve:",
			image: "https://i.ibb.co/BPzQxZY/image-4-new.jpg",
			explanation:
				"Se a largura da via não permitir inverter o sentido de marcha sem prejudicar o trânsito, o condutor deve continuar até encontrar um local adequado onde não prejudique o trânsito.",
			options: [
				{
					content:
						"Inverter o sentido de marcha com o menor número de manobras possíveis.",
					isCorrect: false,
				},
				{
					content:
						"Parar o veículo perto do eixo da via e esperar até que não haja tráfego.",
					isCorrect: false,
				},
				{
					content:
						"Continuar até encontrar um local adequado onde não prejudique o trânsito.",
					isCorrect: true,
				},
				{
					content: "Fazer a manobra, mesmo que prejudique o trânsito.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O condutor, ao mudar de direção, tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem?",
			image: "https://i.ibb.co/ZMDGw54/image-5-new.jpg",
			explanation:
				"Sim, ao mudar de direção, o condutor tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem. Isso contribui para a segurança dos peões.",
			options: [
				{ content: "Não.", isCorrect: false },
				{
					content: "Sim, mas só aos que o façam pela passagem para peões.",
					isCorrect: false,
				},
				{ content: "Sim.", isCorrect: true },
				{ content: "Sim, desde que utilize o pisca.", isCorrect: false },
			],
		},
		{
			content:
				"Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de…",
			image: "https://i.ibb.co/jDgRGrc/image-12-new.jpg",
			explanation:
				"Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de pelo menos 100 metros. Isso alerta os outros condutores sobre a situação de perigo.",
			options: [
				{ content: "Pelo menos 50 metros.", isCorrect: false },
				{ content: "Pelo menos 100 metros.", isCorrect: true },
				{ content: "Pelo menos 25 metros.", isCorrect: false },
				{ content: "10 metros.", isCorrect: false },
			],
		},
		{
			content:
				"Nos veículos destinados ao transporte de passageiros mistos…",
			image: "https://i.ibb.co/JyF9qMp/image-2-new.png",
			explanation:
				"A carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.",
			options: [
				{
					content:
						"A carga pode ocultar a matrícula e os dispositivos de sinalização e iluminação.",
					isCorrect: false,
				},
				{
					content:
						"A carga deve colocar-se na parte reservada aos passageiros, mesmo que reduza a visibilidade do condutor.",
					isCorrect: false,
				},
				{
					content:
						"A carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.",
					isCorrect: true,
				},
				{
					content: "A carga pode ultrapassar os contornos do veículo.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Os automóveis ligeiros de passageiros devem estar equipados com sinais de pré-sinalização de perigo?",
			image:
				"https://i.ibb.co/smGDcP0/hd-e72ee2f0b0cc0272fd9ba7342911f64e-65d76885d680c.png",
			options: [
				{
					content:
						"Sim, um colete refletor e um triângulo de pré-sinalização de perigo",
					isCorrect: false,
				},
				{ content: "Não", isCorrect: false },
				{
					content:
						"Sim, dois triângulos de pré-sinalização de perigo e um colete refletor",
					isCorrect: true,
				},
				{
					content:
						"Sim, apenas são obrigatórios dois triângulos de pré-sinalização de perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Num veículo equipado com motor Diesel em aceleração, a libertação de muito fumo negro pelo tubo de escape significa:",
			image:
				"https://i.ibb.co/g9d98rL/hd-82c7ea9858a826598c341a944329f4b1-65d767c54a5c6.png",
			options: [
				{ content: "Óptima qualidade do combustível.", isCorrect: false },
				{
					content: "Necessidade de regulação da bomba injetora.",
					isCorrect: true,
				},
				{
					content: "Que o veículo está a queimar muito óleo.",
					isCorrect: false,
				},
				{ content: "Que o veículo acelera bem.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Os automóveis ligeiros de passageiros e mistos sem reboque, fora das localidades, não devem exceder a velocidade instantânea de:",
			image:
				"https://i.ibb.co/1LHVY0F/hd-eafedb50d4b43c93508e6b676398cc83-65d76675c2635.png",
			options: [
				{ content: "80 km/h", isCorrect: false },
				{ content: "120 km/h", isCorrect: true },
				{ content: "100 km/h", isCorrect: false },
				{ content: "140 km/h", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que deve ser ajustado antes de iniciar a marcha?",
			image:
				"https://i.ibb.co/5s8JMz2/hd-6d3545b3d2db8cdbadc16b272312b16c-65dc9ce76872d.png",
			options: [
				{ content: "De forma folgada o cinto de segurança.", isCorrect: false },
				{
					content:
						"A distância do assento aos pedais, a inclinação das costas do banco e o encosto de cabeça.",
					isCorrect: true,
				},
				{
					content: "O encosto de cabeça e o cinto de segurança.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
	];
}
