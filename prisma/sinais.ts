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
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/w7GphYD/image-46-new.jpg",
			options: [
				{
					content: "Desvio de fila de trânsito para a direita",
					isCorrect: false,
				},
				{
					content: "Desvio da fila de trânsito para a esquerda - opção correta",
					isCorrect: true,
				},
				{
					content: "Desvio e aumento de faixa de trânsito para a esquerda.",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica um desvio da fila de trânsito para a esquerda.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/4msVgqx/image-12-new.jpg",
			options: [
				{ content: "Indica a existência de uma via rápida.", isCorrect: false },
				{
					content: "Indica a existência de uma via de sentido único",
					isCorrect: false,
				},
				{
					content: "Indica a existência de uma Autoestrada - opção correta",
					isCorrect: true,
				},
			],
			explanation: "Este sinal indica a existência de uma Autoestrada.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/pfXGjsR/image-14-new.jpg",
			options: [
				{
					content:
						"Via obrigatória para veículos que transportam substâncias perigosas. - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Fim da proibição de circulação de veículos que transportam substâncias perigosas",
					isCorrect: false,
				},
				{
					content: "Via obrigatória para automóveis pesados",
					isCorrect: false,
				},
			],
			explanation:
				"Este sinal indica uma via obrigatória para veículos que transportam substâncias perigosas.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/tCSBw5H/image-17-new.jpg",
			options: [
				{ content: "Estacionamento proibido.", isCorrect: false },
				{
					content: "Paragem e estacionamento proibidos - opção correta",
					isCorrect: true,
				},
				{ content: "Estacionamento condicionado", isCorrect: false },
			],
			explanation:
				"Este sinal indica a proibição de paragem e estacionamento na zona indicada.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/YLMfjd5/image-19-new.jpg",
			options: [
				{ content: "Proibição de circulação de peões.", isCorrect: false },
				{ content: "Prioridade de passagem para peões", isCorrect: false },
				{ content: "Proibição de passagem de peões.", isCorrect: false },
				{ content: "Pista obrigatória para peões.", isCorrect: true },
			],
			explanation:
				"Este sinal indica uma pista obrigatória para peões, devendo estes seguir por essa via.",
		},
		{
			content: "O que a o sinal?",
			image: "https://i.ibb.co/TqbnmjR/image-20-new.jpg",
			options: [
				{
					content: "Sinalização luminosa em manutenção. - opção correta",
					isCorrect: true,
				},
				{ content: "Sinalização luminosa.", isCorrect: false },
				{ content: "Passagem de nível", isCorrect: false },
			],
			explanation:
				"Este sinal indica sinalização luminosa em manutenção, alertando os condutores para possíveis variações nas condições de tráfego.",
		},
		{
			content: "Diante do sinal, o condutor fica a saber que:",
			image: "https://i.ibb.co/kSZg4f2/image-22-new.jpg",
			options: [
				{
					content: "Não pode utilizar os sinais sonoros. - opção correta",
					isCorrect: true,
				},
				{ content: "Deve utilizar os sinais sonoros", isCorrect: false },
				{
					content: "É obrigado a desligar as luzes de estrada.",
					isCorrect: false,
				},
			],
			explanation:
				"Diante do sinal, o condutor fica a saber que não pode utilizar os sinais sonoros, devendo respeitar essa proibição.",
		},
		{
			content: "O que indica o sinal vertical?",
			image: "https://i.ibb.co/vqRfffP/image-31-new.jpg",
			options: [
				{
					content:
						"Pré-sinalização de via sem saída à direita. - opção correta",
					isCorrect: true,
				},
				{ content: "Estrada sem saída.", isCorrect: false },
				{
					content: "Pré-sinalização de via sem saída à esquerda",
					isCorrect: false,
				},
			],
			explanation:
				"O sinal vertical indica pré-sinalização de via sem saída à direita.",
		},
		{
			content: "Diante do sinal, é proibido:",
			image: "https://i.ibb.co/23L3xjH/image-34-new.jpg",
			options: [
				{ content: "Mudar de direção para à direita.", isCorrect: false },
				{
					content: "Inverter o sentido de marcha - opção correta",
					isCorrect: true,
				},
				{ content: "Mudar de direção para à esquerda", isCorrect: false },
			],
			explanation: "Diante do sinal, é proibido inverter o sentido de marcha.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/8BFc9TF/image-38-new.jpg",
			options: [
				{ content: "Sentidos obrigatórios possíveis", isCorrect: false },
				{ content: "Sentido obrigatório para à direita", isCorrect: false },
				{
					content: "Sentido obrigatório giratório - opção correta",
					isCorrect: true,
				},
			],
			explanation: "O sinal indica sentido obrigatório giratório.",
		},
		{
			content: "O sinal de cor amarela e preta, indica:",
			image: "https://i.ibb.co/KXyfLh7/image-44-new.jpg",
			options: [
				{ content: "Barricada", isCorrect: false },
				{
					content: "Baía limitadora de altura. - opção correta",
					isCorrect: true,
				},
				{ content: "Baía indicadora de separador físico.", isCorrect: false },
			],
			explanation:
				"O sinal de cor amarela e preta indica baía limitadora de altura.",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
			explanation:
				"O sinal indica 'Trânsito proibido a tractores agrícolas'. Os condutores devem estar cientes da proibição de circulação de tratores agrícolas nessa via.",
			options: [
				{
					content: "Fim da proibição de circulação de tratores agrícolas.",
					isCorrect: false,
				},
				{
					content: "Trânsito proibido a veículos de construção.",
					isCorrect: false,
				},
				{
					content: "Trânsito proibido a tractores agrícolas.",
					isCorrect: true,
				},
				{ content: "Paragem obrigatória.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/h1KvF7z/image-7-new.jpg",
			explanation:
				"O sinal indica 'Paragem proibida'. Os condutores não podem estacionar nesse local, garantindo a fluidez do tráfego.",
			options: [
				{ content: "Trânsito proibido a senhoras.", isCorrect: false },
				{ content: "Paragem proibida.", isCorrect: true },
				{ content: "Paragem obrigatória.", isCorrect: false },
				{ content: "Fim da proibição de estacionamento.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/30V9Fpn/image-8-new.jpg",
			explanation:
				"O sinal indica 'Passagem de peões'. Os condutores devem estar atentos à presença de peões na via e garantir a sua segurança.",
			options: [
				{ content: "Passagem de peões.", isCorrect: true },
				{ content: "Pista obrigatória para peões.", isCorrect: false },
				{ content: "Passagem desnivelada para peões.", isCorrect: false },
				{ content: "Zona de atravessamento de animais.", isCorrect: false },
			],
		},
		{
			content: "O que indica a marca rodoviária amarela?",
			image: "https://i.ibb.co/ygkXMSW/image-14-new.jpg",
			explanation:
				"A marca rodoviária amarela indica 'Proibição de estacionamento'. Os condutores não podem estacionar nessa zona, contribuindo para a fluidez do tráfego.",
			options: [
				{ content: "Proibição de paragem.", isCorrect: false },
				{ content: "Estacionamento condicionado.", isCorrect: false },
				{ content: "Proibição de estacionamento.", isCorrect: true },
				{ content: "Zona de estacionamento gratuito.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal de perigo?",
			image: "https://i.ibb.co/th0nXD7/image-15-new.jpg",
			explanation:
				"O sinal de perigo indica 'Sinalização luminosa'. Os condutores devem estar cientes da presença de sinalização luminosa na via e agir de acordo.",
			options: [
				{ content: "Controlo policial por pirilampos.", isCorrect: false },
				{
					content: "Aproximação de uma estrada com prioridade.",
					isCorrect: false,
				},
				{ content: "Sinalização luminosa.", isCorrect: true },
				{ content: "Presença de passagem de nível.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/kD9Sn0f/image-18-new.jpg",
			explanation:
				"O sinal indica 'Obrigação de circular à velocidade mínima de 60 km/h na fila à direita'. Os condutores devem cumprir a velocidade mínima estabelecida para manter um fluxo adequado.",
			options: [
				{
					content:
						"Obrigação de circular à velocidade mínima de 60 km/h na fila à direita.",
					isCorrect: true,
				},
				{
					content:
						"Proibição de circular à velocidade máxima de 60 km/h na fila à direita.",
					isCorrect: false,
				},
				{
					content:
						"Obrigação de circular à velocidade mínima de 60 km/h na fila à esquerda.",
					isCorrect: false,
				},
				{ content: "Fim da proibição de estacionamento.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/Qr7wGVZ/image-21-new.jpg",
			explanation:
				"O sinal indica 'Pista obrigatória para veículos de tração animal'. Os condutores devem seguir a pista indicada pelo sinal.",
			options: [
				{
					content: "Pista obrigatória para veículos de tração manual.",
					isCorrect: false,
				},
				{
					content: "Pista obrigatória para veículos de tração animal.",
					isCorrect: true,
				},
				{ content: "Pista obrigatória para cavaleiros.", isCorrect: false },
				{ content: "Pista obrigatória para ciclistas.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/6JrxNBG/image-new.png",
			explanation: "A presença de cancela motorizada ao centro.",
			options: [
				{
					content: "A presença de cancela motorizada ao centro.",
					isCorrect: false,
				},
				{
					content: "A presença de entroncamento oblíquo à esquerda.",
					isCorrect: false,
				},
				{ content: "A presença de ponte móvel.", isCorrect: true },
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
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/K7YM5Dv/image-9-new.png",
			explanation: "Entroncamento agudo da direita.",
			options: [
				{ content: "Entroncamento agudo da direita.", isCorrect: true },
				{ content: "Fim de duas vias.", isCorrect: false },
				{ content: "Fim de via à esquerda.", isCorrect: false },
				{ content: "Fim de via à direita.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/VNcHmh4/image-13-new.png",
			explanation:
				"Trânsito proibido a veículos automóveis e motociclos com carro.",
			options: [
				{
					content:
						"Trânsito proibido a veículos automóveis e motociclos com carro.",
					isCorrect: true,
				},
				{
					content: "Trânsito proibido a automóveis ligeiros de passageiros.",
					isCorrect: false,
				},
				{ content: "Trânsito proibido a táxis.", isCorrect: false },
			],
		},
		{
			content: "O que indica o sinal de interesse turístico?",
			image: "https://i.ibb.co/4YZyFRC/image-14-new.png",
			explanation: "Reserva florestal.",
			options: [
				{ content: "Lugar histórico e genérico.", isCorrect: false },
				{ content: "Reserva florestal.", isCorrect: true },
				{ content: "Parque de campismo.", isCorrect: false },
			],
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/prwSwqs/image-17-new.png",
			explanation: "Entroncamento agudo para a esquerda.",
			options: [
				{
					content: "Entroncamento divergente para a esquerda.",
					isCorrect: false,
				},
				{ content: "Entroncamento agudo para a esquerda.", isCorrect: true },
				{ content: "Entroncamento agudo para a direita.", isCorrect: false },
				{
					content: "Entroncamento divergente para a direita.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/d289vSz/image-20-new.png",
			explanation: "Ponte estreita.",
			options: [
				{ content: "Passagem estreita.", isCorrect: false },
				{ content: "Ponte estreita.", isCorrect: true },
				{ content: "Entroncamentos sucessivos.", isCorrect: false },
			],
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/bN1zvXR/hd-f11a0a81c90d012a5f4dbd36a3115311-65d76910bd354.png",
			options: [
				{ content: "Via temporariamente interrompida", isCorrect: true },
				{
					content:
						"Via temporariamente interrompida, mas pode seguir em frente",
					isCorrect: false,
				},
				{ content: "Via definitivamente interrompida", isCorrect: false },
				{
					content: "Via temporariamente interrompida, só durante a noite",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O sinal luminoso com a seta verde indica:",
			image:
				"https://i.ibb.co/C0yqGqX/hd-d5207f2e2df4d7408b34b207592e8a38-65d768fa6c589.png",
			options: [
				{ content: "Acesso ou passagem interdito", isCorrect: false },
				{ content: "Acesso ou passagem autorizado", isCorrect: true },
				{ content: "Acesso ou passagem condicionado", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/6mQ5csz/hd-9b0797f0ef8d35939a3db2a99d9eea82-65d767b1ce4b2.png",
			options: [
				{ content: "Entroncamento agudo da esquerda.", isCorrect: true },
				{
					content: "Entroncamento convergente para a esquerda.",
					isCorrect: false,
				},
				{ content: "Entroncamento divergente da esquerda.", isCorrect: false },
				{ content: "Entroncamento agudo da direita.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/Q6jNsLT/hd-crop-b6a1470d2247b813224e087ab2eadf30-65d76758ba1de.png",
			options: [
				{ content: "Travessia de peões.", isCorrect: true },
				{ content: "Travessia de idosos.", isCorrect: false },
				{ content: "Travessia de crianças.", isCorrect: false },
				{ content: "Passagem de peões.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/D1z1c8K/hd-96e8e2636cef633965faede7e71f9c7e-65d7678353e07.png",
			options: [
				{ content: "Passagem de nível.", isCorrect: false },
				{ content: "Sinalização luminosa em manutenção.", isCorrect: false },
				{ content: "Sinalização luminosa.", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal STOP 3?",
			image:
				"https://i.ibb.co/LR9Xn97/hd-d4d98a9cb2c6a7d9673d3b584226a6a4-65d76651dcaef.png",
			options: [
				{ content: "Paragem obrigatória.", isCorrect: false },
				{ content: "Paragem obrigatória em três vias.", isCorrect: true },
				{ content: "Paragem obrigatória a três metros.", isCorrect: false },
				{ content: "Paragem obrigatória a três metros.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O sinal de cor amarela e preta indica:",
			image:
				"https://i.ibb.co/s11yjFJ/hd-02a8af99f8b1d62a193739814b713e54-65d7663f18d22.png",
			options: [
				{ content: "Barricada", isCorrect: false },
				{ content: "Baia indicadora de separador físico", isCorrect: false },
				{ content: "Baia limitadora de altura", isCorrect: true },
				{
					content: "Trânsito proibido a velocípedes e peões",
					isCorrect: false,
				},
			],
			explanation: "",
		},

		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/L5QrDHD/hd-233c27c41de336d4441933ccdf4a5672-65d765c33fdeb.png",
			options: [
				{
					content: "Pista obrigatória para veículos de tração manual",
					isCorrect: false,
				},
				{
					content: "Pista obrigatória para peões e velocípedes",
					isCorrect: true,
				},
				{ content: "Pista obrigatória para peões", isCorrect: false },
				{
					content: "Trânsito proibido a velocípedes e peões",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/vs81zF5/hd-1c2cc28795734005e3c8dfde058dfecb-65d765ab41a8d.png",
			options: [
				{ content: "Fim de duas vias", isCorrect: false },
				{ content: "Fim de via à esquerda", isCorrect: false },
				{ content: "Entroncamento agudo da direita", isCorrect: true },
				{ content: "Fim de via à direita", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal de informação?",
			image:
				"https://i.ibb.co/NmWhL2n/hd-2c3cc015b1a7260ccaa3ed10a1fcc0e6-65dc9edf0be87.png",
			options: [
				{
					content: "Início da faixa reservada para táxis do lado esquerdo.",
					isCorrect: false,
				},
				{ content: "Parque de estacionamento para táxis.", isCorrect: false },
				{ content: "Área reservada para táxis.", isCorrect: true },
			],
			explanation: "",
		},
	];
}
