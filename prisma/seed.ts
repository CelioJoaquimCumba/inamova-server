// seeds.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Create a quiz object
	const drivingRulesQuiz = {
		title: "Exame completo",
		description: "Test your knowledge of driving rules and regulations.",
		thumbnail: "path/to/driving_thumbnail.jpg",
		passingPercentage: 72,
	};

	// // Create a quiz
	const quiz = await prisma.quiz.create({
		data: drivingRulesQuiz,
	});

	// // Create an array of question objects with options
	const exameCompletoQuestions = [
  {
    content: "O sinal indica:",
    explanation: "Este sinal indica a presença de controlo policial, identificado pelos pirilampos. A opção correta é 'Controlo policial por pirilampos'.",
    image: "https://i.ibb.co/9pyNTSc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d4bacb327aa.png",
    options: [
      { content: "Existência de tráfego adiante", isCorrect: false },
      { content: "Controlo policial por pirilampos", isCorrect: true },
      { content: "Congestionamento do tráfego", isCorrect: false },
      { content: "Os Automóveis classificam-se em:", isCorrect: false },
    ],
  },
  {
    content: "Os Automóveis classificam-se em:",
    explanation: "Esta questão aborda a classificação dos automóveis. A opção correta é 'Ligeiros e pesados'.",
    image: "https://i.ibb.co/GM26DWY/hd-534ea2218df55232f652fb48370e1539-65d4b57fa9333.png",
    options: [
      { content: "Ligeiros e pesados", isCorrect: true },
      { content: "Ligeiros, Pesados e Motociclos", isCorrect: false },
      { content: "Motociclos, Ciclomotores, Triciclos, Quadriciclos, ligeiros e Pesados", isCorrect: false },
      { content: "Ligeiros, Pesados e Mistos", isCorrect: false },
    ],
  },
  {
    content: "É aconselhável viajar à noite para evitar a fadiga?",
    explanation: "Não, porque o sono aparece mais facilmente durante a noite. A opção correta é 'Não, porque o sono aparece mais facilmente'.",
    image: "https://i.ibb.co/tqy7ZZ2/hd-1ac46fddebf26ac5da3b93f09fadcb02-65d4b64e4879d.png",
    options: [
      { content: "Não, por que o sono aparece mais facilmente", isCorrect: true },
      { content: "Sim, se a viagem é longa", isCorrect: false },
      { content: "Sim, por que há menos tráfego", isCorrect: false },
      { content: "Sim, viajar durante a noite é sempre mais seguro", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal de informação?",
    explanation: "Este sinal indica áreas reservadas para automóveis ligeiros. A opção correta é 'Áreas reservadas para automóveis ligeiros'.",
    image: "https://i.ibb.co/tqy7ZZ2/hd-1ac46fddebf26ac5da3b93f09fadcb02-65d4b64e4879d.png",
    options: [
      { content: "Áreas reservadas para automóveis ligeiros", isCorrect: true },
      { content: "Área reservada para taxis", isCorrect: false },
      { content: "Parque de estacionamento para automóveis ligeiros de passageiros", isCorrect: false },
      { content: "Que veículo deve retroceder para dar passagem ao outro, numa passagem estreita sem sinalização onde não seja possível efetuar o cruzamento?", isCorrect: false },
    ],
  },
  {
    content: "Que veículo deve retroceder para dar passagem ao outro, numa passagem estreita sem sinalização onde não seja possível efetuar o cruzamento?",
    explanation: "O veículo que está mais próximo do local em que o cruzamento seja possível deve retroceder. A opção correta é 'O veículo que está mais próximo do local em que o cruzamento seja possível'.",
    image: "https://i.ibb.co/SvHZyCc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d59a6c2d8cc.png",
    options: [
      { content: "O veículo mais pesado", isCorrect: false },
      { content: "O veículo com maior largura", isCorrect: false },
      { content: "O veículo que está mais próximo do local em que o cruzamento seja possível", isCorrect: true },
      { content: "O veículo que desce se for numa via de inclinação acentuada", isCorrect: false },
    ],
  },
  {
    content: "Deve utilizar-se as luzes de perigo…",
    explanation: "As luzes de perigo devem ser utilizadas em caso de imobilização por acidente ou avaria, se originar perigo para os demais utentes da via. A opção correta é 'Em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via'.",
    image: "https://i.ibb.co/p2wfyrJ/hd-3221660229771b54d03c281c031a0944-65d5b72be2459.png",
    options: [
      { content: "Ao estacionar em segunda fila", isCorrect: false },
      { content: "Para avisar os outros utentes que o veículo vai fazer marcha atrás", isCorrect: false },
      { content: "Em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via", isCorrect: true },
      { content: "Apenas quando o veículo esteja a ser rebocado", isCorrect: false },
    ],
  },
  {
    content: "O que indica a marca rodoviária branca?",
    explanation: "A marca rodoviária branca indica a existência de lombas. A opção correta é 'Indica a existência de lombas'.",
    image: "https://i.ibb.co/bPwrnRM/hd-c4c1d28fa957dda0335553dbb635c111-65d5b7de17e49.png",
    options: [
      { content: "Indica a redução de filas de trânsito.", isCorrect: false },
      { content: "Indica a existência de lombas.", isCorrect: true },
      { content: "Indica a existência de bandas sonoras.", isCorrect: false },
      { content: "Atirar do veículo ou abandonar na via objetos ou substâncias, constitui contravenção:", isCorrect: false },
    ],
  },
  {
    content: "Atirar do veículo ou abandonar na via objetos ou substâncias, constitui contravenção:",
    explanation: "Atirar do veículo ou abandonar na via objetos ou substâncias constitui uma contravenção média. A opção correta é 'Média'.",
    image: "https://i.ibb.co/Bzfj34X/hd-03e8d427dc1ba18a72585729991dfbf5-65d5b86cc1ec4.png",
    options: [
      { content: "Leve", isCorrect: false },
      { content: "Grave", isCorrect: false },
      { content: "Média", isCorrect: true },
      { content: "Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:", isCorrect: false },
    ],
  },
  {
    content: "Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:",
    explanation: "Visibilidade reduzida ou insuficiente é quando o condutor não pode avistar a faixa de rodagem em toda a sua largura numa extensão de pelo menos 50 metros. A opção correta é 'Pelo menos, 50 metros'.",
    image: "https://i.ibb.co/cFyq7Br/hd-4d73f54e76358e30d81a54e640da304c-65d5b8c5a8785.png",
    options: [
      { content: "Pelo menos, 50 metros", isCorrect: true },
      { content: "Pelo menos, 200 metros", isCorrect: false },
      { content: "Pelo menos, 100 metros", isCorrect: false },
      { content: "Pelo menos, 25 metros", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal?",
    explanation: "Este sinal indica trânsito proibido. A opção correta é 'Trânsito proibido'.",
    image: "https://i.ibb.co/gwvmsSV/hd-9d2938d9b112081d1ffa67fc34a5cf91-65d5b8f3b610c.png",
    options: [
      { content: "Sentido proibido", isCorrect: false },
      { content: "Trânsito proibido", isCorrect: true },
      { content: "Trânsito proibido a automóveis ligeiros de passageiros", isCorrect: false },
      { content: "Uma das consequências de aumentar a velocidade, é que...", isCorrect: false },
    ],
  },
  {
    content: "Uma das consequências de aumentar a velocidade, é que...",
    explanation: "Aumentar a velocidade aumenta a gravidade das lesões em caso de acidente. A opção correta é 'Aumenta a gravidade das lesões em caso de acidente'.",
    image: "https://i.ibb.co/fHJqbB2/image-25.png",
    options: [
      { content: "Melhora o tempo de reação", isCorrect: false },
      { content: "Aumenta a gravidade das lesões em caso de acidente", isCorrect: true },
      { content: "Reduz a distância de travagem", isCorrect: false },
      { content: "Reduz as distrações", isCorrect: false },
    ],
  },
  {
    content: "O trânsito de veículos ou de animais é feito...",
    explanation: "O trânsito de veículos ou de animais é feito pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios. A opção correta é 'Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente'.",
    image: "https://i.ibb.co/DwyfSQL/image-26.png",
    options: [
      { content: "Do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios.", isCorrect: false },
      { content: "Próximo do eixo da via.", isCorrect: false },
      { content: "Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente.", isCorrect: true },
      { content: "Numa auto-estrada, pode-se inverter o sentido de marcha?", isCorrect: false },
    ],
  },
  {
    content: "Numa auto-estrada, pode-se inverter o sentido de marcha?",
    explanation: "Nunca se pode inverter o sentido de marcha numa auto-estrada. A opção correta é 'Nunca'.",
    image: "https://i.ibb.co/vJxYfLQ/image-27.png",
    options: [
      { content: "Sempre que possível", isCorrect: false },
      { content: "Nunca", isCorrect: true },
      { content: "Sim, se a manobra foi feita lentamente", isCorrect: false },
      { content: "O que indica o sinal?", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal?",
    explanation: "Este sinal indica paragem proibida a veículos que transportam substâncias perigosas. A opção correta é 'Paragem proibida a veículos que transportam substâncias perigosas'.",
    image: "https://i.ibb.co/ByNWkRN/image-28.png",
    options: [
      { content: "Paragem proibida a veículos que transportam substâncias perigosas.", isCorrect: true },
      { content: "Paragem obrigatória para veículos que transportam substâncias perigosas", isCorrect: false },
      { content: "Área reservada para veículos que transportam substâncias perigosas", isCorrect: false },
      { content: "Que comunica o condutor aos outros utentes da via?", isCorrect: false },
    ],
  },
  {
    content: "Que comunica o condutor aos outros utentes da via?",
    explanation: "O condutor comunica que vai reduzir a velocidade. A opção correta é 'Que vai reduzir a velocidade'.",
    image: "https://i.ibb.co/V9KVm5W/image-29.png",
    options: [
      { content: "Que vai voltar para o lado esquerdo do volante", isCorrect: false },
      { content: "Que vai para o lado direito do volante", isCorrect: false },
      { content: "Que vai reduzir a velocidade", isCorrect: true },
      { content: "O que indica o sinal?", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal?",
    explanation: "Este sinal indica a presença de ponte móvel. A opção correta é 'Presença de ponte móvel'.",
    image: "https://i.ibb.co/pwn9Hc5/image-31.png",
    options: [
      { content: "Pré-advertência da direção de saída", isCorrect: false },
      { content: "Advertência da direção de saída", isCorrect: false },
      { content: "Presença de ponte móvel", isCorrect: true },
      { content: "Considera-se morte por acidente de viação", isCorrect: false },
    ],
  },
  {
    content: "Considera-se morte por acidente de viação",
    explanation: "Considera-se morte por acidente de viação aquela que ocorre até 30 dias após o registo do sinistro. A opção correta é 'Aquela que ocorre até 30 dias após o registo do sinistro'.",
    image: "https://i.ibb.co/vqpyVzb/image-32.png",
    options: [
      { content: "Aquela que ocorre até 30 dias após o registo do sinistro", isCorrect: true },
      { content: "Só aquela que ocorre no local do sinistro", isCorrect: false },
      { content: "So aquela que ocorre a caminho da unidade sanitária", isCorrect: false },
      { content: "Os peões, para atravessar a faixa de rodagem...", isCorrect: false },
    ],
  },
  {
    content: "Os peões, para atravessar a faixa de rodagem...",
    explanation: "Os peões devem certificar-se de que a distância e velocidade dos veículos permitem atravessar sem perigo de acidente. A opção correta é 'Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente'.",
    image: "https://i.ibb.co/X4XD6yP/image-33.png",
    options: [
      { content: "Podem fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 m.", isCorrect: false },
      { content: "Estão sempre obrigados a utilizar a passagem desnivelada para peões", isCorrect: false },
      { content: "Têm sempre prioridade de passagem.", isCorrect: false },
      { content: "Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente.", isCorrect: true },
    ],
  },
  {
    content: "Nos veículos de mercadorias, a carga deve ser disposta de modo a que:",
    explanation: "A carga deve ser disposta de modo a assegurar o equilíbrio do veículo, parado ou em movimento. A opção correta é 'Seja assegurado o equilíbrio do veículo, parado ou em movimento'.",
    image: "https://i.ibb.co/r2Qjyd5/image-34.png",
    options: [
      { content: "O principal peso fique sobre o eixo da retaguarda", isCorrect: false },
      { content: "Fique livre o maior espaço possível a retaguarda da caixa de carga", isCorrect: false },
      { content: "Seja assegurado o equilíbrio do veículo, parado ou em movimento", isCorrect: true },
      { content: "O que indica o sinal?", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal?",
    explanation: "Este sinal indica trânsito proibido a peões, animais e veículos não automóveis. A opção correta é 'Trânsito proibido a peões, animais e veículos não automóveis'.",
    image: "https://i.ibb.co/r2Qjyd5/image-34.png",
    options: [
      { content: "Trânsito proibido a peões, animais e veículos automóveis.", isCorrect: false },
      { content: "Trânsito proibido a peões, animais e veículos não automóveis.", isCorrect: true },
      { content: "Trânsito proibido a animais e veículos não automóveis.", isCorrect: false },
      { content: "É proibido ultrapassar:", isCorrect: false },
    ],
  },
  {
    content: "É proibido ultrapassar:",
    explanation: "É proibido ultrapassar imediatamente antes e nas passagens para peões. A opção correta é 'Imediatamente antes e nas passagens para peões'.",
    image: "https://i.ibb.co/L6k7Q43/image-36.png",
    options: [
      { content: "Em todas as curvas.", isCorrect: false },
      { content: "Depois dos cruzamentos.", isCorrect: false },
      { content: "Nas estradas que só tenham uma via de trânsito para cada sentido.", isCorrect: false },
      { content: "Imediatamente antes e nas passagens para peões.", isCorrect: true },
    ],
  },
  {
    content: "Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de:",
    explanation: "Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de 100 km/h. A opção correta é '100 km/h'.",
    image: "https://i.ibb.co/JmcJSnc/image-37.png",
    options: [
      { content: "80 km/h", isCorrect: false },
      { content: "120 km/h", isCorrect: false },
      { content: "100 km/h", isCorrect: true },
      { content: "Todos os condutores de veículos ou animais são obrigados a …", isCorrect: false },
    ],
  },
  {
    content: "Todos os condutores de veículos ou animais são obrigados a …",
    explanation: "Todos os condutores são obrigados a obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito. A opção correta é 'Obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito'.",
    image: "https://i.ibb.co/Ptws569/image-38.png",
    options: [
      { content: "Abandonar os veículos nos locais de estacionamento sem motivo justificado", isCorrect: false },
      { content: "Reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias", isCorrect: false },
      { content: "Obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito.", isCorrect: true },
      { content: "O que indica o sinal?", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal?",
    explanation: "Este sinal indica a existência de portagens na via em que segue. A opção correta é 'Existência de portagens na via em que segue'.",
    image: "https://i.ibb.co/kGZQrWC/image-39.png",
    options: [
      { content: "Sentido obrigatório para a frente", isCorrect: false },
      { content: "Via rápida", isCorrect: false },
      { content: "Existência de portagens na via em que segue", isCorrect: true },
      { content: "Lorem Ipsum", isCorrect: false },
    ],
  },
  // ... (continue for the remaining questions)
];


	// Create questions and associate them with the quiz
	const createdQuestions = await Promise.all(
		exameCompletoQuestions.map(async (qData) => {
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
			await prisma.quizQuestion.create({
				data: {
					quizId: quiz.id,
					questionId: question.id,
				},
			});

			return question;
		})
	);

	// await prisma.subject.createMany({
	// 	data: [
	// 	  {
	// 		title: "Sinais de trânsito e sua interpretação",
	// 		thumbnail: "url_da_imagem_para_sinais_de_transito",
	// 		description: "Interpretação e compreensão dos diferentes sinais de trânsito e sua aplicação nas estradas.",
	// 	  },
	// 	  {
	// 		title: "Regras de prioridade e direito de passagem",
	// 		thumbnail: "url_da_imagem_para_prioridade_e_direito_de_passagem",
	// 		description: "Entendimento das regras que determinam a prioridade entre veículos e pedestres em diferentes situações de trânsito.",
	// 	  },
	// 	  {
	// 		title: "Limites de velocidade e sua aplicação",
	// 		thumbnail: "url_da_imagem_para_limites_de_velocidade",
	// 		description: "Conhecimento e respeito aos limites de velocidade estabelecidos para garantir a segurança no trânsito.",
	// 	  },
	// 	  {
	// 		title: "Regras de ultrapassagem e mudança de faixa",
	// 		thumbnail: "url_da_imagem_para_ultrapassagem_e_mudanca_de_faixa",
	// 		description: "Procedimentos seguros para realizar ultrapassagens e mudanças de faixa com responsabilidade e respeito às normas de trânsito.",
	// 	  },
	// 	  {
	// 		title: "Uso adequado de dispositivos de segurança",
	// 		thumbnail: "url_da_imagem_para_dispositivos_de_seguranca",
	// 		description: "Correta utilização de dispositivos de segurança, como cintos de segurança e assentos infantis, para proteger ocupantes do veículo.",
	// 	  },
	// 	  {
	// 		title: "Proibição de dirigir sob a influência de álcool ou drogas",
	// 		thumbnail: "url_da_imagem_para_proibicao_de_dirigir_alcool_drogas",
	// 		description: "Conscientização sobre os perigos e consequências legais de dirigir sob a influência de álcool ou drogas.",
	// 	  },
	// 	  {
	// 		title: "Regulamentos sobre uso de telefone celular e outras distrações ao volante",
	// 		thumbnail: "url_da_imagem_para_regulamentos_de_uso_de_celular",
	// 		description: "Normas e penalidades relacionadas ao uso de telefone celular e outras distrações ao volante que podem aumentar o risco de acidentes.",
	// 	  },
	// 	  {
	// 		title: "Sinalização e manobras corretas em cruzamentos e rotatórias",
	// 		thumbnail: "url_da_imagem_para_sinalizacao_em_cruzamentos_rotatorias",
	// 		description: "Procedimentos corretos para sinalização e realização de manobras em cruzamentos e rotatórias, visando à fluidez e segurança do tráfego.",
	// 	  },
	// 	  {
	// 		title: "Regras específicas para ciclistas e pedestres",
	// 		thumbnail: "url_da_imagem_para_regras_para_ciclistas_e_pedestres",
	// 		description: "Direitos e deveres de ciclistas e pedestres no trânsito, visando à convivência segura e harmoniosa com os demais usuários da via.",
	// 	  },
	// 	  {
	// 		title: "Uso adequado de luzes e indicadores",
	// 		thumbnail: "url_da_imagem_para_uso_de_luzes_e_indicadores",
	// 		description: "Correta utilização de luzes e indicadores para sinalizar intenções e garantir a visibilidade do veículo em diferentes condições de iluminação.",
	// 	  },
	// 	  {
	// 		title: "Regulamentações para veículos de emergência e prioridade de passagem",
	// 		thumbnail: "url_da_imagem_para_veiculos_de_emergencia",
	// 		description: "Normas e procedimentos relacionados ao trânsito de veículos de emergência, garantindo-lhes prioridade de passagem em situações de urgência.",
	// 	  },
	// 	  {
	// 		title: "Condições de tráfego adversas e como adaptar a condução a elas",
	// 		thumbnail: "url_da_imagem_para_condicoes_de_trafego_adversas",
	// 		description: "Precauções e técnicas de condução segura em condições adversas de tráfego, como chuva, neblina, neve e estradas escorregadias.",
	// 	  },
	// 	  {
	// 		title: "Regulamentos sobre carga e segurança de carga em veículos comerciais",
	// 		thumbnail: "url_da_imagem_para_regulamentos_de_carga",
	// 		description: "Normas e diretrizes para o transporte seguro e adequado de carga em veículos comerciais, visando à prevenção de acidentes e danos.",
	// 	  },
	// 	  {
	// 		title: "Penalidades por infrações de trânsito e procedimentos de contestação",
	// 		thumbnail: "url_da_imagem_para_penalidades_por_infracoes",
	// 		description: "Consequências legais e procedimentos para contestação de infrações de trânsito, visando à justiça e aplicação equitativa da lei.",
	// 	  },
	// 	  {
	// 		title: "Procedimentos em caso de acidentes de trânsito e responsabilidades legais",
	// 		thumbnail: "url_da_imagem_para_procedimentos_em_acidentes",
	// 		description: "Instruções e obrigações legais em caso de envolvimento em acidentes de trânsito, visando à segurança dos envolvidos e a conformidade com a lei.",
	// 	  },
	// 	],
	//   });

	// Array dos tópicos já existentes
	// const subjects = [
	// 	{
	// 		id: "cfa8c1f0-3f55-4acf-9854-4440511cbc35",
	// 		title: "Sinais de trânsito e sua interpretação",
	// 		thumbnail: "url_da_imagem_para_sinais_de_transito",
	// 		description:
	// 			"Interpretação e compreensão dos diferentes sinais de trânsito e sua aplicação nas estradas.",
	// 	},
	// 	{
	// 		id: "b7cd8975-8b52-42fa-97f5-bc0dd3555c06",
	// 		title: "Regras de prioridade e direito de passagem",
	// 		thumbnail: "url_da_imagem_para_prioridade_e_direito_de_passagem",
	// 		description:
	// 			"Entendimento das regras que determinam a prioridade entre veículos e pedestres em diferentes situações de trânsito.",
	// 	},
	// 	{
	// 		id: "0ad93079-da3b-4b87-980e-711fa7827d74",
	// 		title: "Limites de velocidade e sua aplicação",
	// 		thumbnail: "url_da_imagem_para_limites_de_velocidade",
	// 		description:
	// 			"Conhecimento e respeito aos limites de velocidade estabelecidos para garantir a segurança no trânsito.",
	// 	},
	// 	{
	// 		id: "a939cc79-6295-4272-b0be-15fcb1ca75d6",
	// 		title: "Regras de ultrapassagem e mudança de faixa",
	// 		thumbnail: "url_da_imagem_para_ultrapassagem_e_mudanca_de_faixa",
	// 		description:
	// 			"Procedimentos seguros para realizar ultrapassagens e mudanças de faixa com responsabilidade e respeito às normas de trânsito.",
	// 	},
	// 	{
	// 		id: "87ba6800-cfca-4e0a-8c93-d8373f56ac9c",
	// 		title: "Uso adequado de dispositivos de segurança",
	// 		thumbnail: "url_da_imagem_para_dispositivos_de_seguranca",
	// 		description:
	// 			"Correta utilização de dispositivos de segurança, como cintos de segurança e assentos infantis, para proteger ocupantes do veículo.",
	// 	},
	// 	{
	// 		id: "ec68341d-9894-40ea-8fa0-a7c7610defce",
	// 		title: "Proibição de dirigir sob a influência de álcool ou drogas",
	// 		thumbnail: "url_da_imagem_para_proibicao_de_dirigir_alcool_drogas",
	// 		description:
	// 			"Conscientização sobre os perigos e consequências legais de dirigir sob a influência de álcool ou drogas.",
	// 	},
	// 	{
	// 		id: "ddcc70d8-7372-4da9-b4b6-01a8fae7418c",
	// 		title:
	// 			"Regulamentos sobre uso de telefone celular e outras distrações ao volante",
	// 		thumbnail: "url_da_imagem_para_regulamentos_de_uso_de_celular",
	// 		description:
	// 			"Normas e penalidades relacionadas ao uso de telefone celular e outras distrações ao volante que podem aumentar o risco de acidentes.",
	// 	},
	// 	{
	// 		id: "af6ee835-09b7-451b-a7ba-5261dcf073ba",
	// 		title: "Sinalização e manobras corretas em cruzamentos e rotatórias",
	// 		thumbnail: "url_da_imagem_para_sinalizacao_em_cruzamentos_rotatorias",
	// 		description:
	// 			"Procedimentos corretos para sinalização e realização de manobras em cruzamentos e rotatórias, visando à fluidez e segurança do tráfego.",
	// 	},
	// 	{
	// 		id: "be8c09a7-6143-4ab2-afc7-a15fc2a29590",
	// 		title: "Regras específicas para ciclistas e pedestres",
	// 		thumbnail: "url_da_imagem_para_regras_para_ciclistas_e_pedestres",
	// 		description:
	// 			"Direitos e deveres de ciclistas e pedestres no trânsito, visando à convivência segura e harmoniosa com os demais usuários da via.",
	// 	},
	// 	{
	// 		id: "6132973f-0dd0-4fbb-8613-af580d2762a9",
	// 		title: "Uso adequado de luzes e indicadores",
	// 		thumbnail: "url_da_imagem_para_uso_de_luzes_e_indicadores",
	// 		description:
	// 			"Correta utilização de luzes e indicadores para sinalizar intenções e garantir a visibilidade do veículo em diferentes condições de iluminação.",
	// 	},
	// 	{
	// 		id: "eebf8202-f508-45ef-a2ed-3a4ec68bb604",
	// 		title:
	// 			"Regulamentações para veículos de emergência e prioridade de passagem",
	// 		thumbnail: "url_da_imagem_para_veiculos_de_emergencia",
	// 		description:
	// 			"Normas e procedimentos relacionados ao trânsito de veículos de emergência, garantindo-lhes prioridade de passagem em situações de urgência.",
	// 	},
	// 	{
	// 		id: "2491e447-d2ac-4199-af87-d3d8a44dcc8f",
	// 		title: "Condições de tráfego adversas e como adaptar a condução a elas",
	// 		thumbnail: "url_da_imagem_para_condicoes_de_trafego_adversas",
	// 		description:
	// 			"Precauções e técnicas de condução segura em condições adversas de tráfego, como chuva, neblina, neve e estradas escorregadias.",
	// 	},
	// 	{
	// 		id: "f7af0eec-027c-41af-bd84-527e10ee230c",
	// 		title:
	// 			"Regulamentos sobre carga e segurança de carga em veículos comerciais",
	// 		thumbnail: "url_da_imagem_para_regulamentos_de_carga",
	// 		description:
	// 			"Normas e diretrizes para o transporte seguro e adequado de carga em veículos comerciais, visando à prevenção de acidentes e danos.",
	// 	},
	// 	{
	// 		id: "2923b300-a1fa-4b27-9085-29d0f0383cfe",
	// 		title:
	// 			"Penalidades por infrações de trânsito e procedimentos de contestação",
	// 		thumbnail: "url_da_imagem_para_penalidades_por_infracoes",
	// 		description:
	// 			"Consequências legais e procedimentos para contestação de infrações de trânsito, visando à justiça e aplicação equitativa da lei.",
	// 	},
	// 	{
	// 		id: "f577b84d-4466-4d24-b55a-a4944e023033",
	// 		title:
	// 			"Procedimentos em caso de acidentes de trânsito e responsabilidades legais",
	// 		thumbnail: "url_da_imagem_para_procedimentos_em_acidentes",
	// 		description:
	// 			"Instruções e obrigações legais em caso de envolvimento em acidentes de trânsito, visando à segurança dos envolvidos e a conformidade com a lei.",
	// 	},
	// ];

	// // Função para criar 5 lições para cada tópico
	// const createLessonsForSubjects = async () => {
	// 	for (const subject of subjects) {
	// 		for (let i = 1; i <= 5; i++) {
	// 			await prisma.lesson.create({
	// 				data: {
	// 					title: `Lesson ${i} for ${subject.title}`,
	// 					thumbnail: subject.thumbnail,
	// 					time: 3.5, // Adjust as needed
	// 					subjectId: subject.id,
	// 				},
	// 			});
	// 		}
	// 	}
	// };

	// // Chame a função para criar as lições
	// createLessonsForSubjects();

	console.log("Seed data created successfully");
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
