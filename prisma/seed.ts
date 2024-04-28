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
			content: "É aconselhável viajar à noite para evitar a fadiga?",
			image:
				"https://i.ibb.co/tqy7ZZ2/hd-1ac46fddebf26ac5da3b93f09fadcb02-65d4b64e4879d.png",
			options: [
				{
					content: "Não, porque o sono aparece mais facilmente",
					isCorrect: true,
				},
				{ content: "Sim, se a viagem é longa", isCorrect: false },
				{ content: "Sim, porque há menos tráfego", isCorrect: false },
				{
					content: "Sim, viajar durante a noite é sempre mais seguro",
					isCorrect: false,
				},
			],
			explanation:
				"Viajar à noite pode aumentar a probabilidade de sono, tornando-o menos seguro. A fadiga é mais comum durante as horas noturnas.",
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
			content:
				"Atirar do veículo ou abandonar na via objetos ou substâncias, constitui contravenção:",
			image:
				"https://i.ibb.co/Bzfj34X/hd-03e8d427dc1ba18a72585729991dfbf5-65d5b86cc1ec4.png",
			options: [
				{ content: "Leve", isCorrect: false },
				{ content: "Grave", isCorrect: false },
				{ content: "Média", isCorrect: true },
			],
			explanation:
				"Atirar objetos ou substâncias da via ou abandoná-los constitui uma contravenção média. É importante manter a via pública limpa e segura.",
		},
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
			content: "Numa autoestrada, pode-se inverter o sentido de marcha?",
			image: "https://i.ibb.co/vJxYfLQ/image-27.png",
			options: [
				{ content: "Sempre que possível", isCorrect: false },
				{ content: "Nunca", isCorrect: true },
				{ content: "Sim, se a manobra foi feita lentamente", isCorrect: false },
			],
			explanation:
				"Na autoestrada, nunca se pode inverter o sentido de marcha. Essa manobra é proibida em autoestradas para garantir a segurança e fluidez do tráfego.",
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
			content: "Que comunica o condutor aos outros utentes da via?",
			image: "https://i.ibb.co/V9KVm5W/image-29.png",
			options: [
				{
					content: "Que vai voltar para o lado esquerdo do volante",
					isCorrect: false,
				},
				{ content: "Que vai para o lado direito do volante", isCorrect: false },
				{ content: "Que vai reduzir a velocidade", isCorrect: true },
			],
			explanation:
				"O condutor comunica aos outros utentes da via que vai reduzir a velocidade ao acionar as luzes de travagem. É uma forma de alertar sobre uma possível paragem ou abrandamento.",
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
			content: "Considera-se morte por acidente de viação",
			image: "https://i.ibb.co/vqpyVzb/image-32.png",
			options: [
				{
					content: "Aquela que ocorre até 30 dias após o registo do sinistro",
					isCorrect: true,
				},
				{
					content: "Só aquela que ocorre no local do sinistro",
					isCorrect: false,
				},
				{
					content: "Só aquela que ocorre a caminho da unidade sanitária",
					isCorrect: false,
				},
				{
					content: "Aquela que ocorre 30 dias depois do registro do sinistro",
					isCorrect: false,
				},
			],
			explanation:
				"Considera-se morte por acidente de viação aquela que ocorre até 30 dias após o registo do sinistro. Esta definição é importante para estatísticas e análises de acidentes de trânsito.",
		},
		{
			content: "Os peões, para atravessar a faixa de rodagem...",
			image: "https://i.ibb.co/X4XD6yP/image-33.png",
			options: [
				{
					content:
						"Podem fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 m",
					isCorrect: false,
				},
				{
					content:
						"Estão sempre obrigados a utilizar a passagem desnivelada para peões",
					isCorrect: false,
				},
				{ content: "Têm sempre prioridade de passagem", isCorrect: false },
				{
					content:
						"Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente",
					isCorrect: true,
				},
			],
			explanation:
				"Os peões, ao atravessar a faixa de rodagem, devem certificar-se de que a distância e velocidade dos veículos permitem fazê-lo sem perigo de acidente. A segurança é uma responsabilidade partilhada entre peões e condutores.",
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
			content: "É proibido ultrapassar:",
			image: "https://i.ibb.co/L6k7Q43/image-36.png",
			options: [
				{ content: "Em todas as curvas", isCorrect: false },
				{ content: "Depois dos cruzamentos", isCorrect: false },
				{
					content:
						"Nas estradas que só tenham uma via de trânsito para cada sentido",
					isCorrect: false,
				},
				{
					content: "Imediatamente antes e nas passagens para peões",
					isCorrect: true,
				},
			],
			explanation:
				"É proibido ultrapassar imediatamente antes e nas passagens para peões. Esta regra ajuda a garantir a segurança dos peões ao atravessar a estrada.",
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
	];
	const drivingTestQuestions2: Question[] = [
		{
			content:
				"Em acidente de viação com vítima, deixa de prestar ou providenciar socorro, constitui contravenção",
			image: "https://i.ibb.co/G7z28F4/image-new.png",
			explanation: "Leve",
			options: [
				{ content: "Leve", isCorrect: false },
				{ content: "Media", isCorrect: false },
				{ content: "Grave", isCorrect: true },
			],
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
			content: "Nos locais onde é proibido, a inversão do sentido de marcha",
			image: "https://i.ibb.co/LPf8R3H/image-2-new.png",
			explanation: "É contravenção punida com a multa de 1000Mt",
			options: [
				{
					content: "É contravenção punida com a multa de 1000Mt",
					isCorrect: true,
				},
				{
					content: "E contravenção punida com a multa de 500,00 Mt",
					isCorrect: false,
				},
				{
					content: "E contravenção punida com a multa de 2.000,00 Mt",
					isCorrect: false,
				},
				{ content: "Não é considerada contravenção.", isCorrect: false },
			],
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
			content: "A definição de berma é",
			image: "https://i.ibb.co/C7dnjjF/image-6-new.png",
			explanation:
				"Superfície de via pública não especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;",
			options: [
				{
					content:
						"Superfície de via pública especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;",
					isCorrect: false,
				},
				{
					content:
						"Superfície de via pública não especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;",
					isCorrect: true,
				},
				{
					content:
						"Superfície de via pública destinada ao trânsito de veículos e que ladeia a faixa de rodagem;",
					isCorrect: false,
				},
				{
					content:
						"Superfície de via pública não especialmente destinada ao trânsito de automóveis e que ladeia a faixa de rodagem;",
					isCorrect: false,
				},
			],
		},
		{
			content: "Quando os pneus têm uma pressão incorreta:",
			image: "https://i.ibb.co/zx8hBzd/image-7-new.png",
			explanation: "Desgastam-se mais e correm maior risco de rebentar",
			options: [
				{
					content: "Desgastam-se mais e correm maior risco de rebentar",
					isCorrect: true,
				},
				{
					content: "Desgastam-se menos e têm menos risco de rebentar.",
					isCorrect: false,
				},
				{ content: "Consome-se menos combustível.", isCorrect: false },
				{
					content: "Melhora a estabilidade do veículo e o seu conforto.",
					isCorrect: false,
				},
			],
		},
		{
			content: "O uso do capacete para proteger a cabeça.",
			image: "https://i.ibb.co/zx8hBzd/image-7-new.png",
			explanation:
				"É obrigatório para os condutores e passageiros de motociclos e ciclomotores",
			options: [
				{
					content:
						"É recomendável para os condutores e passageiros de motociclos, mas não é obrigatório",
					isCorrect: false,
				},
				{
					content:
						"É obrigatório para os condutores e passageiros de motociclos e ciclomotores",
					isCorrect: true,
				},
				{
					content:
						"Só é obrigatório para os condutores e passageiros de motociclos",
					isCorrect: false,
				},
				{ content: "Não é eficaz em caso de acidente", isCorrect: false },
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
			content: "Qual é a validade que tem a carta de condução da categoria B?",
			image: "https://i.ibb.co/dWBQhzf/image-12-new.png",
			explanation: "Cinco anos",
			options: [
				{ content: "Cinco anos", isCorrect: true },
				{ content: "Dois anos", isCorrect: false },
				{ content: "Três anos", isCorrect: false },
				{ content: "Dez anos", isCorrect: false },
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
				"Que deve fazer perante um ferido que tenha uma forte hemorragia na perna?",
			image: "https://i.ibb.co/bJ2gsk8/image-14-new.png",
			explanation:
				"Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.",
			options: [
				{ content: "Por pomada na ferida.", isCorrect: false },
				{
					content:
						"Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.",
					isCorrect: true,
				},
				{
					content: "Deve sempre fazer um torniquete na perna lesionada.",
					isCorrect: false,
				},
			],
		},
		{
			content: "Factores de risco serão:",
			image: "https://i.ibb.co/0M1CJwS/image-16-new.png",
			explanation: "Todos os fatores que aumentam o risco de acidente.",
			options: [
				{
					content:
						"Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.",
					isCorrect: false,
				},
				{
					content: "Todas as marcas rodoviárias que contenham riscos.",
					isCorrect: false,
				},
				{
					content: "Todos os fatores que aumentam o risco de acidente.",
					isCorrect: true,
				},
				{ content: "Todos os fatores externos ao condutor.", isCorrect: false },
			],
		},
		{
			content:
				"Sempre que no mesmo sentido sejam possíveis duas ou mais filas de trânsito:",
			image: "https://i.ibb.co/0M1CJwS/image-16-new.png",
			explanation:
				"O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.",
			options: [
				{
					content:
						"O condutor deve circular pela via de trânsito mais à direita, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.",
					isCorrect: false,
				},
				{
					content:
						"O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.",
					isCorrect: true,
				},
				{
					content:
						"O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para estacionar.",
					isCorrect: false,
				},
				{
					content:
						"O condutor deve circular pela via de trânsito mais à direita, podendo utilizar-se outra, para ultrapassar ou mudar de direção.",
					isCorrect: false,
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
			content: "Exploração perceptiva é:",
			image: "https://i.ibb.co/MpL9YPF/image-22-new.png",
			explanation:
				"Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.",
			options: [
				{
					content:
						"Procedimentos de condutor para manter a trajetória do veículo controlada.",
					isCorrect: false,
				},
				{
					content:
						"Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.",
					isCorrect: true,
				},
				{
					content:
						"Procedimentos do condutor para realizar manobras mais rapidamente.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Como deve ser feita a carga e descarga de um veículo na via pública?",
			image: "https://i.ibb.co/BB21K7F/image-23-new.png",
			explanation:
				"Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.",
			options: [
				{ content: "Sempre pela retaguarda", isCorrect: false },
				{ content: "Sempre pela direita.", isCorrect: false },
				{
					content:
						"Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.",
					isCorrect: true,
				},
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
	];
	const drivingTestQuestions3: Question[] = [
		{
			content:
				"Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?",
			image: "https://i.ibb.co/KFB3QQk/image-40-new.png",
			explanation:
				"Não. Circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido é proibido, exceto nas situações em que seja necessário ultrapassar outro veículo.",
			options: [
				{
					content:
						"Sim, na aproximação a um cruzamento em que pretenda mudar de direção à direita.",
					isCorrect: false,
				},
				{
					content:
						"Sim, em via urbana posso circular pela via da esquerda ou a da direita.",
					isCorrect: false,
				},
				{ content: "Sim, para ultrapassar.", isCorrect: true },
				{ content: "Não.", isCorrect: false },
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
			content: "O que se entende por sanção?",
			image: "https://i.ibb.co/y4QfPFh/image-45-new.png",
			explanation:
				"Sanção refere-se ao prêmio ou castigo anexo às ações humanas. No contexto de condução, refere-se a penalidades ou recompensas associadas ao cumprimento ou violação das regras de trânsito.",
			options: [
				{ content: "A repetição de valores positivos.", isCorrect: false },
				{ content: "A repetição de valores negativos.", isCorrect: false },
				{
					content: "O prêmio ou castigo anexo às ações humanas.",
					isCorrect: true,
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
			content:
				"O que deve fazer quando um velocípede segue no mesmo sentido de trânsito?",
			image: "https://i.ibb.co/J53fhVT/image-53-new.png",
			explanation:
				"Ter atenção à instabilidade desse veículo. Velocípedes, como bicicletas, podem ser menos estáveis do que outros veículos motorizados, e os condutores devem estar cientes disso ao partilhar a estrada.",
			options: [
				{ content: "Utilizar os sinais sonoros.", isCorrect: false },
				{ content: "Ultrapassá-lo a grande velocidade.", isCorrect: false },
				{
					content: "Ter atenção à instabilidade desse veículo.",
					isCorrect: true,
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
			content: "O agente regulador de trânsito, manda:",
			image: "https://i.ibb.co/wzyHmcH/image-54-new.png",
			explanation:
				"Parar o tráfego que venha da retaguarda. Um agente regulador de trânsito pode ordenar a paragem do tráfego proveniente de determinada direção para facilitar o fluxo de outros veículos.",
			options: [
				{
					content: "Parar o tráfego que venha da retaguarda e da frente.",
					isCorrect: false,
				},
				{ content: "Avançar o tráfego da esquerda.", isCorrect: false },
				{
					content: "Parar o tráfego que venha da retaguarda.",
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
			content: "A definição de localidade é:",
			image: "https://i.ibb.co/F3w7LxP/image-59-new.png",
			explanation:
				"Zona com edificação cujos limites são devidamente sinalizados. Uma localidade é uma área com construções onde os limites são devidamente marcados.",
			options: [
				{
					content: "Zona com edificações cujos limites não são sinalizados.",
					isCorrect: false,
				},
				{
					content: "Zona urbana cujos limites não são sinalizados.",
					isCorrect: false,
				},
				{
					content:
						"Zona com edificação cujos limites são devidamente sinalizados.",
					isCorrect: true,
				},
				{
					content:
						"Zona regional cujos limites são sinalizados com sinalização luminosa.",
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
				"Durante as ultrapassagens, a força do ar provocada pelos veículos pesados:",
			image: "https://i.ibb.co/ry8HBXp/image-61-new.png",
			explanation:
				"A força do ar afeta em especial os veículos ligeiros e veículos de 2 rodas. A aerodinâmica durante as ultrapassagens pode ter um impacto significativo, especialmente nos veículos mais leves.",
			options: [
				{
					content: "Afecta em especial os veículos pesados.",
					isCorrect: false,
				},
				{
					content:
						"Afecta igualmente ambos os veículos, sobretudo no início da manobra.",
					isCorrect: false,
				},
				{
					content:
						"Afecta em especial os veículos ligeiros e veículos de 2 rodas.",
					isCorrect: true,
				},
				{
					content: "Não tem influência para os outros condutores.",
					isCorrect: false,
				},
			],
		},
	];
	const drivingTestQuestions4: Question[] = [
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
			content: "É necessário verificar com frequência a iluminação?",
			image: "https://i.ibb.co/KrV2Hrw/image-1-new.jpg",
			options: [
				{ content: "Sim, mudando todos os fusíveis.", isCorrect: false },
				{
					content:
						"Sim, para se assegurar que todas as luzes funcionam e que os faróis estão bem regulados - opção correta",
					isCorrect: true,
				},
				{
					content: "Não, porque se deve fazer unicamente numa oficina.",
					isCorrect: false,
				},
				{
					content:
						"Não, é suficiente a revisão na inspeção periódica obrigatória.",
					isCorrect: false,
				},
			],
			explanation:
				"É necessário verificar com frequência a iluminação para garantir a segurança, especialmente à noite.",
		},
		{
			content:
				"O que deve fazer o condutor de um veículo avariado enquanto não for devidamente estacionado ou removido?",
			image: "https://i.ibb.co/qF5LzFY/image-2-new.jpg",
			options: [
				{
					content:
						"Colocar os sinais de pré-sinalização de perigo e depois vestir o colete refletor",
					isCorrect: false,
				},
				{
					content:
						"Colocar um sinal de pré-sinalização de perigo 5 metros à frente do veículo",
					isCorrect: false,
				},
				{
					content:
						"Adotar as medidas necessárias para que os outros se apercebam da sua presença - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Colocar um sinal de pré-sinalização de perigo 10 metros à retaguarda do veículo.",
					isCorrect: false,
				},
			],
			explanation:
				"O condutor deve adotar medidas para alertar os outros sobre a presença do veículo avariado, como vestir um colete refletor.",
		},
		{
			content: "O que deve fazer o condutor que circula por uma autoestrada?",
			image: "https://i.ibb.co/1LqLjM0/image-3-new.jpg",
			options: [
				{
					content:
						"Aumentar a distância de segurança, por se seguir a velocidades mais elevadas. - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Aumentar a distância de segurança, por se seguir a velocidades mais elevadas,",
					isCorrect: false,
				},
				{
					content:
						"Diminuir a distância de segurança, por se seguir a velocidades elevadas.",
					isCorrect: false,
				},
				{
					content:
						"Circular pela via de trânsito mais à direita, ainda que a via da esquerda se encontre livre de trânsito.",
					isCorrect: false,
				},
			],
			explanation:
				"Em autoestradas, é importante aumentar a distância de segurança devido às velocidades mais elevadas.",
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
			content: "Um torniquete é…",
			image: "https://i.ibb.co/3m2Y1pT/image-5-new.jpg",
			options: [
				{
					content: "Um pedaço de pau curto amarrado em torno de um membro",
					isCorrect: false,
				},
				{
					content:
						"Um pedaço de papel onde se menciona a parte do corpo que foi amarrada",
					isCorrect: false,
				},
				{
					content:
						"Uma tira larga de pano, amarrada firmemente em torno de um membro. - opção correta",
					isCorrect: true,
				},
				{
					content:
						"Uma peça de madeira, utilizada para aliviar a dor da vítima de acidente.",
					isCorrect: false,
				},
			],
			explanation:
				"Um torniquete é uma tira larga de pano, amarrada firmemente em torno de um membro, para controlar hemorragias.",
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
			content:
				"Fora das localidades, os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de:",
			image: "https://i.ibb.co/p3VJQqM/image-7-new.jpg",
			options: [
				{ content: "50 km/h", isCorrect: false },
				{ content: "10 km/h.", isCorrect: false },
				{ content: "45 km/h. - opção correta", isCorrect: true },
				{ content: "35 km/h", isCorrect: false },
			],
			explanation:
				"Fora das localidades, os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de 45 km/h.",
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
			content: "Qual é a função do cinto de segurança de um veículo?",
			image: "https://i.ibb.co/rH7PX27/image-9-new.jpg",
			options: [
				{
					content: "Reter e proteger os ocupantes numa colisão - opção correta",
					isCorrect: true,
				},
				{
					content: "Manter os ocupantes sentados na posição correta",
					isCorrect: false,
				},
				{
					content:
						"Permitir que os ocupantes se desloquem sobre o assento em caso de acidente.",
					isCorrect: false,
				},
				{
					content: "Apenas impedir as lesões do condutor em caso de capotagem.",
					isCorrect: false,
				},
			],
			explanation:
				"A função do cinto de segurança é reter e proteger os ocupantes numa colisão, minimizando o risco de lesões.",
		},
		{
			content:
				"Para garantir uma proteção adequada, os sistemas de retenção de crianças devem ser:",
			image: "https://i.ibb.co/mDtzJky/image-10-new.jpg",
			options: [
				{ content: "Da cor dos estofos do veículo", isCorrect: false },
				{
					content: "Colocados sem cautela em cima dos bancos do veículo",
					isCorrect: false,
				},
				{
					content: "Adequados ao tamanho e peso da criança - opção correta",
					isCorrect: true,
				},
			],
			explanation:
				"Os sistemas de retenção de crianças devem ser adequados ao tamanho e peso da criança para garantir uma proteção adequada em caso de acidente.",
		},
		{
			content: "É perigoso conduzir quando o condutor está cansado?",
			image: "https://i.ibb.co/fGqFX9d/image-11-new.jpg",
			options: [
				{ content: "Não há perigo, já que o cansaço relaxa", isCorrect: false },
				{
					content:
						"Sim, porque o condutor demora mais tempo a reagir. - opção correta",
					isCorrect: true,
				},
				{ content: "Não, porque se conduz mais devagar.", isCorrect: false },
				{
					content: "Sim, mas apenas quando se conduz dentro das localidades.",
					isCorrect: false,
				},
			],
			explanation:
				"Conduzir quando o condutor está cansado é perigoso, pois pode levar a uma reação mais lenta e aumentar o risco de acidentes.",
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
			content: "O que significa responsabilidade moral?",
			image: "https://i.ibb.co/R419DNd/image-13-new.jpg",
			options: [
				{ content: "Responder perante o Tribunal", isCorrect: false },
				{
					content: "Responder pelos seus próprios atos - opção correta",
					isCorrect: true,
				},
				{
					content: "Prestar contas perante os membros da sociedade",
					isCorrect: false,
				},
			],
			explanation:
				"Responsabilidade moral significa responder pelos seus próprios atos.",
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
			content: "Nesta situação, quem tem prioridade de passagem?",
			image: "https://i.ibb.co/y8YvpYd/image-15-new.jpg",
			options: [
				{ content: "O condutor que entra na rotunda.", isCorrect: false },
				{ content: "O condutor que chegar primeiro.", isCorrect: false },
				{
					content: "O condutor que circula dentro da rotunda. - opção correta",
					isCorrect: true,
				},
				{
					content: "O condutor que circule com uma velocidade mais elevada",
					isCorrect: false,
				},
			],
			explanation:
				"Quem tem prioridade de passagem nesta situação é o condutor que circula dentro da rotunda.",
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
			content: "Posso mudar de direção para a direita nesta situação?",
			image: "https://i.ibb.co/nQVzkKr/image-21-new.jpg",
			options: [
				{
					content: "Sim, desde que o assinale com a devida antecedência",
					isCorrect: false,
				},
				{
					content: "Sim, porque não há nenhuma sinalização que o impeça",
					isCorrect: false,
				},
				{
					content:
						"Não, porque não é possível assegurar-se que a manobra pode ser realizada sem perigo - opção correta",
					isCorrect: true,
				},
			],
			explanation:
				"Nesta situação, não é seguro mudar de direção para a direita, pois não é possível assegurar que a manobra pode ser realizada sem perigo.",
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
	];
	const drivingTestQuestions5: Question[] = [
		{
			content:
				"Não sendo o homem um ser isolado, mas sim que vive em contacto com pessoas iguais a si, com pessoas seus semelhantes podem ser. Os deveres para com os seus semelhantes podem ser:",
			image: "https://i.ibb.co/kghhTPn/image-23.png",
			options: [
				{ content: "De respeito e de liberdade.", isCorrect: false },
				{ content: "De dignidade e de integridade física.", isCorrect: false },
				{
					content: "De justiça e de caridade - opção correta",
					isCorrect: true,
				},
			],
			explanation:
				"Os deveres para com os semelhantes podem incluir princípios de justiça e caridade.",
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
			content: "Quando o condutor tem uma distração....",
			image: "https://i.ibb.co/JdDysDf/image-30-new.jpg",
			options: [
				{
					content: "Demora mais tempo em reagir. - opção correta",
					isCorrect: true,
				},
				{
					content: "Aumenta inconscientemente a velocidade do veículo",
					isCorrect: false,
				},
				{ content: "Deve avisar com as luzes de perigo.", isCorrect: false },
				{
					content:
						"Demora menos tempo em obter as informações necessárias para conduzir com segurança.",
					isCorrect: false,
				},
			],
			explanation:
				"Quando o condutor está distraído, geralmente demora mais tempo para reagir.",
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
			content: "De que modo deve verificar o nível de óleo do motor?",
			image: "https://i.ibb.co/Bs6S2JH/image-32-new.jpg",
			options: [
				{ content: "Com o motor quente", isCorrect: false },
				{
					content: "Com o motor parado e frio - opção correta",
					isCorrect: true,
				},
				{ content: "Com o motor ligado", isCorrect: false },
			],
			explanation:
				"O nível de óleo do motor deve ser verificado com o motor parado e frio.",
		},
		{
			content: "Se pretender inverter o sentido de marcha deve ter em conta …",
			image: "https://i.ibb.co/hYvnxxj/image-33-new.jpg",
			options: [
				{
					content: "A que só é permitido fazê-lo nas rotundas",
					isCorrect: false,
				},
				{
					content:
						"Que é proibido fazê-lo em todos os cruzamentos e entroncamentos",
					isCorrect: false,
				},
				{
					content:
						"Que a manobra deve ser feita em local e de forma a não prejudicar o trânsito. - opção correta",
					isCorrect: true,
				},
				{
					content: "Que é proibido fazê-lo dentro das localidades.",
					isCorrect: false,
				},
			],
			explanation:
				"Ao inverter o sentido de marcha, deve ser feito em local e de forma a não prejudicar o trânsito.",
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
			content: "O uso do cinto de segurança nos assentos traseiros…",
			image: "https://i.ibb.co/RbRRMYy/image-35-new.jpg",
			options: [
				{
					content:
						"Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros - opção correta",
					isCorrect: true,
				},
				{
					content: "Só são obrigatórios fora das localidades",
					isCorrect: false,
				},
				{
					content:
						"São da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.",
					isCorrect: false,
				},
				{ content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
			],
			explanation:
				"O uso do cinto de segurança nos assentos traseiros pode salvar a vida dos ocupantes e impedir lesões graves aos outros passageiros.",
		},
		{
			content:
				"Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas, é do:",
			image: "https://i.ibb.co/QvvYZJ5/image-36-new.jpg",
			options: [
				{ content: "Instrutor", isCorrect: false },
				{ content: "Examinador", isCorrect: false },
				{ content: "Examinando - opção correta", isCorrect: true },
			],
			explanation:
				"Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas é do examinando.",
		},
		{
			content:
				"Se o condutor que me precede assinala a manobra de mudança de direção para a direita, posso ultrapassar?",
			image: "https://i.ibb.co/WVgPyyC/image-37-new.jpg",
			options: [
				{ content: "Sim, pela direita.", isCorrect: false },
				{
					content:
						"Sim, pela esquerda, certificando-se que a pode fazer sem perigo de acidente. - opção correta",
					isCorrect: true,
				},
				{ content: "Não", isCorrect: false },
				{
					content:
						"Sim, pela direita ou pela esquerda, sempre que o veículo não esteja em movimento.",
					isCorrect: false,
				},
			],
			explanation:
				"Se o condutor que o precede assinalar a mudança de direção para a direita, você pode ultrapassar pela esquerda, certificando-se de que pode fazê-lo sem perigo de acidente.",
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
			content:
				"Qual é a velocidade instantânea que não devem exceder os condutores de ciclomotores e quadriciclos dentro das localidades?",
			image: "https://i.ibb.co/CvrJvmh/image-39-new.jpg",
			options: [
				{ content: "45 km/h.", isCorrect: false },
				{ content: "40 km/h. - opção correta", isCorrect: true },
				{ content: "50 km/h", isCorrect: false },
				{ content: "60 km/h.", isCorrect: false },
			],
			explanation:
				"Os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de 40 km/h dentro das localidades.",
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
			content: "Que efeitos tem a fadiga na condução?",
			image: "https://i.ibb.co/1bT9hbx/image-41-new.jpg",
			options: [
				{ content: "Reduz o tempo de reação do condutor.", isCorrect: false },
				{
					content: "Diminui a sensibilidade ao encandeamento.",
					isCorrect: false,
				},
				{
					content:
						"Reduz a capacidade de concentração e a segurança, - opção correta",
					isCorrect: true,
				},
				{ content: "Melhora a atenção do condutor", isCorrect: false },
			],
			explanation:
				"A fadiga na condução pode reduzir a capacidade de concentração e a segurança do condutor.",
		},
		{
			content: "A condução urbana, caracteriza-se essencialmente:",
			image: "https://i.ibb.co/7kmy6LP/image-42-new.jpg",
			options: [
				{
					content: "Por uma grande intensidade de trânsito. - opção correta",
					isCorrect: true,
				},
				{ content: "Pela abundância de sinais luminosos.", isCorrect: false },
				{ content: "Pela ausência de regras de trânsito.", isCorrect: false },
				{ content: "Pela pouca presença de peões.", isCorrect: false },
			],
			explanation:
				"A condução urbana caracteriza-se essencialmente por uma grande intensidade de trânsito.",
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
			content: "O que se entende por primeiros socorros?",
			image: "https://i.ibb.co/Q6R1wt9/image-45-new.jpg",
			options: [
				{
					content:
						"É a chegada rápida do pessoal especializado ao local da ocorrência do sinistro",
					isCorrect: false,
				},
				{
					content:
						"É o transporte adequado de sinistrado ou doente ao posto médico",
					isCorrect: false,
				},
				{
					content:
						"São os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mantê-la viva e impedir o agravamento de situação - opção correta",
					isCorrect: true,
				},
				{
					content:
						"São os meios humanos e materiais utilizados para a remoção dos acidentados.",
					isCorrect: false,
				},
			],
			explanation:
				"Primeiros socorros são os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mantê-la viva e impedir o agravamento da situação.",
		},
		{
			content:
				"Para manter a segurança do veículo, devem ser revistos periodicamente:",
			image: "https://i.ibb.co/v1wnk42/image-46-new.jpg",
			options: [
				{
					content: "As luzes, espelhos e o sistema de escape",
					isCorrect: false,
				},
				{
					content: "Os pneus, amortecedores e travões - opção correta",
					isCorrect: true,
				},
				{ content: "A bateria, o filtro de óleo e o do ar", isCorrect: false },
				{ content: "O sistema de som.", isCorrect: false },
			],
			explanation:
				"Para manter a segurança do veículo, os pneus, amortecedores e travões devem ser revistos periodicamente.",
		},
	];
	const drivingTestQuestions6: Question[] = [
		{
			content: "Nas vias públicas, os peões devem transitar...",
			image: "https://i.ibb.co/CnfbLZP/image-new.jpg",
			explanation:
				"Os peões devem transitar pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas. Esta prática garante a segurança dos peões e uma circulação mais eficiente.",
			options: [
				{
					content:
						"Pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.",
					isCorrect: true,
				},
				{
					content: "Pela faixa de modagem, mesmo que existam bermas.",
					isCorrect: false,
				},
				{
					content:
						"Sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.",
					isCorrect: false,
				},
				{
					content: "Pelos passeios, se empurram um veículo de tração manual.",
					isCorrect: false,
				},
			],
		},
		{
			content: "São evitáveis os acidentes de viação?",
			image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
			explanation:
				"Sim, os acidentes de viação são evitáveis. Podemos aprender a evitá-los e a reduzir as suas consequências através de uma condução responsável e respeito pelas regras de trânsito.",
			options: [
				{
					content: "Não, porque os acidentes ocorrem por acaso.",
					isCorrect: false,
				},
				{
					content:
						"Sim, podemos aprender a evitá-los e a reduzir as suas consequências.",
					isCorrect: true,
				},
				{
					content: "Sim, mas só se o estado das estradas melhorar.",
					isCorrect: false,
				},
				{
					content: "Sim, exceto os causados pelo mau estado dos pneus.",
					isCorrect: false,
				},
			],
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
			content:
				"Pode uma criança com idade inferior a 3 anos viajar no banco da frente do automóvel?",
			image: "https://i.ibb.co/2FbNbS4/image-9-new.jpg",
			explanation:
				"Não, uma criança com idade inferior a 3 anos não deve viajar no banco da frente do automóvel. É mais seguro colocá-la no banco traseiro, utilizando um sistema de retenção adequado.",
			options: [
				{
					content:
						"Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desativado.",
					isCorrect: true,
				},
				{
					content: "Sim, sempre que utilize o cinto de segurança.",
					isCorrect: false,
				},
				{ content: "Não, em nenhum caso.", isCorrect: false },
				{
					content:
						"Sim, quando o automóvel não tenha nenhum cinto de segurança.",
					isCorrect: false,
				},
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
		{
			content: "O que se entende por inconsciência?",
			image: "https://i.ibb.co/0fmwrfB/image-11-new.jpg",
			explanation:
				"No contexto de acidentes de viação, inconsciência refere-se ao estado em que o peito da vítima de acidente de viação desce e sobe regularmente devido à respiração. Isso indica uma condição médica grave e requer assistência imediata.",
			options: [
				{
					content:
						"O estado em que o peito da vítima de acidente de viação desce e sobe regularmente.",
					isCorrect: true,
				},
				{
					content: "O estado no qual o cérebro não está a funcionar bem.",
					isCorrect: false,
				},
				{
					content:
						"A perda de sangue, resultante da abertura dos vasos sanguíneos.",
					isCorrect: false,
				},
				{
					content: "O aumento da frequência das pulsações por minuto.",
					isCorrect: false,
				},
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
				"Deve ter alguma precaução especial quando circula dentro das localidades?",
			image: "https://i.ibb.co/wzD3Gjw/image-13-new.jpg",
			explanation:
				"Sim, ao circular dentro das localidades, o condutor deve moderar a velocidade, especialmente nas vias marginais por edificações. Isso contribui para a segurança de todos os utentes da via.",
			options: [
				{ content: "Não.", isCorrect: false },
				{
					content:
						"Sim, utilizar os sinais sonoros quando se aproximar de peões.",
					isCorrect: false,
				},
				{
					content:
						"Sim, moderar a velocidade, especialmente nas vias marginais por edificações.",
					isCorrect: true,
				},
				{
					content:
						"Sim, apenas não ficar imobilizado nos cruzamentos ou entroncamentos.",
					isCorrect: false,
				},
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
			content:
				"Nesta via de dois sentidos, posso ultrapassar o veículo azul que assinala a sua intenção de ultrapassar o veículo que o precede?",
			image: "https://i.ibb.co/gdwfvzT/image-16-new.jpg",
			explanation:
				"Não, o condutor não pode ultrapassar o veículo azul que assinala a sua intenção de ultrapassar o veículo que o precede. Ultrapassar nesta situação pode ser perigoso e contra as regras de trânsito.",
			options: [
				{ content: "Sim, pela direita.", isCorrect: false },
				{ content: "Não.", isCorrect: true },
				{ content: "Sim, pela esquerda.", isCorrect: false },
				{
					content:
						"Sim, se existir espaço suficiente para os três na faixa de rodagem.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis:",
			image: "https://i.ibb.co/sRLsCdw/image-17-new.jpg",
			explanation:
				"O egoísmo não faz parte das virtudes profissionais necessárias para a boa condução de veículos automóveis. Responsabilidade, cortesia e boas maneiras, e honestidade são importantes.",
			options: [
				{ content: "Responsabilidade.", isCorrect: true },
				{ content: "Egoísmo.", isCorrect: false },
				{ content: "Cortesia e boas maneiras.", isCorrect: true },
				{ content: "Honestidade.", isCorrect: true },
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
			content: "O sono pode provocar um acidente durante o dia?",
			image: "https://i.ibb.co/f4SQyHF/image-19-new.jpg",
			explanation:
				"Sim, o sono pode provocar um acidente durante o dia. Conduzir com sono pode levar a lapsos de atenção e aumento do tempo de reação, colocando em risco a segurança na estrada.",
			options: [
				{
					content: "Não, esse tipo de acidentes só acontece à noite.",
					isCorrect: false,
				},
				{
					content:
						"Sim, os acidentes motivados pelo sono também acontecem durante o dia.",
					isCorrect: true,
				},
				{
					content: "Sim, mas só se conduz sob a influência de álcool.",
					isCorrect: false,
				},
				{
					content: "Sim, mas apenas durante as primeiras horas da manhã.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O condutor pode fazer a verificação do nível do óleo no motor do veículo?",
			image: "https://i.ibb.co/M8T8Y57/image-20-new.jpg",
			explanation:
				"Sim, o condutor pode fazer a verificação do nível do óleo no motor do veículo. É importante que o condutor saiba como realizar essa verificação corretamente.",
			options: [
				{
					content: "Sim, desde que mantenha o motor do veículo a trabalhar.",
					isCorrect: false,
				},
				{
					content: "Não, apenas técnicos especializados o podem fazer.",
					isCorrect: false,
				},
				{
					content: "Sim, desde que saiba a forma correta de verificação.",
					isCorrect: true,
				},
				{
					content: "Não, é uma tarefa exclusiva de mecânicos profissionais.",
					isCorrect: false,
				},
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
				"Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de:",
			image: "https://i.ibb.co/6gWXHhV/image-23-new.jpg",
			explanation:
				"Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de 90 km/h. Respeitar os limites de velocidade contribui para a segurança rodoviária.",
			options: [
				{ content: "90 km/h.", isCorrect: true },
				{ content: "60 km/h.", isCorrect: false },
				{ content: "70 km/h.", isCorrect: false },
				{ content: "80 km/h.", isCorrect: false },
			],
		},
		{
			content: "Uma mulher grávida é obrigada a usar o cinto de segurança?",
			image: "https://i.ibb.co/XF3WmCV/image-24-new.jpg",
			explanation:
				"Sim, uma mulher grávida é obrigada a usar o cinto de segurança. É crucial que o cinto esteja bem colocado para garantir a segurança tanto da mulher como da criança em caso de acidente.",
			options: [
				{
					content: "Não, porque é prejudicial para a criança.",
					isCorrect: false,
				},
				{
					content:
						"Sim, e é muito importante que esteja bem colocado porque senão, tanto ela como a criança, podem sofrer lesões graves em caso de acidente.",
					isCorrect: true,
				},
				{ content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
				{ content: "Sim, mas apenas fora das cidades.", isCorrect: false },
			],
		},
	];
	const drivingTestQuestions7: Question[] = [
		{
			content:
				"O que indica o sinal?",
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
				"Se o condutor sofre de uma doença, que deve fazer para reduzir o risco de ter um acidente?",
			image: "https://i.ibb.co/wh85N7b/image-1-new.png",
			explanation: "Conhecer os efeitos secundários dos medicamentos.",
			options: [
				{
					content:
						"Interromper a medicação que estiver a tomar, se tem que conduzir.",
					isCorrect: false,
				},
				{ content: "Deixar de conduzir em todos os casos.", isCorrect: false },
				{
					content: "Conhecer os efeitos secundários dos medicamentos.",
					isCorrect: true,
				},
				{
					content: "Ignorar os sintomas para evitar distrações.",
					isCorrect: false,
				},
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
				"Os sistemas de segurança passiva dos veículos…",
			image: "https://i.ibb.co/RBfSW6w/image-3-new.png",
			explanation:
				"Devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.",
			options: [
				{
					content:
						"Não são eficazes para reduzir as consequências dos acidentes.",
					isCorrect: false,
				},
				{
					content:
						"Devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.",
					isCorrect: true,
				},
				{ content: "Evitam os acidentes.", isCorrect: false },
				{
					content: "Têm uma manutenção muito cara e complexa.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"A recolha de informação é afetada pela condução noturna. Assim, de noite devo:",
			image: "https://i.ibb.co/9Yq9smp/image-4-new.png",
			explanation: "Moderar a velocidade.",
			options: [
				{ content: "Aumentar um pouco a velocidade.", isCorrect: false },
				{ content: "Manter a mesma velocidade.", isCorrect: false },
				{ content: "Moderar a velocidade.", isCorrect: true },
				{ content: "Circular muito devagar.", isCorrect: false },
			],
		},
		{
			content:
				"Os peões podem transitar pela faixa de rodagem nesta estrada?",
			image: "https://i.ibb.co/4fvpDZd/image-5-new.png",
			explanation:
				"Sim, com prudência e por forma a não prejudicar o trânsito de veículos.",
			options: [
				{
					content:
						"Não, nesta estrada não podem transitar, já que não tem bermas.",
					isCorrect: false,
				},
				{
					content:
						"Sim e devem fazê-lo pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.",
					isCorrect: false,
				},
				{
					content:
						"Sim, com prudência e por forma a não prejudicar o trânsito de veículos.",
					isCorrect: true,
				},
				{
					content: "Sim, mas só quando necessitarem atravessar.",
					isCorrect: false,
				},
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
			content:
				"Fatores de risco serão:",
			image: "https://i.ibb.co/rdnGwJH/image-7-new.png",
			explanation: "Todos os fatores que aumentem o risco de acidente.",
			options: [
				{
					content:
						"Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.",
					isCorrect: false,
				},
				{
					content: "Todas as marcas rodoviárias que contenham riscos.",
					isCorrect: false,
				},
				{
					content: "Todos os fatores que aumentem o risco de acidente.",
					isCorrect: true,
				},
				{ content: "Todos os fatores externos ao condutor.", isCorrect: false },
			],
		},
		{
			content:
				"É proibido parar ou estacionar, fora das localidades:",
			image: "https://i.ibb.co/FhfQvg3/image-8-new.png",
			explanation:
				"A menos de 50 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
			options: [
				{
					content:
						"A menos de 30 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
					isCorrect: false,
				},
				{
					content:
						"A menos de 10 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
					isCorrect: false,
				},
				{
					content:
						"A menos de 50 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
					isCorrect: true,
				},
				{
					content:
						"A menos de 20 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O significado deste sinal é:",
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
			content:
				"O uso do cinto de segurança nos assentos traseiros...",
			image: "https://i.ibb.co/9ZPRWMW/image-11-new.png",
			explanation:
				"Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.",
			options: [
				{
					content: "Só são obrigatórios fora das localidades.",
					isCorrect: false,
				},
				{
					content:
						"São da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.",
					isCorrect: false,
				},
				{
					content:
						"Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.",
					isCorrect: true,
				},
				{ content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
			],
		},
		{
			content:
				"O condutor que pretenda mudar de direção para a esquerda deve:",
			image: "https://i.ibb.co/ZXhHgM4/image-12-new.png",
			explanation:
				"Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais curto.",
			options: [
				{
					content:
						"Aproximar-se, com a necessária antecedência, da margem direita da faixa de rodagem e efetuar a manobra no trajecto mais curto.",
					isCorrect: false,
				},
				{
					content:
						"Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais longo.",
					isCorrect: false,
				},
				{
					content:
						"Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais curto.",
					isCorrect: true,
				},
				{
					content:
						"Aproximar-se, com a necessária antecedência, do eixo da via e efetuar a manobra no trajecto mais curto.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O que indica o sinal?",
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
			content:
				"O que indica o sinal de interesse turístico?",
			image: "https://i.ibb.co/4YZyFRC/image-14-new.png",
			explanation: "Reserva florestal.",
			options: [
				{ content: "Lugar histórico e genérico.", isCorrect: false },
				{ content: "Reserva florestal.", isCorrect: true },
				{ content: "Parque de campismo.", isCorrect: false },
			],
		},
		{
			content:
				"A definição de parque de estacionamento é:",
			image: "https://i.ibb.co/kQW7n2p/image-15-new.png",
			explanation:
				"Local exclusivamente destinado ao estacionamento de veículos.",
			options: [
				{
					content: "Local exclusivamente destinado ao descanso dos condutores.",
					isCorrect: false,
				},
				{
					content:
						"Local exclusivamente destinado às cargas e descargas dos veículos.",
					isCorrect: false,
				},
				{
					content:
						"Local exclusivamente destinado ao estacionamento de veículos.",
					isCorrect: true,
				},
				{
					content:
						"Local exclusivamente destinado à manutenção e reparação dos veículos.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"Existe algum truque para conseguir eliminar o álcool do corpo do condutor, de uma forma mais rápida?",
			image: "https://i.ibb.co/6HC1TRM/image-16-new.png",
			explanation: "Não.",
			options: [
				{ content: "Sim, dormir um pouco.", isCorrect: false },
				{ content: "Sim, tomar doces.", isCorrect: false },
				{ content: "Não.", isCorrect: true },
				{
					content:
						"Consumir alguma substância psicotrópica, como cannabis ou cocaína.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O significado deste sinal é:",
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
			content:
				"A capacidade de o condutor prever e antecipar aumenta:",
			image: "https://i.ibb.co/PrkJBdy/image-18-new.png",
			explanation: "Com a experiência.",
			options: [
				{ content: "Com a categoria do veículo.", isCorrect: false },
				{ content: "Com a velocidade do veículo.", isCorrect: false },
				{ content: "Com a experiência.", isCorrect: true },
				{ content: "Com a idade do condutor.", isCorrect: false },
			],
		},
		{
			content:
				"Exceto o disposto em regulamentos locais e em caso de manifesta necessidade:",
			image: "https://i.ibb.co/9hV5bLR/image-19-new.png",
			explanation:
				"Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direção.",
			options: [
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direção.",
					isCorrect: true,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para estacionar.",
					isCorrect: false,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para a manobra de marcha atrás.",
					isCorrect: false,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para conduzir a grande velocidade.",
					isCorrect: false,
				},
			],
		},
		{
			content:
				"O que indica o sinal?",
			image: "https://i.ibb.co/d289vSz/image-20-new.png",
			explanation: "Ponte estreita.",
			options: [
				{ content: "Passagem estreita.", isCorrect: false },
				{ content: "Ponte estreita.", isCorrect: true },
				{ content: "Entroncamentos sucessivos.", isCorrect: false },
			],
		},
		{
			content:
				"Em épocas de nevoeiro",
			image: "https://i.ibb.co/ZmJ3BX2/image-22-new.png",
			explanation:
				"As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado a ventilar contra o pára-brisas.",
			options: [
				{
					content: "Os vidros e os filtros de óleo sempre limpos.",
					isCorrect: false,
				},
				{ content: "O interior do veículo bem aquecido.", isCorrect: false },
				{
					content:
						"As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado desligados para não prejudicar o pára-brisas.",
					isCorrect: false,
				},
				{
					content:
						"As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado a ventilar contra o pára-brisas.",
					isCorrect: true,
				},
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
			content: "Qual dos veículos tem prioridade de passagem nesta situação?",
			image:
				"https://i.ibb.co/bNWjVMc/hd-7211562727e62353119e1778efb6ad5c-65d7679b2387b.png",
			options: [
				{ content: "O veículo vermelho.", isCorrect: false },
				{ content: "O veículo amarelo.", isCorrect: true },
				{ content: "O primeiro que chegar ao cruzamento.", isCorrect: false },
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
			content: "Quando os peões transitem na faixa de rodagem, devem fazê-lo…",
			image:
				"https://i.ibb.co/qBSPVGD/hd-4afbf9651f3399182e70a8df43252943-65d766a6b987d.png",
			options: [
				{
					content: "A par, quando transitem desde o anoitecer ao amanhecer.",
					isCorrect: false,
				},
				{
					content:
						"Numa única fila, sempre que as condições de visibilidade ou a intensidade do trânsito o aconselhem.",
					isCorrect: true,
				},
				{
					content:
						"Pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.",
					isCorrect: false,
				},
				{
					content:
						"A par, quando transitem em condições de visibilidade insuficiente.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Os condutores com pouco tempo de condução (inexperientes):",
			image:
				"https://i.ibb.co/JvgFsGs/hd-e1b248c4a6e211ef538de4e339bc5050-65d76696b666d.png",
			options: [
				{
					content:
						"Têm capacidades menos eficientes na recolha de informações.",
					isCorrect: true,
				},
				{
					content: "Têm capacidades mais eficientes na recolha de informações.",
					isCorrect: false,
				},
				{
					content: "Têm capacidades mais acertadas na recolha de informações.",
					isCorrect: false,
				},
				{
					content:
						"As capacidades na recolha da informação não têm relação com a experiência, sim com a visão.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Para praticar uma condução defensiva, a antecipação é um comportamento importante.",
			image:
				"https://i.ibb.co/g9d98rL/hd-82c7ea9858a826598c341a944329f4b1-65d767c54a5c6.png",
			options: [
				{ content: "Errado", isCorrect: false },
				{ content: "Só nas passagens para peões.", isCorrect: false },
				{ content: "Certo", isCorrect: true },
				{ content: "Não é importante", isCorrect: false },
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
			content:
				'A Condução Defensiva deve ser mais "pró-activa", isto significa que:',
			image:
				"https://i.ibb.co/DPdVYdP/hd-a9ff28225ecb8c3ccbd9c8163afecfed-65d766606a3e1.png",
			options: [
				{
					content:
						"Deve adivinhar as situações de perigo e concentrar-se em aproximar-se o mais possível da berma para se proteger.",
					isCorrect: false,
				},
				{
					content:
						"Deve estar atento aos ruídos estranhos dos veículos no trânsito e sinalizar.",
					isCorrect: false,
				},
				{
					content:
						"Deve prever as situações antes de acontecerem e, mesmo que não aconteçam, prever a probabilidade de que aconteçam.",
					isCorrect: true,
				},
				{
					content:
						"Deve ser mais rápida e ativa para sair rapidamente das zonas de perigo.",
					isCorrect: false,
				},
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
			content: "Nos dias quentes, é recomendável…",
			image:
				"https://i.ibb.co/qBSPVGD/hd-4afbf9651f3399182e70a8df43252943-65d766a6b987d.png",
			options: [
				{
					content:
						"Efetuar mais descansos durante uma viagem, porque a fadiga e o sono aparecem mais facilmente.",
					isCorrect: true,
				},
				{
					content:
						"Fazer menos descansos durante a viagem, para chegar ao destino o mais rapidamente possível.",
					isCorrect: false,
				},
				{
					content: "Evitar conduzir com o ar condicionado ligado.",
					isCorrect: false,
				},
				{
					content: "Evitar tomar bebidas como água ou sumos naturais.",
					isCorrect: false,
				},
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
			content: "A condução sob influência do álcool provoca no condutor:",
			image:
				"https://i.ibb.co/bXZCLtx/hd-b489d17d66e651e402e0af59ed1617ad-65d76574d1e8e.png",
			options: [
				{ content: "A diminuição do tempo de reação", isCorrect: false },
				{ content: "O aumento do tempo de reação", isCorrect: true },
				{ content: "Não afeta o processo de condução", isCorrect: false },
				{ content: "O aumento dos reflexos", isCorrect: false },
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
		{
			content: "Se perceber o princípio de um incêndio:",
			image:
				"https://i.ibb.co/mHrJ97j/hd-188cc35f026d4e711f91b6baa5594789-65dc86d6e7f4d.png",
			options: [
				{
					content:
						"Actue de imediato, desligando o motor do veículo e utilizando um extintor.",
					isCorrect: true,
				},
				{
					content:
						"Actue de imediato, desligando as luzes do veículo e utilizando um extintor.",
					isCorrect: false,
				},
				{
					content:
						"Actue de imediato, desligando o ar condicionado do veículo e utilizando um extintor.",
					isCorrect: false,
				},
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
		{
			content:
				"Se um indivíduo atingir uma TAS de 1,2 g/l às 0 horas, só por volta das:",
			image:
				"https://i.ibb.co/mXLR4By/hd-da9b493e0230deddc8bdd5afeb11c1d6-65dc9bf7b68b4.png",
			options: [
				{
					content:
						"8 horas do dia seguinte é que terá eliminado completamente o álcool no seu sangue.",
					isCorrect: false,
				},
				{
					content:
						"22 horas do dia seguinte é que terá eliminado completamente o álcool no seu sangue.",
					isCorrect: false,
				},
				{
					content:
						"12 horas do dia seguinte é que terá eliminado completamente o álcool no seu sangue.",
					isCorrect: true,
				},
				{
					content:
						"4 horas do dia seguinte é que terá eliminado completamente o álcool no seu sangue, se dormir bem.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Desde o anoitecer até ao amanhecer, pode deixar as luzes de cruzamento acesas quando o veículo estiver estacionado?",
			image:
				"https://i.ibb.co/LgdgrZv/hd-907ead33a89c3e913bdcda5da551fda3-65dc88023a505.png",
			options: [
				{ content: "Sim, é obrigatório.", isCorrect: false },
				{ content: "Não, é proibido.", isCorrect: true },
				{
					content: "Não, nesta situação deve utilizar as de estrada (máximos).",
					isCorrect: false,
				},
				{
					content:
						"Não, é proibido deixar qualquer luz acesa com o veículo estacionado.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Quais são os efeitos mais comuns da fadiga ao volante?",
			image:
				"https://i.ibb.co/tCcgxpq/hd-0fcbacf5df369cf6d80c5bb0bf56b369-65dc882c1be5a.png",
			options: [
				{
					content:
						"Sentir fome e sede o que provoca a necessidade de se deslocar com maior velocidade para chegar mais rápido ao seu destino.",
					isCorrect: false,
				},
				{
					content:
						"A dificuldade em manter o veículo dentro dos limites da faixa de rodagem.",
					isCorrect: true,
				},
				{
					content: "Sentir-se enérgico podendo controlar melhor o veículo.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/MgYPP9h/Screenshot-2024-02-22-213822-new.jpg",
			options: [
				{
					content: "Indicação de aproximação de entrada de autoestrada.",
					isCorrect: false,
				},
				{
					content: "Indicação de aproximação de entrada de via rápida.",
					isCorrect: false,
				},
				{
					content: "Indicação de aproximação de saída de autoestrada.",
					isCorrect: true,
				},
				{
					content: "Indicação de aproximação de saída de via rápida.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Ao perceber que existe um acidente ou vítimas de doença súbita, deve:",
			image:
				"https://i.ibb.co/wyZTb8d/hd-47c3ead06e6edda8e9c870550f173d87-65dc896d4bb60-1.png",
			options: [
				{
					content:
						"Colocar o triângulo de sinalização, no mínimo a 25 metros do local do acidente e de forma a ser visível a pelo menos 100 metros.",
					isCorrect: false,
				},
				{
					content:
						"Colocar o triângulo de sinalização, no mínimo, a 30 metros do local do acidente e de forma a ser visível a pelo menos 150 metros.",
					isCorrect: false,
				},
				{
					content:
						"Vestir o colete retrorrefletor e colocar o triângulo de sinalização, no mínimo a 30 metros do local do acidente e de forma a ser visível a pelo menos 100 metros.",
					isCorrect: true,
				},
				{
					content:
						"Não colocar o triângulo de sinalização, pois não é necessário.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Como devo agir perante a diminuição da aderência, que provoca o aumento da distância de travagem?",
			image:
				"https://i.ibb.co/LgmLNjG/hd-d3091b3c65fbc5181383d630db254d0a-65dc89f4cb391.png",
			options: [
				{ content: "Aumentar a velocidade.", isCorrect: false },
				{
					content: "A diminuição da aderência diminui a distância de travagem.",
					isCorrect: false,
				},
				{ content: "Diminuir a velocidade.", isCorrect: true },
				{ content: "Manter a velocidade.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O sinal realizado pelo operador da obra indica:",
			image:
				"https://i.ibb.co/ZMpSMr4/hd-e000094f7153d41553553718295f109c-65dc8aa800040.png",
			options: [
				{ content: "Paragem obrigatória.", isCorrect: true },
				{
					content: "Aproximação de uma estrada com prioridade.",
					isCorrect: false,
				},
				{ content: "Paragem obrigatória em quatro vias.", isCorrect: false },
				{ content: "Avance.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A ingestão de drogas:",
			image:
				"https://i.ibb.co/z5fFbhy/hd-bd84f627473bbc66f5bf67f9c849ff5d-65dc8ad929551.png",
			options: [
				{
					content: "Não afeta o equilíbrio e a personalidade do condutor.",
					isCorrect: false,
				},
				{ content: "Só afeta a personalidade do condutor.", isCorrect: false },
				{
					content: "Afeta o equilíbrio e a personalidade do condutor.",
					isCorrect: true,
				},
				{
					content:
						"Se for um consumidor habitual têm pouca influência no seu ato de conduzir.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Deve ajustar o banco e o volante para:",
			image:
				"https://i.ibb.co/CVGp0fq/hd-9633291bbd8079354144d9546eb420e2-65dc994b0f910.png",
			options: [
				{
					content:
						"Que o condutor esteja posicionado o mais próximo do volante.",
					isCorrect: false,
				},
				{
					content:
						"Que o condutor possa manusear o rádio, o GPS e o telemóvel em segurança.",
					isCorrect: false,
				},
				{
					content:
						"Poder proporcionar um maior conforto ao condutor, tendo em atenção a sua estatura.",
					isCorrect: true,
				},
				{
					content: "Não ajustar o banco e o volante, pois não é necessário.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/xJcqTNB/hd-e60b6da46a9b1b715a5162aa8d5c0f89-65dc8d3552d37.png",
			options: [
				{ content: "Bois ou vacas.", isCorrect: false },
				{ content: "Animais.", isCorrect: true },
				{ content: "Zona de pasto de animais.", isCorrect: false },
				{ content: "Travessia para animais.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Para ter a posição mais correta, o condutor deve ter em conta:",
			image:
				"https://i.ibb.co/qyHMQcn/hd-99d58ea513694c6eb419ae74707e89be-65dc8db75fd4d.png",
			options: [
				{
					content:
						"A morfologia física, a utilização eficaz dos controles e comandos e a segurança e o conforto do condutor.",
					isCorrect: true,
				},
				{
					content:
						"O ajuste do cinto de segurança e a fácil regulação dos espelhos retrovisores.",
					isCorrect: false,
				},
				{
					content: "O tipo de via onde transita e as condições adversas.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/2sP3jhy/hd-f2c55ac703af723ab090216db81b545e-65dc8d6ec66f4.png",
			options: [
				{
					content: "Parque de estacionamento para veículos de 12 toneladas.",
					isCorrect: false,
				},
				{
					content: "Parque de estacionamento para veículos de alta tonelagem.",
					isCorrect: true,
				},
				{
					content: "Parque de estacionamento para veículos de 12 eixos.",
					isCorrect: false,
				},
				{
					content:
						"Parque de estacionamento para veículos de mais de 12 metros de comprimento.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/f0BJmJF/hd-9fe533765cb0523a8c6db8ea08aeef25-65dc8d5922c9a.png",
			options: [
				{
					content: "Pista obrigatória para veículos de tração manual.",
					isCorrect: false,
				},
				{ content: "Pista obrigatória para peões.", isCorrect: false },
				{
					content: "Pista obrigatória para peões e velocípedes.",
					isCorrect: true,
				},
				{
					content: "Trânsito proibido a velocípedes e peões.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/TRKdCcY/hd-ba142b28817bcb8066b554c8904694e2-65dc8d49d8468.png",
			options: [
				{
					content: "Obrigação de ceder passagem no próximo cruzamento.",
					isCorrect: false,
				},
				{ content: "Paragem obrigatória.", isCorrect: true },
				{
					content: "Dar prioridade aos veículos automóveis.",
					isCorrect: false,
				},
				{
					content: "Dar prioridade aos veículos automóveis pesados.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A distância de segurança, se o condutor que transita à minha frente diminuir a velocidade:",
			image:
				"https://i.ibb.co/52rbZkh/hd-6122946324dbf32087a0adc0ea0c4df7-65dca7a0f3c64.png",
			options: [
				{ content: "Aumenta.", isCorrect: false },
				{ content: "Diminui.", isCorrect: true },
				{ content: "Não se altera.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"O condutor determina qual é a resposta motora a executar, em que processo da tarefa da condução?",
			image:
				"https://i.ibb.co/z80T1rS/hd-5736f854b1700774fe15ce3d50ec34c2-65dca81325f4c.png",
			options: [
				{ content: "Decisão.", isCorrect: true },
				{ content: "Antecipação.", isCorrect: false },
				{ content: "Previsão.", isCorrect: false },
				{ content: "Recolha.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O vento afeta a estabilidade do veículo:",
			image:
				"https://i.ibb.co/ngMQk0W/hd-ac3c9ec5da2c106c3a2bc1c6d22f95b9-65dca862f1dc3.png",
			options: [
				{
					content: "Particularmente quando é muito forte em túneis.",
					isCorrect: false,
				},
				{
					content: "Particularmente em veículos de caixa aberta.",
					isCorrect: false,
				},
				{
					content: "Particularmente quando é muito forte e sopra lateralmente.",
					isCorrect: true,
				},
				{ content: "Não.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Que veículos consideram-se prioritários?",
			image:
				"https://i.ibb.co/n1TXcFg/hd-9612dc055f09a27aeeb4f64c397a73b2-65dca8a37140d.png",
			options: [
				{
					content: "As ambulâncias que transportam feridos.",
					isCorrect: false,
				},
				{ content: "As comitivas governamentais.", isCorrect: false },
				{
					content:
						"Os que transitam em missão urgente de socorro e comitivas governamentais, assinalando adequadamente a sua marcha.",
					isCorrect: true,
				},
				{ content: "Nenhum dos acima.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/cQgPgBZ/hd-209e803c9cd2e1358661b75afdbaa567-65dca8ee7495f.png",
			options: [
				{ content: "Paragem obrigatória.", isCorrect: false },
				{
					content:
						"Trânsito proibido a veículos com comprimento superior a 60 metros.",
					isCorrect: false,
				},
				{ content: "Paragem obrigatória a 60 metros.", isCorrect: true },
				{ content: "Nenhum dos acima.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Parar ou estacionar, é proibido:",
			image:
				"https://i.ibb.co/dtgL63W/hd-cc1b3e6ac480407a15263a4302a64945-65dd9bdabb12b.png",
			options: [
				{
					content:
						"A menos de 3 m das passagens assinaladas para a travessia de peões e velocípedes.",
					isCorrect: false,
				},
				{
					content:
						"A menos de 10 m das passagens assinaladas para a travessia de peões e velocípedes.",
					isCorrect: false,
				},
				{
					content:
						"A menos de 15 m das passagens assinaladas para a travessia de peões e velocípedes.",
					isCorrect: false,
				},
				{
					content:
						"A menos de 5 m das passagens assinaladas para a travessia de peões e velocípedes.",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/ckRFd6Y/hd-fcf6947a73867b12c827044584f24409-65dd9c278c3c0.png",
			options: [
				{ content: "Sinalização luminosa.", isCorrect: false },
				{ content: "Passagem de nível.", isCorrect: false },
				{ content: "Sinalização luminosa em manutenção.", isCorrect: true },
				{ content: "Nenhum dos acima.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"A distância percorrida desde que o condutor identifica um perigo até que o veículo pare completamente…",
			image:
				"https://i.ibb.co/RDBrGVC/hd-6a1878d3ebc29b2c0ed380febbd76479-65dd9c444ada5.png",
			options: [
				{ content: "depende apenas do estado dos travões.", isCorrect: false },
				{ content: "depende apenas do estado do condutor.", isCorrect: false },
				{ content: "é maior quanto maior for a velocidade.", isCorrect: true },
				{
					content: "só varia se o veículo ou a via estão em mau estado.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/ZTCZHcC/hd-b7e4584a065dabfd435611b84538f8f6-65dd9d0870dd6.png",
			options: [
				{ content: "Terreno com pedras à esquerda.", isCorrect: false },
				{ content: "Terreno falso à esquerda.", isCorrect: true },
				{ content: "Zona de passagem pela direita.", isCorrect: false },
				{ content: "Zona de passagem pela esquerda.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Como pode ser definido o estresse?",
			image:
				"https://i.ibb.co/cTBXztT/hd-867cb467d6ee7c3eb6b3de2598bcad52-65dd9da20214b.png",
			options: [
				{
					content:
						"Acalmia mental diante de pressões ou exigências que ultrapassem os limites das suas próprias capacidades.",
					isCorrect: false,
				},
				{
					content:
						"Indiferença perante pressões ou exigências que ultrapassem os limites das suas próprias capacidades.",
					isCorrect: false,
				},
				{
					content:
						"Tensão mental diante de pressões ou exigências que ultrapassem os limites das suas próprias capacidades.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado destes sinais é:",
			image:
				"https://i.ibb.co/TgN9HL9/hd-329ebc644a2d786ad29e4709352e2e1c-65dd9dea530bc.png",
			options: [
				{
					content:
						"Área reservada para táxis; Pista reservada para velocípedes do lado esquerdo; Área reservada para veículos de deficientes.",
					isCorrect: true,
				},
				{
					content:
						"Área reservada para táxis; Pista reservada para velocípedes do lado direito; Área reservada para veículos de deficientes.",
					isCorrect: false,
				},
				{
					content:
						"Área reservada para táxis; Pista reservada para velocípedes do lado esquerdo; Pista reservada para veículos de deficientes.",
					isCorrect: false,
				},
				{
					content:
						"Área reservada para transporte coletivo; Pista reservada para velocípedes do lado esquerdo; Área reservada para veículos de deficientes.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Que veículos podem conduzir as pessoas que só possuam a carta de condução da categoria B?",
			image:
				"https://i.ibb.co/QDXqp3k/hd-d67a96fd2e9438ad151495e49e9e9eda-65dd9e29c6573.png",
			options: [
				{ content: "Todos.", isCorrect: false },
				{ content: "Automóveis ligeiros.", isCorrect: true },
				{
					content: "Automóveis pesados de mercadorias ou de passageiros.",
					isCorrect: false,
				},
				{ content: "Motociclos com ou sem carro.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A distância de segurança entre veículos em marcha depende:",
			image:
				"https://i.ibb.co/Swx92pj/hd-2d4581518f8414580b03eead5483cca8-65dd9edb2b655.png",
			options: [
				{ content: "Apenas da pressa do condutor.", isCorrect: false },
				{
					content:
						"De que circulem em autoestrada, podendo ser mais pequena neste caso.",
					isCorrect: false,
				},
				{ content: "Sempre da velocidade.", isCorrect: true },
				{ content: "Da capacidade de travagem do veículo.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A definição de cruzamento é:",
			image:
				"https://i.ibb.co/kM38rKg/hd-536a9d077adb4f0a461b29e94bfffea0-65dd9f215323b.png",
			options: [
				{
					content: "Zona de interseção de vias privadas ao mesmo nível.",
					isCorrect: false,
				},
				{
					content: "Zona de interseção de vias privadas ao nível superior.",
					isCorrect: false,
				},
				{
					content: "Zona de interseção de vias públicas ao mesmo nível.",
					isCorrect: true,
				},
				{
					content: "Zona de interseção de vias privadas ao nível inferior.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Quem tem prioridade de passagem nesta intersecção?",
			image:
				"https://i.ibb.co/k1wpj2B/hd-b711f246be33b59d7be202fd86569a36-65dd9f690509c.png",
			options: [
				{
					content: "Os condutores que se apresentem pela esquerda.",
					isCorrect: false,
				},
				{
					content: "Todos os condutores que circulem pela via transversal.",
					isCorrect: false,
				},
				{
					content: "Os condutores que circulem pela via de maior largura.",
					isCorrect: false,
				},
				{
					content: "Os condutores que se apresentem pela direita.",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "É perigoso utilizar o telefone móvel durante a condução?",
			image:
				"https://i.ibb.co/S31MLBr/hd-4dd5ff01acb7f51cf99d46d2df14ad96-65dd9fcd39a1d.png",
			options: [
				{ content: "Não, já que não afeta a condução.", isCorrect: false },
				{
					content:
						"Sim, porque reduz a atenção necessária para conduzir com segurança.",
					isCorrect: true,
				},
				{
					content: "Não, quando a conversa não durar muito tempo.",
					isCorrect: false,
				},
				{
					content: 'Sim, mas só quando se utilizar um aparelho "mãos livres".',
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Um condutor que expressa o descontentamento através de gestos ou palavras agressivas:",
			image:
				"https://i.ibb.co/gR7xcdz/hd-6ee517f03dea397493de559dbd54a354-65dda1bf3ed97.png",
			options: [
				{
					content: "Manifesta agressividade e falta de civismo.",
					isCorrect: true,
				},
				{
					content:
						"Está apenas, e bem, a demonstrar o seu descontentamento com o comportamento dos outros.",
					isCorrect: false,
				},
				{
					content:
						"Está a contribuir para mais e melhor cidadania no trânsito.",
					isCorrect: false,
				},
				{
					content:
						"Está a exercer um direito que lhe assiste perante a ignorância dos outros condutores.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Quando existe cruzamento de veículos?",
			image:
				"https://i.ibb.co/DR19crZ/hd-281dc303e77b36c678cd2dbaead18517-65dda1d0e439f.png",
			options: [
				{
					content:
						"Os condutores de dois veículos que transitem na mesma faixa de rodagem e no mesmo sentido, o que vai à frente realize uma ultrapassagem.",
					isCorrect: false,
				},
				{
					content:
						"Os condutores de dois veículos que transitem na mesma via e no mesmo sentido passem um pelo outro.",
					isCorrect: false,
				},
				{
					content:
						"Os condutores de dois veículos que transitem na mesma estrada e no mesmo sentido passem um pelo outro.",
					isCorrect: false,
				},
				{
					content:
						"Os condutores de dois veículos, que transitem na mesma via e em sentidos opostos, passem um pelo outro em simultâneo.",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quais são os limites de velocidade para automóveis pesados de passageiros?",
			image:
				"https://i.ibb.co/FH2G5nW/hd-c095b332777fe9cc4daa0c39d0abd5b4-65dda2c5b0322.png",
			options: [
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.",
					isCorrect: false,
				},
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.",
					isCorrect: true,
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
			],
			explanation: "",
		},
		{
			content: "A ingestão de drogas:",
			image:
				"https://i.ibb.co/2s7SLVc/hd-e9eb4bc9b4f89dd0b646dbc62a5b0f22-65dda31a5711a.png",
			options: [
				{
					content:
						"Diminui as capacidades do condutor, alterando os reflexos e a coordenação de movimentos.",
					isCorrect: true,
				},
				{
					content:
						"Aumenta as capacidades do condutor, melhorando os reflexos e a coordenação de movimentos.",
					isCorrect: false,
				},
				{
					content:
						"Afeta as capacidades do condutor, melhorando os reflexos e a coordenação de movimentos.",
					isCorrect: false,
				},
				{
					content:
						"Em determinadas condições ajudam o condutor a estar mais atento.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que é a ergonomia de um veículo?",
			image:
				"https://i.ibb.co/mXfXdyx/hd-0db3348d5f872e1669e3be077e3360c9-65ddd11f2d68b.png",
			options: [
				{
					content:
						"É a capacidade de adaptação do equipamento às particularidades de cada ser humano.",
					isCorrect: true,
				},
				{
					content: "É a capacidade de um condutor economizar no combustível.",
					isCorrect: false,
				},
				{
					content: "É a capacidade de um veículo economizar no combustível.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/xSgWJXZ/hd-beed0c279ffc12c3e5d3f3fdbb7a4a2f-65ddd199aff59.png",
			options: [
				{ content: "Congestionamento de tráfego.", isCorrect: false },
				{ content: "Zona de estacionamento em fila.", isCorrect: true },
				{ content: "Zona de paragem em fila.", isCorrect: false },
				{
					content: "Zona onde só podem passar três carros de cada vez.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de tara é:",
			image:
				"https://i.ibb.co/7vXpV8K/hd-60e978b609e86ae7f6a6c894c8e4b00c-65ddd1ce7b63d.png",
			options: [
				{ content: "Peso do veículo com carga.", isCorrect: false },
				{ content: "Peso do veículo em vazio.", isCorrect: true },
				{
					content: "Peso da carga que o veículo transporta.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/ZSNgRJx/hd-0610953b1ae7ce03fa34cf64d762c5e4-65ddd22380883.png",
			options: [
				{ content: "Passagem estreita.", isCorrect: false },
				{ content: "Só veículos pesados de passageiros.", isCorrect: false },
				{ content: "Um veículo de cada vez.", isCorrect: true },
				{ content: "Só veículos pesados de mercadorias.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "As luzes de travagem dos automóveis têm a cor:",
			image:
				"https://i.ibb.co/L9SV6yq/hd-914c8090deffc1b87398b4376e3af027-65ddd26643725.png",
			options: [
				{ content: "Branca ou amarela.", isCorrect: false },
				{ content: "Amarela ou alaranjada.", isCorrect: false },
				{ content: "Vermelha.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Como é feito o processo de eliminação do álcool no organismo?",
			image: "hd-da9b493e0230deddc8bdd5afeb11c1d6-65dc9bf7b68b4.png",
			options: [
				{ content: "Pela urina e pela transpiração.", isCorrect: false },
				{
					content:
						"Pelo ar expirado fígado, pela urina e pela quantidade de água ingerida.",
					isCorrect: false,
				},
				{
					content:
						"Pelo fígado, pelo ar expirado, pela urina e pela transpiração.",
					isCorrect: true,
				},
				{
					content: "Pela quantidade de café e água que tome depois de beber.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A marcha atrás, é uma manobra que deve ser efetuada:",
			image:
				"https://i.ibb.co/X4j7xdn/hd-5904760720f25aa96cd5e11af4fa06e4-65ddd9ab890a3.png",
			options: [
				{
					content: "o mais à direita possível, em local de boa visibilidade.",
					isCorrect: false,
				},
				{
					content:
						"o mais rapidamente possível, em local onde não prejudique o trânsito.",
					isCorrect: false,
				},
				{
					content: "lentamente e o mais possível à esquerda.",
					isCorrect: true,
				},
				{
					content: "rapidamente e no menor trajeto possível.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor de veículo utilizado no transporte colectivo de passageiros, só pode parar nas faixas de rodagem para:",
			image:
				"https://i.ibb.co/cgQ5DpY/hd-c9685430e62079dd1eb07f8c6af62e56-65dddb35e4620.png",
			options: [
				{
					content: "Carregar e descarregar mercadorias, só durante o dia.",
					isCorrect: false,
				},
				{
					content: "Carregar e descarregar mercadorias, só durante a noite.",
					isCorrect: false,
				},
				{
					content:
						"A entrada e saída de passageiros nos locais especialmente destinados a esse fim.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O agente de trânsito que aparece na fotografia, manda:",
			image:
				"https://i.ibb.co/0h140Nj/hd-9bacdb2bd68cfde542b93130d68d5168-65dddb8bd865a.png",
			options: [
				{
					content: "Avançar o tráfego que venha da retaguarda.",
					isCorrect: false,
				},
				{
					content: "Avançar o tráfego que venha da esquerda.",
					isCorrect: true,
				},
				{ content: "Parar o tráfego que venha da esquerda.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Dentro das localidades, durante a noite:",
			image:
				"https://i.ibb.co/C0JxYnz/hd-ed49544af37969db320871656316f9f9-65dddc7acacc1.png",
			options: [
				{
					content:
						"Não é obrigatória a substituição dos sinais sonoros pelos sinais luminosos.",
					isCorrect: false,
				},
				{
					content:
						"É obrigatória a substituição dos sinais sonoros pelos sinais gestuais.",
					isCorrect: false,
				},
				{
					content:
						"É obrigatória a substituição dos sinais sonoros pelos sinais luminosos.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Nas pontes, túneis e passagens de nível:",
			image:
				"https://i.ibb.co/hcmHhpj/hd-8b7de71b20ed3ca5c885a3fdbe7f31d6-65dddd11b57c8.png",
			options: [
				{
					content: "Os animais atrelados ou não, devem seguir a passo.",
					isCorrect: true,
				},
				{
					content:
						"Os animais só quando estiverem atrelados, devem seguir a passo.",
					isCorrect: false,
				},
				{
					content:
						"Os animais quando não atrelados, devem seguir a passo de corrida.",
					isCorrect: false,
				},
				{
					content:
						"Os animais atrelados, ou não devem seguir a passo de corrida.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Se conduz muito tempo sem descansar…",
			image:
				"https://i.ibb.co/yYk9p5T/hd-2023f1db68054790e077f0319035ea85-65dddd73a53dc.png",
			options: [
				{ content: "Aumenta a atenção do condutor.", isCorrect: false },
				{ content: "A condução torna-se perigosa.", isCorrect: true },
				{ content: "Aumenta a segurança.", isCorrect: false },
				{ content: "O condutor relaxa-se e conduz melhor.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/nB9wsBG/hd-2ec349702edffc7e9c471adeced55239-65ddddd930f45-1.png",
			options: [
				{
					content:
						"Trânsito proibido ao conjunto de veículos de mercadorias, de peso total superior a 10t.",
					isCorrect: false,
				},
				{
					content:
						"Trânsito proibido a veículos de peso por eixo superior a 10t.",
					isCorrect: false,
				},
				{
					content:
						"Trânsito proibido a veículos de peso por eixo múltiplo superior a 10t.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal de perigo?",
			image: "hd-a27848cc32acfeaf7f924e1e8c9bed40-65dddf53221bc.png",
			options: [
				{ content: "Controlo policial por pirilampos.", isCorrect: false },
				{
					content: "Aproximação de uma estrada com prioridade.",
					isCorrect: false,
				},
				{ content: "Sinalização luminosa.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Depois de ter tornado bebidas alcoólicas…",
			image: "hd-073ab4ec411f9780448458f7358c7133-65dddf79bcce3.png",
			options: [
				{
					content: "O álcool entra rapidamente no sistema circulatório.",
					isCorrect: true,
				},
				{
					content: "O álcool entra diretamente no sistema urinário.",
					isCorrect: false,
				},
				{
					content:
						"O álcool demora duas horas a entrar no sistema circulatório.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Que indica o sinal?",
			image:
				"https://i.ibb.co/vkzMdFp/hd-61efffa9c938c9bf3d0ab853baea250a-65dddfa896165.png",
			options: [
				{ content: "Terreno falso à direita.", isCorrect: false },
				{ content: "Cruzamento facilmente congestionável.", isCorrect: false },
				{ content: "Congestionamento de tráfego.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O sinal pertence ao grupo de sinais de:",
			image:
				"https://i.ibb.co/gdVf8wW/hd-4c19ce8ebc3e36ce1ee1816a1ae5401c-65dde030a3c51.png",
			options: [
				{ content: "Pré-sinalização e de direção.", isCorrect: false },
				{ content: "Direção.", isCorrect: false },
				{ content: "Direção para auto-estradas.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A definição de tractor é:",
			image:
				"https://i.ibb.co/vm8yQgY/hd-5cd777c416dda3117458622562b234b4-65dde078e8c4a-1.png",
			options: [
				{
					content:
						"Veículo a motor exclusivamente construído para desenvolver esforço de tração, sem comportar carga útil.",
					isCorrect: true,
				},
				{
					content:
						"Veículo automóvel exclusivamente construído para desenvolver esforço de tração, sem comportar carga útil.",
					isCorrect: false,
				},
				{
					content:
						"Veículo automóvel exclusivamente construído para desenvolver esforço de tração, comportando carga útil.",
					isCorrect: false,
				},
				{
					content:
						"Veículo automóvel exclusivamente construído para desenvolver esforço do motor, comportando alguma carga.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A condução em dias de chuva provoca um aumento do risco de acidente, por causa de fatores como:",
			image:
				"https://i.ibb.co/S7vcvjJ/hd-5249a34220eff06548e3f8663a5070ab-65dde172d1ba5.png",
			options: [
				{
					content: "Menor visibilidade, menor aderência e maior stress físico.",
					isCorrect: true,
				},
				{
					content: "Maior tempo de reação e menor tempo de paragem.",
					isCorrect: false,
				},
				{
					content: "Piso mais escorregadio e menor distância de paragem.",
					isCorrect: false,
				},
				{
					content: "Diminuição do tempo de reação por falta de visibilidade.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como deve atuar o condutor quando tem que fazer uma curva?",
			image:
				"https://i.ibb.co/qL8JZpN/hd-d469d1765057ff45545f7091c66cc46b-65dde198e917b.png",
			options: [
				{
					content: "Reduzir a velocidade, já dentro da curva.",
					isCorrect: false,
				},
				{
					content: "Aumentar a velocidade, antes de entrar na curva.",
					isCorrect: false,
				},
				{
					content: "Adaptar a velocidade, antes de entrar na curva.",
					isCorrect: true,
				},
				{
					content:
						"Pressionar o pedal de embraiagem e não acelerar dentro da curva.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Fumar enquanto conduz…",
			image:
				"https://i.ibb.co/sVcMwQ7/hd-2ba35438945bb623653a280e8c144b37-65df9767841a8.png",
			options: [
				{
					content: "é aconselhável, pois ajuda a manter a atenção.",
					isCorrect: false,
				},
				{ content: "é proibido.", isCorrect: false },
				{ content: "pode afetar a atenção na condução.", isCorrect: true },
				{ content: "reduz a agressividade do condutor.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Na via pública, a carga e descarga de um veículo deve ser feita:",
			image:
				"https://i.ibb.co/Bjb8vVd/hd-c1c93d3fd7c933d189c390c4cfe0b678-65e0413e076a5.png",
			options: [
				{ content: "Sempre pela direita.", isCorrect: false },
				{ content: "Sempre pela retaguarda.", isCorrect: false },
				{
					content:
						"Pela retaguarda ou pelo lado permitido para a paragem do veículo.",
					isCorrect: true,
				},
				{ content: "Sempre pela esquerda", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Que entende-se por consciência moral?",
			image:
				"https://i.ibb.co/GMR2WS5/hd-26f725e98ae871c5d7b96c47758312a5-65e041ee8178d.png",
			options: [
				{
					content:
						"A capacidade de o indivíduo interpretar os sinais de trânsito.",
					isCorrect: false,
				},
				{
					content:
						"A faculdade de a pessoa distinguir entre o bem e o mal, de julgar os seus atos e de adotar uma determinada forma de conduta.",
					isCorrect: true,
				},
				{
					content:
						"A faculdade de permitir a passagem dos peões na mudança de direção para a esquerda.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Os condutores não podem exceder as seguintes velocidades instantâneas (em quilômetros/hora):",
			image:
				"https://i.ibb.co/0Ch90pw/hd-15d05748c1b15c7a74a7d1871ab6cbd0-65e04223cfff4.png",
			options: [
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.",
					isCorrect: false,
				},
				{
					content:
						"Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.",
					isCorrect: true,
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
			],
			explanation: "",
		},
		{
			content: "Os sinais sonoros:",
			image:
				"https://i.ibb.co/r2zZY5V/hd-96d6a194a68912719fa28c52bdfd83b9-65e04215d32fe.png",
			options: [
				{
					content: "Não podem ser afinados ou reparados na via pública.",
					isCorrect: true,
				},
				{
					content: "Podem ser afinados ou reparados na via pública.",
					isCorrect: false,
				},
				{
					content:
						"Podem ser afinados ou reparados na via pública só durante a noite.",
					isCorrect: false,
				},
				{
					content:
						"Podem ser afinados ou reparados na via pública só durante o dia.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/nDj9VVT/hd-0eb05c0d92860ae759f84b0ca119752b-65e04393ba70d.png",
			options: [
				{ content: "Descida de inclinação acentuada.", isCorrect: false },
				{ content: "Subida de inclinação acentuada.", isCorrect: true },
				{
					content: "Descida de inclinação acentuada para camiões.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Que indica o sinal?",
			image:
				"https://i.ibb.co/C0K7tgM/hd-c1a5ae147c51467ddaa3b84f3efb68b2-65e0436580a72.png",
			options: [
				{ content: "Pavimento escorregadio.", isCorrect: false },
				{ content: "Visibilidade reduzida.", isCorrect: true },
				{ content: "Início de estrada alcatroada.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"É necessário regular e ajustar o encosto de cabeça para a altura dos ocupantes?",
			image:
				"https://i.ibb.co/tYY2k0W/hd-047eeda7601bdfc465f99ccf8dd37dd0-65e043472f8e0.png",
			options: [
				{
					content: "Não é necessário, porque é apenas um elemento de conforto.",
					isCorrect: false,
				},
				{ content: "Sim, mas só nos bancos da frente.", isCorrect: false },
				{
					content: "Sim, porque pode evitar lesões na zona do pescoço.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/1Tjsvh2/hd-1fb2fc34607bbe3d297045f3552a3a1e-65e044b39a251.png",
			options: [
				{ content: "Descida de inclinação acentuada.", isCorrect: false },
				{ content: "Entrocamento oblíquo à direita.", isCorrect: false },
				{
					content:
						"Descida de inclinação acentuada ao longo da distância indicada.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"As pessoas que são encontradas a conduzir sem possuir carta de condução:",
			image:
				"https://i.ibb.co/GxdF4q4/hd-crop-93e2517ab6de1e9172e44959460a8fff-65e044e32611a.png",
			options: [
				{
					content:
						"São punidas com pena de prisão de três dias a seis meses e multa de 5000 Mt.",
					isCorrect: true,
				},
				{
					content: "São punidas apenas com uma multa de 500 Mt.",
					isCorrect: false,
				},
				{
					content:
						"São punidas com pena de prisão de um a três dias e multa de 5000 Mt.",
					isCorrect: false,
				},
				{ content: "Não podem ser punidas.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Um dos elementos de segurança é a almofada de ar (airbag)?",
			image:
				"https://i.ibb.co/GRh8Rfw/hd-feb67e91bd3721ef31c5dffeca6652fd-65e044fe652c0.png",
			options: [
				{ content: "Não.", isCorrect: false },
				{ content: "Sim, de segurança passiva.", isCorrect: true },
				{ content: "Sim, de segurança ativa.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O condutor seleciona o ato motor a realizar em que momento?",
			image:
				"https://i.ibb.co/17BWZpg/hd-95a8e439377ba9aa426dd322d4bfb6d1-65e0466645da7-1.png",
			options: [
				{ content: "Quando recolhe a informação.", isCorrect: false },
				{ content: "Quando trata a informação.", isCorrect: false },
				{ content: "Quando age sobre o veículo.", isCorrect: true },
				{ content: "Quando deteta um perigo.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "As luzes de máximos, com nevoeiro (cacimba):",
			image:
				"https://i.ibb.co/zPtxYRL/hd-d8dcbdc5158e843daf36c8711f46cbbe-65e0478b7f9ca.png",
			options: [
				{ content: "Devem obrigatoriamente ser usadas.", isCorrect: false },
				{
					content: "Devem ser evitadas, em especial à noite.",
					isCorrect: true,
				},
				{ content: "Só devem ser usadas à noite.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Se o condutor consome álcool, em que momento aumenta o risco de acidente?",
			image:
				"https://i.ibb.co/jTT2RBG/hd-crop-fd4483e95e15b622f20143edd5b8ca6c-65e04752bbd24.png",
			options: [
				{
					content: "Antes de superar o limite legal permitido.",
					isCorrect: true,
				},
				{
					content: "Depois de superar o limite legal permitido.",
					isCorrect: false,
				},
				{
					content: "Só quando o consome com substâncias psicotrópicas.",
					isCorrect: false,
				},
				{ content: "Só quando é tomado com medicamentos.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Os jovens têm mais possibilidades de ter acidentes rodoviários?",
			image:
				"https://i.ibb.co/N2dmMNw/hd-bfd5f311340eca4052b588abaf8f15d5-65e0485cb0ca8.png",
			options: [
				{ content: "Sim, devido à falta de reflexos.", isCorrect: false },
				{ content: "Sin, a sua visão é mais reduzida.", isCorrect: false },
				{
					content: "Sim, normalmente fazem uma avaliação incorreta dos riscos.",
					isCorrect: true,
				},
				{ content: "Não.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Qual é a velocidade instantânea que não devem exceder os automóveis ligeiros de passageiros e mistos dentro das localidades?",
			image:
				"https://i.ibb.co/7jSfFwC/hd-22ff7c0da43bcadedfb4342a9ef2d154-65e0497edfec7.png",
			options: [
				{ content: "50 km/h, se tem reboque.", isCorrect: false },
				{ content: "60 km/h.", isCorrect: true },
				{ content: "40 km/h.", isCorrect: false },
				{ content: "70 km/h.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A definição de estacionamento é:",
			image:
				"https://i.ibb.co/85d1Xz8/hd-crop-4fbfa27379e39bed93ecd1ebc832e305-65e04909106f7.png",
			options: [
				{
					content:
						"Imobilização de um veículo que constitua paragem e que seja motivada por circunstâncias próprias da circulação.",
					isCorrect: true,
				},
				{
					content:
						"Imobilização de um veículo que não constitua paragem e que seja motivada por circunstâncias próprias da circulação.",
					isCorrect: false,
				},
				{
					content:
						"Imobilização de um veículo que não constitua paragem e que não seja motivada por circunstâncias próprias da circulação.",
					isCorrect: false,
				},
				{
					content:
						"Imobilização de um veículo que constitua paragem e que seja motivada por circunstâncias de excesso de tráfego.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como o álcool afeta a tarefa de conduzir?",
			image:
				"https://i.ibb.co/PZRJFJZ/hd-19000a6a9d66f3624e20b249aaffb1fd-65e04a61c8695.png",
			options: [
				{ content: "Reduz o campo de visão do condutor.", isCorrect: true },
				{
					content:
						"Aumenta a atenção do condutor, assim que as distrações são reduzidas.",
					isCorrect: false,
				},
				{ content: "Melhora a apreciação das velocidades.", isCorrect: false },
				{ content: "Melhora a apreciação das distâncias.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O vento afeta a estabilidade do veículo:",
			image:
				"https://i.ibb.co/Hd84ZPq/hd-638d537d8c78c441970596f9a42e778e-65e04af95a17a.png",
			options: [
				{
					content: "Particularmente quando é muito forte em túneis.",
					isCorrect: false,
				},
				{
					content: "Particularmente quando é muito forte e sopra lateralmente.",
					isCorrect: true,
				},
				{
					content: "Particularmente em veículos de caixa aberta.",
					isCorrect: false,
				},
				{ content: "Não.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/ZWLMb08/Screenshot-2024-02-29-111334-new.jpg",
			options: [
				{ content: "Advertência da direção de saída.", isCorrect: false },
				{ content: "Pré-advertência da direção de saída.", isCorrect: true },
				{ content: "Direção de saída.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A definição de autoestrada é:",
			image: "https://i.ibb.co/ZWvqFCd/Screenshot-2024-02-29-111725-new.jpg",
			options: [
				{
					content:
						"Via pública destinada a trânsito lento, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, sem separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.",
					isCorrect: true,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, com cruzamentos de nível e com acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Ao ligar as luzes, se no painel aparecer o símbolo do farol, com a cor azul, indica que:",
			image: "https://i.ibb.co/cNH2yMd/Screenshot-2024-03-01-103142-new.png",
			options: [
				{
					content: "Estão ligadas as luzes de estrada (máximos).",
					isCorrect: true,
				},
				{
					content: "Estão ligadas as luzes de cruzamento (médios).",
					isCorrect: false,
				},
				{ content: "Estão ligadas as luzes de presença.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Quando existe dificuldade na recolha de informação, a velocidade:",
			image: "https://i.ibb.co/njwdGKV/Screenshot-2024-03-01-103442-new.png",
			options: [
				{ content: "Deve aumentar.", isCorrect: false },
				{ content: "Deve diminuir.", isCorrect: true },
				{
					content:
						"Deve manter-se, desde que as luzes do veículo estejam ligadas.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Para que aconteçam graves acidentes de trânsito, a fadiga é um dos fatores que mais contribuem, sobretudo:",
			image: "https://i.ibb.co/Tt7fB3w/Screenshot-2024-03-01-103516-new.png",
			options: [
				{ content: "Durante a manhã.", isCorrect: false },
				{ content: "Durante a noite.", isCorrect: true },
				{ content: "Durante a tarde.", isCorrect: false },
				{ content: "Entre as 15 e as 17 horas.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Nesta situação, posso ultrapassar?",
			image: "https://i.ibb.co/ByRVqpr/Screenshot-2024-03-01-103627-new.png",
			options: [
				{ content: "Não.", isCorrect: false },
				{
					content:
						"Sim, mas só aos veículos que mudam de direção para a direita.",
					isCorrect: false,
				},
				{
					content: "Sim, já que tenho prioridade no cruzamento.",
					isCorrect: true,
				},
				{
					content: "Sim, mas só aos veículos de duas rodas.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor de um ciclomotor pode levar o capacete mal ajustado e apertado?",
			image: "https://i.ibb.co/X53rRYG/Screenshot-2024-03-01-103632-new.png",
			options: [
				{
					content:
						"Não, porque não garante uma proteção eficaz em caso de acidente.",
					isCorrect: true,
				},
				{
					content: "Sim, sempre que seja um modelo aprovado oficialmente.",
					isCorrect: false,
				},
				{
					content: "Sim, ainda que seja um modelo não aprovado oficialmente.",
					isCorrect: false,
				},
				{
					content:
						"Sim, já que não é obrigatório para os condutores de ciclomotores.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O sinal, quando proíbe a inversão do sentido de marcha?",
			image: "https://i.ibb.co/wSWzg50/Screenshot-2024-03-01-103640-new.png",
			options: [
				{ content: "De dia.", isCorrect: false },
				{ content: "De noite.", isCorrect: true },
				{ content: "Nos dias de chuva.", isCorrect: false },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/LR2sSPY/Screenshot-2024-03-01-103957-new.png",
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
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Quais são os efeitos mais comuns da fadiga ao volante?",
			image: "https://i.ibb.co/Tt7fB3w/Screenshot-2024-03-01-103516-new.png",
			options: [
				{
					content:
						"Sentir fome e sede, o que provoca a necessidade de se deslocar com maior velocidade para chegar ao seu destino.",
					isCorrect: false,
				},
				{
					content:
						"A dificuldade em manter o veículo dentro dos limites da faixa de rodagem.",
					isCorrect: true,
				},
				{
					content: "Sentir-se enérgico, podendo controlar melhor o veículo.",
					isCorrect: false,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/NN1RVH1/Screenshot-2024-03-01-104024-new.png",
			options: [
				{ content: "Via de sentido único.", isCorrect: false },
				{ content: "Via de sentido único para a esquerda.", isCorrect: false },
				{ content: "Via de sentido único para a direita.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A definição de berma é:",
			image: "https://i.ibb.co/VxK1JDb/Screenshot-2024-03-01-104313-new.png",
			options: [
				{
					content:
						"Superfície de via pública destinada ao trânsito de veículos e que ladeia a faixa de rodagem.",
					isCorrect: false,
				},
				{
					content:
						"Superfície de via pública não especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem.",
					isCorrect: false,
				},
				{
					content:
						"Superfície de via pública não especialmente destinada ao trânsito de automóveis e que ladeia a faixa de rodagem.",
					isCorrect: true,
				},
				{
					content:
						"Superfície de via pública especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/zf6qxSd/Screenshot-2024-03-01-104319-new.png",
			options: [
				{
					content: "Área reservada para veículos de dimensões normais.",
					isCorrect: false,
				},
				{
					content: "Área reservada para veículos de dimensões anormais.",
					isCorrect: true,
				},
				{
					content: "Área reservada para veículos de pesos anormais.",
					isCorrect: false,
				},
				{
					content: "Área reservada para veículos de comprimentos anormais.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Pode ter consequências num acidente o facto de não levar o cinto de segurança bem colocado?",
			image: "https://i.ibb.co/hsjQFHY/Screenshot-2024-03-01-133628-new.png",
			options: [
				{
					content: "Não, se o veículo estiver equipado com airbag.",
					isCorrect: false,
				},
				{ content: "Não, o cinto é sempre eficaz.", isCorrect: false },
				{
					content: "Sim, porque pode provocar ferimentos graves.",
					isCorrect: true,
				},
				{
					content: "Sim, por isso o seu uso não é obrigatório.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Qual é a hierarquia entre as prescrições resultantes da sinalização?",
			image: "https://i.ibb.co/qC6kx63/Screenshot-2024-03-01-134129-new.png",
			options: [
				{
					content:
						"Prescrições resultantes dos sinais verticais e prescrições resultantes de sinalização temporária que modifique o regime normal de utilização da via.",
					isCorrect: false,
				},
				{
					content:
						"Prescrições resultantes das marcas rodoviárias e prescrições resultantes dos sinais verticais.",
					isCorrect: false,
				},
				{
					content:
						"Prescrições resultantes de sinalização temporária que modifique o regime normal de utilização da via e prescrições resultantes dos sinais luminosos.",
					isCorrect: true,
				},
				{
					content:
						"Prescrições resultantes das marcas rodoviárias e prescrições resultantes de sinalização temporária que modifique o regime normal de utilização da via.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/bJWStDL/Screenshot-2024-03-01-134135-new.png",
			options: [
				{
					content: "Área reservada para autocarros de excursão.",
					isCorrect: true,
				},
				{
					content: "Área reservada para autocarros de transporte escolar.",
					isCorrect: false,
				},
				{
					content: "Área reservada para veículos de passeio.",
					isCorrect: false,
				},
				{
					content: "Área reservada para autocarros de turismo.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor, quando mude de direção, tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem?",
			image: "https://i.ibb.co/f0Tj9KT/Screenshot-2024-03-01-134142-new.png",
			options: [
				{ content: "Não.", isCorrect: false },
				{
					content: "Sim, mas só aos que o façam pela passagem para peões.",
					isCorrect: false,
				},
				{ content: "Sim.", isCorrect: true },
				{ content: "Não.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Em condições de nevoeiro (cacimba), a velocidade segura a que circula:",
			image: "https://i.ibb.co/n8jzR1C/Screenshot-2024-03-01-134707-new.png",
			options: [
				{
					content: "Deve ser a velocidade indicada pela sinalização vertical.",
					isCorrect: false,
				},
				{
					content:
						"Deve permitir que o condutor consiga parar no espaço livre e visível.",
					isCorrect: true,
				},
				{ content: "Deve ser uma velocidade muito lenta.", isCorrect: false },
				{ content: "Deve ser inferior a 40 Km/h.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"A luz indicadora de mudança de direção à direita acionada ao iniciar uma ultrapassagem, só deve ser desligada…",
			image: "https://i.ibb.co/2PbNmZX/Screenshot-2024-03-01-134715-new.png",
			options: [
				{
					content: "Quando termine de mudar de via de trânsito.",
					isCorrect: true,
				},
				{ content: "Uma vez finalizada a ultrapassagem.", isCorrect: false },
				{ content: "Antes de mudar de via de trânsito.", isCorrect: false },
				{
					content: "Só depois de percorrer uma distância de 500 metros.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Quais são os princípios gerais do socorrimento?",
			image: "https://i.ibb.co/HKpXnKg/Screenshot-2024-03-01-135017-new.png",
			options: [
				{ content: "Prevenir, alertar e socorrer.", isCorrect: true },
				{ content: "Prevenir, socorrer e evacuar.", isCorrect: false },
				{ content: "Prevenir, observar e socorrer.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Num acidente há feridos muito graves. Que deve fazer se não sabe como os ajudar?",
			image: "https://i.ibb.co/HqR6G2S/Screenshot-2024-03-01-135023-new.png",
			options: [
				{ content: "Abandonar o local e não fazer nada.", isCorrect: false },
				{ content: "Não lhes tocar e ligar ao 112.", isCorrect: true },
				{
					content:
						"Retirar rapidamente os feridos do veículo e levá-los para o hospital mais próximo.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de passeio é:",
			image: "https://i.ibb.co/xqQ6sWY/Screenshot-2024-03-01-135245-new.png",
			options: [
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de veículos.",
					isCorrect: false,
				},
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada ao estacionamento de veículos.",
					isCorrect: false,
				},
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de peões.",
					isCorrect: true,
				},
				{
					content:
						"Parte da faixa de rodagem, destinada exclusivamente ao trânsito de peões.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Que entende-se por dever?",
			image: "https://i.ibb.co/p4wyxJ3/Screenshot-2024-03-01-135249-new.png",
			options: [
				{
					content:
						"A obrigação de avançar rapidamente, logo que o sinal verde do semáforo assim o permita.",
					isCorrect: false,
				},
				{
					content: "A intenção de iniciar a marcha sem a devida sinalização.",
					isCorrect: false,
				},
				{
					content:
						"A obrigação moral de proceder de acordo com as normas e a consciência.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Os sistemas de segurança passiva dos veículos têm a função de:",
			image: "https://i.ibb.co/LzWh2XW/Screenshot-2024-03-01-135935-new.png",
			options: [
				{ content: "Evitar os acidentes.", isCorrect: false },
				{
					content:
						"Evitar ou reduzir as lesões que podem ocorrer no caso de sofrer um acidente.",
					isCorrect: true,
				},
				{
					content:
						"Transmitir uma sensação de segurança quando se circula a velocidades elevadas.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/CQVRyQX/Screenshot-2024-03-01-135940-new.png",
			options: [
				{ content: "Área reservada para miniautocarros.", isCorrect: false },
				{
					content: "Área reservada para veículos de emergência.",
					isCorrect: true,
				},
				{
					content: "Área reservada para veículos com dimensões anormais.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A sonolência provocada pela fadiga provoca o aumento:",
			image: "https://i.ibb.co/bXZj01s/Screenshot-2024-03-01-135946-new.png",
			options: [
				{ content: "Da distância de travagem.", isCorrect: false },
				{
					content: "Do tempo de reação e não da distância de paragem.",
					isCorrect: false,
				},
				{
					content: "Do tempo de reação e da distância de paragem.",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "Para combater a fadiga e o sono, o melhor remédio é:",
			image: "https://i.ibb.co/rxRP2Rd/Screenshot-2024-03-01-165447-new.png",
			options: [
				{
					content:
						"Parar de conduzir, descansar e, se necessário, dormir um pouco.",
					isCorrect: true,
				},
				{
					content: "Conduzir com o banco inclinado para trás.",
					isCorrect: false,
				},
				{ content: "Fechar todas as janelas.", isCorrect: false },
				{ content: "Tomar uma bebida com álcool.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Entende-se por tarefa de condução aquela que tem como principal objetivo:",
			image: "https://i.ibb.co/YfBpJHL/Screenshot-2024-03-01-165454-new.png",
			options: [
				{
					content: "O controlo de um veículo e do espaço envolvente.",
					isCorrect: true,
				},
				{
					content: "O controlo do trânsito e dos sinais dos outros condutores.",
					isCorrect: false,
				},
				{ content: "O autocontrolo no trânsito.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?",
			image: "https://i.ibb.co/TTRYfHG/Screenshot-2024-03-01-165804-new.png",
			options: [
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 750 kg.",
					isCorrect: true,
				},
				{ content: "Não, é necessária a da categoria C1E.", isCorrect: false },
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 3500 kg.",
					isCorrect: false,
				},
				{ content: "Não, é necessária a da categoria G.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/SK05JZr/Screenshot-2024-03-01-165813-new.png",
			options: [
				{ content: "Controlo de tráfego adiante.", isCorrect: true },
				{
					content: "Controlo de tráfego com obrigatoriedade de parar.",
					isCorrect: false,
				},
				{ content: "Controlo de tráfego a 100 metros.", isCorrect: false },
				{ content: "Controlo de tráfego a 50 metros.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/hBV0vW3/Screenshot-2024-03-01-165820-new.png",
			options: [
				{
					content:
						"Parque de estacionamento para veículos pesados que transportam substâncias perigosas.",
					isCorrect: false,
				},
				{
					content:
						"Parque de estacionamento para veículos que transportam substâncias perigosas.",
					isCorrect: true,
				},
				{
					content:
						"Parque de estacionamento para veículos que transportam substâncias não autorizadas.",
					isCorrect: false,
				},
				{
					content:
						"Parque de estacionamento para veículos que transportam material militar.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Com o fim de ter uma boa capacidade de manobra e garantir o bom funcionamento dos sistemas de segurança do veículo, o condutor deve regular o assento:",
			image: "Screenshot-2024-03-01-170228-new.png (1928×1024) (ibb.co)",
			options: [
				{
					content:
						"Por forma a ficar muito próximo do volante, com as pernas e braços encolhidos.",
					isCorrect: false,
				},
				{
					content:
						"Por forma a ficar longe do volante, com as pernas e braços esticados.",
					isCorrect: false,
				},
				{
					content:
						"Por forma a que as pernas e braços fiquem ligeiramente fletidos.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/x62y07b/Screenshot-2024-03-01-170235-new.png",
			options: [
				{ content: "Convergência de filas à direita.", isCorrect: false },
				{ content: "Fim da fila à direita.", isCorrect: true },
				{ content: "Convergência de filas à esquerda.", isCorrect: false },
				{ content: "Fim da fila à esquerda.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Nas vias públicas, os peões devem transitar:",
			image: "https://i.ibb.co/7CKhnhX/Screenshot-2024-03-01-170241-new.png",
			options: [
				{
					content: "Pela faixa de rodagem, mesmo que existam bermas.",
					isCorrect: true,
				},
				{
					content:
						"Sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.",
					isCorrect: false,
				},
				{
					content:
						"Pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.",
					isCorrect: false,
				},
				{
					content: "Pelos passeios, se empurram um veículo de tração manual.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A linha transversal descontínua é uma:",
			image: "https://i.ibb.co/HrzZTqB/Screenshot-2024-03-01-170616-new.png",
			options: [
				{ content: "Linha de paragem obrigatória.", isCorrect: false },
				{ content: "Linha descontínua de aviso.", isCorrect: false },
				{ content: "Linha de cedência de prioridade.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Nesta situação, se não for possível efetuar o cruzamento com segurança, como deve proceder o condutor?",
			image: "https://i.ibb.co/q0kK70L/Screenshot-2024-03-01-170621-new.png",
			options: [
				{
					content:
						"Acelerar para passar antes do veículo que circula em sentido contrário.",
					isCorrect: false,
				},
				{
					content:
						"Reduzir a velocidade ou parar, de modo a dar a passagem ao outro veículo.",
					isCorrect: true,
				},
				{
					content: "Nada, porque eu tenho prioridade de passagem.",
					isCorrect: false,
				},
				{
					content: "Utilizar os sinais sonoros para que o outro condutor pare.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Que deve fazer o condutor perante a marca rodoviária de cor branca?",
			image: "https://i.ibb.co/myJjwHm/Screenshot-2024-03-01-170626-new.png",
			options: [
				{ content: "Pisar ou transpor a linha.", isCorrect: false },
				{ content: "Abrandar a marcha.", isCorrect: false },
				{
					content:
						"Circular à sua esquerda, quando a linha fizer a separação de sentidos de trânsito.",
					isCorrect: true,
				},
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"As ordens dos agentes reguladores do trânsito prevalecem sobre os sinais luminosos:",
			image: "https://i.ibb.co/Fspgz08/Screenshot-2024-03-01-170910-new.png",
			options: [
				{ content: "Verdes.", isCorrect: false },
				{ content: "De qualquer cor.", isCorrect: true },
				{ content: "Amarelos.", isCorrect: false },
				{ content: "Vermelho.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"É necessário regular e ajustar o encosto de cabeça para a altura dos ocupantes?",
			image: "https://i.ibb.co/Fspgz08/Screenshot-2024-03-01-170910-new.png",
			options: [
				{
					content: "Sim, porque pode evitar lesões na zona do pescoço.",
					isCorrect: true,
				},
				{
					content: "Não é necessário, porque é apenas um elemento de conforto.",
					isCorrect: false,
				},
				{ content: "Sim, mas só nos bancos da frente.", isCorrect: false },
				{
					content: "Não, se o veículo tiver cintos de segurança.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/fNWwtzb/Screenshot-2024-03-01-170916-new.png",
			options: [
				{
					content: "Parque de estacionamento para veículos do Governo.",
					isCorrect: false,
				},
				{
					content: "Parque de estacionamento para veículos do Ministério.",
					isCorrect: false,
				},
				{
					content: "Parque de estacionamento para veículos da Polícia.",
					isCorrect: true,
				},
				{
					content: "Parque de estacionamento para veículos do Parlamento.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Os sinais sonoros devem ser:",
			image: "https://i.ibb.co/VJY0VJ7/Screenshot-2024-03-01-170902-new.png",
			options: [
				{
					content:
						"Longos, usados de forma moderada e em caso algum devem servir de meio de protesto contra interrupções do trânsito ou como meios de chamamento.",
					isCorrect: false,
				},
				{
					content:
						"Breves, usados de forma moderada e podem servir de meio de protesto contra interrupções do trânsito ou como meios de chamamento.",
					isCorrect: false,
				},
				{
					content:
						"Breves, usados de forma moderada e em caso algum devem servir de meio de protesto contra interrupções do trânsito ou como meios de chamamento.",
					isCorrect: true,
				},
				{
					content:
						"Longos e insistentes, usados como forma de protesto contra interrupções do trânsito ou como meios de chamamento.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Para ter mais segurança, os peões devem…",
			image: "https://i.ibb.co/f9PpFbJ/Screenshot-2024-03-01-171340-new.png",
			options: [
				{
					content:
						"Transitar sempre do lado esquerdo da faixa de rodagem, em relação ao seu sentido de marcha.",
					isCorrect: false,
				},
				{
					content:
						"Transitar pelo lado direito, em relação ao seu sentido de marcha, a não ser que tal comprometa a sua segurança.",
					isCorrect: true,
				},
				{
					content:
						"Fazer o atravessamento da faixa de rodagem o mais lentamente possível.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Que indica a marca rodoviária?",
			image: "https://i.ibb.co/kyc9r38/Screenshot-2024-03-01-171346-new.png",
			options: [
				{ content: "Passagem para ciclistas.", isCorrect: false },
				{ content: "Passagem para peões.", isCorrect: true },
				{ content: "Linha de cedência de prioridade.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Ao ligar as luzes, se no painel aparecer o símbolo do farol de cor verde, significa que estão ligadas:",
			image: "https://i.ibb.co/bWctPsn/Screenshot-2024-03-01-171353-new.png",
			options: [
				{ content: "As luzes de estrada (máximos).", isCorrect: false },
				{ content: "As luzes de cruzamento (médios).", isCorrect: true },
				{ content: "As luzes mínimas.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Se os ocupantes do veículo estiverem corretamente sentados, o airbag é eficaz?",
			image: "https://i.ibb.co/cLfTMPC/Screenshot-2024-03-01-171359-new.png",
			options: [
				{ content: "Não e pode causar lesões graves.", isCorrect: true },
				{ content: "Sim, o airbag é sempre eficaz.", isCorrect: false },
				{
					content:
						"Sim, sempre que os passageiros estejam sentados corretamente.",
					isCorrect: false,
				},
				{ content: "Sim, mas apenas para o condutor.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Atirar do veículo ou abandonar na via objetos ou substâncias constitui contravenção:",
			image: "https://i.ibb.co/TkBx0v0/Screenshot-2024-03-01-171740-new.png",
			options: [
				{ content: "Média.", isCorrect: true },
				{ content: "Leve.", isCorrect: false },
				{ content: "Grave.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A que grupo pertence o sinal triangular?",
			image: "https://i.ibb.co/LvN8Tmc/Screenshot-2024-03-01-180243-new.png",
			options: [
				{ content: "Sinais temporários de perigo.", isCorrect: true },
				{ content: "Sinais temporários de obrigação.", isCorrect: false },
				{ content: "Sinais temporários de proibição.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Em situações de chuva forte:",
			image: "https://i.ibb.co/B4SgTKb/Screenshot-2024-03-01-180250-new.png",
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
			explanation: "",
		},
		{
			content: "A definição de estacionamento é:",
			image: "https://i.ibb.co/NnQSJFg/Screenshot-2024-03-01-180258-new.png",
			options: [
				{
					content:
						"Imobilização de um veículo que constitua paragem e que seja motivada por circunstâncias próprias da circulação.",
					isCorrect: true,
				},
				{
					content:
						"Imobilização de um veículo que não constitua paragem e que seja motivada por circunstâncias próprias da circulação.",
					isCorrect: false,
				},
				{
					content:
						"Imobilização de um veículo que constitua paragem e que seja motivada por circunstâncias de excesso de tráfego.",
					isCorrect: false,
				},
				{
					content:
						"Imobilização de um veículo que não constitua paragem e que não seja motivada por circunstâncias próprias da circulação.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Que veículos devem ter o seguro de responsabilidade civil para transitar na via pública?",
			image: "https://i.ibb.co/Hz8tWZK/Screenshot-2024-03-01-194926-new.png",
			options: [
				{ content: "Só os ciclomotores.", isCorrect: false },
				{ content: "Apenas os veículos automóveis,", isCorrect: false },
				{ content: "Os veículos a motor.", isCorrect: true },
				{ content: "Nenhuma das opções.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"É necessário verificar o nível do líquido de travão com frequência?",
			image: "https://i.ibb.co/6rfWDh6/Screenshot-2024-03-01-194933-new.png",
			options: [
				{
					content:
						"Sim e deve ser substituído dentro do período indicado pelo fabricante.",
					isCorrect: true,
				},
				{
					content: "Sim, mas não precisa de ser substituído.",
					isCorrect: false,
				},
				{ content: "Não, porque não se desgasta com o uso.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Para os condutores de transporte de serviço público ou de carga perigosa, quando em exercício, a taxa de álcool deve ser de:",
			image: "https://i.ibb.co/cDnHvKY/Screenshot-2024-03-01-194940-new.png",
			options: [
				{ content: "0.3 mg/l.", isCorrect: false },
				{ content: "0.0 mg/l.", isCorrect: true },
				{ content: "0,6 mg/l.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image: "https://i.ibb.co/M74WHKD/Screenshot-2024-03-01-195234-new.png",
			options: [
				{ content: "Passagem de peões.", isCorrect: true },
				{ content: "Pista obrigatória para peões.", isCorrect: false },
				{ content: "Passagem desnivelada para peões.", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A presença de máquinas na via.",
			image: "https://i.ibb.co/6vY8P2k/Screenshot-2024-03-01-195240-new.png",
			options: [
				{ content: "A presença de máquinas na via.", isCorrect: false },
				{ content: "Passagem de nível.", isCorrect: true },
				{
					content: "Passagem de um veículo automóvel de cada vez.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A distância de reação é influenciada:",
			image: "https://i.ibb.co/303Lhwp/Screenshot-2024-03-01-195245-new.png",
			options: [
				{ content: "Pelo tempo dividido pela velocidade.", isCorrect: false },
				{
					content: "Pelo somatório do tempo mais a velocidade.",
					isCorrect: false,
				},
				{
					content: "Principalmente de factores externos ao condutor.",
					isCorrect: false,
				},
				{
					content: "Pelo tempo multiplicado pela velocidade.",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quando existe um forte vento lateral corremos o perigo de sermos desviados da nossa trajetória. Nestas circunstâncias a melhor solução é:",
			image: "https://i.ibb.co/BckfN7J/Screenshot-2024-03-01-195529-new.png",
			options: [
				{
					content: "Circular ao lado de um veículo pesado, se for possível.",
					isCorrect: false,
				},
				{
					content: "Acelerar mais para vencer a força do vento.",
					isCorrect: false,
				},
				{
					content: "Moderar a velocidade e ajustar-nos às circunstâncias.",
					isCorrect: true,
				},
				{
					content: "Parar o veículo e aguardar até que o vento passe.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de lotação é:",
			image: "https://i.ibb.co/Tkx4w3F/Screenshot-2024-03-01-195543-new.png",
			options: [
				{
					content:
						"Número de passageiros que o veículo pode transportar, não incluindo o condutor.",
					isCorrect: false,
				},
				{
					content: "Número de lugares que o veículo tem, incluindo o condutor.",
					isCorrect: true,
				},
				{
					content:
						"Número de passageiros que o veículo consiga transportar, incluindo o condutor.",
					isCorrect: false,
				},
				{
					content:
						"Número de lugares que o veículo tem, não incluindo o condutor.",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Se pretender inverter o sentido de marcha, deve ter em conta que a manobra deve ser feita em local e de forma a não prejudicar o trânsito.",
			image: "https://i.ibb.co/XsVtnpX/Screenshot-2024-03-01-200227-new.png",
			options: [
				{
					content: "Que só é permitido fazê-lo nas rotundas",
					isCorrect: false,
				},
				{
					content:
						"Que a manobra deve ser feita em local e de forma a não prejudicar o trânsito",
					isCorrect: true,
				},
				{
					content:
						"Que é proibido fazê-lo em todos os cruzamentos e entrocamentos",
					isCorrect: false,
				},
				{
					content: "Que é proibido fazê-lo dentro das localidades",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Em cada situação, a decisão que tomo não é influenciada pelo estado físico em que me encontro.",
			image: "https://i.ibb.co/QFKm5Jf/Screenshot-2024-03-01-200235-new.png",
			options: [
				{
					content:
						"Depende exclusivamente da sinalização que encontro no local",
					isCorrect: false,
				},
				{
					content: "É consequência unicamente da intensidade do trânsito",
					isCorrect: false,
				},
				{
					content: "Não é influenciada pelo estado físico em que me encontro",
					isCorrect: false,
				},
				{
					content: "É sempre influenciada pela previsão que faço",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"É permitido que uma criança de 6 anos viaje no banco da frente de um automóvel?",
			image: "https://i.ibb.co/cvc1bGR/Screenshot-2024-03-01-173235-new.png",
			options: [
				{ content: "Não, em nenhum caso", isCorrect: false },
				{
					content:
						"Sim, se não tiver bancos ou cintos de segurança na retaguarda",
					isCorrect: true,
				},
				{
					content: "Sim, mesmo que não utilize cinto de segurança",
					isCorrect: false,
				},
				{
					content: "Sim, sempre que utilize o cinto de segurança",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A distância de segurança, é um factor a considerar em qualquer situação.",
			image: "https://i.ibb.co/HtFzfrh/Screenshot-2024-03-01-173228-new.png",
			options: [
				{
					content:
						"Apenas em condução urbana, devido à intensidade de trânsito",
					isCorrect: false,
				},
				{
					content:
						"Nas estradas rurais pela diminuição dos limites de velocidade",
					isCorrect: false,
				},
				{ content: "Em qualquer situação", isCorrect: true },
			],
			explanation: "",
		},
		{
			content:
				"Conduzir sob influência de álcool, sob efeitos de substâncias legalmente consideradas como estupefacientes ou psicotrópicas, constitui contravenção grave.",
			image: "https://i.ibb.co/YPzKcBq/Screenshot-2024-03-01-172732-new.png",
			options: [
				{ content: "Leve", isCorrect: false },
				{ content: "Média", isCorrect: false },
				{ content: "Grave", isCorrect: true },
			],
			explanation: "",
		},
		{
			content:
				"Um condutor que expressa o descontentamento através de gestos ou palavras agressivas:",
			image: "https://i.ibb.co/VLcSWfG/Screenshot-2024-03-01-172745-new.png",
			options: [
				{
					content:
						"Está apenas, e bem, a demonstrar o seu descontentamento com o comportamento dos outros",
					isCorrect: false,
				},
				{
					content: "Manifesta agressividade e falta de civismo",
					isCorrect: true,
				},
				{
					content: "Está a contribuir para mais e melhor cidadania no transito",
					isCorrect: false,
				},
				{
					content:
						"Está a exercer um direito que lhe assiste perante a ignorância dos outros condutores",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/xHvG3nc/Whats-App-Image-2024-02-28-at-17-new-37-06-d127a692.png",
			options: [
				{
					content:
						"Parque de estacionamento para automóveis pesados de passageiros de peso total superior a 10 Toneladas",
					isCorrect: false,
				},
				{
					content:
						"Parque de estacionamento para automóveis pesados de mercadorias de peso total superior a 10 Kilos",
					isCorrect: false,
				},
				{
					content:
						"Parque de estacionamento para automóveis pesados de mercadorias de peso total superior a 10 Toneladas",
					isCorrect: true,
				},
				{
					content:
						"Parque de estacionamento para todos os automóveis de peso total superior a 10 toneladas",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Numa auto - estrada, pode-se inverter o sentido de marcha?",
			image:
				"https://i.ibb.co/XSR8yYg/Whats-App-Image-2024-02-28-at-17-new-37-05-1a820205.jpg",
			options: [
				{ content: "Sempre que possível", isCorrect: false },
				{ content: "Sim, se a manobra for feita lentamente", isCorrect: false },
				{ content: "Nunca", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/0qFrvTZ/Whats-App-Image-2024-02-28-at-17-new-37-08-29bbc5a2.jpg",
			options: [
				{
					content: "Sinalização luminosa e de passagem de nível",
					isCorrect: false,
				},
				{ content: "Sinalização luminosa em manutenção", isCorrect: true },
				{ content: "Sinalização luminosa inexistente", isCorrect: false },
				{
					content: "Sinalização luminosa e de passagem de nível com uma via",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A correcta exploração visual permite:",
			image:
				"https://i.ibb.co/5RvvWcp/Whats-App-Image-2024-02-28-at-17-new-37-07-855e36cc.png",
			options: [
				{ content: "Conduzir com maior velocidade", isCorrect: false },
				{
					content:
						"Que o condutor tenha em sua posse a informação necessária para tomar as decisões adequadas e agir correctamente",
					isCorrect: true,
				},
				{
					content:
						"Só é importante dentro das localidades para ver os peões que se propõem a atravessar a via e também toda a sinalização envolvente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Como é punida a colocação de obstáculos que possam impedir ou embaraçar o trânsito e comprometer a segurança e comodidade dos utentes da via?",
			image:
				"https://i.ibb.co/Jr6TrBT/Whats-App-Image-2024-02-28-at-17-new-37-07-270db726.png",
			options: [
				{ content: "Multa de 1.000,00 Mt", isCorrect: true },
				{ content: "Multa de 500,00 Mt", isCorrect: false },
				{ content: "Multa de 2,000,00 Mt", isCorrect: false },
				{ content: "Multa de 3.000,00 Mt", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Perante um obstáculo imprevisto que o obriga a reduzir subitamente a velocidade, o condutor deve:",
			image:
				"https://i.ibb.co/BqRTxzz/Whats-App-Image-2024-02-28-at-17-new-37-10-9cb75530.png",
			options: [
				{
					content:
						"Sinalizar a situação utilizando os máximos e os médios alternadamente",
					isCorrect: false,
				},
				{
					content:
						"Ligar as luzes de perigo para avisar os outros utentes da via",
					isCorrect: false,
				},
				{
					content:
						"Ligar as luzes de presença para avisar os outros utentes da via",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: 'Considera-se "condução defensiva":',
			image:
				"https://i.ibb.co/P9bsM2Q/Whats-App-Image-2024-02-28-at-17-new-37-10-444ab78b.jpg",
			options: [
				{ content: "Não ultrapassar os 30Km em zona urbana", isCorrect: false },
				{
					content:
						"Ajustar a velocidade e a trajectória de forma a evitar acidentes",
					isCorrect: true,
				},
				{
					content:
						"Não efectuar manobras que o possam colocar em perigo, independentemente dos outros condutores",
					isCorrect: false,
				},
				{
					content:
						"Circular sempre a 40 Km por hora para evitar ser surpreendido por algum perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Que entende-se por liberdade?",
			image:
				"https://i.ibb.co/zPCyNxN/Whats-App-Image-2024-02-28-at-17-new-37-09-ac948bc2.jpg",
			options: [
				{
					content: "O poder que o Homem tem de dominar a ciência e a técnica",
					isCorrect: false,
				},
				{
					content:
						"A condução de veículos automóveis por longos períodos de tempo",
					isCorrect: false,
				},
				{
					content:
						"O poder que o Homem tem de agir, de praticar uma acção sem qualquer pressão ou constrangimento",
					isCorrect: true,
				},
				{
					content:
						"A faculdade de num cruzamento não sinalizado, avançar sem observar a regra de prioridade",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/TLvb4tM/Whats-App-Image-2024-02-28-at-17-new-37-08-0705afd4.jpg",
			options: [
				{ content: "Paragem e estacionamento proibidos", isCorrect: true },
				{ content: "Estacionamento proibido", isCorrect: false },
				{ content: "Estacionamento condicionado", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"O condutor do veículo amarelo ao mudar de direcção para a direita, a quem deve ceder a passagem?",
			image:
				"https://i.ibb.co/J3dXQ30/Whats-App-Image-2024-02-28-at-17-new-37-08-9d5aa404.png",
			options: [
				{
					content: "Apenas aos condutores que se apresentem pela direita",
					isCorrect: false,
				},
				{
					content:
						"Aos que circulam em sentido contrário e pretendam seguir em frente ou mudar de direção para a esquerda",
					isCorrect: true,
				},
				{
					content: "A todos os condutores que circulem pela via transversal",
					isCorrect: false,
				},
				{
					content:
						"Só aos condutores que circulam em sentido contrário e sigam em frente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Muitas tarefas que são necessárias à condução, exigem que o condutor retire os olhos da estrada:",
			image:
				"https://i.ibb.co/T2xn3Cz/Whats-App-Image-2024-02-28-at-17-new-37-11-feb063f7.png",
			options: [
				{ content: "Errado", isCorrect: false },
				{ content: "Certo", isCorrect: true },
			],
			explanation: "",
		},
		{
			content:
				"Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?",
			image:
				"https://i.ibb.co/kgZQ8R9/Whats-App-Image-2024-02-28-at-17-new-37-10-b765f4b6.png",
			options: [
				{ content: "Não, é necessária a da categoria Cl E", isCorrect: false },
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 750 kg",
					isCorrect: true,
				},
				{
					content: "Sim, desde que o peso bruto do reboque não exceda 3500 kg",
					isCorrect: false,
				},
				{ content: "Não, é necessária a da categoria G", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Uma das partes importantes para praticar uma condução defensiva é:",
			image:
				"https://i.ibb.co/Mhmh7fQ/Whats-App-Image-2024-02-28-at-17-new-37-13-3fd9d365.png",
			options: [
				{
					content:
						"A capacidade mental de prever os acontecimentos perante um estímulo visual",
					isCorrect: true,
				},
				{
					content:
						"A capacidade de dominar a trajectória do veículo em condições adversas",
					isCorrect: false,
				},
				{
					content:
						"A capacidade de acelerar dentro dos limites impostos pela sinalização",
					isCorrect: false,
				},
				{
					content: "A capacidade de efectuar travagens sempre que necessário",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de tara é:",
			image:
				"https://i.ibb.co/17szhbM/Whats-App-Image-2024-02-28-at-17-new-37-12-15d34f28.png",
			options: [
				{ content: "Peso do veículo em vazio", isCorrect: true },
				{ content: "Peso do veículo com carga", isCorrect: false },
				{ content: "Peso da carga que o veículo transporta", isCorrect: false },
				{ content: "Peso do veículo mais o condutor", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Que indica o sinal?",
			image:
				"https://i.ibb.co/tB34YYf/Whats-App-Image-2024-02-28-at-17-new-37-12-67afd088.png",
			options: [
				{ content: "Terreno falso à direita", isCorrect: false },
				{ content: "Cruzamento facilmente congestionável", isCorrect: false },
				{ content: "Congestionamento de tráfego", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image:
				"https://i.ibb.co/2Fz3XXR/Whats-App-Image-2024-02-28-at-17-new-37-13-e328bf06.png",
			options: [
				{ content: "Travessia de peões", isCorrect: false },
				{ content: "Passagem de peões", isCorrect: true },
				{ content: "Passagem de idosos", isCorrect: false },
				{ content: "Passagem de peões a 50 metros", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A forca centripeta e centrifuga:",
			image:
				"https://i.ibb.co/GPBt9vq/Whats-App-Image-2024-02-28-at-17-new-37-13-b2925672.png",
			options: [
				{
					content:
						"São forças que actuam no mesmo sentido e se acumulam uma a outra",
					isCorrect: false,
				},
				{
					content:
						"So depende do raio da trajectéria não tendo a velocidade nenhuma influência",
					isCorrect: false,
				},
				{
					content:
						"São forças que actuam em sentido contrario uma em relação a outra",
					isCorrect: true,
				},
				{
					content:
						"São forças que só ocorrem quando o veículo vai em linha reta",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder em mais de 30 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
			image:
				"https://i.ibb.co/1G6DfBD/Whats-App-Image-2024-02-28-at-17-new-37-15-db6e8f90.png",
			options: [
				{
					content: "Com multa de 2.000,00 Mt e contravenção leve",
					isCorrect: false,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção leve",
					isCorrect: true,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como pode definir derrapagem?",
			image:
				"https://i.ibb.co/GCXRMSL/Whats-App-Image-2024-02-28-at-17-new-37-14-c071635a.png",
			options: [
				{
					content:
						"Quando o veículo segue uma trajetória diferente da das rodas e estas em velocidades diferentes",
					isCorrect: true,
				},
				{
					content:
						"Quando nas curvas o veículo segue a mesma trajectória das rodas e estas em velocidade diferentes",
					isCorrect: false,
				},
				{ content: "Sempre que o carro efectua uma curva", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que indica o sinal?",
			image:
				"https://i.ibb.co/020rP6j/Whats-App-Image-2024-02-28-at-17-new-37-15-5361310c.png",
			options: [
				{ content: "Passagem de peões", isCorrect: false },
				{ content: "Pista obrigatória para peões", isCorrect: false },
				{
					content: "Passagem desnivelada para peões com rampas",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "Dentro das localidades, é proibido parar ou estacionar?",
			image:
				"https://i.ibb.co/rf2WBBW/Whats-App-Image-2024-02-28-at-17-new-37-15-03023ee0.png",
			options: [
				{
					content: "A menos de 50 metros dos cruzamentos ou entroncamentos",
					isCorrect: false,
				},
				{
					content:
						"A menos de 25 metros para um e outro lado dos cruzamentos ou entroncamentos",
					isCorrect: false,
				},
				{
					content:
						"A menos de 5 metros antes das passagens assinaladas para a travessia de peões e velocípedes",
					isCorrect: true,
				},
				{ content: "Na faixa de rodagem, em qualquer caso", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O que influencia a distância de reacção?",
			image:
				"https://i.ibb.co/LQYw2FL/Whats-App-Image-2024-02-28-at-19-new-11-15-8a7033cf.png",
			options: [
				{ content: "Tempo de reacção e velocidade", isCorrect: true },
				{
					content: "Estado do veículo e condições ambientais",
					isCorrect: false,
				},
				{ content: "Velocidade e estado da via", isCorrect: false },
				{
					content: "Condições do condutor e distância de travagem",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado destes sinais é:",
			image:
				"https://i.ibb.co/9bQdKvx/Whats-App-Image-2024-02-28-at-19-new-11-18-38de446e.png",
			options: [
				{ content: "Saída com uma via de rodagem", isCorrect: false },
				{ content: "Saída com uma estrada de um sentido", isCorrect: false },
				{ content: "Saída com uma faixa de rodagem", isCorrect: true },
				{ content: "Entrada com uma faixa de rodagem", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Sempre que uma autoridade policial ou seus agentes, lhes façam sinal para isso, os condutores de veículos ou animais são obrigados a parar?",
			image:
				"https://i.ibb.co/sFdkKPS/Whats-App-Image-2024-02-28-at-19-new-11-18-0bb42fc1.png",
			options: [
				{ content: "Sim, desde que estejam armados", isCorrect: false },
				{
					content:
						"Sim, desde que estejam devidamente uniformizados e identificados",
					isCorrect: true,
				},
				{ content: "Sim, sempre que exibam o sinal de STOP", isCorrect: false },
				{ content: "Não, nunca", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O socorrista, na avaliação do grau de consciência deve:",
			image:
				"https://i.ibb.co/8Np2M92/Whats-App-Image-2024-02-28-at-19-new-11-17-8aea6d80.png",
			options: [
				{
					content: "Ver os movimentos do tórax e do abdómen",
					isCorrect: false,
				},
				{
					content:
						"Abanar levemente a vitima ao nível dos ombros e falar com ela, questionando se está a ouvir, está a sentir-se bem, onde está, como se chama, que dia é hoje...",
					isCorrect: true,
				},
				{
					content:
						"Sentir o ar expirado, encostando a sua face ao nariz e boca da vitima",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O espaço percorrido pelo veículo durante o tempo de reacção do condutor não é sempre o mesmo e depende:",
			image:
				"https://i.ibb.co/9Y8nKjv/Whats-App-Image-2024-02-28-at-19-new-11-19-aa4e7c6f.png",
			options: [
				{
					content:
						"Só do tempo da reacção do condutor e não tem influência a velocidade do veículo",
					isCorrect: false,
				},
				{
					content: "Do tempo da reacção e da velocidade do veículo",
					isCorrect: true,
				},
				{
					content:
						"Só da velocidade do veículo e não tem influência o tempo de reacção do condutor",
					isCorrect: false,
				},
				{
					content: "Principalmente de factores externos ao condutor",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Durante a noite, o condutor deve circular com:",
			image:
				"https://i.ibb.co/2kQtzrS/Whats-App-Image-2024-02-28-at-19-new-11-20-1e228d1e.png",
			options: [
				{
					content:
						"Sempre com os médios ligados, utilizando os minimos no cruzamento com outros veículos e os máximos quando não houver trânsito",
					isCorrect: false,
				},
				{
					content:
						"Sempre com os máximos ligados, utilizando os minimos no cruzamento com outros veículos",
					isCorrect: false,
				},
				{
					content:
						"Os médios ligados e utilizar os máximos, quando não existir outro trânsito a circular à sua frente ou em sentido contrário",
					isCorrect: true,
				},
				{
					content:
						"É indiferente as luzes usadas desde que consiga ver bem a estrada",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O estado emocional do condutor, é um factor de ordem interna, que influência:",
			image:
				"https://i.ibb.co/kcVc1dD/Whats-App-Image-2024-02-28-at-19-new-11-20-b96b7f27.png",
			options: [
				{
					content: "O tempo de reacção e a distância de travagem",
					isCorrect: true,
				},
				{ content: "Apenas a distância de travagem", isCorrect: false },
				{ content: "Apenas a distância de segurança", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Qual a antecedência mínima que a entidade que ordenar a suspensão do trânsito nas estradas nacionais, deve anunciá-la ao público?",
			image:
				"https://i.ibb.co/JF3cS69/Whats-App-Image-2024-02-28-at-19-new-11-21-35cc96cb.png",
			options: [
				{ content: "Uma semana", isCorrect: false },
				{ content: "Quinze dias", isCorrect: false },
				{ content: "Três dias", isCorrect: true },
				{ content: "Um dia", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A condução sob influência do álcool:",
			image:
				"https://i.ibb.co/RQf4Yp4/Whats-App-Image-2024-02-28-at-19-new-11-21-3efa38a1.png",
			options: [
				{ content: "Aumenta o risco de acidente", isCorrect: true },
				{ content: "Diminui o risco de acidente", isCorrect: false },
				{
					content: "Em nada interfere com a segurança rodoviária",
					isCorrect: false,
				},
				{
					content:
						"Pode melhorar o estado do condutor devido à melhora da sua disposição",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Se o condutor sofre de uma doença, o que deve fazer para reduzir o risco de ter um acidente?",
			image:
				"https://i.ibb.co/BnYmfvq/Whats-App-Image-2024-02-28-at-19-new-11-24-97717371.png",
			options: [
				{
					content:
						"Interromper a medicação que estiver a tomar, se tem que conduzir",
					isCorrect: false,
				},
				{ content: "Deixar de conduzir em todos os casos", isCorrect: false },
				{
					content: "Conhecer os efeitos secundários dos medicamentos",
					isCorrect: true,
				},
				{
					content: "Ignorar os sintomas para evitar distracções",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Na via pública, a carga e descarga de um veículo deve ser feita:",
			image:
				"https://i.ibb.co/0c2cHM5/Whats-App-Image-2024-02-28-at-19-new-11-25-90de5e73.png",
			options: [
				{ content: "Sempre pela direita", isCorrect: false },
				{ content: "Sempre pela retaguarda", isCorrect: false },
				{ content: "Sempre pela esquerda", isCorrect: false },
				{
					content:
						"Pela retaguarda ou pelo lado permitido para a paragem do veiculo",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"A razão pela qual não se deve retirar ou movimentar do interior dos veiculos, as vítimas de acidentes é:",
			image:
				"https://i.ibb.co/jfMWpkT/Whats-App-Image-2024-02-28-at-19-new-11-22-e2ada9f2.png",
			options: [
				{
					content: "Para não contaminar o local do acidente",
					isCorrect: false,
				},
				{ content: "Para não passar doenças a quem socorre", isCorrect: false },
				{
					content:
						"Para serem evitadas lesões crânio encefálicas, lesões da coluna cervical ou outras em órgãos internos ou ossos fracturados",
					isCorrect: true,
				},
				{ content: "Para evitar distracções", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Com relação aos acidentados, qual a ordem pela qual devem ser postos em prática os três principios de actuação?",
			image:
				"https://i.ibb.co/v3hPmpR/Whats-App-Image-2024-02-28-at-19-new-11-25-b734f8ba.png",
			options: [
				{ content: "Socorrer, Alertar e Prevenir", isCorrect: false },
				{ content: "Alertar, Socorrer e Prevenir", isCorrect: false },
				{ content: "Prevenir, Alertar e Socorrer", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "Quem não boa noite de descanso:",
			image:
				"https://i.ibb.co/0c2cHM5/Whats-App-Image-2024-02-28-at-19-new-11-25-90de5e73.png",
			options: [
				{
					content: "Deve tomar mais cafés durante o dia enquanto conduz",
					isCorrect: false,
				},
				{
					content: "Deve beber muita água durante o dia enquanto conduz",
					isCorrect: false,
				},
				{
					content: "Não afecta a sua capacidade de condução",
					isCorrect: false,
				},
				{
					content: "Mais facilmente se torna vitima de estados de fadiga",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"O estado de alerta do condutor, é influenciado pela fadiga, afectando a forma como:",
			image:
				"https://i.ibb.co/BnYmfvq/Whats-App-Image-2024-02-28-at-19-new-11-24-97717371.png",
			options: [
				{
					content: "O veículo se comporta no ambiente rodoviário",
					isCorrect: false,
				},
				{
					content: "O condutor realiza a manobra de ultrapassagem",
					isCorrect: false,
				},
				{
					content:
						"O condutor recolhe as informações relevantes do ambiente rodoviário",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de pista especial é:",
			image:
				"https://i.ibb.co/txTjPj9/Whats-App-Image-2024-02-28-at-19-new-11-26-16c8a535.png",
			options: [
				{
					content:
						"Via privada especialmente destinada, de acordo com sinalização, ao trânsito de peões, de animais ou de certa espécie de veículos",
					isCorrect: false,
				},
				{
					content:
						"Via privada especialmente destinada, de acordo com sinalização, ao trânsito de veículos automóveis",
					isCorrect: false,
				},
				{
					content:
						"Via pública especialmente destinada ao trânsito de veículos de policia",
					isCorrect: false,
				},
				{
					content:
						"Via pública especialmente destinada, de acordo com sinalização, ao trânsito de peões, de animais ou de certa espécie de veículos",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Em caso de nevoeiro (cacimba) os 4 piscas ou luzes de emergência, só devem ser utilizados:",
			image:
				"https://i.ibb.co/MCPjNrD/Whats-App-Image-2024-02-28-at-19-new-11-27-3db048f7.png",
			options: [
				{
					content:
						"Se o veículo estiver imobilizado, a circular a velocidades muito baixas ou quando fizer uma travagem forte e repentina",
					isCorrect: true,
				},
				{
					content: "Quando o veículo circular a uma velocidade moderada",
					isCorrect: false,
				},
				{
					content: "Sempre que mudar de direcção ou iniciar uma ultrapassagem",
					isCorrect: false,
				},
				{ content: "Devem ser usadas sempre", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Nas pontes, túneis e passagens de nível:",
			image:
				"https://i.ibb.co/3FJSsqJ/Whats-App-Image-2024-02-28-at-19-new-11-29-cb5f761e.png",
			options: [
				{
					content:
						"Os animais só quando estiverem atrelados, devem seguir a passo",
					isCorrect: false,
				},
				{
					content: "Os animais atrelados ou não, devem seguir a passo",
					isCorrect: true,
				},
				{
					content:
						"Os animais quando não atrelados, devem seguir a passo de corrida",
					isCorrect: false,
				},
				{
					content:
						"Os animais atrelados ou não, devem seguir a passo de corrida",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Para não causar perigo e por em causa a segurança das pessoas e das coisas, os condutores devem....",
			image:
				"https://i.ibb.co/MsBTZC6/Whats-App-Image-2024-02-28-at-19-new-11-28-51992ede.png",
			options: [
				{
					content: "circular nos limites máximos de velocidade das estradas",
					isCorrect: false,
				},
				{
					content: "circular abaixo dos limites minimos de velocidade",
					isCorrect: false,
				},
				{
					content:
						"regular a velocidade atendendo às características do veículo, ás condições da via e ao estado do condutor",
					isCorrect: true,
				},
				{
					content: "ficar em ponto morto nas descidas muito inclinadas",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O que deve fazer o condutor se a fila da esquerda estiver a circular mais rapidamente?",
			image:
				"https://i.ibb.co/8mDTg77/Whats-App-Image-2024-02-28-at-19-new-11-27-751ab97d.png",
			options: [
				{ content: "Mudar de fila de trânsito", isCorrect: false },
				{
					content: "Manter-se na fila de trânsito em que se encontra",
					isCorrect: true,
				},
				{ content: "Sinalizar e mudar de fila de trânsito", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Perante a luz verde, não deve avançar:",
			image:
				"https://i.ibb.co/94xb9jv/Whats-App-Image-2024-02-28-at-19-new-11-16-1dc9b67e.png",
			options: [
				{
					content:
						"Quando no passeio existam peões que pretendam iniciar a travessia da faixa de rodagem",
					isCorrect: false,
				},
				{
					content:
						"Quando pela intensidade de trânsito, seja previsível a imobilização no centro da intersecção",
					isCorrect: true,
				},
				{
					content:
						"Quando um agente regulador de trânsito se encontre nas proximidades",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O planeamento da velocidade e da trajectória do veículo assenta:",
			image:
				"https://i.ibb.co/pnbVccn/Whats-App-Image-2024-02-28-at-19-new-11-16-bcd4f9f5.png",
			options: [
				{
					content:
						"Nas motivações e necessidade do condutor sem influência da informação que ele recebe do exterior",
					isCorrect: false,
				},
				{
					content: "Na informação que ele recebe do exterior",
					isCorrect: false,
				},
				{
					content:
						"Nas motivações e necessidades do condutor e também na informação que ele recebe do exterior",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de plataforma é:",
			image:
				"https://i.ibb.co/pf8qSq8/Whats-App-Image-2024-02-28-at-19-new-11-15-1af2f0d8.png",
			options: [
				{
					content: "Parte das arestas externas das valetas laterais da estrada",
					isCorrect: false,
				},
				{
					content: "Parte das arestas internas das valetas laterais da estrada",
					isCorrect: true,
				},
				{ content: "O conjunto de estrada e bermas", isCorrect: false },
				{
					content: "Parte das arestas internas das valetas laterais da estrada",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O que indica uma curta distância existente entre os veículos que circulam à minha frente?",
			image: "https://i.ibb.co/Pr7V2Bm/IMG-20240301-081232-new.png",
			options: [
				{ content: "Que devo moderar a velocidade", isCorrect: true },
				{ content: "Que circulo mais rápido do que eles", isCorrect: false },
				{ content: "Que vou entrar numa localidade", isCorrect: false },
				{
					content: "Que devo ultrapassar para não estar em perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Os veículos possuem, para combater a escuridão ou falta de iluminação na condução nocturna:",
			image: "https://i.ibb.co/JssTNYQ/IMG-20240229-122652-new.png",
			options: [
				{ content: "Buzinas", isCorrect: false },
				{ content: "Luzes de emergência", isCorrect: false },
				{ content: "Luzes, sinalizadores e reflectores", isCorrect: true },
			],
			explanation: "",
		},
		{
			content:
				"É permitido levar um bebé nos braços quando o veículo está em circulação?",
			image: "https://i.ibb.co/kG9gVFM/IMG-20240229-122939-new.png",
			options: [
				{
					content:
						"Não, deve sempre usar um dispositivo adequado ao tamanho e ao peso do bebé",
					isCorrect: true,
				},
				{ content: "Sim, se a viagem é curta", isCorrect: false },
				{
					content: "Sim, sempre que a velocidade seja muito reduzida",
					isCorrect: false,
				},
				{ content: "Sim, mas apenas nos assentos traseiros", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Devido à ingestão de bebidas alcoólicas, a alteração do campo visual de um condutor, manifesta-se por:",
			image: "https://i.ibb.co/5RcvvzB/IMG-20240301-080336-new.png",
			options: [
				{ content: "Aumento da visão lateral", isCorrect: false },
				{ content: "Aumento da visão periférica", isCorrect: false },
				{ content: "Redução da visão lateral", isCorrect: true },
				{ content: "Aumento da visão em profundidade", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Os estados de fadiga podem tornar as pessoas mais:",
			image: "https://i.ibb.co/QDqtbYq/IMG-20240229-122601-new.png",
			options: [
				{
					content:
						"Pacientes, aumentando-lhes a capacidade para se concentrarem e para tomarem decisões",
					isCorrect: false,
				},
				{
					content:
						"Irritadiças, diminuindo-lhes a capacidade para se concentrarem e para tomarem decisões",
					isCorrect: true,
				},
				{
					content:
						"Amáveis, aumentando-lhes a capacidade para se concentrarem e para tomarem decisões",
					isCorrect: false,
				},
				{
					content:
						"Atentas, dado que para combater a fadiga têm tendência a aumentar os níveis de atenção",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A tarefa de condução, pode ser muito afectada pela fadiga porque:",
			image:
				"https://i.ibb.co/BnYmfvq/Whats-App-Image-2024-02-28-at-19-new-11-24-97717371.png",
			options: [
				{
					content:
						"Contribui para o aumento das capacidades perceptivas, intelectuais e também motoras",
					isCorrect: false,
				},
				{
					content:
						"Contribui para despertar as capacidades cognitivas e também motoras",
					isCorrect: false,
				},
				{
					content:
						"Contribui para a diminuição das capacidades perceptivas, cognitivas e também motoras",
					isCorrect: true,
				},
				{
					content: "Um condutor fatigado vê diminuído o seu tempo de reacção",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A distância de segurança deve ser sempre a que me permita imobilizar o veículo sem perigo de acidente.",
			image: "https://i.ibb.co/sjGbzvB/IMG-20240229-082331-new.png",
			options: [
				{ content: "Errado", isCorrect: false },
				{
					content:
						"A distância de segurança só deve depender da capacidade de travagem do veículo",
					isCorrect: false,
				},
				{ content: "Certo", isCorrect: true },
			],
			explanation: "",
		},
		{
			content:
				"O condutor deve ter em atenção que, se tem problemas de sono...",
			image:
				"https://i.ibb.co/q9FckKN/Whats-App-Image-2024-02-28-at-17-new-37-09-382b48df.jpg",
			options: [
				{
					content: "Não se encontra em perfeitas condições para conduzir",
					isCorrect: true,
				},
				{
					content:
						"É aconselhável tomar bastantes substâncias estimulantes para ficar acordado",
					isCorrect: false,
				},
				{ content: "Deve dormir mais horas para conduzir", isCorrect: false },
				{
					content: "O seu estado não tem influência na condução",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Entende-se por prioridade de passagem:",
			image: "https://i.ibb.co/TmL1c6B/IMG-20240228-231021-new.png",
			options: [
				{
					content:
						"A obrigação que o condutor tem de imobilizar o veículo num cruzamento com sinal de paragem obrigatória",
					isCorrect: false,
				},
				{
					content: "O direito que o condutor tem de passar em primeiro lugar",
					isCorrect: true,
				},
				{
					content:
						"A movimentação de veículos e animais nas vias de comunicação rodoviária",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Que deve fazer ao aproximar-se desta intersecção?",
			image: "https://i.ibb.co/TmL1c6B/IMG-20240228-231021-new.png",
			options: [
				{
					content:
						"Demonstrar prudência especial, moderando a velocidade e ceder a passagem aos veículos que tenham prioridade",
					isCorrect: true,
				},
				{
					content:
						"Ceder a passagem aos veículos que se apresentem pela via transversal",
					isCorrect: false,
				},
				{
					content: "Apenas ceder a passagem aos peões que tenham prioridade",
					isCorrect: false,
				},
				{
					content:
						"Ceder a passagem aos veículos que se apresentem pela esquerda",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Dentro das localidades, durante a noite:",
			image: "https://i.ibb.co/52GkqVn/IMG-20240228-231126-new.png",
			options: [
				{
					content:
						"Não é obrigatória a substituição dos sinais sonoros pelos sinais luminosos",
					isCorrect: false,
				},
				{
					content:
						"É obrigatória a substituição dos sinais sonoros pelos sinais luminosos",
					isCorrect: true,
				},
				{
					content:
						"É obrigatória a substituição dos sinais sonoros pelos sinais gestuais",
					isCorrect: false,
				},
				{
					content:
						"É escolha do condutor a substituição dos sinais sonoros pelos sinais gestuais",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como é feito o processo de eliminação do álcool no organismo?",
			image:
				"https://i.ibb.co/Vq4HyQG/Whats-App-Image-2024-02-28-at-17-new-37-43-38390952.png",
			options: [
				{ content: "Pela urina e pela transpiracao", isCorrect: false },
				{
					content:
						"Pelo fígado, pelo ar expirado, pela urina e pela transpiração",
					isCorrect: true,
				},
				{
					content: "Pelo ar expirado, pela urina e quantidade de agua ingerida",
					isCorrect: false,
				},
				{
					content: "Pela quantidade de café e agua que tome depois de beber",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Nenhum condutor deve tomar a direita dos veículos ou animais:",
			image:
				"https://i.ibb.co/LQYw2FL/Whats-App-Image-2024-02-28-at-19-new-11-15-8a7033cf.png",
			options: [
				{
					content:
						"Que pretenda ultrapassar sem avisar da sua intenção aos respectivos condutores",
					isCorrect: true,
				},
				{
					content: "Sem fazer sinais de luzes durante o dia",
					isCorrect: false,
				},
				{
					content: "Sem fazer sinais de luzes durante a noite",
					isCorrect: false,
				},
				{
					content: "Sem buzinar para avisar da sua intenção",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor esta sujeito ao aparecimento de fadiga, quando circula com transito intenso?",
			image:
				"https://i.ibb.co/LQYw2FL/Whats-App-Image-2024-02-28-at-19-new-11-15-8a7033cf.png",
			options: [
				{
					content:
						"Esta porque é uma situação de transito monótona o que provoca fadiga",
					isCorrect: true,
				},
				{
					content: "Não esta porque circula a velocidade reduzida",
					isCorrect: false,
				},
				{
					content:
						"Não esta porque nesta situação pode descansar devido a pouca velocidade do transito",
					isCorrect: false,
				},
				{
					content:
						"Esta é para evitar a fadiga deve beber café e bebidas estimulantes",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que provoca no condutor o aparecimento da fadiga?",
			image: "https://i.ibb.co/YXRC71R/IMG-20240228-230500-new.png",
			options: [
				{ content: "O aumento do seu tempo de reação", isCorrect: false },
				{ content: "A diminuição do seu tempo de reação", isCorrect: false },
				{
					content: "A fadiga não influencia a capacidade do condutor",
					isCorrect: false,
				},
				{ content: "O aumento do seu tempo de reação", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "A definição de auto-estrada é:",
			image: "https://i.ibb.co/7V2t4M9/IMG-20240228-224323-new.png",
			options: [
				{
					content:
						"Via pública destinada a trânsito lento, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: true,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, sem separação física de faixas de rodagem, sem cruzamentos de nível. Com acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, com cruzamentos de nível e com acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"No caso de passar por um acidente, é obrigado a parar para dar assistência?",
			image: "https://i.ibb.co/Kmt430x/IMG-20240228-224506-new.png",
			options: [
				{
					content:
						"Não, mas não dar o alerta pode incorrer no crime de omissão de auxilio",
					isCorrect: true,
				},
				{
					content:
						"Sim, porque se não der o alerta pode incorrer no crime de omissão de auxílio",
					isCorrect: false,
				},
				{ content: "Sim sempre", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Na condução nocturna, os hábitos do condutor aumentam ou não a fadiga?",
			image: "https://i.ibb.co/nz5WV03/IMG-20240228-224227-new.png",
			options: [
				{
					content:
						"Factores como alimentação, seu tipo, quantidade e frequência não acentuam a fadiga",
					isCorrect: false,
				},
				{
					content:
						"Sim, factores como alimentação, seu tipo, quantidade e frequência",
					isCorrect: true,
				},
				{
					content:
						"Apenas as ingestões de bebidas alcoólicas acentuam a fadiga",
					isCorrect: false,
				},
				{
					content: "Os hábitos do condutor não aumentam a fadiga",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O que provoca num condutor, a elevada ingestão de bebidas alcoólicas?",
			image: "https://i.ibb.co/rcRHgcJ/IMG-20240228-224249-new.png",
			options: [
				{ content: "A redução da distância de paragem", isCorrect: false },
				{
					content: "O aumento da capacidade de atenção e concentração",
					isCorrect: false,
				},
				{ content: "A redução da capacidade de reacção", isCorrect: true },
				{
					content: "O aumento das capacidades de avaliação das distâncias",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Com nevoeiro (cacimba), a distância de segurança aplicável:",
			image:
				"https://i.ibb.co/0JM91tG/Whats-App-Image-2024-02-28-at-19-new-22-50-7a958de4.png",
			options: [
				{
					content: "Não é a mesma que em condições de boa visibilidade",
					isCorrect: true,
				},
				{
					content: "E a mesma que em condições de boa visibilidade",
					isCorrect: false,
				},
				{ content: "E a indicada pela sinalização vertical", isCorrect: false },
				{
					content: "E menor para permitir ver o carro que segue à sua frente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A paragem o estacionamento devem fazer-se, fora das localidades:",
			image: "https://i.ibb.co/8g2DYyp/IMG-20240301-081201-new.png",
			options: [
				{
					content:
						"Nas faixas de rodagem ou, não sendo isso possível, o mais próximo possível da margem esquerda, paralelamente a esta e no mesmo sentido da marcha",
					isCorrect: false,
				},
				{
					content:
						"Fora das faixas de rodagem ou, não sendo isso possível, o mais próximo possível da margem direita, paralelamente a esta e no sentido da marcha",
					isCorrect: false,
				},
				{
					content:
						"Fora das faixas de rodagem ou, não sendo isso possível, o mais próximo possível da margem esquerda, paralelamente a esta e no mesmo sentido da marcha",
					isCorrect: true,
				},
				{
					content:
						"Fora das faixas de rodagem ou, não sendo isso possível, o mais próximo possível da respectiva margem a esquerda, paralelamente a esta e no sentido contrário ao da marcha",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Uma criança de 8 anos, como deve viajar num automóvel equipado com cintos de segurança todos os lugares?",
			image: "https://i.ibb.co/vDLgxBT/IMG-20240301-080953-new.png",
			options: [
				{
					content:
						"No banco da frente, com um sistema de retenção homologado e adaptado ao seu tamanho e peso",
					isCorrect: false,
				},
				{
					content:
						"É indiferente, sempre que utilize um sistema de retenção homologado e adaptado ao seu tamanho e peso",
					isCorrect: false,
				},
				{
					content:
						"No banco da retaguarda, com um sistema de retenção homologado e adaptado ao seu tamanho e peso",
					isCorrect: true,
				},
				{
					content: "Basta utilizar o cinto de segurança do banco da retaguarda",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A distância mínima a guardar em relação ao veículo que transita à minha frente:",
			image: "https://i.ibb.co/4mxRVR2/IMG-20240301-081043-new.png",
			options: [
				{ content: "Não deve ser inferior a 30 metros", isCorrect: false },
				{
					content:
						"Deve ser aquela que me permita, se necessário, imobilizar o veículo em segurança",
					isCorrect: true,
				},
				{
					content: "Não deve ser superior à distância de paragem",
					isCorrect: false,
				},
				{
					content:
						"Deve ser aquela que me permita ver as rodas traseiras do veículo que vai à minha frente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Mudança de Direcção é uma manobra em que:",
			image: "https://i.ibb.co/dmnBV27/IMG-20240301-080753-new.png",
			options: [
				{
					content:
						"Um condutor toma outra via que se intersecta com aquela em que vinha circulando",
					isCorrect: true,
				},
				{
					content:
						"Um condutor toma outra via que é paralela aquela em que vinha circulando",
					isCorrect: false,
				},
				{
					content:
						"Um condutor toma outra faixa de sentido contrário aquela em que vinha circulando",
					isCorrect: false,
				},
				{
					content: "Um condutor faz inversão de sentido de marcha",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Os veículos que, em razão do serviço a que se destinam, devam parar na via pública ou deslocar-se em marcha lenta devem:",
			image: "https://i.ibb.co/L9z2pbt/IMG-20240301-080830-new.png",
			options: [
				{
					content:
						"Utilizar o triângulo de pré-sinalização e a luz de presença",
					isCorrect: false,
				},
				{ content: "Utilizar as luzes de máximos", isCorrect: false },
				{
					content:
						"Utilizar avisadores luminosos especiais, em que as características e condições de utilização são fixadas em regulamento",
					isCorrect: true,
				},
				{
					content:
						"Utilizar as luzes de médios em alternância com as luzes de presença como fixado em regulamento",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A condução de um veículo implica uma estratégia por parte do seu condutor, que inclui:",
			image: "https://i.ibb.co/MSm58rG/IMG-20240301-080718-new.png",
			options: [
				{
					content: "A definição de vários trajectos e do tempo de viagem",
					isCorrect: false,
				},
				{
					content: "A definição de uma trajectória e de uma velocidade",
					isCorrect: true,
				},
				{
					content: "A definição dos tempos de descanso durante o trajecto",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O significado deste sinal é:",
			image: "https://i.ibb.co/Zgr6zgQ/IMG-20240301-081428-new.png",
			options: [
				{
					content: "Parque de estacionamento para todos os automóveis",
					isCorrect: false,
				},
				{
					content: "Parque de estacionamento para automóveis pesados",
					isCorrect: false,
				},
				{
					content: "Parque de estacionamento para automóveis ligeiros",
					isCorrect: true,
				},
				{
					content: "Zona de paragem para automóveis ligeiros",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				'A Condução Defensiva deve ser mais "pró-activa", isto significa que:',
			image:
				"https://i.ibb.co/NtS8sXh/Whats-App-Image-2024-02-28-at-17-new-37-42-c7ebe33e.png",
			options: [
				{
					content:
						"Deve adivinhar as situações de perigo e concentrar-se em aproximar-se o mais possível da berma para se proteger",
					isCorrect: false,
				},
				{
					content:
						"Deve prever as situações antes de acontecerem e mesmo que não aconteçam prever a probabilidade de B que aconteçam",
					isCorrect: true,
				},
				{
					content:
						"Deve estar atendo aos ruídos estranhos dos veículos no trânsito e sinalizar",
					isCorrect: false,
				},
				{
					content:
						"Deve ser mais rápida e activa para sair rapidamente das zonas de perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quando se circula numa zona com grande intensidade de vento, além de reduzir a velocidade, qual deve ser o comportamento a adoptar:",
			image:
				"https://i.ibb.co/4RzSbG6/Whats-App-Image-2024-02-28-at-17-new-37-43-66237bdc.png",
			options: [
				{
					content:
						"Segurar o volante com especial suavidade por forma a não contrariar as oscilações do veículo",
					isCorrect: false,
				},
				{ content: "Segurar o volante com maior firmeza", isCorrect: true },
				{
					content:
						"Rodar ligeiramente o volante para o lado contrário à direcção do vento",
					isCorrect: false,
				},
				{
					content:
						"Acelerar para passar mais rapidamente pela zona onde o vento sopra forte",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Os condutores com pouco tempo de condução (inexperientes):",
			image:
				"https://i.ibb.co/2Sc7KVV/Whats-App-Image-2024-02-28-at-17-new-37-45-b1c9e36e.png",
			options: [
				{
					content: "Têm capacidades mais eficientes na recolha de informações",
					isCorrect: false,
				},
				{
					content: "Têm capacidades mais acertadas na recolha de informações",
					isCorrect: false,
				},
				{
					content: "Têm capacidades menos eficientes na recolha de informações",
					isCorrect: true,
				},
				{
					content:
						"A capacidade na recolha da informação não tem relação com a experiência, sim com a visão",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O feixe luminoso emitido pelas luzes de cruzamento (médios), deve projectar-se no solo:",
			image:
				"https://i.ibb.co/GHXV7TK/Whats-App-Image-2024-02-28-at-17-new-37-44-dd0e7a02.png",
			options: [
				{ content: "E no mínimo, iluminá-lo a 100 metros", isCorrect: false },
				{
					content:
						"E iluminá-lo eficazmente, numa distância não superior a 30 metros",
					isCorrect: true,
				},
				{
					content:
						"E iluminá-lo eficazmente, numa distância não superior a 50 metros",
					isCorrect: false,
				},
				{
					content:
						"E iluminá-lo eficazmente, numa distância não superior a 100 metros",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O sistema nervoso central é afectado por alguns medicamentos.",
			image:
				"https://i.ibb.co/1GyTswF/Whats-App-Image-2024-02-28-at-17-new-37-46-69418fac.png",
			options: [
				{
					content: "Só se não forem receitados por um médico",
					isCorrect: false,
				},
				{ content: "Depende do sexo e do peso", isCorrect: false },
				{ content: "Certo", isCorrect: true },
				{
					content: "Os medicamentos não afectam o sistema nervoso central",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A força centrípeta e centrifuga:",
			image:
				"https://i.ibb.co/WFCwhJB/Whats-App-Image-2024-02-28-at-17-new-37-45-db1d956e.png",
			options: [
				{
					content:
						"São forças que actuam no mesmo sentido e se acumulam uma à outra",
					isCorrect: false,
				},
				{
					content:
						"Só depende do raio da trajectória não tendo a velocidade nenhuma influência",
					isCorrect: false,
				},
				{
					content:
						"São forças que actuam em sentido contrário uma em relação à outra",
					isCorrect: true,
				},
				{
					content:
						"São forças que só ocorrem quando o veículo vai em linha recta",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como deve ser feita a entrada e saída de passageiros?",
			image:
				"https://i.ibb.co/vqZ617X/Whats-App-Image-2024-02-28-at-17-new-37-45-3d62a889.png",
			options: [
				{
					content:
						"Pelo lado direito, se a paragem do veículo for permitida desse lado",
					isCorrect: true,
				},
				{ content: "Sempre pelo lado direito", isCorrect: false },
				{ content: "Sempre pelo lado esquerdo", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Em caso de nevoeiro (cacimba) forte:",
			image:
				"https://i.ibb.co/yn0H92r/Whats-App-Image-2024-02-28-at-19-new-22-41-e2c47957.png",
			options: [
				{
					content:
						"Deve pensar em parar em local seguro e aguardar que o nevoeiro levante",
					isCorrect: true,
				},
				{
					content:
						"Deve pensar em seguir viagem o mais depressa possível para sair da zona de nevoeiro rapidamente",
					isCorrect: false,
				},
				{
					content:
						"Deve pensar em seguir viagem buzinando constantemente para assinalar a sua presença",
					isCorrect: false,
				},
				{
					content:
						"Deve ligar as luzes de estrada e as luzes de emergência para ser mais facilmente visto pelos outros condutores",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Circular com o braço fora do veículo:",
			image:
				"https://i.ibb.co/hHVQJj7/Whats-App-Image-2024-02-28-at-19-new-22-40-69346e6d.png",
			options: [
				{
					content: "É uma contravenção punida com a multa de 500,00 Mt",
					isCorrect: false,
				},
				{
					content: "E uma contravenção punida com a multa de 1.000,00 Mt",
					isCorrect: false,
				},
				{
					content: "É uma contravenção punida com a multa de 2.000,00 Mt",
					isCorrect: true,
				},
				{
					content: "É uma contravenção punida com a multa de 3.000,00 Mt",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"E livre o trânsito rodoviário nas vias de domínio público do Estado e nas vias de domínio privado quando abertas ao trânsito público?",
			image:
				"https://i.ibb.co/VY4RSgQ/Whats-App-Image-2024-02-28-at-19-new-22-47-e73726d7.png",
			options: [
				{
					content:
						"Sim, mas as pessoas devem abster-se de actos que impeçam ou embaracem o trânsito ou comprometam a segurança ou a comodidade dos utentes das vias",
					isCorrect: true,
				},
				{
					content:
						"Não, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias",
					isCorrect: false,
				},
				{
					content:
						"Sim, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias",
					isCorrect: false,
				},
				{
					content: "Sim, desde que não comprometam a segurança",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A distância de reacção é:",
			image:
				"https://i.ibb.co/D9m74xW/Whats-App-Image-2024-02-28-at-19-new-22-46-5ca333eb.png",
			options: [
				{
					content:
						"A distância percorrida pelo veículo desde que o condutor acciona o travão até parar",
					isCorrect: false,
				},
				{
					content:
						"A distância percorrida pelo veículo desde que o condutor vê o perigo até reagir",
					isCorrect: true,
				},
				{
					content:
						"A distância percorrida pelo veiculo desde que o condutor vê o perigo até parar",
					isCorrect: false,
				},
				{
					content:
						"A distância percorrida pelo veículo até que o condutor vê o perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Só pode ser ordenada a suspensão do trânsito por:",
			image:
				"https://i.ibb.co/x3vR3YG/Whats-App-Image-2024-02-28-at-19-new-22-49-51e3621e.png",
			options: [
				{
					content:
						"A Motivos de segurança, de emergência grave ou de obras, ou com o fim de realizar a conservação dos pavimentos, instalações e obras de arte",
					isCorrect: true,
				},
				{ content: "Ser feriado e haver festejos", isCorrect: false },
				{
					content:
						"Motivos de segurança, de emergência grave ou de obras, ou com o fim de promover produtos e marcas de Automóveis",
					isCorrect: false,
				},
				{ content: "Ser fim de semana", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Em condições de frio, neve e gelo:",
			image:
				"https://i.ibb.co/Hgds521/Whats-App-Image-2024-02-28-at-19-new-22-48-29240c13.png",
			options: [
				{
					content:
						"Verifica-se um aumento da aderência e da capacidade de tracção do veículo",
					isCorrect: false,
				},
				{
					content:
						"Só em caso de neve e frio é que se verifica uma diminuição da aderência e da capacidade de tracção do veículo",
					isCorrect: false,
				},
				{
					content:
						"Verifica-se uma diminuição da aderência e da capacidade de tracção do veículo",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"O controlo dinâmico do veículo é uma das tarefas da condução e é...",
			image:
				"https://i.ibb.co/j4Zsp0Q/Whats-App-Image-2024-02-28-at-19-new-22-49-e8961a05.png",
			options: [
				{
					content: "Efectuado através da aceleração e travagem do veículo",
					isCorrect: false,
				},
				{
					content: "Efectuado através do sistema de direcção",
					isCorrect: false,
				},
				{
					content:
						"Efectuado através da definição da sua velocidade e da sua trajectória",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Para a realização da tarefa de condução, o sentido da visão é importante porque:",
			image:
				"https://i.ibb.co/5FPJngn/Whats-App-Image-2024-02-28-at-19-new-22-51-dd65f6a0.png",
			options: [
				{
					content: "Porque possibilita que se conduza com maior velocidade",
					isCorrect: false,
				},
				{
					content: "Porque possibilita identificar os gestos da policia",
					isCorrect: false,
				},
				{
					content:
						"Possibilita identificar as formas, as cores e os movimentos de todos os elementos presentes no ambiente Rodoviário",
					isCorrect: true,
				},
				{
					content:
						"O sentido da visão não é importante para a condução, porque são as mãos e os pés que realizam a tarefa da condução",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O frio excessivo, a chuva e o calor:",
			image:
				"https://i.ibb.co/0qnF9Fq/Whats-App-Image-2024-02-28-at-19-new-22-51-4e4d3e4e.png",
			options: [
				{
					content: "Apenas o frio e a chuva aumentam a fadiga na condução",
					isCorrect: false,
				},
				{ content: "Aumentam a fadiga na condução", isCorrect: true },
				{
					content: "Apenas a chuva e o calor aumentam a fadiga na condução",
					isCorrect: false,
				},
				{ content: "Não aumentam a fadiga na condução", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A distância de segurança, é um factor a considerar.",
			image:
				"https://i.ibb.co/0BS1FPT/Whats-App-Image-2024-02-28-at-19-new-22-52-35fa0ff5.png",
			options: [
				{
					content:
						"Apenas em condução urbana, devido à intensidade do trânsito",
					isCorrect: false,
				},
				{
					content:
						"Nas estradas rurais pela diminuição dos limites de velocidade",
					isCorrect: false,
				},
				{ content: "Em qualquer situação", isCorrect: true },
			],
			explanation: "",
		},
		{
			content: "Se o veículo entrar em aquaplanagem (hidroplanagem) deve:",
			image:
				"https://i.ibb.co/P5L0CFL/Whats-App-Image-2024-02-28-at-19-new-22-52-41a954a1.png",
			options: [
				{
					content:
						"Manter a calma e ser suave com controlos, travar e girar o volante suavemente",
					isCorrect: false,
				},
				{
					content:
						"Manter a calma e ser suave com os controlos, acelerar e girar o volante suavemente",
					isCorrect: false,
				},
				{
					content:
						"Manter a calma e ser suave com os controlos, não travar nem acelerar ou girar o volante",
					isCorrect: true,
				},
				{
					content:
						"Travar forte segurando bem o volante para que a trajetória do veículo não se altere",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de inversão do sentido da marcha é:",
			image:
				"https://i.ibb.co/8zMvJ6h/Whats-App-Image-2024-02-28-at-19-new-22-54-ef94d786.png",
			options: [
				{
					content:
						"Manobra através da qual o condutor coloca o veículo no mesmo sentido",
					isCorrect: false,
				},
				{
					content:
						"Manobra através da qual o condutor coloca o veículo no mesmo sentido, em direcção oposta",
					isCorrect: false,
				},
				{
					content:
						"Manobra através da qual o condutor coloca o veículo em sentido oposto, na mesma direcção",
					isCorrect: false,
				},
				{
					content:
						"Manobra através da qual o condutor coloca o veículo no mesmo sentido e na mesma direcção",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Para a execução de manobras, qual dos seguintes te parece mais importante?",
			image:
				"https://i.ibb.co/DG5gysN/Whats-App-Image-2024-02-28-at-19-new-22-42-2da8d6fa.png",
			options: [
				{
					content: "Dedicação, atenção e uma atitude adequada",
					isCorrect: false,
				},
				{ content: "Empenho, atitude adequada e atenção", isCorrect: false },
				{
					content: "Treino, experiência e uma altitude adequada",
					isCorrect: false,
				},
				{ content: "Coragem, dedicação e determinação", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O vento afecta a estabilidade do veículo:",
			image:
				"https://i.ibb.co/JF8NHTT/Whats-App-Image-2024-02-28-at-19-new-22-41-8b304e11.png",
			options: [
				{
					content:
						"Especialmente em zonas abertas de planície, zonas marítimas costeiras ou de montanha",
					isCorrect: true,
				},
				{
					content: "Especialmente em zonas urbanas com muitos edifícios altos",
					isCorrect: false,
				},
				{
					content:
						"Especialmente em zonas de parques de estacionamento fechados",
					isCorrect: false,
				},
				{ content: "Não", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "A condução defensiva manifesta-se por:",
			image:
				"https://i.ibb.co/pwKyrsV/Whats-App-Image-2024-02-28-at-19-new-22-44-278c1899.png",
			options: [
				{
					content:
						"O condutor ser sempre o primeiro a avançar em todas as intersecções",
					isCorrect: false,
				},
				{
					content:
						"O condutor ceder os seus direitos em beneficio da segurança rodoviária",
					isCorrect: true,
				},
				{
					content:
						"O condutor ter em conta apenas os seus direitos e nunca os seus deveres",
					isCorrect: false,
				},
				{
					content:
						"O condutor ceder sempre a passagem aos condutores que se apresentem numa intersecção",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Como devo actuar perante a diminuição da aderência, que provoca o aumento da distância de travagem?",
			image:
				"https://i.ibb.co/Rb2CQW0/Whats-App-Image-2024-02-28-at-19-new-22-43-f6970bcb.png",
			options: [
				{ content: "Aumentar a velocidade", isCorrect: false },
				{ content: "Diminuir a velocidade", isCorrect: true },
				{
					content: "A diminuição da aderência diminui a distância de travagem",
					isCorrect: false,
				},
				{ content: "Manter a velocidade", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Entende-se por cruzamento de veículos:",
			image:
				"https://i.ibb.co/HxGD4SH/Whats-App-Image-2024-02-28-at-19-new-22-45-9e40870c.png",
			options: [
				{
					content:
						"Quando na mesma via, se encontram dois veículos transitando no mesmo sentido",
					isCorrect: false,
				},
				{
					content:
						"Quando os condutores de dois veículos que transitam na mesma via e em sentidos opostos, passam um pelo outro em simultâneo",
					isCorrect: true,
				},
				{
					content:
						"Quando dois veículos, circulando na mesma fila, o que se encontra atrás passa para diante do outro",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Entende-se por automóvel ligeiro:",
			image:
				"https://i.ibb.co/Hd12CRH/Whats-App-Image-2024-02-28-at-19-new-22-45-0c120b08.png",
			options: [
				{
					content: "O automóvel cuja lotação não excede os 8 lugares",
					isCorrect: false,
				},
				{
					content: "Todos os automóveis até ao peso de 4500 kg",
					isCorrect: false,
				},
				{
					content:
						"O automóvel com PB até 3500 kg e com lotação não superior a 9 lugares, incluindo o condutor",
					isCorrect: true,
				}
			],
			explanation: "",
		},
		{
			content: "Quando um veículo acelera a direito (longitudinalmente):",
			image:
				"https://i.ibb.co/THN6mzG/Screenshot-2024-03-01-09-38-12-669-com-new-miui-gallery.png",
			options: [
				{
					content:
						"O peso é em parte transferido para o eixo traseiro, devido à inércia",
					isCorrect: true,
				},
				{
					content:
						"O peso é em parte transferido para o eixo dianteiro, devido à inércia",
					isCorrect: false,
				},
				{
					content:
						"O peso é em parte transferido para o eixo traseiro, devido à força centrifuga",
					isCorrect: false,
				},
				{
					content:
						"O peso não é transferido nem para a frente nem para trás devido à suspensão do veículo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder de 30 Km/h a 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
			image:
				"https://i.ibb.co/n6JYtNX/Screenshot-2024-03-01-09-37-49-487-com-new-miui-gallery.png",
			options: [
				{
					content: "Com multa de 3.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 2.000,00 Mt e contravenção leve",
					isCorrect: false,
				},
				{
					content: "Com multa de 2.000,00 Mt e contravenção média",
					isCorrect: true,
				},
				{
					content: "Com multa de 2.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Os condutores de veículos ou animais que pretendam mudar de direcção para à direita, devem:",
			image: "https://i.ibb.co/Dzx2d5c/IMG-20240301-092538-new.png",
			options: [
				{
					content:
						"Aproximar-se com a devida antecedência do eixo da via e efectuar a manobra de modo a dar a esquerda à parte central do cruzamento ou entroncamento",
					isCorrect: true,
				},
				{
					content:
						"Aproximar-se com a devida antecedência da berma da via e efectuar a manobra de modo a dar a esquerda á B parte central do cruzamento ou entroncamento",
					isCorrect: false,
				},
				{
					content:
						"Aproximar-se com a devida antecedência do eixo da via e efectuar a manobra de modo a dar a direita à parte central do cruzamento ou entroncamento",
					isCorrect: false,
				},
				{
					content:
						"Aproximar-se com a devida antecedência da berma da via e efectuar a manobra de modo a dar a direita à parte D central do cruzamento ou entroncamento",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que deve ajustado antes de iniciar a marcha?",
			image: "https://i.ibb.co/xSghT2B/IMG-20240301-092724-new.png",
			options: [
				{ content: "De forma folgada o cinto de segurança", isCorrect: false },
				{
					content:
						"A distância do assento aos pedais, a inclinação das costas do banco e o encosto de cabeça",
					isCorrect: true,
				},
				{
					content: "O encosto de cabeça e o cinto de segurança",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content:
				"A paragem localidades, estacionamento devem fazer-se, dentro das localidades:",
			image: "https://i.ibb.co/QYhqDZ0/IMG-20240301-092223-new.png",
			options: [
				{
					content:
						"Nos locais especialmente destinados para esse efeito e pela forma indicada ou na faixa de rodagem, o mais A longe possível do respectivo limite esquerdo, paralelamente a este e no mesmo sentido de marcha",
					isCorrect: false,
				},
				{
					content:
						"Nos locais especialmente destinados para esse efeito e pela forma indicada ou na faixa de rodagem, o mais próximo possível do limite esquerdo, paralelamente a este e no mesmo sentido de marcha",
					isCorrect: true,
				},
				{
					content:
						"Nos locais especialmente destinados para esse efeito e pela forma indicada ou na faixa de rodagem, o mais perto possível do eixo da via, paralelamente a este e no sentido de marcha",
					isCorrect: false,
				},
				{
					content:
						"Nos locais especialmente destinados para esse efeito e pela forma indicada ou na faixa de rodagem, o mais Próximo possível do limite esquerdo, paralelamente a este e no sentido contrário ao da marcha",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Excepto o disposto em regulamentos locais e em se manifesta necessidade:",
			image: "https://i.ibb.co/H4SyKdM/IMG-20240301-092254-new.png",
			options: [
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para estacionar",
					isCorrect: false,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para a manobra de marcha atrás",
					isCorrect: false,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direcção",
					isCorrect: true,
				},
				{
					content:
						"Pode utilizar-se o lado direito da faixa de rodagem para conduzir a grande velocidade",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O desempenho da condução é afectado de forma negativa pela agressividade?",
			image: "https://i.ibb.co/YTx1c78/IMG-20240301-092330-new.png",
			options: [
				{ content: "Errado", isCorrect: false },
				{ content: "Certo, mas só em condução urbana", isCorrect: false },
				{ content: "Certo", isCorrect: true }
			],
			explanation: "",
		},
		{
			content:
				"A ingestão de pequenas quantidades de bebidas alcoólicas, pode prejudicar a capacidade de condução?",
			image: "https://i.ibb.co/fYHp83s/IMG-20240301-091950-new.png",
			options: [
				{
					content: "Não, pequenas quantidades são completamente inofensivas",
					isCorrect: false,
				},
				{
					content:
						"Sim, pois podem levar à sobrevalorização da capacidade de condução",
					isCorrect: true,
				},
				{
					content: "Não, se forem ingeridas durante a refeição e com água",
					isCorrect: false,
				},
				{
					content: "Sim, mas só em condutores pouco habituados a beber",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Conduzir em condições atmosféricas adversas:",
			image: "https://i.ibb.co/rGYLdC6/IMG-20240301-092020-new.png",
			options: [
				{ content: "Afecta a distância de travagem", isCorrect: true },
				{ content: "Afecta a taxa de alcoolemia", isCorrect: false },
				{ content: "Reduz a fadiga", isCorrect: false }
			],
			explanation: "",
		},
		{
			content: "Só pode ser ordenada a suspensão do trânsito por:",
			image: "https://i.ibb.co/FXmJkvj/IMG-20240301-092153-new.png",
			options: [
				{
					content:
						"Motivos de segurança, de emergência grave ou de obras, ou com o fim de realizar a conservação dos pavimentos, instalações e obras de arte",
					isCorrect: true,
				},
				{ content: "Ser feriado e haver festejos", isCorrect: false },
				{
					content:
						"Motivos de segurança, de emergência grave ou de obras, ou com o fim de promover produtos e marcas de automóveis",
					isCorrect: false,
				},
				{ content: "Ser fim de semana", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Nas estradas nacionais, a suspensão do trânsito deve ser solicitada:",
			image: "https://i.ibb.co/h1HN34m/IMG-20240301-091718-new.png",
			options: [
				{
					content: "Ao INATTER e nas estradas locais, aos conselhos municipais",
					isCorrect: false,
				},
				{
					content:
						"A polícia de segurança pública e nas estradas locais, aos conselhos municipais",
					isCorrect: false,
				},
				{
					content: "A ANE e, nas estradas locais, aos conselhos municipais",
					isCorrect: true,
				},
				{
					content:
						"Ao Ministério dos transportes e nas estradas locais, aos conselhos municipais",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de paragem é:",
			image: "https://i.ibb.co/Q7BDDTJ/IMG-20240301-091519-new.png",
			options: [
				{
					content:
						"Imobilização de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou descarga, desde que o condutor esteja pronto a retomar a marcha",
					isCorrect: true,
				},
				{
					content:
						"Imobilização de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou descarga",
					isCorrect: false,
				},
				{
					content:
						"Estacionamento de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou descarga",
					isCorrect: false,
				},
				{
					content: "Para breves operações de carga ou descarga",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"As baixas temperaturas que normalmente acompanham a existência de nevoeiro, que podem provocar?",
			image: "https://i.ibb.co/Fnvsktj/IMG-20240301-091641-new.png",
			options: [
				{
					content:
						"O embaciamento dos vidros e consequente aumento da visibilidade para o exterior",
					isCorrect: false,
				},
				{
					content:
						"Ser mais fácil limpar os vidros já que estes estão molhados",
					isCorrect: false,
				},
				{
					content:
						"O embaciamento dos vidros e consequentemente diminuição da visibilidade para o exterior",
					isCorrect: true,
				}
			],
			explanation: "",
		},
		{
			content: "A postura e o posicionamento correctos do condutor, devem:",
			image: "https://i.ibb.co/52KTxWx/IMG-20240301-091307-new.png",
			options: [
				{
					content: "Proporcionar o alcance aos comandos do rádio e GPS",
					isCorrect: false,
				},
				{
					content:
						"Proporcionar o alcance a todos os comandos e controlos, sem que o condutor tenha de se movimentar ou afastar do assento",
					isCorrect: true,
				},
				{
					content: "Proporcionar o uso folgado do cinto de segurança",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content:
				"Os condutores devem, nos cruzamentos, entroncamentos e rotundas:",
			image:
				"https://i.ibb.co/Whats-App-Image-2024-02-28-at-19-new-22-42-2da8d6fa.png",
			options: [
				{
					content: "Ceder passagem aos veículos que se desloquem sobre carris",
					isCorrect: false,
				},
				{ content: "Ceder passagem a todos os veículos", isCorrect: false },
				{
					content:
						"Ceder passagem a todos os veículos que se apresentem pela esquerda",
					isCorrect: false,
				},
				{ content: "Ceder passagem a todos os velocípedes", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Só é permitido fazer marcha atrás:",
			image: "https://i.ibb.co/LtpbyNX/IMG-20240301-091226-new.png",
			options: [
				{
					content:
						"Como manobra auxiliar ou de recurso e deve efectuar-se o mais possível à direita, em local de boa visibilidade e onde não prejudique o trânsito",
					isCorrect: false,
				},
				{
					content:
						"Como manobra auxiliar ou de recurso e deve efectuar-se o mais possível à esquerda, em local de boa visibilidade e onde não prejudique o trânsito",
					isCorrect: true,
				},
				{
					content:
						"Como manobra auxiliar ou de recurso e deve efectuar-se o mais possível junto ao eixo da via, em local de boa visibilidade e onde não prejudique o trânsito",
					isCorrect: false,
				},
				{
					content:
						"Como manobra auxiliar ou de recurso e deve efectuar-se o mais possível à esquerda, em local de fraca visibilidade e onde não prejudique o trânsito",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Porque lado o trânsito de veículos ou de animais é feito:",
			image:
				"https://i.ibb.co/LQYw2FL/Whats-App-Image-2024-02-28-at-19-new-11-15-8a7033cf.png",
			options: [
				{
					content:
						"Pela direita das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente",
					isCorrect: false,
				},
				{
					content:
						"Pela esquerda das faixas de rodagem e o mais longe possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente",
					isCorrect: false,
				},
				{
					content:
						"Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente",
					isCorrect: true,
				},
				{
					content:
						"Pela direita das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que não permita evitar qualquer acidente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Este sinal significa:",
			image: "https://i.ibb.co/jhf6VR6/IMG-20240301-081529-new.png",
			options: [
				{ content: "Raquetas e bandeirola de sinalização", isCorrect: true },
				{ content: "Proibido passar", isCorrect: false },
				{ content: "Obrigatório parar", isCorrect: false },
				{ content: "Homens na via a trabalhar", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"O que deve fazer se perceber que o seu veículo vai ser ultrapassado nesta situação?",
			image: "https://i.ibb.co/XZHG5C4/IMG-20240301-093550-new.png",
			options: [
				{
					content:
						"Afastar-se o mais possível para a esquerda e não aumentar a velocidade, enquanto não for ultrapassado",
					isCorrect: true,
				},
				{
					content: "Não mudar a sua posição na faixa de rodagem",
					isCorrect: false,
				},
				{
					content:
						"Facilitar a ultrapassagem desviando-se para a direita e não aumentando a velocidade",
					isCorrect: false,
				},
				{
					content:
						"Impedir que seja realizada a manobra, aumentando a velocidade",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder até 20 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:",
			image:
				"https://i.ibb.co/NxTzZVt/Screenshot-2024-03-01-09-37-06-285-com-new-miui-gallery.png",
			options: [
				{
					content: "Com multa de 2.000,00 Mt e contravenção leve",
					isCorrect: false,
				},
				{
					content: "Com multa de 1,000,00 Mt e contravenção leve",
					isCorrect: true,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 2.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de entroncamento é:",
			image: "https://i.ibb.co/cXZRW0k/IMG-20240301-093333-new.png",
			options: [
				{ content: "Zona triangular de via pública", isCorrect: false },
				{
					content: "Zona de junção ou bifurcação de vias públicas",
					isCorrect: true,
				},
				{
					content: "Zona de confluência de trânsito de via pública",
					isCorrect: false,
				},
				{ content: "Zona de ultrapassagem proibida", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"Quando se circula numa zona com grande intensidade de vento, além de reduzir a velocidade, qual deve ser o comportamento a adoptar:",
			image:
				"https://i.ibb.co/4RzSbG6/Whats-App-Image-2024-02-28-at-17-new-37-43-66237bdc.png",
			options: [
				{ content: "Segurar o volante com maior firmeza", isCorrect: false },
				{
					content:
						"Segurar o volante com especial suavidade por forma a não contrariar as oscilações do veículo",
					isCorrect: true,
				},
				{
					content:
						"Rodar ligeiramente o volante para o lado contrário à direcção do vento",
					isCorrect: false,
				},
				{
					content:
						"Acelerar para passar mais rapidamente pela zona onde o vento sopra forte",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Se o veículo entrar em aquaplanagem (hidroplanagem) deve:",
			image: "https://i.ibb.co/xSvNbc6/IMG-20240301-093140-new.png",
			options: [
				{
					content:
						"Manter a calma e ser suave com os controlos, travar e girar o volante suavemente",
					isCorrect: true,
				},
				{
					content:
						"Manter a calma e ser suave com os controlos, acelerar e girar o volante suavemente",
					isCorrect: false,
				},
				{
					content:
						"Manter a calma e ser suave com os controlas, não travar nem acelerar ou girar o volante",
					isCorrect: false,
				},
				{
					content:
						"Travar forte segurando bem o volante para que a trajectória do veículo não se altere",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como se mede a quantidade de álcool ingerido?",
			image:
				"https://i.ibb.co/9YHjCBH/Screenshot-2024-03-01-09-58-46-286-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Pela proporção entre a quantidade de álcool ingerido num determinado espaço de tempo",
					isCorrect: false,
				},
				{
					content:
						"Pela proporção entre a quantidade de álcool existente num determinado volume de sangue",
					isCorrect: true,
				},
				{
					content:
						"Pela proporção entre a quantidade de álcool ingerido em duas horas",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A distância de reacção é influenciada por:",
			image:
				"https://i.ibb.co/grkgww2/Screenshot-2024-03-01-10-07-03-402-com-new-miui-gallery.png",
			options: [
				{ content: "Velocidade e tempo de reacção", isCorrect: false },
				{
					content: "Distância de travagem e tempo de reacção",
					isCorrect: false,
				},
				{ content: "Tempo de reacção e estado da via", isCorrect: false },
				{
					content: "Apenas por factores externos ao condutor",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "A direcção assistida permite:",
			image:
				"https://i.ibb.co/Sv9yWft/Screenshot-2024-03-01-10-06-36-252-com-new-miui-gallery.png",
			options: [
				{ content: "Aumentar o ângulo de viragem", isCorrect: false },
				{
					content: "Diminuir o esforço do condutor no volante",
					isCorrect: true,
				},
				{ content: "Diminuir a desmultiplicação no volante", isCorrect: false },
				{
					content: "Efectuar as curvas de uma forma mais rápida",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Nas descidas de inclinação acentuada:",
			image:
				"https://i.ibb.co/XL1SW64/Screenshot-2024-03-01-10-07-43-425-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Os automóveis ligeiros não podem transitar sem utilizarem o motor como auxiliar do travão",
					isCorrect: false,
				},
				{
					content:
						"Todos os automóveis não podem transitar sem utilizarem o motor como auxiliar do travão",
					isCorrect: false,
				},
				{
					content:
						"Os automóveis pesados não podem transitar sem utilizarem o motor como auxiliar do travão",
					isCorrect: true,
				},
				{
					content:
						"Só os automóveis pesados de passageiros não podem transitar sem utilizarem o motor como auxiliar do travão",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Se passar por um acidente ou por vitimas de doença súbita, deve:",
			image:
				"https://i.ibb.co/qFSxxky/Screenshot-2024-03-01-10-07-18-731-com-new-miui-gallery.png",
			options: [
				{ content: "Ligar de imediato para o hospital", isCorrect: false },
				{
					content:
						"Iniciar de imediato as ações de primeiro socorro mesmo que não domine os procedimentos",
					isCorrect: false,
				},
				{
					content:
						"Iniciar de imediato as ações para evitar que a situação de emergência se agrave, incluindo proceder à segurança do local, das vitimas e dos que prestam socorro",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "A distância de reacção é:",
			image:
				"https://i.ibb.co/CVLF1sJ/Screenshot-2024-03-01-10-08-26-624-com-new-miui-gallery.png",
			options: [
				{
					content:
						"A distância percorrida pelo veículo desde que o condutor acciona o travão até parar",
					isCorrect: false,
				},
				{
					content:
						"A distância percorrida pelo veiculo desde que o condutor vê o perigo até reagir",
					isCorrect: false,
				},
				{
					content:
						"A distância percorrida pelo veículo desde que o condutor vê o perigo até parar",
					isCorrect: true,
				},
				{
					content:
						"A distância percorrida pelo veículo até que o condutor vê o perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder em mais de 30 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
			image:
				"https://i.ibb.co/GPH9Lcy/Screenshot-2024-03-01-10-08-11-916-com-new-miui-gallery.png",
			options: [
				{
					content: "Com multa de 2.000,00 Mt e contravenção leve",
					isCorrect: false,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção leve",
					isCorrect: true,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 1.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder de 40 Km/h até 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:",
			image:
				"https://i.ibb.co/XD3D4NT/Screenshot-2024-03-01-10-09-20-982-com-new-miui-gallery.png",
			options: [
				{
					content: "Com multa de 4.000,00 Mt e contravenção grave",
					isCorrect: true,
				},
				{
					content: "Com multa de 6.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
				{
					content: "Com multa de 4.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 2.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Em especial à noite, com nevoeiro (cacimba), as luzes de estrada:",
			image:
				"https://i.ibb.co/VWZs1Wy/Screenshot-2024-03-01-10-09-07-196-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Devem ser usadas porque permitem uma maior visibilidade a maior distância",
					isCorrect: false,
				},
				{
					content:
						"Devem ser evitadas porque reflectem-se no nevoeiro impedindo a visibilidade a maior distância",
					isCorrect: true,
				},
				{
					content:
						"São as mais aconselháveis para garantir alguma visibilidade",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A distância de travagem depende principalmente de que factores?",
			image:
				"https://i.ibb.co/J3Lqq45/Screenshot-2024-03-01-10-09-57-238-com-new-miui-gallery.png",
			options: [
				{
					content: "Estado psicofísico do condutor e velocidade do veículo",
					isCorrect: false,
				},
				{
					content: "Tipo e estado da via, estado e velocidade do veículo",
					isCorrect: true,
				},
				{
					content: "Estado do veículo, tipo de via e visibilidade",
					isCorrect: false,
				},
				{
					content: "Só depende do estado físico e psíquico do condutor",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Numa paragem ou estacionamento irregular:",
			image:
				"https://i.ibb.co/jrbF2Wk/Screenshot-2024-03-01-10-09-43-172-com-new-miui-gallery.png",
			options: [
				{
					content: "A contravenção é punida com a multa de 1000,00 Mt",
					isCorrect: false,
				},
				{
					content: "A contravenção é punida com a multa de 500,00 Mt",
					isCorrect: true,
				},
				{
					content: "A contravenção é punida com a multa de 2000,00 Mt",
					isCorrect: false,
				},
				{
					content: "A contravenção é punida com a multa de 3000.00 Mt",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Todos condutores de veículos ou animais são obrigados a...",
			image:
				"https://i.ibb.co/SxK3vnZ/Screenshot-2024-03-01-10-10-29-950-com-new-miui-gallery.png",
			options: [
				{
					content:
						"abandonar os veículos nos locais de estacionamento sem motivo justificado",
					isCorrect: false,
				},
				{
					content:
						"obedecer ao sinal de paragem feito polas autoridades com competência para fiscalização do trânsito",
					isCorrect: true,
				},
				{
					content:
						"reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content: "Qual das seguintes é uma afirmação falsa:",
			image:
				"https://i.ibb.co/nq2tvDT/Screenshot-2024-03-01-10-10-17-867-com-new-miui-gallery.png",
			options: [
				{
					content:
						"O sistema de circulação rodoviária é um conjunto de elementos interligados e dependentes",
					isCorrect: false,
				},
				{
					content: "O homem é o elemento mais importante do sistema rodoviário",
					isCorrect: false,
				},
				{
					content:
						"O acidente resulta sempre da falha de vários elementos do sistema rodoviário",
					isCorrect: true,
				},
				{
					content:
						"A probabilidade de acidente aumenta quando há uma alteração na interacção entre os vários elementos do sistema rodoviário",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Quem não teve uma boa noite de descanso:",
			image:
				"https://i.ibb.co/0c2cHM5/Whats-App-Image-2024-02-28-at-19-new-11-25-90de5e73.png",
			options: [
				{
					content: "Mais facilmente se torna vítima de estados de fadiga",
					isCorrect: true,
				},
				{
					content: "Deve tomar mais cafés durante o dia enquanto conduz",
					isCorrect: false,
				},
				{
					content: "Deve beber muita água durante o dia enquanto conduz",
					isCorrect: false,
				},
				{
					content: "Não afecta a sua capacidade de condução",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Em caso de nevoeiro (cacimba), o que devemos ter presente, ao considerar a distância de segurança?",
			image:
				"https://i.ibb.co/0c2cHM5/Whats-App-Image-2024-02-28-at-19-new-11-25-90de5e73.png",
			options: [
				{
					content:
						"Que basta manter uma distância pequena independentemente da velocidade",
					isCorrect: false,
				},
				{
					content:
						"Que essa distância depende unicamente do tipo de veículo que vai à nossa frente",
					isCorrect: false,
				},
				{
					content:
						"Que há zonas mais densas onde a visibilidade repentinamente se reduz",
					isCorrect: true,
				},
				{
					content:
						"Que como a velocidade praticada pelos veículos é menor devemos seguir mais perto possível do veículo da frente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor está sujeito ao aparecimento de fadiga, quando circula com trânsito intenso?",
			image:
				"https://i.ibb.co/vm13GLL/Screenshot-2024-03-01-10-11-24-573-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Está porque é uma situação de transito monótona o que provoca fadiga",
					isCorrect: true,
				},
				{
					content: "Não está porque circula a velocidade reduzida",
					isCorrect: false,
				},
				{
					content:
						"Não está porque nesta situação pode descansar devido à pouca velocidade do trânsito",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content: "Os sistemas de segurança activa de um veículo...",
			image:
				"https://i.ibb.co/jRvBDZg/Screenshot-2024-03-01-10-11-09-488-com-new-miui-gallery.png",
			options: [
				{
					content:
						"ajudam o condutor a reduzir a possibilidade de ter um acidente",
					isCorrect: true,
				},
				{
					content: "minimizam as lesões em caso de acidente",
					isCorrect: false,
				},
				{
					content:
						"eliminam a possibilidade de sofrer lesões em caso do acidente",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content: "Todo o condutor de veículos ou de animais é obrigado:",
			image:
				"https://i.ibb.co/xJpDHJy/Screenshot-2024-03-01-09-59-07-644-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a direita e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a esquerda e aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a esquerda e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: true,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para o eixo da via e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: 'A expressão "TRAVAR COM O MOTOR" significa:',
			image:
				"https://i.ibb.co/HhMdgK9/Screenshot-2024-03-01-10-01-29-082-com-new-miui-gallery.png",
			options: [
				{
					content: "Desligar o motor, mantendo uma mudança engrenada",
					isCorrect: false,
				},
				{
					content: "Utilizar o motor de arranque para auxiliar a travagem",
					isCorrect: false,
				},
				{
					content:
						"Engrenar uma mudança de maior força em andamento e não acelerar",
					isCorrect: true,
				},
				{
					content:
						"Engrenar uma mudança de menor força em andamento e não acelerar",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Se o condutor que segue à minha frente assinala a manobra de mudança de direcção para a direita, posso ultrapassar?",
			image:
				"https://i.ibb.co/BT31wM8/Screenshot-2024-03-01-10-01-12-819-com-new-miui-gallery.png",
			options: [
				{ content: "Sim, pela direita", isCorrect: false },
				{
					content:
						"Sim, pela esquerda, certificando-se que o pode fazer sem perigo de acidente",
					isCorrect: true,
				},
				{ content: "Não", isCorrect: false },
				{
					content:
						"Sim, pela direita ou pela esquerda, sempre que o veículo não esteja em movimento",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Por causa do sono e mesmo sem ter ficado a dormir, pode ter um acidente?",
			image:
				"https://i.ibb.co/rx33f2W/Screenshot-2024-03-01-10-02-23-543-com-new-miui-gallery.png",
			options: [
				{ content: "Não", isCorrect: false },
				{ content: "Sim, mas só durante noite", isCorrect: false },
				{
					content:
						"Sim, os primeiros sintomas de sonolência já afectam a condução",
					isCorrect: true,
				},
				{
					content:
						"Não, se o condutor for experiente e saiba conduzir mesmo com sono",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"O que indica uma curta distância existente entre os veículos que circulam à minha frente?",
			image:
				"https://i.ibb.co/F3kJBPz/Screenshot-2024-03-01-10-03-19-880-com-new-miui-gallery.png",
			options: [
				{ content: "Que devo moderar a velocidade", isCorrect: true },
				{ content: "Que circulo mais rápido do que eles", isCorrect: false },
				{ content: "Que vou entrar numa localidade", isCorrect: false },
				{
					content: "Que devo ultrapassar para não estar em perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Perante a luz verde, não deve avançar.",
			image:
				"https://i.ibb.co/rvrHyqk/Screenshot-2024-03-01-10-03-03-888-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Quando no passeio existam peões que pretendam iniciar a travessia da faixa de rodagem",
					isCorrect: false,
				},
				{
					content:
						"Quando pela intensidade de trânsito, soja previsível a imobilização no centro da intersecção",
					isCorrect: true,
				},
				{
					content:
						"Quando um agente regulador de trânsito se encontre nas proximidades",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content:
				"Quando existe um forte vento lateral corremos o perigo de sermos desviados da nossa trajectória. Nestas circunstâncias a melhor solução é:",
			image:
				"https://i.ibb.co/g9jvr3f/Screenshot-2024-03-01-10-04-29-852-com-new-miui-gallery.png",
			options: [
				{
					content: "Circular Ao Lado de Um Veículo Pesado, se for possível",
					isCorrect: false,
				},
				{
					content: "Acelerar mais para vencer a força do vento",
					isCorrect: false,
				},
				{
					content: "Moderar a velocidade e ajustar-nos às circunstâncias",
					isCorrect: true,
				},
				{
					content: "Parar o veículo e aguardar até que o vento passe",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Os condutores de veículos prioritários:",
			image:
				"https://i.ibb.co/N6wzjNF/Screenshot-2024-03-01-10-04-01-578-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Podem, se necessário, não observar as regras e os sinais de trânsito, com a excepção dos sinais dos agentes reguladores de trânsito",
					isCorrect: true,
				},
				{
					content:
						"Não podem nunca deixar de observar as regras e os sinais de trânsito",
					isCorrect: false,
				},
				{
					content:
						"Podem, se necessário, não observar os sinais dos agentes reguladores de trânsito",
					isCorrect: false,
				}
			],
			explanation: "",
		},
		{
			content: "Os condutores com pouco tempo de condução (inexperientes):",
			image:
				"https://i.ibb.co/LQ8BmMW/Screenshot-2024-03-01-10-03-47-290-com-new-miui-gallery.png",
			options: [
				{
					content: "Têm capacidades menos eficientes na recolha de informações",
					isCorrect: true,
				},
				{
					content: "Tem capacidades mais eficientes na recolha de informações",
					isCorrect: false,
				},
				{
					content: "Têm capacidades mais acertadas na recolha de informações",
					isCorrect: false,
				},
				{
					content:
						"A capacidade na recolha da informação não tem relação com a experiência, sim com a visão",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Ao aproximar-se de qualquer tipo de intersecção, o condutor do veículo deve:",
			image: "Whats-App-Image-2024-02-28-at-17-new-37-43-66237bdc.png",
			options: [
				{
					content:
						"Demonstrar prudência especial, circulando em velocidade moderada para que possa deter o seu veículo com segurança, para dar passagem ao peão e a veículos que tenham o direito de preferência",
					isCorrect: true,
				},
				{
					content:
						"Demonstrar prudência especial, circulando em alta velocidade de forma que possa passar o mais rapidamente possível",
					isCorrect: false,
				},
				{
					content:
						"Demonstrar prudência especial, circulando à velocidade de 30Km/h, para que possa travar o seu veículo para dar passagem a animais que transitem na via",
					isCorrect: false,
				},
				{
					content:
						"Demonstrar prudência especial, circulando à velocidade de 20Km/h, para que possa travar o seu veiculo para dar passagem a animais que transitem na via",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Assinale a afirmação incorrecta:",
			image:
				"https://i.ibb.co/FXTdKY4/Screenshot-2024-03-01-10-04-41-287-com-new-miui-gallery.png",
			options: [
				{
					content:
						"A fadiga, a ingestão de bebidas alcoólicas, a velocidade, as condições atmosféricas e o estado emocional do condutor podem influenciar o seu tempo de reacção",
					isCorrect: false,
				},
				{
					content:
						"O tempo de reacção é o tempo entre o momento em que o condutor avista um obstáculo e o acto de o tentar evitar",
					isCorrect: false,
				},
				{
					content:
						"O aumento do tempo de reacção não aumenta a distância de paragem",
					isCorrect: true,
				},
				{
					content:
						"A distância de paragem é influenciada pelo tempo de reacção de um condutor",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O comportamento dos peões deve despertar a nossa atenção?",
			image:
				"https://i.ibb.co/0hHm6nB/Screenshot-2024-03-01-10-06-17-982-com-new-miui-gallery.png",
			options: [
				{ content: "Sim, apenas em circulação urbana", isCorrect: false },
				{
					content: "Sim, só nos locais destinados à sua travessia",
					isCorrect: false,
				},
				{ content: "Sim, sempre e em todas as situações", isCorrect: true },
				{
					content: "Não, quem deve prestar atenção aos veículos são os peões",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O tomar bebidas alcoólicas:",
			image:
				"https://i.ibb.co/chKqrcw/Screenshot-2024-03-01-10-05-47-809-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Aumenta o campo visual, a capacidade de exploração visual, a visão dupla e redução da capacidade de readaptação após encandeamento",
					isCorrect: false,
				},
				{
					content:
						"Reduz o campo visual, a capacidade de exploração visual e a capacidade de readaptação visual após encandeamento",
					isCorrect: true,
				},
				{
					content:
						"Reduz o campo visual, a capacidade de exploração visual e aumenta a capacidade de readaptação visual após encandeamento",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Um condutor que aproximar excessivamente o automóvel do veículo da frente ou acelerar e travar, de forma inesperada e intencional:",
			image:
				"https://i.ibb.co/QmfYtsZ/Screenshot-2024-03-01-10-05-23-687-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Não viola nenhuma regra do código da estrada nem de civismo",
					isCorrect: false,
				},
				{ content: "Manifesta agressividade na condução", isCorrect: true },
				{
					content:
						"Demonstra que é um condutor seguro, respeitador e que consegue desembaraçar-se no trânsito",
					isCorrect: false,
				},
				{
					content:
						"Demonstra que está na posse de qualidades de condução acima da média já que controla as situações de perigo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"A condução nocturna deve influenciar a velocidade a que circulo?",
			image:
				"https://i.ibb.co/wyQn8X9/Screenshot-2024-03-02-01-35-08-025-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Não, porque quando a visibilidade é menor devo ligar as luzes de estrada",
					isCorrect: false,
				},
				{
					content:
						"Não, porque se ligar as luzes de estrada vejo melhor a via do que durante o dia",
					isCorrect: false,
				},
				{
					content: "Sim, porque influencía a recolha de informação",
					isCorrect: false,
				},
				{
					content:
						"Sim, porque de noite pode-se circular um pouco mais rápido, dentro dos limites, porque existe menos trânsito",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Os sistemas de segurança passiva dos veículos, têm a função de:",
			image:
				"https://i.ibb.co/Lrp10SQ/Screenshot-2024-03-02-01-31-14-654-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Evitar ou reduzir as lesões que podem ocorrer no caso de sofrer um acidente",
					isCorrect: true,
				},
				{ content: "Evitar os acidentes", isCorrect: false },
				{
					content:
						"Transmitir uma sensação de segurança quando se circula a velocidades elevadas",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Assinale a afirmação falsa relativa a eventuais efeitos da chuva intensa",
			image:
				"https://i.ibb.co/7KHSbbZ/Screenshot-2024-03-02-01-31-25-871-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Quando passar num lençol de água e o veículo deslizar, é aconselhável pressionar o travão até que a aderência das rodas seja retomada",
					isCorrect: true,
				},
				{
					content:
						'O "aquaplanning" pode ser agravado pelo mau estado dos pneumáticos e pela circulação com velocidade excessiva',
					isCorrect: false,
				},
				{
					content:
						"A água acumulada no solo pode reduzir a eficácia do funcionamento dos travões",
					isCorrect: false,
				},
				{
					content:
						'O "aquaplanning" pode ser agravado pelo mau estado da suspensão do veículo',
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Os condutores devem, para permitir a circulação de um veículo prioritário ou da polícia, assinalando devidamente a marcha, que transite numa via congestionada:",
			image:
				"https://i.ibb.co/Bs3PYhW/Screenshot-2024-03-02-01-30-36-902-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a direita e podendo, se necessário, utilizar as bermas, excepto se for numa autoestrada",
					isCorrect: false,
				},
				{
					content:
						"Deixar livre uma passagem do lado direito da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a esquerda e podendo, se necessário, utilizar as bermas, excepto se for numa autoestrada",
					isCorrect: false,
				},
				{
					content:
						"Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a direita e podendo, se necessário, utilizar as bermas, sobretudo se for numa autoestrada",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "Os condutores de veículos prioritários:",
			image:
				"https://i.ibb.co/qFRZkBF/Screenshot-2024-03-02-01-30-46-680-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Não podem nunca deixar de observar as regras e os sinais de trânsito",
					isCorrect: false,
				},
				{
					content:
						"Podem, se necessário, não observar as regras e os sinais de trânsito, com a excepção dos sinais dos agentes reguladores de trânsito",
					isCorrect: true,
				},
				{
					content:
						"Podem, se necessário, não observar os sinais dos agentes reguladores de trânsito",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O tomar bebidas alcoólicas:",
			image:
				"https://i.ibb.co/wRCqJz7/Screenshot-2024-03-02-01-30-05-127-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Reduz a descoordenação motora e a capacidade de avaliação das distâncias",
					isCorrect: false,
				},
				{
					content:
						"Aumenta a descoordenação motora e afecta a capacidade de avaliação das distâncias",
					isCorrect: true,
				},
				{
					content:
						"Aumenta a descoordenação motora e reduz o risco de acidente",
					isCorrect: false,
				},
				{
					content: "Em pequenas quantidades não afecta o acto da condução",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				'Qual a frase que melhor define "ver" na afirmação "conduzir implica ver, pensar e agir"?',
			image:
				"https://i.ibb.co/W09Wbkc/Screenshot-2024-03-02-01-11-55-230-com-new-miui-gallery.png",
			options: [
				{
					content: "Estar muito atento ao condutor que vai à sua frente",
					isCorrect: false,
				},
				{
					content: "Procurar e seleccionar informação significativa",
					isCorrect: true,
				},
				{ content: "Olhar o mais longe possível", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "O trânsito de veículos ou de animais deve ser feito...",
			image:
				"https://i.ibb.co/ZXvtL8L/Screenshot-2024-03-02-01-26-40-076-com-new-miui-gallery.png",
			options: [
				{
					content:
						"do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios",
					isCorrect: false,
				},
				{ content: "próximo do eixo da via", isCorrect: false },
				{
					content:
						"pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quando um condutor toma bebidas alcoólicas, atinge a taxa (TAS) máxima:",
			image:
				"https://i.ibb.co/3WNQq45/Screenshot-2024-03-02-01-11-21-751-com-new-miui-gallery.png",
			options: [
				{
					content: "Cerca de 1 hora após a ingestão do último copo",
					isCorrect: true,
				},
				{
					content: "Cerca de 30 minutos após a ingestão do último copo",
					isCorrect: false,
				},
				{
					content: "Cerca de 1 hora após a ingestão do primeiro copo",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O tomar bebidas alcoólicas:",
			image:
				"https://i.ibb.co/zm2DtXt/Screenshot-2024-03-02-01-11-32-461-com-new-miui-gallery.png",
			options: [
				{ content: "Afecta a trajectória do veículo", isCorrect: false },
				{
					content: "Afecta as capacidades cognitivas e perceptivas do condutor",
					isCorrect: true,
				},
				{
					content: "Aumenta a capacidade de reacção do condutor",
					isCorrect: false,
				},
				{
					content: "Diminui a possibilidade de o condutor sofrer de fadiga",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Como medida defensiva, o condutor deve:",
			image:
				"https://i.ibb.co/Fs7ydR7/Screenshot-2024-03-01-10-14-43-447-com-new-miui-gallery.png",
			options: [
				{
					content: "Circular com óculos escuros para evitar encadeamento",
					isCorrect: false,
				},
				{
					content:
						"Deve usar sempre a buzina para alertar outros utentes da via da sua presença",
					isCorrect: false,
				},
				{
					content: "Dar a conhecer as suas intenções através de sinalização",
					isCorrect: true,
				},
				{
					content:
						"Parar sempre que se aproxime de um cruzamento para evitar um acidente",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Assinale a afirmação falsa:",
			image:
				"https://i.ibb.co/T2pwR3s/Screenshot-2024-03-01-10-14-08-892-com-new-miui-gallery.png",
			options: [
				{
					content:
						"A perda momentânea da visão designada por encadeamento, é sempre resultado do cruzamento com um veículo em sentido contrário e com as luzes de estrada ligadas",
					isCorrect: true,
				},
				{
					content:
						"Durante a condução nocturna, a visão cromática é afectada o que afecta a identificação dos obstáculos",
					isCorrect: false,
				},
				{
					content:
						"Apesar da menor intensidade de trânsito, a gravidade dos acidentes rodoviários verificados durante a noite é normalmente maior",
					isCorrect: false,
				},
				{
					content:
						"Nos períodos de aurora (nascer do dia) e crepúsculo (por-do-sol), é mais difícil avaliar as distâncias, bem como distinguir as formas e as cores dos obstáculos",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "O que pode ser favorecido se tiver a suspensão em bom estado?",
			image:
				"https://i.ibb.co/McWQyjj/Screenshot-2024-03-02-01-34-27-330-com-new-miui-gallery.png",
			options: [
				{ content: "A redução da distância de reacção", isCorrect: false },
				{ content: "A redução da distância de travagem", isCorrect: true },
				{ content: "O aumento das distâncias de manobra", isCorrect: false },
				{ content: "A redução da atenção do condutor", isCorrect: false },
			],
			explanation: "",
		},
		{
			content: "Consideram-se veículos prioritários:",
			image:
				"https://i.ibb.co/Dpmkxg9/Screenshot-2024-03-02-01-34-40-957-com-new-miui-gallery.png",
			options: [
				{ content: "As ambulâncias e veículos da polícia", isCorrect: false },
				{
					content:
						"Só os que transitam em missão urgente de socorro e comitivas governamentais, mesmo não assinalando adequadamente a sua marcha",
					isCorrect: false,
				},
				{
					content:
						"Os que transitam em missão urgente de socorro e comitivas governamentais, assinalando adequadamente a sua marcha",
					isCorrect: true,
				},
				{ content: "Apenas as comitivas governamentais", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"A deslocação do ar causado pela passagem de veículos pesados em alta velocidade:",
			image:
				"https://i.ibb.co/yf83QmL/Screenshot-2024-03-02-01-33-59-416-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Provoca ventos frontais que afectam os veículos ligeiros mais leves",
					isCorrect: false,
				},
				{
					content:
						"Provoca ventos laterais que afectam, sobretudo os veículos pesados de passageiros",
					isCorrect: false,
				},
				{
					content:
						"Provoca ventos laterais que afectam os veículos ligeiros mais leves",
					isCorrect: true,
				},
				{
					content: "Não tem influência para os outros condutores",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de multa é:",
			image:
				"https://i.ibb.co/nwNSHxM/Screenshot-2024-03-02-01-32-55-471-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Sanção pecuniária destinada a punir a prática de uma contravenção ao Código da Estrada",
					isCorrect: true,
				},
				{
					content:
						"Condenação dada a um indivíduo que infringiu uma norma estabelecida na legislação",
					isCorrect: false,
				},
				{ content: "Condenação disciplinar", isCorrect: false },
				{ content: "Condenação administrativa", isCorrect: false },
			],
			explanation: "",
		},
		{
			content:
				"O condutor de veículo utilizado no transporte coletivo de passageiros, só pode parar nas faixas de rodagem para:",
			image:
				"https://i.ibb.co/4tv2LJs/Screenshot-2024-03-02-01-33-24-507-com-new-miui-gallery.png",
			options: [
				{
					content:
						"A entrada e saída de passageiros nos locais especialmente destinados a esse fim",
					isCorrect: true,
				},
				{
					content: "Carregar e descarregar mercadorias, só durante o dia",
					isCorrect: false,
				},
				{
					content: "Carregar e descarregar mercadorias, só durante a noite",
					isCorrect: false,
				},
				{
					content:
						"A entrada e saída de passageiros, em qualquer lugar que lhe de mais jeito",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"No caso de passar por um acidente, é obrigado a parar para dar assistência?",
			image:
				"https://i.ibb.co/ry7jX69/Screenshot-2024-03-02-01-30-18-591-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Sim, porque se não der o alerta pode incorrer no crime de omissão de auxílio",
					isCorrect: false,
				},
				{
					content:
						"Não, mas não dar o alerta pode incorrer no crime de omissão de auxílio",
					isCorrect: false,
				},
				{ content: "Sim sempre", isCorrect: false },
				{
					content:
						"Sim, porque se não der o alerta pode incorrer no crime de omissão de auxílio",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de auto-estrada é:",
			image:
				"https://i.ibb.co/qx1Hs1k/Screenshot-2024-03-02-01-33-36-649-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Via pública destinada a trânsito lento, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, sem separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: true,
				},
				{
					content:
						"Via pública destinada a trânsito rápido, com separação física de faixas de rodagem, com cruzamentos de nível e com acesso a propriedades marginais, com acessos condicionados e sinalizada como tal",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "A definição de passeio é:",
			image:
				"https://i.ibb.co/28pb2nX/Screenshot-2024-03-02-01-32-45-182-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de veículos",
					isCorrect: false,
				},
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada ao estacionamento de veículos",
					isCorrect: false,
				},
				{
					content:
						"Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de peões",
					isCorrect: false,
				},
				{
					content:
						"Parte da faixa de rodagem, destinada exclusivamente ao trânsito de peões",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quem exceder em mais de 80 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
			image:
				"https://i.ibb.co/nwNSHxM/Screenshot-2024-03-02-01-32-55-471-com-new-miui-gallery.png",
			options: [
				{
					content: "Com multa de 6.000,00 Mt e contravenção grave",
					isCorrect: false,
				},
				{
					content: "Com multa de 8.000,00 Mt e contravenção média",
					isCorrect: false,
				},
				{
					content: "Com multa de 8.000,00 Mt e contravenção leve",
					isCorrect: false,
				},
				{
					content: "Com multa de 8.000,00 Mt e contravenção grave",
					isCorrect: true,
				},
			],
			explanation: "",
		},
		{
			content:
				"O condutor está sujeito ao aparecimento de fadiga, quando circula com trânsito intenso?",
			image:
				"https://i.ibb.co/GQfQDkv/Screenshot-2024-03-02-01-32-13-054-com-new-miui-gallery.png",
			options: [
				{
					content: "Não está porque circula a velocidade reduzida",
					isCorrect: false,
				},
				{
					content:
						"Não está porque nesta situação pode descansar devido à pouca velocidade do trânsito",
					isCorrect: false,
				},
				{
					content:
						"Está porque é uma situação de transito monótona o que provoca fadiga",
					isCorrect: true,
				},
				{
					content:
						"Está e para evitar a fadiga deve beber café e bebidas estimulantes",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content: "Todo o condutor de veículos ou de animais é obrigado:",
			image:
				"https://i.ibb.co/D9FV3Jk/Screenshot-2024-03-02-01-31-03-589-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a direita e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a esquerda e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: true,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para a esquerda e aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
				{
					content:
						"Sempre que não haja obstáculo que o impeça, a facilitar imediatamente a ultrapassagem desviando-se o mais possível para o eixo da via e não aumentar a sua velocidade enquanto não for ultrapassado",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quando os veículos transitem com as luzes acesas por falta de luminosidade:",
			image:
				"https://i.ibb.co/Lrp10SQ/Screenshot-2024-03-02-01-31-14-654-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Os sinais sonoros não podem ser substituídos por sinais luminosos dos faróis do veículo",
					isCorrect: false,
				},
				{
					content:
						"É obrigatória a substituição por sinais luminosos dos faróis do veículo usados intermitentemente e por forma a não causar encandeamento",
					isCorrect: false,
				},
				{
					content:
						"Os sinais sonoros podem ser substituídos por sinais luminosos dos faróis do veículo usados intermitentemente e por forma a não causar encandeamento",
					isCorrect: true,
				},
				{
					content:
						"Os sinais sonoros podem ser substituídos por sinais luminosos dos faróis do veículo usando as luzes de máximos",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Que deve fazer o condutor perante a marca rodoviária de cor branca?",
			image:
				"https://i.ibb.co/264yt68/Screenshot-2024-03-02-01-31-57-665-com-new-miui-gallery.png",
			options: [
				{
					content:
						"Circular à sua esquerda, quando a linha fizer a separação de sentidos de trânsito",
					isCorrect: true,
				},
				{ content: "Pisar ou transpor a linha", isCorrect: false },
				{ content: "Abrandar a marcha", isCorrect: false },
			],
			explanation: "",
		},
	];

	const drivingTestQuestions: Question[] = [
		...drivingTestQuestions1,
		...drivingTestQuestions2,
		...drivingTestQuestions3,
		...drivingTestQuestions4,
		...drivingTestQuestions5,
		...drivingTestQuestions6,
	];

	try {
		// Create a quiz
		const quiz = await prisma.quiz.create({
			data: drivingRulesQuiz,
		});
		// const quiz = await prisma.quiz.findFirst({where: {title: drivingRulesQuiz.title}})

		// if (!quiz) {
		//   throw new Error('Quiz not found');
		// }

		// Create questions and associate them with the quiz
		const createdQuestions = await Promise.all(
			drivingTestQuestions.map(async (qData) => {
				const question = await prisma.question.create({
					data: {
						content: qData.content,
						explanation: qData.explanation,
						image: qData.image,
					},
				});

				// Create options for each question
				const createdOptions = await prisma.option.createMany({
					data: qData.options.map((option) => ({
						content: option.content,
						isCorrect: option.isCorrect,
						questionId: question.id,
					})),
				});

				// Associate the question with the quiz
				const quizQuestion = await prisma.quizQuestion.create({
					data: {
						quizId: quiz.id,
						questionId: question.id,
					},
				});

				return question;
			})
		);

		console.log("Seed data created successfully");
	} catch (error) {
		console.log("Error creating seed data:", error);
	}
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
