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
		},{
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
	];
}
