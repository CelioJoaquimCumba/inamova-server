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
			content: "O que indica o sinal de informação?",
			image:
				"https://i.ibb.co/Y3H5wWP/hd-44dd830d88c55c5a53e7ce44206e37e1-65d59b5cf20d5.png",
			options: [
				{
					content: "Áreas reservadas para automóveis ligeiros",
					isCorrect: true,
				},
				{ content: "Área reservada para taxis", isCorrect: false },
				{
					content:
						"Parque de estacionamento para automóveis ligeiros de passageiros",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal de informação indica áreas reservadas para automóveis ligeiros. Os sinais de informação são usados para fornecer informações úteis aos condutores.",
		},

		{
			content: "O que indica a marca rodoviária branca?",
			image:
				"https://i.ibb.co/bPwrnRM/hd-c4c1d28fa957dda0335553dbb635c111-65d5b7de17e49.png",
			options: [
				{ content: "Indica a redução de filas de trânsito", isCorrect: false },
				{ content: "Indica a existência de lombas", isCorrect: true },
				{ content: "Indica a existência de bandas sonoras", isCorrect: false },
			],
			explanation:
				"A marca rodoviária branca indica a existência de lombas. Estas marcas são utilizadas para alertar os condutores sobre obstáculos ou condições especiais na estrada.",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/gwvmsSV/hd-9d2938d9b112081d1ffa67fc34a5cf91-65d5b8f3b610c.png",
			options: [
				{ content: "Sentido proibido", isCorrect: false },
				{ content: "Trânsito proibido", isCorrect: true },
				{
					content: "Trânsito proibido a automóveis ligeiros de passageiros",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica trânsito proibido. Os sinais de proibição têm como objetivo indicar a proibição ou restrição de certas ações ou tipos de tráfego numa determinada via.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/ByNWkRN/image-28.png",
			options: [
				{
					content:
						"Paragem proibida a veículos que transportam substâncias perigosas",
					isCorrect: true,
				},
				{
					content:
						"Paragem obrigatória para veículos que transportam substâncias perigosas",
					isCorrect: false,
				},
				{
					content:
						"Área reservada para veículos que transportam substâncias perigosas",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica paragem proibida a veículos que transportam substâncias perigosas. É importante observar e respeitar os sinais específicos para garantir a segurança no transporte de substâncias perigosas.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/mN9Ymqc/image-30.png",
			options: [
				{
					content: "A presença de cancela motorizada 20 centro",
					isCorrect: false,
				},
				{ content: "A presença de ponte móvel", isCorrect: true },
				{
					content: "A presença de entroncamento oblíquo à esquerda",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica a presença de uma ponte móvel. Sinais de advertência, como este, alertam os condutores para condições especiais na estrada à frente.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/pwn9Hc5/image-31.png",
			options: [
				{ content: "Pré-advertência da direção de saída", isCorrect: true },
				{ content: "Advertência da direção de saída", isCorrect: false },
				{ content: "Direção de saída", isCorrect: false },
			],
			explanation:
				"Este sinal é uma pré-advertência da direção de saída. Sinais de pré-advertência informam os condutores sobre as condições futuras da estrada, permitindo-lhes tomar decisões informadas.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/X4MPcBw/image-35.png",
			options: [
				{
					content: "Trânsito proibido a peões, animais e veículos automóveis",
					isCorrect: false,
				},
				{
					content:
						"Trânsito proibido a peões, animais e veículos não automóveis",
					isCorrect: true,
				},
				{
					content: "Trânsito proibido a animais e veículos não automóveis",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica trânsito proibido a peões, animais e veículos não automóveis. Restringe o acesso a certos tipos de tráfego para garantir a segurança.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/kGZQrWC/image-39.png",
			options: [
				{ content: "Sentido obrigatório para a frente", isCorrect: false },
				{ content: "Via rápida", isCorrect: false },
				{
					content: "Existência de portagens na via em que segue",
					isCorrect: true,
				},
			],
			explanation:
				"Este sinal indica a existência de portagens na via em que segue. É importante estar ciente de sinais que indicam a presença de portagens para se preparar adequadamente.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/rtdcb9t/image-1-new.png",
			explanation: "Convergência de filas de trânsito",
			options: [
				{ content: "Fim da fila de trânsito à esquerda", isCorrect: false },
				{ content: "Fim da fila de trânsito à direita", isCorrect: false },
				{ content: "Convergência de filas de trânsito", isCorrect: true },
			],
		},
		{
			content: "O significado deste sinal é",
			image: "https://i.ibb.co/kgDsc1K/image-9-new.png",
			explanation: "Congestionamento de tráfego.",
			options: [
				{
					content: "Zona onde só podem passar três carros de cada vez.",
					isCorrect: false,
				},
				{ content: "Zona de estacionamento em fila.", isCorrect: false },
				{ content: "Congestionamento de tráfego.", isCorrect: true },
				{ content: "Zona de paragem em fila.", isCorrect: false },
			],
		},
		{
			content: "O que indica a marca rodoviária?",
			image: "https://i.ibb.co/2sJgBkr/image-10-new.png",
			explanation: "Linha de cedência de prioridade com símbolo triangular.",
			options: [
				{ content: "Linha de paragem obrigatória com stop.", isCorrect: false },
				{ content: "Linha de paragem obrigatória.", isCorrect: false },
				{
					content: "Linha de cedência de prioridade com símbolo triangular.",
					isCorrect: true,
				},
			],
		},
		{
			content: "O que indica o sinal circular?",
			image: "https://i.ibb.co/2sJgBkr/image-10-new.png",
			explanation: "Proibição de ultrapassagem para motociclos simples.",
			options: [
				{
					content: "Trânsito proibido para todos os veículos automóveis.",
					isCorrect: false,
				},
				{
					content: "Proibição de ultrapassagem para automóveis ligeiros.",
					isCorrect: false,
				},
				{
					content: "Proibição de ultrapassagem para motociclos simples.",
					isCorrect: true,
				},
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/jGNJW8h/image-18-new.png",
			explanation: "Área reservada para autocarros e autocarros médios.",
			options: [
				{
					content:
						"Parque de estacionamento para autocarros e autocarros médios.",
					isCorrect: false,
				},
				{
					content:
						"Faixa reservada para qualquer tipo de autocarro do lado esquerdo.",
					isCorrect: false,
				},
				{
					content: "Área reservada para autocarros e autocarros médios.",
					isCorrect: true,
				},
			],
		},
		{
			content: "O significado destes sinais é:",
			image: "https://i.ibb.co/N2GhrH0/image-42-new.png",
			explanation:
				"A - Parque de estacionamento; B- Parque de estacionamento para veículos do corpo diplomático.",
			options: [
				{
					content:
						"A - Parque de estacionamento; B- Parque de estacionamento para veículos do corpo diplomático.",
					isCorrect: true,
				},
				{
					content:
						"A - Parque de estacionamento; B - Parque de estacionamento para veículos do governo.",
					isCorrect: false,
				},
				{
					content:
						"A - Parque de estacionamento; B - Parque de estacionamento para veículos do ministério.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O que indica o sinal circular com fundo azul?",
			image: "https://i.ibb.co/q1ChBYb/image-44-new.png",
			explanation:
				"Via obrigatória para circulação de veículos de dimensões anormais. Este sinal indica que apenas os veículos com dimensões especiais mencionadas no sinal têm permissão para utilizar essa via.",
			options: [
				{
					content: "Via obrigatória para veículos de construção.",
					isCorrect: false,
				},
				{
					content: "Via obrigatória para autocarros de excursão.",
					isCorrect: false,
				},
				{
					content:
						"Via obrigatória para circulação de veículos de dimensões anormais.",
					isCorrect: true,
				},
			],
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/0QxshD6/image-46-new.png",
			explanation:
				"Queda de pedras à esquerda. Este sinal alerta para o perigo de quedas de pedras no lado esquerdo da estrada.",
			options: [
				{ content: "Queda de pedras à direita.", isCorrect: false },
				{ content: "Queda de pedras à esquerda.", isCorrect: true },
				{ content: "Estrada com buracos na esquerda.", isCorrect: false },
				{ content: "Estrada com buracos na direita.", isCorrect: false },
			],
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/0QxshD6/image-46-new.png",
			explanation:
				"Trânsito nos dois sentidos. Este sinal indica que a estrada tem tráfego em ambas as direções.",
			options: [
				{
					content: "Prioridade para quem circula à direita.",
					isCorrect: false,
				},
				{ content: "Trânsito nos dois sentidos.", isCorrect: true },
				{
					content: "Prioridade temporária para quem circula à direita.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/zP25ZJf/image-51-new.png",
			explanation:
				"Trabalhos na estrada. Este sinal alerta para a presença de trabalhos na estrada, indicando que os condutores devem proceder com cautela.",
			options: [
				{ content: "Trabalhos na estrada.", isCorrect: true },
				{ content: "Obras adjudicadas.", isCorrect: false },
				{ content: "Obras incompletas.", isCorrect: false },
				{
					content: "Prudência porque o parque está em obras.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/wzyHmcH/image-54-new.png",
			explanation:
				"Trânsito proibido a veículos de peso por eixo superior a 2 toneladas. Este sinal proíbe a passagem de veículos cujo peso por eixo seja superior a 2 toneladas.",
			options: [
				{
					content:
						"Trânsito proibido a veículos de peso total superior a 2 toneladas.",
					isCorrect: false,
				},
				{
					content:
						"Trânsito proibido a veículos de peso por eixo inferior a 2 toneladas.",
					isCorrect: false,
				},
				{
					content:
						"Trânsito proibido a veículos de peso por eixo superior a 2 toneladas.",
					isCorrect: true,
				},
			],
		},
		{
			content: "Dentro das localidades, os sinais sonoros só podem ser usados",
			image: "https://i.ibb.co/wYZXj46/image-57-new.png",
			explanation:
				"Em caso de manifesta necessidade, podendo ser proibidos nas zonas em que o ordenamento do trânsito seja assegurado por agentes da autoridade ou por instrumentos de sinalização vertical.",
			options: [
				{
					content:
						"Em caso de manifesta necessidade, podendo ser autorizados nas zonas em que o ordenamento do trânsito seja assegurado por sinalização vertical.",
					isCorrect: false,
				},
				{
					content:
						"Em caso de manifesta necessidade, podendo ser autorizados nas zonas em que o ordenamento do trânsito seja assegurado por sinalização horizontal.",
					isCorrect: false,
				},
				{
					content:
						"Em caso de manifesta necessidade, podendo ser proibidos nas zonas em que o ordenamento do trânsito seja assegurado por agentes da autoridade ou por instrumentos de sinalização vertical.",
					isCorrect: true,
				},
				{ content: "Sempre durante a noite.", isCorrect: false },
			],
		},
	];
}
