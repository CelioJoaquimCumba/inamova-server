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
			content: "Os sistemas de segurança passiva dos veículos…",
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
			content: "Os peões podem transitar pela faixa de rodagem nesta estrada?",
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
			content: "Quando o condutor tem uma distração…",
			image:
				"https://i.ibb.co/ZMj5Bg9/hd-81ea10c26f54aee858a78c15fe1d4dcc-65d765efa82f5.png",
			options: [
				{
					content: "aumenta inconscientemente a velocidade do veículo",
					isCorrect: false,
				},
				{ content: "deve avisar com as luzes de perigo", isCorrect: false },
				{ content: "demora mais tempo em reagir", isCorrect: true },
				{
					content:
						"demora menos tempo em obter as informações necessárias para conduzir com segurança",
					isCorrect: false,
				},
			],
			explanation: "",
		},
		{
			content:
				"Quando existe dificuldade na recolha de informação, a velocidade:",
			image:
				"https://i.ibb.co/8MqrkZS/hd-8d0e6833a4e1d761345196817b9d919c-65dc9d7020795.png",
			options: [
				{ content: "Deve diminuir.", isCorrect: true },
				{ content: "Deve aumentar.", isCorrect: false },
				{
					content:
						"Deve manter-se, desde que as luzes do veículo estejam ligadas.",
					isCorrect: false,
				},
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
	];
}
