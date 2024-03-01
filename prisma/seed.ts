// seeds.ts

type Question = {content: string, image: string, explanation: string, options: { content: string, isCorrect: boolean}[]}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a quiz object
  const drivingRulesQuiz = {
    title: 'Exame completo',
    description: 'O teste apresenta questao que sao avaliadas nos exames teoricos de Mozambique',
    thumbnail: 'https://i.ibb.co/rM2dnVX/online-test-rafiki.png',
    passingPercentage: 72,
  };

    // Create an array of question objects with options
const drivingTestQuestions1: Question[]  = [
  {
    content: "O sinal indica:",
    image: "https://i.ibb.co/9pyNTSc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d4bacb327aa.png",
    options: [
      { content: "Existência de tráfego adiante", isCorrect: false },
      { content: "Controlo policial por pirilampos", isCorrect: true },
      { content: "Congestionamento do tráfego", isCorrect: false },
    ],
    explanation: "Este sinal indica controlo policial por pirilampos. Os pirilampos são luzes utilizadas em controlos policiais.",
  },
  {
    content: "Os automóveis classificam-se em:",
    image: "https://i.ibb.co/GM26DWY/hd-534ea2218df55232f652fb48370e1539-65d4b57fa9333.png",
    options: [
      { content: "Ligeiros e pesados", isCorrect: true },
      { content: "Ligeiros, Pesados e Motociclos", isCorrect: false },
      { content: "Motociclos, Ciclomotores, Triciclos, Quadriciclos, ligeiros e Pesados", isCorrect: false },
      { content: "Ligeiros, Pesados e Mistos", isCorrect: false },
    ],
    explanation: "Os automóveis classificam-se em ligeiros e pesados. Ligeiros incluem carros de passageiros, enquanto pesados incluem veículos maiores como camiões.",
  },
  {
    content: "É aconselhável viajar à noite para evitar a fadiga?",
    image: "https://i.ibb.co/tqy7ZZ2/hd-1ac46fddebf26ac5da3b93f09fadcb02-65d4b64e4879d.png",
    options: [
      { content: "Não, porque o sono aparece mais facilmente", isCorrect: true },
      { content: "Sim, se a viagem é longa", isCorrect: false },
      { content: "Sim, porque há menos tráfego", isCorrect: false },
      { content: "Sim, viajar durante a noite é sempre mais seguro", isCorrect: false },
    ],
    explanation: "Viajar à noite pode aumentar a probabilidade de sono, tornando-o menos seguro. A fadiga é mais comum durante as horas noturnas.",
  },
  {
    content: "O que indica o sinal de informação?",
    image: "https://i.ibb.co/Y3H5wWP/hd-44dd830d88c55c5a53e7ce44206e37e1-65d59b5cf20d5.png",
    options: [
      { content: "Áreas reservadas para automóveis ligeiros", isCorrect: true },
      { content: "Área reservada para taxis", isCorrect: false },
      { content: "Parque de estacionamento para automóveis ligeiros de passageiros", isCorrect: false },
    ],
    explanation: "Este sinal de informação indica áreas reservadas para automóveis ligeiros. Os sinais de informação são usados para fornecer informações úteis aos condutores.",
  },
  {
    content: "Que veículo deve retroceder para dar passagem ao outro, numa passagem estreita sem sinalização onde não seja possível efetuar o cruzamento?",
    image: "https://i.ibb.co/SvHZyCc/hd-d2b5ca33bd970f64a6301fa75ae2eb22-65d59a6c2d8cc.png",
    options: [
      { content: "O veículo mais pesado", isCorrect: false },
      { content: "O veículo com maior largura", isCorrect: false },
      { content: "O veículo que está mais próximo do local em que o cruzamento seja possível", isCorrect: true },
      { content: "O veículo que desce se for numa via de inclinação acentuada", isCorrect: false },
    ],
    explanation: "Numa passagem estreita sem sinalização, onde não é possível efetuar o cruzamento, o veículo que deve retroceder é o que está mais próximo do local em que o cruzamento é possível.",
  },
  {
    content: "Deve utilizar-se as luzes de perigo?",
    image: "https://i.ibb.co/p2wfyrJ/hd-3221660229771b54d03c281c031a0944-65d5b72be2459.png",
    options: [
      { content: "Ao estacionar em segunda fila", isCorrect: false },
      { content: "Para avisar os outros utentes que o veículo vai fazer marcha atrás", isCorrect: false },
      { content: "Em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via", isCorrect: true },
      { content: "Apenas quando o veículo esteja a ser rebocado", isCorrect: false },
    ],
    explanation: "As luzes de perigo devem ser utilizadas em caso de imobilização por acidente ou avaria, se originar perigo para os demais utentes da via. Elas alertam os outros condutores sobre uma situação de emergência.",
  },
  {
    content: "O que indica a marca rodoviária branca?",
    image: "https://i.ibb.co/bPwrnRM/hd-c4c1d28fa957dda0335553dbb635c111-65d5b7de17e49.png",
    options: [
      { content: "Indica a redução de filas de trânsito", isCorrect: false },
      { content: "Indica a existência de lombas", isCorrect: true },
      { content: "Indica a existência de bandas sonoras", isCorrect: false },
    ],
    explanation: "A marca rodoviária branca indica a existência de lombas. Estas marcas são utilizadas para alertar os condutores sobre obstáculos ou condições especiais na estrada.",
  },
  {
    content: "Atirar do veículo ou abandonar na via objetos ou substâncias, constitui contravenção:",
    image: "https://i.ibb.co/Bzfj34X/hd-03e8d427dc1ba18a72585729991dfbf5-65d5b86cc1ec4.png",
    options: [
      { content: "Leve", isCorrect: false },
      { content: "Grave", isCorrect: false },
      { content: "Média", isCorrect: true },
    ],
    explanation: "Atirar objetos ou substâncias da via ou abandoná-los constitui uma contravenção média. É importante manter a via pública limpa e segura.",
  },
  {
    content: "Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:",
    image: "https://i.ibb.co/cFyq7Br/hd-4d73f54e76358e30d81a54e640da304c-65d5b8c5a8785.png",
    options: [
      { content: "Pelo menos, 50 metros", isCorrect: true },
      { content: "Pelo menos, 200 metros", isCorrect: false },
      { content: "Pelo menos, 100 metros", isCorrect: false },
      { content: "Pelo menos, 25 metros", isCorrect: false },
    ],
    explanation: "Visibilidade reduzida ou insuficiente ocorre quando o condutor não pode avistar a faixa de rodagem em toda a sua largura numa extensão de pelo menos 50 metros. Isso pode ser devido a condições climáticas adversas, como nevoeiro intenso.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/gwvmsSV/hd-9d2938d9b112081d1ffa67fc34a5cf91-65d5b8f3b610c.png",
    options: [
      { content: "Sentido proibido", isCorrect: false },
      { content: "Trânsito proibido", isCorrect: true },
      { content: "Trânsito proibido a automóveis ligeiros de passageiros", isCorrect: false },
    ],
    explanation: "Este sinal indica trânsito proibido. Os sinais de proibição têm como objetivo indicar a proibição ou restrição de certas ações ou tipos de tráfego numa determinada via.",
  },
  {
    content: "Uma das consequências de aumentar a velocidade, é que...",
    image: "https://i.ibb.co/fHJqbB2/image-25.png",
    options: [
      { content: "Melhora o tempo de reação", isCorrect: false },
      { content: "Aumenta a gravidade das lesões em caso de acidente", isCorrect: true },
      { content: "Reduz a distância de travagem", isCorrect: false },
      { content: "Reduz as distrações", isCorrect: false },
    ],
    explanation: "Aumentar a velocidade aumenta a gravidade das lesões em caso de acidente. Velocidades mais altas resultam em colisões mais severas e impactos mais graves em caso de acidente.",
  },
  {
    content: "O trânsito de veículos ou de animais é feito...",
    image: "https://i.ibb.co/DwyfSQL/image-26.png",
    options: [
      { content: "Do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios", isCorrect: false },
      { content: "Próximo do eixo da via", isCorrect: false },
      { content: "Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente", isCorrect: true },
    ],
    explanation: "O trânsito de veículos ou animais é feito pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente. Esta regra ajuda a manter um fluxo de tráfego suave e seguro.",
  },
  {
    content: "Numa autoestrada, pode-se inverter o sentido de marcha?",
    image: "https://i.ibb.co/vJxYfLQ/image-27.png",
    options: [
      { content: "Sempre que possível", isCorrect: false },
      { content: "Nunca", isCorrect: true },
      { content: "Sim, se a manobra foi feita lentamente", isCorrect: false },
    ],
    explanation: "Na autoestrada, nunca se pode inverter o sentido de marcha. Essa manobra é proibida em autoestradas para garantir a segurança e fluidez do tráfego.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/ByNWkRN/image-28.png",
    options: [
      { content: "Paragem proibida a veículos que transportam substâncias perigosas", isCorrect: true },
      { content: "Paragem obrigatória para veículos que transportam substâncias perigosas", isCorrect: false },
      { content: "Área reservada para veículos que transportam substâncias perigosas", isCorrect: false },
    ],
    explanation: "Este sinal indica paragem proibida a veículos que transportam substâncias perigosas. É importante observar e respeitar os sinais específicos para garantir a segurança no transporte de substâncias perigosas.",
  },
  {
    content: "Que comunica o condutor aos outros utentes da via?",
    image: "https://i.ibb.co/V9KVm5W/image-29.png",
    options: [
      { content: "Que vai voltar para o lado esquerdo do volante", isCorrect: false },
      { content: "Que vai para o lado direito do volante", isCorrect: false },
      { content: "Que vai reduzir a velocidade", isCorrect: true },
    ],
    explanation: "O condutor comunica aos outros utentes da via que vai reduzir a velocidade ao acionar as luzes de travagem. É uma forma de alertar sobre uma possível paragem ou abrandamento.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/mN9Ymqc/image-30.png",
    options: [
      { content: "A presença de cancela motorizada 20 centro", isCorrect: false },
      { content: "A presença de ponte móvel", isCorrect: true },
      { content: "A presença de entroncamento oblíquo à esquerda", isCorrect: false },
    ],
    explanation: "Este sinal indica a presença de uma ponte móvel. Sinais de advertência, como este, alertam os condutores para condições especiais na estrada à frente.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/pwn9Hc5/image-31.png",
    options: [
      { content: "Pré-advertência da direção de saída", isCorrect: true },
      { content: "Advertência da direção de saída", isCorrect: false },
      { content: "Direção de saída", isCorrect: false },
    ],
    explanation: "Este sinal é uma pré-advertência da direção de saída. Sinais de pré-advertência informam os condutores sobre as condições futuras da estrada, permitindo-lhes tomar decisões informadas.",
  },
  {
    content: "Considera-se morte por acidente de viação",
    image: "https://i.ibb.co/vqpyVzb/image-32.png",
    options: [
      { content: "Aquela que ocorre até 30 dias após o registo do sinistro", isCorrect: true },
      { content: "Só aquela que ocorre no local do sinistro", isCorrect: false },
      { content: "Só aquela que ocorre a caminho da unidade sanitária", isCorrect: false },
      { content: "Aquela que ocorre 30 dias depois do registro do sinistro", isCorrect: false },
    ],
    explanation: "Considera-se morte por acidente de viação aquela que ocorre até 30 dias após o registo do sinistro. Esta definição é importante para estatísticas e análises de acidentes de trânsito.",
  },
  {
    content: "Os peões, para atravessar a faixa de rodagem...",
    image: "https://i.ibb.co/X4XD6yP/image-33.png",
    options: [
      { content: "Podem fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 m", isCorrect: false },
      { content: "Estão sempre obrigados a utilizar a passagem desnivelada para peões", isCorrect: false },
      { content: "Têm sempre prioridade de passagem", isCorrect: false },
      { content: "Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente", isCorrect: true },
    ],
    explanation: "Os peões, ao atravessar a faixa de rodagem, devem certificar-se de que a distância e velocidade dos veículos permitem fazê-lo sem perigo de acidente. A segurança é uma responsabilidade partilhada entre peões e condutores.",
  },
  {
    content: "Nos veículos de mercadorias, a carga deve ser disposta de modo a que:",
    image: "https://i.ibb.co/r2Qjyd5/image-34.png",
    options: [
      { content: "O principal peso fique sobre o eixo da retaguarda", isCorrect: false },
      { content: "Fique livre o maior espaço possível a retaguarda da caixa de carga", isCorrect: false },
      { content: "Seja assegurado o equilíbrio do veículo, parado ou em movimento", isCorrect: true },
    ],
    explanation: "Nos veículos de mercadorias, a carga deve ser disposta de modo a que seja assegurado o equilíbrio do veículo, parado ou em movimento. Isso ajuda a garantir uma condução estável e segura.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/X4MPcBw/image-35.png",
    options: [
      { content: "Trânsito proibido a peões, animais e veículos automóveis", isCorrect: false },
      { content: "Trânsito proibido a peões, animais e veículos não automóveis", isCorrect: true },
      { content: "Trânsito proibido a animais e veículos não automóveis", isCorrect: false },
    ],
    explanation: "Este sinal indica trânsito proibido a peões, animais e veículos não automóveis. Restringe o acesso a certos tipos de tráfego para garantir a segurança.",
  },
  {
    content: "É proibido ultrapassar:",
    image: "https://i.ibb.co/L6k7Q43/image-36.png",
    options: [
      { content: "Em todas as curvas", isCorrect: false },
      { content: "Depois dos cruzamentos", isCorrect: false },
      { content: "Nas estradas que só tenham uma via de trânsito para cada sentido", isCorrect: false },
      { content: "Imediatamente antes e nas passagens para peões", isCorrect: true },
    ],
    explanation: "É proibido ultrapassar imediatamente antes e nas passagens para peões. Esta regra ajuda a garantir a segurança dos peões ao atravessar a estrada.",
  },
  {
    content: "Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de:",
    image: "https://i.ibb.co/JmcJSnc/image-37.png",
    options: [
      { content: "80 km/h", isCorrect: false },
      { content: "120 km/h", isCorrect: false },
      { content: "100 km/h", isCorrect: true },
    ],
    explanation: "Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de 100 km/h. Limites de velocidade específicos aplicam-se a diferentes tipos de veículos.",
  },
  {
    content: "Todos os condutores de veículos ou animais são obrigados a...",
    image: "https://i.ibb.co/Ptws569/image-38.png",
    options: [
      { content: "Abandonar os veículos nos locais de estacionamento sem motivo justificado", isCorrect: false },
      { content: "Reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias", isCorrect: false },
      { content: "Obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito", isCorrect: true },
    ],
    explanation: "Todos os condutores de veículos ou animais são obrigados a obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito. Esta é uma regra fundamental para manter a ordem e segurança nas estradas.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/kGZQrWC/image-39.png",
    options: [
      { content: "Sentido obrigatório para a frente", isCorrect: false },
      { content: "Via rápida", isCorrect: false },
      { content: "Existência de portagens na via em que segue", isCorrect: true },
    ],
    explanation: "Este sinal indica a existência de portagens na via em que segue. É importante estar ciente de sinais que indicam a presença de portagens para se preparar adequadamente.",
  },
];
const drivingTestQuestions2: Question[] = [
  {
    content: "Em acidente de viação com vítima, deixa de prestar ou providenciar socorro, constitui contravenção",
    image: "https://i.ibb.co/G7z28F4/image-new.png",
    explanation: "Leve",
    options: [
      { content: "Leve", isCorrect: false },
      { content: "Media", isCorrect: false },
      { content: "Grave", isCorrect: true }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/rtdcb9t/image-1-new.png",
    explanation: "Convergência de filas de trânsito",
    options: [
      { content: "Fim da fila de trânsito à esquerda", isCorrect: false },
      { content: "Fim da fila de trânsito à direita", isCorrect: false },
      { content: "Convergência de filas de trânsito", isCorrect: true }
    ]
  },
  {
    content: "Nos locais onde é proibido, a inversão do sentido de marcha",
    image: "https://i.ibb.co/LPf8R3H/image-2-new.png",
    explanation: "É contravenção punida com a multa de 1000Mt",
    options: [
      { content: "É contravenção punida com a multa de 1000Mt", isCorrect: true },
      { content: "E contravenção punida com a multa de 500,00 Mt", isCorrect: false },
      { content: "E contravenção punida com a multa de 2.000,00 Mt", isCorrect: false },
      { content: "Não é considerada contravenção.", isCorrect: false }
    ]
  },
  {
    content: "O que é a força centrífuga?",
    image: "https://i.ibb.co/cxq22bw/image-3-new.png",
    explanation: "É a força aparente que “empurra” os veículos para o exterior das curvas",
    options: [
      { content: "É a força aparente que “empurra” os veículos para o interior das curvas", isCorrect: false },
      { content: "É a força aparente que “empurra” os veículos para o exterior das curvas", isCorrect: true },
      { content: "É a força aparente que trava os veículos nas curvas", isCorrect: false },
      { content: "Uma força que só ocorre quando o veículo vai em linha reta.", isCorrect: false }
    ]
  },
  {
    content: "Para conduzir com segurança, deve moderar especialmente a velocidade...",
    image: "https://i.ibb.co/S3vN1jM/image-4-new.png",
    explanation: "Nas curvas, lombas e outros locais de visibilidade reduzida.",
    options: [
      { content: "Só nas pontes, túneis e passagens de nível", isCorrect: false },
      { content: "Nos cruzamentos e entroncamentos nós temos prioridade de passagem.", isCorrect: false },
      { content: "Nas curvas, lombas e outros locais de visibilidade reduzida.", isCorrect: true },
      { content: "Nos locais assinalados com sinais de obrigação.", isCorrect: false }
    ]
  },
  {
    content: "Na condução noturna, os hábitos do condutor aumentam ou não a fadiga?",
    image: "https://i.ibb.co/dJDL7n1/image-5-new.png",
    explanation: "Sim, fatores como alimentação, seu tipo, quantidade e frequência.",
    options: [
      { content: "Fatores como alimentação, seu tipo, quantidade e frequência não acentuam a fadiga.", isCorrect: false },
      { content: "Sim, fatores como alimentação, seu tipo, quantidade e frequência.", isCorrect: true },
      { content: "Apenas a ingestão de bebidas alcoólicas acentuam a fadiga.", isCorrect: false },
      { content: "Os hábitos do condutor não aumentam a fadiga.", isCorrect: false }
    ]
  },
  {
    content: "A definição de berma é",
    image: "https://i.ibb.co/C7dnjjF/image-6-new.png",
    explanation: "Superfície de via pública não especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;",
    options: [
      { content: "Superfície de via pública especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;", isCorrect: false },
      { content: "Superfície de via pública não especialmente destinada ao trânsito de veículos e que ladeia a faixa de rodagem;", isCorrect: true },
      { content: "Superfície de via pública destinada ao trânsito de veículos e que ladeia a faixa de rodagem;", isCorrect: false },
      { content: "Superfície de via pública não especialmente destinada ao trânsito de automóveis e que ladeia a faixa de rodagem;", isCorrect: false }
    ]
  },
  {
    content: "Quando os pneus têm uma pressão incorreta:",
    image: "https://i.ibb.co/zx8hBzd/image-7-new.png",
    explanation: "Desgastam-se mais e correm maior risco de rebentar",
    options: [
      { content: "Desgastam-se mais e correm maior risco de rebentar", isCorrect: true },
      { content: "Desgastam-se menos e têm menos risco de rebentar.", isCorrect: false },
      { content: "Consome-se menos combustível.", isCorrect: false },
      { content: "Melhora a estabilidade do veículo e o seu conforto.", isCorrect: false }
    ]
  },
  {
    content: "O uso do capacete para proteger a cabeça.",
    image: "https://i.ibb.co/zx8hBzd/image-7-new.png",
    explanation: "É obrigatório para os condutores e passageiros de motociclos e ciclomotores",
    options: [
      { content: "É recomendável para os condutores e passageiros de motociclos, mas não é obrigatório", isCorrect: false },
      { content: "É obrigatório para os condutores e passageiros de motociclos e ciclomotores", isCorrect: true },
      { content: "Só é obrigatório para os condutores e passageiros de motociclos", isCorrect: false },
      { content: "Não é eficaz em caso de acidente", isCorrect: false }
    ]
  },
  {
    content: "O significado deste sinal é",
    image: "https://i.ibb.co/kgDsc1K/image-9-new.png",
    explanation: "Congestionamento de tráfego.",
    options: [
      { content: "Zona onde só podem passar três carros de cada vez.", isCorrect: false },
      { content: "Zona de estacionamento em fila.", isCorrect: false },
      { content: "Congestionamento de tráfego.", isCorrect: true },
      { content: "Zona de paragem em fila.", isCorrect: false }
    ]
  },
  {
    content: "O que indica a marca rodoviária?",
    image: "https://i.ibb.co/2sJgBkr/image-10-new.png",
    explanation: "Linha de cedência de prioridade com símbolo triangular.",
    options: [
      { content: "Linha de paragem obrigatória com stop.", isCorrect: false },
      { content: "Linha de paragem obrigatória.", isCorrect: false },
      { content: "Linha de cedência de prioridade com símbolo triangular.", isCorrect: true }
    ]
  },
  {
    content: "O que indica o sinal circular?",
    image: "https://i.ibb.co/2sJgBkr/image-10-new.png",
    explanation: "Proibição de ultrapassagem para motociclos simples.",
    options: [
      { content: "Trânsito proibido para todos os veículos automóveis.", isCorrect: false },
      { content: "Proibição de ultrapassagem para automóveis ligeiros.", isCorrect: false },
      { content: "Proibição de ultrapassagem para motociclos simples.", isCorrect: true }
    ]
  },
  {
    content: "Qual é a validade que tem a carta de condução da categoria B?",
    image: "https://i.ibb.co/dWBQhzf/image-12-new.png",
    explanation: "Cinco anos",
    options: [
      { content: "Cinco anos", isCorrect: true },
      { content: "Dois anos", isCorrect: false },
      { content: "Três anos", isCorrect: false },
      { content: "Dez anos", isCorrect: false }
    ]
  },
  {
    content: "A recolha da informação é influenciada pela fadiga?",
    image: "https://i.ibb.co/vsbK6Yq/image-13-new.png",
    explanation: "Sim, assim como influencia toda a tarefa de condução",
    options: [
      { content: "Não", isCorrect: false },
      { content: "Sim, mas apenas em condução urbana", isCorrect: false },
      { content: "Sim, assim como influencia toda a tarefa de condução", isCorrect: true },
      { content: "Não, a menos que o condutor esteja muito cansado", isCorrect: false }
    ]
  },
  {
    content: "Que deve fazer perante um ferido que tenha uma forte hemorragia na perna?",
    image: "https://i.ibb.co/bJ2gsk8/image-14-new.png",
    explanation: "Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.",
    options: [
      { content: "Por pomada na ferida.", isCorrect: false },
      { content: "Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.", isCorrect: true },
      { content: "Deve sempre fazer um torniquete na perna lesionada.", isCorrect: false }
    ]
  },
  {
    content: "Factores de risco serão:",
    image: "https://i.ibb.co/0M1CJwS/image-16-new.png",
    explanation: "Todos os fatores que aumentam o risco de acidente.",
    options: [
      { content: "Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.", isCorrect: false },
      { content: "Todas as marcas rodoviárias que contenham riscos.", isCorrect: false },
      { content: "Todos os fatores que aumentam o risco de acidente.", isCorrect: true },
      { content: "Todos os fatores externos ao condutor.", isCorrect: false }
    ]
  },
  {
    content: "Sempre que no mesmo sentido sejam possíveis duas ou mais filas de trânsito:",
    image: "https://i.ibb.co/0M1CJwS/image-16-new.png",
    explanation: "O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.",
    options: [
      { content: "O condutor deve circular pela via de trânsito mais à direita, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.", isCorrect: false },
      { content: "O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para ultrapassar ou mudar de direção.", isCorrect: true },
      { content: "O condutor deve circular pela via de trânsito mais à esquerda, podendo utilizar-se outra se não houver lugar naquela, e para estacionar.", isCorrect: false },
      { content: "O condutor deve circular pela via de trânsito mais à direita, podendo utilizar-se outra, para ultrapassar ou mudar de direção.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/jGNJW8h/image-18-new.png",
    explanation: "Área reservada para autocarros e autocarros médios.",
    options: [
      { content: "Parque de estacionamento para autocarros e autocarros médios.", isCorrect: false },
      { content: "Faixa reservada para qualquer tipo de autocarro do lado esquerdo.", isCorrect: false },
      { content: "Área reservada para autocarros e autocarros médios.", isCorrect: true }
    ]
  },
  {
    content: "Pode uma criança com idade inferior a 3 anos viajar no banco da frente do automóvel?",
    image: "https://i.ibb.co/xHLL7Nk/image-19-new.png",
    explanation: "Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desativado.",
    options: [
      { content: "Sim, sempre que utilizar o cinto de segurança.", isCorrect: false },
      { content: "Não, em nenhum caso.", isCorrect: false },
      { content: "Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desativado.", isCorrect: true },
      { content: "Sim, quando o automóvel não tiver nenhum cinto de segurança.", isCorrect: false }
    ]
  },
  {
    content: "Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?",
    image: "https://i.ibb.co/BCK8VSS/image-20-new.png",
    explanation: "Sim, desde que o peso bruto do reboque não exceda 750 kg.",
    options: [
      { content: "Não, é necessária a da categoria C1E.", isCorrect: false },
      { content: "Sim, desde que o peso bruto do reboque não exceda 3500 kg.", isCorrect: false },
      { content: "Sim, desde que o peso bruto do reboque não exceda 750 kg.", isCorrect: true },
      { content: "Não, é necessária a da categoria G.", isCorrect: false }
    ]
  },
  {
    content: "O fato de conduzir de noite deve ter influência na velocidade a que segue?",
    image: "https://i.ibb.co/5rP5Xcs/image-21-new.png",
    explanation: "Sim",
    options: [
      { content: "Não, porque a utilização de luzes é obrigatória.", isCorrect: false },
      { content: "Sim, mas apenas dentro das localidades.", isCorrect: false },
      { content: "Sim", isCorrect: true },
      { content: "Não, se conheço bem a estrada.", isCorrect: false }
    ]
  },
  {
    content: "Exploração perceptiva é:",
    image: "https://i.ibb.co/MpL9YPF/image-22-new.png",
    explanation: "Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.",
    options: [
      { content: "Procedimentos de condutor para manter a trajetória do veículo controlada.", isCorrect: false },
      { content: "Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.", isCorrect: true },
      { content: "Procedimentos do condutor para realizar manobras mais rapidamente.", isCorrect: false }
    ]
  },
  {
    content: "Como deve ser feita a carga e descarga de um veículo na via pública?",
    image: "https://i.ibb.co/BB21K7F/image-23-new.png",
    explanation: "Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.",
    options: [
      { content: "Sempre pela retaguarda", isCorrect: false },
      { content: "Sempre pela direita.", isCorrect: false },
      { content: "Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.", isCorrect: true }
    ]
  },
  {
    content: "Se estacionar o veículo na faixa de rodagem desde anoitecer até ao amanhecer, deve utilizar alguma luz?",
    image: "https://i.ibb.co/6RSJ7Q4/image-24-new.png",
    explanation: "Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.",
    options: [
      { content: "Não, mesmo que seja num local sem iluminação.", isCorrect: false },
      { content: "Sim, as de estrada (máximos)", isCorrect: false },
      { content: "Sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.", isCorrect: false },
      { content: "Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.", isCorrect: true }
    ]
  }
];
const drivingTestQuestions3: Question[] = [
  {
    content: "Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?",
    image: "https://i.ibb.co/KFB3QQk/image-40-new.png",
    explanation: "Não. Circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido é proibido, exceto nas situações em que seja necessário ultrapassar outro veículo.",
    options: [
      { content: "Sim, na aproximação a um cruzamento em que pretenda mudar de direção à direita.", isCorrect: false },
      { content: "Sim, em via urbana posso circular pela via da esquerda ou a da direita.", isCorrect: false },
      { content: "Sim, para ultrapassar.", isCorrect: true },
      { content: "Não.", isCorrect: false }
    ]
  },
  {
    content: "Em situações de chuva forte:",
    image: "https://i.ibb.co/KFB3QQk/image-40-new.png",
    explanation: "A chuva forte aumenta a probabilidade de aquaplanagem (hidroplanagem), tornando a superfície da estrada escorregadia. Os condutores devem reduzir a velocidade para evitar acidentes.",
    options: [
      { content: "Aumenta a probabilidade de aquaplanagem (hidroplanagem).", isCorrect: true },
      { content: "Reduz a probabilidade de aquaplanagem (hidroplanagem).", isCorrect: false },
      { content: "Reduz a probabilidade de aquaplanagem (hidroplanagem), sobretudo a velocidade moderada.", isCorrect: false }
    ]
  },
  {
    content: "O significado destes sinais é:",
    image: "https://i.ibb.co/N2GhrH0/image-42-new.png",
    explanation: "A - Parque de estacionamento; B- Parque de estacionamento para veículos do corpo diplomático.",
    options: [
      { content: "A - Parque de estacionamento; B- Parque de estacionamento para veículos do corpo diplomático.", isCorrect: true },
      { content: "A - Parque de estacionamento; B - Parque de estacionamento para veículos do governo.", isCorrect: false },
      { content: "A - Parque de estacionamento; B - Parque de estacionamento para veículos do ministério.", isCorrect: false }
    ]
  },
  {
    content: "Como medida de prevenção, quando o piso da via está molhado, deve:",
    image: "https://i.ibb.co/4TPsx43/image-43-new.png",
    explanation: "Reduzir a velocidade é uma medida de prevenção eficaz ao conduzir em estradas molhadas. Isso ajuda a evitar aquaplanagem e reduz a distância de travagem.",
    options: [
      { content: "Parar.", isCorrect: false },
      { content: "Reduzir a velocidade.", isCorrect: true },
      { content: "Aumentar um pouco a velocidade para que a distância de paragem diminua.", isCorrect: false },
      { content: "Reduzir a distância de segurança.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal circular com fundo azul?",
    image: "https://i.ibb.co/q1ChBYb/image-44-new.png",
    explanation: "Via obrigatória para circulação de veículos de dimensões anormais. Este sinal indica que apenas os veículos com dimensões especiais mencionadas no sinal têm permissão para utilizar essa via.",
    options: [
      { content: "Via obrigatória para veículos de construção.", isCorrect: false },
      { content: "Via obrigatória para autocarros de excursão.", isCorrect: false },
      { content: "Via obrigatória para circulação de veículos de dimensões anormais.", isCorrect: true }
    ]
  },
  {
    content: "O que se entende por sanção?",
    image: "https://i.ibb.co/y4QfPFh/image-45-new.png",
    explanation: "Sanção refere-se ao prêmio ou castigo anexo às ações humanas. No contexto de condução, refere-se a penalidades ou recompensas associadas ao cumprimento ou violação das regras de trânsito.",
    options: [
      { content: "A repetição de valores positivos.", isCorrect: false },
      { content: "A repetição de valores negativos.", isCorrect: false },
      { content: "O prêmio ou castigo anexo às ações humanas.", isCorrect: true }
    ]
  },
  {
    content: "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    image: "https://i.ibb.co/0QxshD6/image-46-new.png",
    explanation: "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100. Esta é uma limitação de velocidade específica para automóveis pesados de passageiros.",
    options: [
      { content: "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.", isCorrect: false },
      { content: "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 120.", isCorrect: false },
      { content: "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 120.", isCorrect: false },
      { content: "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.", isCorrect: true }
    ]
  },
  {
    content: "O significado deste sinal é:",
    image: "https://i.ibb.co/0QxshD6/image-46-new.png",
    explanation: "Queda de pedras à esquerda. Este sinal alerta para o perigo de quedas de pedras no lado esquerdo da estrada.",
    options: [
      { content: "Queda de pedras à direita.", isCorrect: false },
      { content: "Queda de pedras à esquerda.", isCorrect: true },
      { content: "Estrada com buracos na esquerda.", isCorrect: false },
      { content: "Estrada com buracos na direita.", isCorrect: false }
    ]
  },
  {
    content: "O significado deste sinal é:",
    image: "https://i.ibb.co/0QxshD6/image-46-new.png",
    explanation: "Trânsito nos dois sentidos. Este sinal indica que a estrada tem tráfego em ambas as direções.",
    options: [
      { content: "Prioridade para quem circula à direita.", isCorrect: false },
      { content: "Trânsito nos dois sentidos.", isCorrect: true },
      { content: "Prioridade temporária para quem circula à direita.", isCorrect: false }
    ]
  },
  {
    content: "Um pára-brisas sujo, à noite e com chuva, pode:",
    image: "https://i.ibb.co/8dK7157/image-49-new.png",
    explanation: "Diminuir a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão. Pára-brisas sujos podem comprometer a visibilidade, especialmente em condições noturnas e de chuva.",
    options: [
      { content: "Aumentar a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão.", isCorrect: false },
      { content: "Diminuir o tempo de reação.", isCorrect: false },
      { content: "Diminuir a capacidade de ver as alternativas de ação e aumentar o tempo de análise necessário à tomada de decisão.", isCorrect: true }
    ]
  },
  {
    content: "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    image: "https://i.ibb.co/8dK7157/image-49-new.png",
    explanation: "Motociclos com carro, dentro das localidades 50, fora das localidades 70. Esta é uma limitação de velocidade específica para motociclos com carro.",
    options: [
      { content: "Motociclos com carro, dentro das localidades 40, fora das localidades 70.", isCorrect: false },
      { content: "Motociclos com carro, dentro das localidades 50, fora das localidades 80.", isCorrect: false },
      { content: "Motociclos com carro, dentro das localidades 60, fora das localidades 90.", isCorrect: false },
      { content: "Motociclos com carro, dentro das localidades 50, fora das localidades 70.", isCorrect: true }
    ]
  },
  {
    content: "O significado deste sinal é:",
    image: "https://i.ibb.co/zP25ZJf/image-51-new.png",
    explanation: "Trabalhos na estrada. Este sinal alerta para a presença de trabalhos na estrada, indicando que os condutores devem proceder com cautela.",
    options: [
      { content: "Trabalhos na estrada.", isCorrect: true },
      { content: "Obras adjudicadas.", isCorrect: false },
      { content: "Obras incompletas.", isCorrect: false },
      { content: "Prudência porque o parque está em obras.", isCorrect: false }
    ]
  },
  {
    content: "As luzes devem ser usadas, durante o nevoeiro (cacimba):",
    image: "https://i.ibb.co/qnqFkZs/image-52-new.png",
    explanation: "De dia ou de noite. Em condições de nevoeiro, as luzes devem ser usadas a qualquer hora do dia ou da noite para melhorar a visibilidade.",
    options: [
      { content: "De dia ou de noite.", isCorrect: true },
      { content: "Só durante a noite.", isCorrect: false },
      { content: "Durante o dia, se o nevoeiro for muito denso.", isCorrect: false },
      { content: "De dia e de noite, principalmente as luzes de estrada.", isCorrect: false }
    ]
  },
  {
    content: "O que deve fazer quando um velocípede segue no mesmo sentido de trânsito?",
    image: "https://i.ibb.co/J53fhVT/image-53-new.png",
    explanation: "Ter atenção à instabilidade desse veículo. Velocípedes, como bicicletas, podem ser menos estáveis do que outros veículos motorizados, e os condutores devem estar cientes disso ao partilhar a estrada.",
    options: [
      { content: "Utilizar os sinais sonoros.", isCorrect: false },
      { content: "Ultrapassá-lo a grande velocidade.", isCorrect: false },
      { content: "Ter atenção à instabilidade desse veículo.", isCorrect: true }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/wzyHmcH/image-54-new.png",
    explanation: "Trânsito proibido a veículos de peso por eixo superior a 2 toneladas. Este sinal proíbe a passagem de veículos cujo peso por eixo seja superior a 2 toneladas.",
    options: [
      { content: "Trânsito proibido a veículos de peso total superior a 2 toneladas.", isCorrect: false },
      { content: "Trânsito proibido a veículos de peso por eixo inferior a 2 toneladas.", isCorrect: false },
      { content: "Trânsito proibido a veículos de peso por eixo superior a 2 toneladas.", isCorrect: true }
    ]
  },
  {
    content: "O agente regulador de trânsito, manda:",
    image: "https://i.ibb.co/wzyHmcH/image-54-new.png",
    explanation: "Parar o tráfego que venha da retaguarda. Um agente regulador de trânsito pode ordenar a paragem do tráfego proveniente de determinada direção para facilitar o fluxo de outros veículos.",
    options: [
      { content: "Parar o tráfego que venha da retaguarda e da frente.", isCorrect: false },
      { content: "Avançar o tráfego da esquerda.", isCorrect: false },
      { content: "Parar o tráfego que venha da retaguarda.", isCorrect: true }
    ]
  },
  {
    content: "O condutor está sujeito ao aparecimento de fadiga quando circula com trânsito intenso?",
    image: "https://i.ibb.co/4RxtrKy/image-56-new.png",
    explanation: "Sim, porque é uma situação de trânsito monótona. O tráfego intenso pode criar uma situação monótona, aumentando a fadiga do condutor.",
    options: [
      { content: "Não está porque circula a velocidade reduzida.", isCorrect: false },
      { content: "Não está porque nesta situação pode descansar devido à pouca velocidade do trânsito.", isCorrect: false },
      { content: "Sim, porque é uma situação de trânsito monótona, o que provoca fadiga.", isCorrect: true },
      { content: "Está e, para evitar a fadiga, deve beber café e bebidas estimulantes.", isCorrect: false }
    ]
  },
  {
    content: "Dentro das localidades, os sinais sonoros só podem ser usados",
    image: "https://i.ibb.co/wYZXj46/image-57-new.png",
    explanation: "Em caso de manifesta necessidade, podendo ser proibidos nas zonas em que o ordenamento do trânsito seja assegurado por agentes da autoridade ou por instrumentos de sinalização vertical.",
    options: [
      { content: "Em caso de manifesta necessidade, podendo ser autorizados nas zonas em que o ordenamento do trânsito seja assegurado por sinalização vertical.", isCorrect: false },
      { content: "Em caso de manifesta necessidade, podendo ser autorizados nas zonas em que o ordenamento do trânsito seja assegurado por sinalização horizontal.", isCorrect: false },
      { content: "Em caso de manifesta necessidade, podendo ser proibidos nas zonas em que o ordenamento do trânsito seja assegurado por agentes da autoridade ou por instrumentos de sinalização vertical.", isCorrect: true },
      { content: "Sempre durante a noite.", isCorrect: false }
    ]
  },
  {
    content: "Depois de ter tomado bebidas alcoólicas:",
    image: "https://i.ibb.co/BN5YSWq/image-58-new.png",
    explanation: "O álcool entra rapidamente no sistema circulatório. Após consumir bebidas alcoólicas, o álcool é absorvido rapidamente pelo sistema circulatório, afetando a capacidade de condução.",
    options: [
      { content: "O álcool entra diretamente no sistema urinário.", isCorrect: false },
      { content: "O álcool demora duas horas a entrar no sistema circulatório.", isCorrect: false },
      { content: "O álcool entra rapidamente no sistema circulatório.", isCorrect: true }
    ]
  },
  {
    content: "A definição de localidade é:",
    image: "https://i.ibb.co/F3w7LxP/image-59-new.png",
    explanation: "Zona com edificação cujos limites são devidamente sinalizados. Uma localidade é uma área com construções onde os limites são devidamente marcados.",
    options: [
      { content: "Zona com edificações cujos limites não são sinalizados.", isCorrect: false },
      { content: "Zona urbana cujos limites não são sinalizados.", isCorrect: false },
      { content: "Zona com edificação cujos limites são devidamente sinalizados.", isCorrect: true },
      { content: "Zona regional cujos limites são sinalizados com sinalização luminosa.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal luminoso?",
    image: "https://i.ibb.co/C75WSBW/image-60-new.png",
    explanation: "Acesso ou passagem interdito. Um sinal luminoso vermelho indica que a passagem ou acesso está proibido.",
    options: [
      { content: "Acesso ou passagem autorizado.", isCorrect: false },
      { content: "Acesso ou passagem condicionado.", isCorrect: false },
      { content: "Acesso ou passagem interdito.", isCorrect: true }
    ]
  },
  {
    content: "Durante as ultrapassagens, a força do ar provocada pelos veículos pesados:",
    image: "https://i.ibb.co/ry8HBXp/image-61-new.png",
    explanation: "A força do ar afeta em especial os veículos ligeiros e veículos de 2 rodas. A aerodinâmica durante as ultrapassagens pode ter um impacto significativo, especialmente nos veículos mais leves.",
    options: [
      { content: "Afecta em especial os veículos pesados.", isCorrect: false },
      { content: "Afecta igualmente ambos os veículos, sobretudo no início da manobra.", isCorrect: false },
      { content: "Afecta em especial os veículos ligeiros e veículos de 2 rodas.", isCorrect: true },
      { content: "Não tem influência para os outros condutores.", isCorrect: false }
    ]
  }
];
const drivingTestQuestions4: Question[] = [
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/w7GphYD/image-46-new.jpg)",
    image: "https://i.ibb.co/w7GphYD/image-46-new.jpg",
    options: [
      { content: "Desvio de fila de trânsito para a direita", isCorrect: false },
      { content: "Desvio da fila de trânsito para a esquerda - opção correta", isCorrect: true },
      { content: "Desvio e aumento de faixa de trânsito para a esquerda.", isCorrect: false },
    ],
    explanation: "Este sinal indica um desvio da fila de trânsito para a esquerda.",
  },
  {
    content: "É necessário verificar com frequência a iluminação? (img: https://i.ibb.co/KrV2Hrw/image-1-new.jpg)",
    image: "https://i.ibb.co/KrV2Hrw/image-1-new.jpg",
    options: [
      { content: "Sim, mudando todos os fusíveis.", isCorrect: false },
      { content: "Sim, para se assegurar que todas as luzes funcionam e que os faróis estão bem regulados - opção correta", isCorrect: true },
      { content: "Não, porque se deve fazer unicamente numa oficina.", isCorrect: false },
      { content: "Não, é suficiente a revisão na inspeção periódica obrigatória.", isCorrect: false },
    ],
    explanation: "É necessário verificar com frequência a iluminação para garantir a segurança, especialmente à noite.",
  },
  {
    content: "O que deve fazer o condutor de um veículo avariado enquanto não for devidamente estacionado ou removido? (img: https://i.ibb.co/qF5LzFY/image-2-new.jpg)",
    image: "https://i.ibb.co/qF5LzFY/image-2-new.jpg",
    options: [
      { content: "Colocar os sinais de pré-sinalização de perigo e depois vestir o colete refletor", isCorrect: false },
      { content: "Colocar um sinal de pré-sinalização de perigo 5 metros à frente do veículo", isCorrect: false },
      { content: "Adotar as medidas necessárias para que os outros se apercebam da sua presença - opção correta", isCorrect: true },
      { content: "Colocar um sinal de pré-sinalização de perigo 10 metros à retaguarda do veículo.", isCorrect: false },
    ],
    explanation: "O condutor deve adotar medidas para alertar os outros sobre a presença do veículo avariado, como vestir um colete refletor.",
  },
  {
    content: "O que deve fazer o condutor que circula por uma autoestrada? (img: https://i.ibb.co/1LqLjM0/image-3-new.jpg)",
    image: "https://i.ibb.co/1LqLjM0/image-3-new.jpg",
    options: [
      { content: "Aumentar a distância de segurança, por se seguir a velocidades mais elevadas. - opção correta", isCorrect: true },
      { content: "Aumentar a distância de segurança, por se seguir a velocidades mais elevadas,", isCorrect: false },
      { content: "Diminuir a distância de segurança, por se seguir a velocidades elevadas.", isCorrect: false },
      { content: "Circular pela via de trânsito mais à direita, ainda que a via da esquerda se encontre livre de trânsito.", isCorrect: false },
    ],
    explanation: "Em autoestradas, é importante aumentar a distância de segurança devido às velocidades mais elevadas.",
  },
  {
    content: "A luz de cruzamento (médios) destina-se para frente do veículo numa distância até a via (img: https://i.ibb.co/qdSFjWM/image-4-new.jpg)",
    image: "https://i.ibb.co/qdSFjWM/image-4-new.jpg",
    options: [
      { content: "30 metros - opção correta", isCorrect: true },
      { content: "40 metros", isCorrect: false },
      { content: "50 metros.", isCorrect: false },
      { content: "60 metros.", isCorrect: false },
    ],
    explanation: "A luz de cruzamento (médios) destina-se para frente do veículo numa distância até a via de aproximadamente 30 metros.",
  },
  {
    content: "Um torniquete é… (img: https://i.ibb.co/3m2Y1pT/image-5-new.jpg)",
    image: "https://i.ibb.co/3m2Y1pT/image-5-new.jpg",
    options: [
      { content: "Um pedaço de pau curto amarrado em torno de um membro", isCorrect: false },
      { content: "Um pedaço de papel onde se menciona a parte do corpo que foi amarrada", isCorrect: false },
      { content: "Uma tira larga de pano, amarrada firmemente em torno de um membro. - opção correta", isCorrect: true },
      { content: "Uma peça de madeira, utilizada para aliviar a dor da vítima de acidente.", isCorrect: false },
    ],
    explanation: "Um torniquete é uma tira larga de pano, amarrada firmemente em torno de um membro, para controlar hemorragias.",
  },
  {
    content: "Podem ser submetidos às provas para a detecção de álcool ou substâncias estupefacientes ou psicotrópicas: (img: https://i.ibb.co/88p6xQk/image-6-new.jpg)",
    image: "https://i.ibb.co/88p6xQk/image-6-new.jpg",
    options: [
      { content: "Apenas os condutores de veículos automóveis.", isCorrect: false },
      { content: "Os peões, sempre que sejam intervenientes em acidentes de trânsito e os condutores. - opção correta", isCorrect: true },
      { content: "Todos os condutores e peões que transitam pela via pública.", isCorrect: false },
      { content: "Só os condutores que sejam intervenientes em acidentes de trânsito.", isCorrect: false },
    ],
    explanation: "Os peões, sempre que sejam intervenientes em acidentes de trânsito, e os condutores podem ser submetidos a provas para detecção de álcool ou substâncias estupefacientes ou psicotrópicas.",
  },
  {
    content: "Fora das localidades, os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de: (img: https://i.ibb.co/p3VJQqM/image-7-new.jpg)",
    image: "https://i.ibb.co/p3VJQqM/image-7-new.jpg",
    options: [
      { content: "50 km/h", isCorrect: false },
      { content: "10 km/h.", isCorrect: false },
      { content: "45 km/h. - opção correta", isCorrect: true },
      { content: "35 km/h", isCorrect: false },
    ],
    explanation: "Fora das localidades, os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de 45 km/h.",
  },
  {
    content: "Que veículos devem ter seguro de responsabilidade civil para transitar na via pública? (img: https://i.ibb.co/zNmn7S3/image-8-new.jpg)",
    image: "https://i.ibb.co/zNmn7S3/image-8-new.jpg",
    options: [
      { content: "Todos os veículos", isCorrect: false },
      { content: "Os veículos a motor. - opção correta", isCorrect: true },
      { content: "Só os ciclomotores.", isCorrect: false },
      { content: "Apenas os veículos automóveis", isCorrect: false },
    ],
    explanation: "Os veículos a motor devem ter seguro de responsabilidade civil para transitar na via pública.",
  },
  {
    content: "Qual é a função do cinto de segurança de um veículo? (img: https://i.ibb.co/rH7PX27/image-9-new.jpg)",
    image: "https://i.ibb.co/rH7PX27/image-9-new.jpg",
    options: [
      { content: "Reter e proteger os ocupantes numa colisão - opção correta", isCorrect: true },
      { content: "Manter os ocupantes sentados na posição correta", isCorrect: false },
      { content: "Permitir que os ocupantes se desloquem sobre o assento em caso de acidente.", isCorrect: false },
      { content: "Apenas impedir as lesões do condutor em caso de capotagem.", isCorrect: false },
    ],
    explanation: "A função do cinto de segurança é reter e proteger os ocupantes numa colisão, minimizando o risco de lesões.",
  },
  {
    content: "Para garantir uma proteção adequada, os sistemas de retenção de crianças devem ser: (img: https://i.ibb.co/mDtzJky/image-10-new.jpg)",
    image: "https://i.ibb.co/mDtzJky/image-10-new.jpg",
    options: [
      { content: "Da cor dos estofos do veículo", isCorrect: false },
      { content: "Colocados sem cautela em cima dos bancos do veículo", isCorrect: false },
      { content: "Adequados ao tamanho e peso da criança - opção correta", isCorrect: true },
    ],
    explanation: "Os sistemas de retenção de crianças devem ser adequados ao tamanho e peso da criança para garantir uma proteção adequada em caso de acidente.",
  },
  {
    content: "É perigoso conduzir quando o condutor está cansado? (img: https://i.ibb.co/fGqFX9d/image-11-new.jpg)",
    image: "https://i.ibb.co/fGqFX9d/image-11-new.jpg",
    options: [
      { content: "Não há perigo, já que o cansaço relaxa", isCorrect: false },
      { content: "Sim, porque o condutor demora mais tempo a reagir. - opção correta", isCorrect: true },
      { content: "Não, porque se conduz mais devagar.", isCorrect: false },
      { content: "Sim, mas apenas quando se conduz dentro das localidades.", isCorrect: false },
    ],
    explanation: "Conduzir quando o condutor está cansado é perigoso, pois pode levar a uma reação mais lenta e aumentar o risco de acidentes.",
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/4msVgqx/image-12-new.jpg)",
    image: "https://i.ibb.co/4msVgqx/image-12-new.jpg",
    options: [
      { content: "Indica a existência de uma via rápida.", isCorrect: false },
      { content: "Indica a existência de uma via de sentido único", isCorrect: false },
      { content: "Indica a existência de uma Autoestrada - opção correta", isCorrect: true },
    ],
    explanation: "Este sinal indica a existência de uma Autoestrada.",
  },
  {
    content: "O que significa responsabilidade moral? (img: https://i.ibb.co/R419DNd/image-13-new.jpg)",
    image: "https://i.ibb.co/R419DNd/image-13-new.jpg",
    options: [
      { content: "Responder perante o Tribunal", isCorrect: false },
      { content: "Responder pelos seus próprios atos - opção correta", isCorrect: true },
      { content: "Prestar contas perante os membros da sociedade", isCorrect: false },
    ],
    explanation: "Responsabilidade moral significa responder pelos seus próprios atos.",
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/pfXGjsR/image-14-new.jpg)",
    image: "https://i.ibb.co/pfXGjsR/image-14-new.jpg",
    options: [
      { content: "Via obrigatória para veículos que transportam substâncias perigosas. - opção correta", isCorrect: true },
      { content: "Fim da proibição de circulação de veículos que transportam substâncias perigosas", isCorrect: false },
      { content: "Via obrigatória para automóveis pesados", isCorrect: false },
    ],
    explanation: "Este sinal indica uma via obrigatória para veículos que transportam substâncias perigosas.",
  },
  {
    content: "Nesta situação, quem tem prioridade de passagem? (img: https://i.ibb.co/y8YvpYd/image-15-new.jpg)",
    image: "https://i.ibb.co/y8YvpYd/image-15-new.jpg",
    options: [
      { content: "O condutor que entra na rotunda.", isCorrect: false },
      { content: "O condutor que chegar primeiro.", isCorrect: false },
      { content: "O condutor que circula dentro da rotunda. - opção correta", isCorrect: true },
      { content: "O condutor que circule com uma velocidade mais elevada", isCorrect: false },
    ],
    explanation: "Quem tem prioridade de passagem nesta situação é o condutor que circula dentro da rotunda.",
  },
  {
    content: "Fumar enquanto conduz... (img: https://i.ibb.co/XsT09Wv/image-16-new.jpg)",
    image: "https://i.ibb.co/XsT09Wv/image-16-new.jpg",
    options: [
      { content: "É aconselhável, pois ajuda a manter a atenção", isCorrect: false },
      { content: "É proibido", isCorrect: false },
      { content: "Pode afetar a atenção na condução - opção correta", isCorrect: true },
      { content: "Reduz a agressividade do condutor.", isCorrect: false },
    ],
    explanation: "Fumar enquanto conduz pode afetar a atenção na condução, sendo considerado perigoso.",
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/tCSBw5H/image-17-new.jpg)",
    image: "https://i.ibb.co/tCSBw5H/image-17-new.jpg",
    options: [
      { content: "Estacionamento proibido.", isCorrect: false },
      { content: "Paragem e estacionamento proibidos - opção correta", isCorrect: true },
      { content: "Estacionamento condicionado", isCorrect: false },
    ],
    explanation: "Este sinal indica a proibição de paragem e estacionamento na zona indicada.",
  },
  {
    content: "Na situação apresentada, pode ultrapassar o veículo pela esquerda? (img: https://i.ibb.co/rs33J5H/image-18-new.jpg)",
    image: "https://i.ibb.co/rs33J5H/image-18-new.jpg",
    options: [
      { content: "Sim, se esse veículo circula por baixo do limite máximo de velocidade", isCorrect: false },
      { content: "Não - opção correta", isCorrect: true },
      { content: "Sim, pode-se sempre ultrapassar pela esquerda.", isCorrect: false },
      { content: "Sim, porque a linha é descontínua.", isCorrect: false },
    ],
    explanation: "Na situação apresentada, não é seguro ultrapassar o veículo pela esquerda, pois a linha é contínua, indicando proibição de ultrapassagem.",
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/YLMfjd5/image-19-new.jpg)",
    image: "https://i.ibb.co/YLMfjd5/image-19-new.jpg",
    options: [
      { content: "Proibição de circulação de peões.", isCorrect: false },
      { content: "Prioridade de passagem para peões", isCorrect: false },
      { content: "Proibição de passagem de peões.", isCorrect: false },
      { content: "Pista obrigatória para peões.", isCorrect: true },
    ],
    explanation: "Este sinal indica uma pista obrigatória para peões, devendo estes seguir por essa via.",
  },
  {
    content: "O que a o sinal?(img: https://i.ibb.co/TqbnmjR/image-20-new.jpg)",
    image: "https://i.ibb.co/TqbnmjR/image-20-new.jpg",
    options: [
      { content: "Sinalização luminosa em manutenção. - opção correta", isCorrect: true },
      { content: "Sinalização luminosa.", isCorrect: false },
      { content: "Passagem de nível", isCorrect: false },
    ],
    explanation: "Este sinal indica sinalização luminosa em manutenção, alertando os condutores para possíveis variações nas condições de tráfego.",
  },
  {
    content: "Posso mudar de direção para a direita nesta situação? (img: https://i.ibb.co/nQVzkKr/image-21-new.jpg)",
    image: "https://i.ibb.co/nQVzkKr/image-21-new.jpg",
    options: [
      { content: "Sim, desde que o assinale com a devida antecedência", isCorrect: false },
      { content: "Sim, porque não há nenhuma sinalização que o impeça", isCorrect: false },
      { content: "Não, porque não é possível assegurar-se que a manobra pode ser realizada sem perigo - opção correta", isCorrect: true },
    ],
    explanation: "Nesta situação, não é seguro mudar de direção para a direita, pois não é possível assegurar que a manobra pode ser realizada sem perigo.",
  },
  {
    content: "Diante do sinal, o condutor fica a saber que: (img: https://i.ibb.co/kSZg4f2/image-22-new.jpg)",
    image: "https://i.ibb.co/kSZg4f2/image-22-new.jpg",
    options: [
      { content: "Não pode utilizar os sinais sonoros. - opção correta", isCorrect: true },
      { content: "Deve utilizar os sinais sonoros", isCorrect: false },
      { content: "É obrigado a desligar as luzes de estrada.", isCorrect: false },
    ],
    explanation: "Diante do sinal, o condutor fica a saber que não pode utilizar os sinais sonoros, devendo respeitar essa proibição.",
  },
];
const drivingTestQuestions5: Question[] = [
  {
    content: "Não sendo o homem um ser isolado, mas sim que vive em contacto com pessoas iguais a si, com pessoas seus semelhantes podem ser. Os deveres para com os seus semelhantes podem ser:",
    image: "https://i.ibb.co/kghhTPn/image-23.png",
    options: [
      { content: "De respeito e de liberdade.", isCorrect: false },
      { content: "De dignidade e de integridade física.", isCorrect: false },
      { content: "De justiça e de caridade - opção correta", isCorrect: true },
    ],
    explanation: "Os deveres para com os semelhantes podem incluir princípios de justiça e caridade.",
  },
  {
    content: "O que indica o sinal luminoso?",
    image: "https://i.ibb.co/t3RJL60/image-24.png",
    options: [
      { content: "Acesso ou passagens autorizado", isCorrect: false },
      { content: "Acesso ou passagem interdito.", isCorrect: false },
      { content: "Acesso ou passagem condicionado - opção correta", isCorrect: true },
    ],
    explanation: "O sinal luminoso indica acesso ou passagem condicionado.",
  },
  {
    content: "Que indica a marca rodoviária?",
    image: "https://i.ibb.co/GPFwQpx/image-25-new.jpg",
    options: [
      { content: "Passagem para peões - opção correta", isCorrect: true },
      { content: "Passagem para ciclistas.", isCorrect: false },
      { content: "Linha de cedência de prioridade.", isCorrect: false },
    ],
    explanation: "A marca rodoviária indica uma passagem para peões.",
  },
  {
    content: "A ingestão de bebidas alcoólicas, mesmo que em pequenas quantidades, pode ter como consequência:",
    image: "https://i.ibb.co/5M8TLKM/image-26-new.jpg",
    options: [
      { content: "Diminuição do tempo de reação e da distância de paragem", isCorrect: false },
      { content: "Aumento de tempo de reação e da distância de paragem - opção correta", isCorrect: true },
      { content: "Aumento do tempo de reação, mas não da distância de paragem", isCorrect: false },
      { content: "Maior concentração na tarefa da condução.", isCorrect: false },
    ],
    explanation: "A ingestão de bebidas alcoólicas pode aumentar o tempo de reação e a distância de paragem.",
  },
  {
    content: "Os automóveis ligeiros de passageiros, devem estar equipados com sinais de pré-sinalização de perigo?",
    image: "https://i.ibb.co/HGDRCJF/image-27-new.jpg",
    options: [
      { content: "Sim, um colete refletor e um triângulo de pré-sinalização de perigo", isCorrect: false },
      { content: "Não.", isCorrect: false },
      { content: "Sim, dois triângulos de pré-sinalização de perigo e um colete refletor - opção correta", isCorrect: true },
      { content: "Sim, apenas são obrigatórios dois triângulos de pré-sinalização de perigo", isCorrect: false },
    ],
    explanation: "Os automóveis ligeiros de passageiros devem estar equipados com dois triângulos de pré-sinalização de perigo e um colete refletor.",
  },
  {
    content: "O condutor do veículo amarelo ao mudar de direção para a direita, a quem deve ceder a passagem?",
    image: "https://i.ibb.co/whqK9h7/image-28-new.jpg",
    options: [
      { content: "Apenas aos condutores que se apresentem pela direita.", isCorrect: false },
      { content: "Aos que circulam em sentido contrário e pretendam seguir em frente ou mudar de direção para a esquerda - opção correta", isCorrect: true },
      { content: "A todos os condutores que circulem pela via transversal", isCorrect: false },
      { content: "Só aos condutores que circulam em sentido contrário e sigam em frente.", isCorrect: false },
    ],
    explanation: "O condutor do veículo amarelo ao mudar para a direita deve ceder a passagem aos que circulam em sentido contrário e pretendem seguir em frente ou mudar para a esquerda.",
  },
  {
    content: "Uma criança de 8 anos, como deve viajar num automóvel equipado com cintos de segurança em todos os lugares?",
    image: "https://i.ibb.co/cbX17KJ/image-29-new.jpg",
    options: [
      { content: "No banco de frente, com um sistema de retenção homologado e adaptado ao seu tamanho e peso,", isCorrect: false },
      { content: "No banco da retaguarda, com um sistema de retenção homologado e adaptado ao seu tamanho e peso. - opção correta", isCorrect: true },
      { content: "É indiferente, sempre que utilize um sistema de retenção homologado e adaptado ao seu tamanho e peso.", isCorrect: false },
      { content: "Basta utilizar o cinto de segurança do banco da retaguarda.", isCorrect: false },
    ],
    explanation: "Uma criança de 8 anos deve viajar no banco da retaguarda com um sistema de retenção homologado e adaptado ao seu tamanho e peso.",
  },
  {
    content: "Quando o condutor tem uma distração....",
    image: "https://i.ibb.co/JdDysDf/image-30-new.jpg",
    options: [
      { content: "Demora mais tempo em reagir. - opção correta", isCorrect: true },
      { content: "Aumenta inconscientemente a velocidade do veículo", isCorrect: false },
      { content: "Deve avisar com as luzes de perigo.", isCorrect: false },
      { content: "Demora menos tempo em obter as informações necessárias para conduzir com segurança.", isCorrect: false },
    ],
    explanation: "Quando o condutor está distraído, geralmente demora mais tempo para reagir.",
  },
  {
    content: "O que indica o sinal vertical?",
    image: "https://i.ibb.co/vqRfffP/image-31-new.jpg",
    options: [
      { content: "Pré-sinalização de via sem saída à direita. - opção correta", isCorrect: true },
      { content: "Estrada sem saída.", isCorrect: false },
      { content: "Pré-sinalização de via sem saída à esquerda", isCorrect: false },
    ],
    explanation: "O sinal vertical indica pré-sinalização de via sem saída à direita.",
  },
  {
    content: "De que modo deve verificar o nível de óleo do motor?",
    image: "https://i.ibb.co/Bs6S2JH/image-32-new.jpg",
    options: [
      { content: "Com o motor quente", isCorrect: false },
      { content: "Com o motor parado e frio - opção correta", isCorrect: true },
      { content: "Com o motor ligado", isCorrect: false },
    ],
    explanation: "O nível de óleo do motor deve ser verificado com o motor parado e frio.",
  },
  {
    content: "Se pretender inverter o sentido de marcha deve ter em conta …",
    image: "https://i.ibb.co/hYvnxxj/image-33-new.jpg",
    options: [
      { content: "A que só é permitido fazê-lo nas rotundas", isCorrect: false },
      { content: "Que é proibido fazê-lo em todos os cruzamentos e entroncamentos", isCorrect: false },
      { content: "Que a manobra deve ser feita em local e de forma a não prejudicar o trânsito. - opção correta", isCorrect: true },
      { content: "Que é proibido fazê-lo dentro das localidades.", isCorrect: false },
    ],
    explanation: "Ao inverter o sentido de marcha, deve ser feito em local e de forma a não prejudicar o trânsito.",
  },
  {
    content: "Diante do sinal, é proibido:",
    image: "https://i.ibb.co/23L3xjH/image-34-new.jpg",
    options: [
      { content: "Mudar de direção para à direita.", isCorrect: false },
      { content: "Inverter o sentido de marcha - opção correta", isCorrect: true },
      { content: "Mudar de direção para à esquerda", isCorrect: false },
    ],
    explanation: "Diante do sinal, é proibido inverter o sentido de marcha.",
  },
  {
    content: "O uso do cinto de segurança nos assentos traseiros…",
    image: "https://i.ibb.co/RbRRMYy/image-35-new.jpg",
    options: [
      { content: "Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros - opção correta", isCorrect: true },
      { content: "Só são obrigatórios fora das localidades", isCorrect: false },
      { content: "São da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.", isCorrect: false },
      { content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
    ],
    explanation: "O uso do cinto de segurança nos assentos traseiros pode salvar a vida dos ocupantes e impedir lesões graves aos outros passageiros.",
  },
  {
    content: "Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas, é do:",
    image: "https://i.ibb.co/QvvYZJ5/image-36-new.jpg",
    options: [
      { content: "Instrutor", isCorrect: false },
      { content: "Examinador", isCorrect: false },
      { content: "Examinando - opção correta", isCorrect: true },
    ],
    explanation: "Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas é do examinando.",
  },
  {
    content: "Se o condutor que me precede assinala a manobra de mudança de direção para a direita, posso ultrapassar?",
    image: "https://i.ibb.co/WVgPyyC/image-37-new.jpg",
    options: [
      { content: "Sim, pela direita.", isCorrect: false },
      { content: "Sim, pela esquerda, certificando-se que a pode fazer sem perigo de acidente. - opção correta", isCorrect: true },
      { content: "Não", isCorrect: false },
      { content: "Sim, pela direita ou pela esquerda, sempre que o veículo não esteja em movimento.", isCorrect: false },
    ],
    explanation: "Se o condutor que o precede assinalar a mudança de direção para a direita, você pode ultrapassar pela esquerda, certificando-se de que pode fazê-lo sem perigo de acidente.",
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/8BFc9TF/image-38-new.jpg",
    options: [
      { content: "Sentidos obrigatórios possíveis", isCorrect: false },
      { content: "Sentido obrigatório para à direita", isCorrect: false },
      { content: "Sentido obrigatório giratório - opção correta", isCorrect: true },
    ],
    explanation: "O sinal indica sentido obrigatório giratório.",
  },
  {
    content: "Qual é a velocidade instantânea que não devem exceder os condutores de ciclomotores e quadriciclos dentro das localidades?",
    image: "https://i.ibb.co/CvrJvmh/image-39-new.jpg",
    options: [
      { content: "45 km/h.", isCorrect: false },
      { content: "40 km/h. - opção correta", isCorrect: true },
      { content: "50 km/h", isCorrect: false },
      { content: "60 km/h.", isCorrect: false },
    ],
    explanation: "Os condutores de ciclomotores e quadriciclos não devem exceder a velocidade instantânea de 40 km/h dentro das localidades.",
  },
  {
    content: "O feixe luminoso emitido pelas luzes de cruzamento (médios), deve projetar-se no solo:",
    image: "https://i.ibb.co/3pqn2hs/image-40-new.jpg",
    options: [
      { content: "E iluminá-lo eficazmente, numa distância não superior a 30 metros. - opção correta", isCorrect: true },
      { content: "E no mínimo, iluminá-lo a 100 metros", isCorrect: false },
      { content: "E luminá-lo eficazmente, numa distância não superior a 50 metros.", isCorrect: false },
    ],
    explanation: "O feixe luminoso emitido pelas luzes de cruzamento deve iluminar eficazmente o solo, numa distância não superior a 30 metros.",
  },
  {
    content: "Que efeitos tem a fadiga na condução?",
    image: "https://i.ibb.co/1bT9hbx/image-41-new.jpg",
    options: [
      { content: "Reduz o tempo de reação do condutor.", isCorrect: false },
      { content: "Diminui a sensibilidade ao encandeamento.", isCorrect: false },
      { content: "Reduz a capacidade de concentração e a segurança, - opção correta", isCorrect: true },
      { content: "Melhora a atenção do condutor", isCorrect: false },
    ],
    explanation: "A fadiga na condução pode reduzir a capacidade de concentração e a segurança do condutor.",
  },
  {
    content: "A condução urbana, caracteriza-se essencialmente:",
    image: "https://i.ibb.co/7kmy6LP/image-42-new.jpg",
    options: [
      { content: "Por uma grande intensidade de trânsito. - opção correta", isCorrect: true },
      { content: "Pela abundância de sinais luminosos.", isCorrect: false },
      { content: "Pela ausência de regras de trânsito.", isCorrect: false },
      { content: "Pela pouca presença de peões.", isCorrect: false },
    ],
    explanation: "A condução urbana caracteriza-se essencialmente por uma grande intensidade de trânsito.",
  },
  {
    content: "Pode transportar bebidas alcoólicas na parte do veículo reservada aos passageiros?",
    image: "https://i.ibb.co/cYPsKH5/image-43-new.jpg",
    options: [
      { content: "Sim, se o condutor não estiver sob influência de álcool.", isCorrect: false },
      { content: "Sim, sempre que o condutor não tome nada de álcool", isCorrect: false },
      { content: "Não, já que é proibido o porte e transporte de bebidas alcoólicas nesta parte do veículo. - opção correta", isCorrect: true },
      { content: "Sim.", isCorrect: false },
    ],
    explanation: "É proibido o porte e transporte de bebidas alcoólicas na parte do veículo reservada aos passageiros.",
  },
  {
    content: "O sinal de cor amarela e preta, indica:",
    image: "https://i.ibb.co/KXyfLh7/image-44-new.jpg",
    options: [
      { content: "Barricada", isCorrect: false },
      { content: "Baía limitadora de altura. - opção correta", isCorrect: true },
      { content: "Baía indicadora de separador físico.", isCorrect: false },
    ],
    explanation: "O sinal de cor amarela e preta indica baía limitadora de altura.",
  },
  {
    content: "O que se entende por primeiros socorros?",
    image: "https://i.ibb.co/Q6R1wt9/image-45-new.jpg",
    options: [
      { content: "É a chegada rápida do pessoal especializado ao local da ocorrência do sinistro", isCorrect: false },
      { content: "É o transporte adequado de sinistrado ou doente ao posto médico", isCorrect: false },
      { content: "São os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mantê-la viva e impedir o agravamento de situação - opção correta", isCorrect: true },
      { content: "São os meios humanos e materiais utilizados para a remoção dos acidentados.", isCorrect: false },
    ],
    explanation: "Primeiros socorros são os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mantê-la viva e impedir o agravamento da situação.",
  },
  {
    content: "Para manter a segurança do veículo, devem ser revistos periodicamente:",
    image: "https://i.ibb.co/v1wnk42/image-46-new.jpg",
    options: [
      { content: "As luzes, espelhos e o sistema de escape", isCorrect: false },
      { content: "Os pneus, amortecedores e travões - opção correta", isCorrect: true },
      { content: "A bateria, o filtro de óleo e o do ar", isCorrect: false },
      { content: "O sistema de som.", isCorrect: false },
    ],
    explanation: "Para manter a segurança do veículo, os pneus, amortecedores e travões devem ser revistos periodicamente.",
  },
];
const drivingTestQuestions6: Question[] = [
  {
    content: "Nas vias públicas, os peões devem transitar...",
    image: "https://i.ibb.co/CnfbLZP/image-new.jpg",
    explanation: "Os peões devem transitar pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas. Esta prática garante a segurança dos peões e uma circulação mais eficiente.",
    options: [
      { content: "Pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.", isCorrect: true },
      { content: "Pela faixa de modagem, mesmo que existam bermas.", isCorrect: false },
      { content: "Sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.", isCorrect: false },
      { content: "Pelos passeios, se empurram um veículo de tração manual.", isCorrect: false }
    ]
  },
  {
    content: "São evitáveis os acidentes de viação?",
    image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
    explanation: "Sim, os acidentes de viação são evitáveis. Podemos aprender a evitá-los e a reduzir as suas consequências através de uma condução responsável e respeito pelas regras de trânsito.",
    options: [
      { content: "Não, porque os acidentes ocorrem por acaso.", isCorrect: false },
      { content: "Sim, podemos aprender a evitá-los e a reduzir as suas consequências.", isCorrect: true },
      { content: "Sim, mas só se o estado das estradas melhorar.", isCorrect: false },
      { content: "Sim, exceto os causados pelo mau estado dos pneus.", isCorrect: false }
    ]
  },
  {
    content: "Ao travar, o que pode acontecer se os travões atuarem de forma desigual sobre as rodas do mesmo eixo?",
    image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
    explanation: "Se os travões atuarem de forma desigual sobre as rodas do mesmo eixo, o veículo pode alterar a sua trajetória. Isso destaca a importância de manter os sistemas de travagem em bom estado.",
    options: [
      { content: "As rodas bloqueiam.", isCorrect: false },
      { content: "O veículo altera a sua trajetória.", isCorrect: true },
      { content: "A distância de paragem diminui.", isCorrect: false },
      { content: "Melhora a estabilidade do veículo.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/ykPn6PL/image-1-new.jpg",
    explanation: "O sinal indica 'Trânsito proibido a tractores agrícolas'. Os condutores devem estar cientes da proibição de circulação de tratores agrícolas nessa via.",
    options: [
      { content: "Fim da proibição de circulação de tratores agrícolas.", isCorrect: false },
      { content: "Trânsito proibido a veículos de construção.", isCorrect: false },
      { content: "Trânsito proibido a tractores agrícolas.", isCorrect: true },
      { content: "Paragem obrigatória.", isCorrect: false }
    ]
  },
  {
    content: "Se pretender inverter o sentido de marcha numa via cuja largura não permite fazê-lo sem prejudicar o trânsito, deve:",
    image: "https://i.ibb.co/BPzQxZY/image-4-new.jpg",
    explanation: "Se a largura da via não permitir inverter o sentido de marcha sem prejudicar o trânsito, o condutor deve continuar até encontrar um local adequado onde não prejudique o trânsito.",
    options: [
      { content: "Inverter o sentido de marcha com o menor número de manobras possíveis.", isCorrect: false },
      { content: "Parar o veículo perto do eixo da via e esperar até que não haja tráfego.", isCorrect: false },
      { content: "Continuar até encontrar um local adequado onde não prejudique o trânsito.", isCorrect: true },
      { content: "Fazer a manobra, mesmo que prejudique o trânsito.", isCorrect: false }
    ]
  },
  {
    content: "O condutor, ao mudar de direção, tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem?",
    image: "https://i.ibb.co/ZMDGw54/image-5-new.jpg",
    explanation: "Sim, ao mudar de direção, o condutor tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem. Isso contribui para a segurança dos peões.",
    options: [
      { content: "Não.", isCorrect: false },
      { content: "Sim, mas só aos que o façam pela passagem para peões.", isCorrect: false },
      { content: "Sim.", isCorrect: true },
      { content: "Sim, desde que utilize o pisca.", isCorrect: false }
    ]
  },
  {
    content: "De que modo o consumo de álcool altera o comportamento do condutor?",
    image: "https://i.ibb.co/ySZDkJ4/image-6-new.jpg",
    explanation: "O consumo de álcool aumenta a autoconfiança do condutor, o que pode levar a um aumento dos riscos na condução. Portanto, é essencial evitar conduzir sob a influência de álcool.",
    options: [
      { content: "Diminui o tempo de reação.", isCorrect: false },
      { content: "Aumenta a autoconfiança, e por isso aumentam os riscos.", isCorrect: true },
      { content: "Diminui os erros na condução.", isCorrect: false },
      { content: "Reduz a agressividade na condução.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/h1KvF7z/image-7-new.jpg",
    explanation: "O sinal indica 'Paragem proibida'. Os condutores não podem estacionar nesse local, garantindo a fluidez do tráfego.",
    options: [
      { content: "Trânsito proibido a senhoras.", isCorrect: false },
      { content: "Paragem proibida.", isCorrect: true },
      { content: "Paragem obrigatória.", isCorrect: false },
      { content: "Fim da proibição de estacionamento.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/30V9Fpn/image-8-new.jpg",
    explanation: "O sinal indica 'Passagem de peões'. Os condutores devem estar atentos à presença de peões na via e garantir a sua segurança.",
    options: [
      { content: "Passagem de peões.", isCorrect: true },
      { content: "Pista obrigatória para peões.", isCorrect: false },
      { content: "Passagem desnivelada para peões.", isCorrect: false },
      { content: "Zona de atravessamento de animais.", isCorrect: false }
    ]
  },
  {
    content: "Pode uma criança com idade inferior a 3 anos viajar no banco da frente do automóvel?",
    image: "https://i.ibb.co/2FbNbS4/image-9-new.jpg",
    explanation: "Não, uma criança com idade inferior a 3 anos não deve viajar no banco da frente do automóvel. É mais seguro colocá-la no banco traseiro, utilizando um sistema de retenção adequado.",
    options: [
      { content: "Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desativado.", isCorrect: true },
      { content: "Sim, sempre que utilize o cinto de segurança.", isCorrect: false },
      { content: "Não, em nenhum caso.", isCorrect: false },
      { content: "Sim, quando o automóvel não tenha nenhum cinto de segurança.", isCorrect: false }
    ]
  },
  {
    content: "Considera-se sob influência de álcool o condutor que apresente uma taxa de álcool igual ou superior a:",
    image: "https://i.ibb.co/bHhXFDH/image-10-new.jpg",
    explanation: "Considera-se sob influência de álcool o condutor que apresente uma taxa de álcool igual ou superior a 0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l, em teste sanguíneo.",
    options: [
      { content: "0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l, em teste sanguíneo.", isCorrect: true },
      { content: "0.1 mg/l no teste de ar expirado, ou de 0.3 mg/l em teste sanguíneo.", isCorrect: false },
      { content: "0.6 mg/l no teste de ar expirado, ou de 0.9 mg/l em teste sanguíneo.", isCorrect: false },
      { content: "0.5 mg/l no teste de ar expirado, ou de 0.8 mg/l em teste sanguíneo.", isCorrect: false }
    ]
  },
  {
    content: "O que se entende por inconsciência?",
    image: "https://i.ibb.co/0fmwrfB/image-11-new.jpg",
    explanation: "No contexto de acidentes de viação, inconsciência refere-se ao estado em que o peito da vítima de acidente de viação desce e sobe regularmente devido à respiração. Isso indica uma condição médica grave e requer assistência imediata.",
    options: [
      { content: "O estado em que o peito da vítima de acidente de viação desce e sobe regularmente.", isCorrect: true },
      { content: "O estado no qual o cérebro não está a funcionar bem.", isCorrect: false },
      { content: "A perda de sangue, resultante da abertura dos vasos sanguíneos.", isCorrect: false },
      { content: "O aumento da frequência das pulsações por minuto.", isCorrect: false }
    ]
  },
  {
    content: "Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de…",
    image: "https://i.ibb.co/jDgRGrc/image-12-new.jpg",
    explanation: "Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de pelo menos 100 metros. Isso alerta os outros condutores sobre a situação de perigo.",
    options: [
      { content: "Pelo menos 50 metros.", isCorrect: false },
      { content: "Pelo menos 100 metros.", isCorrect: true },
      { content: "Pelo menos 25 metros.", isCorrect: false },
      { content: "10 metros.", isCorrect: false }
    ]
  },
  {
    content: "Deve ter alguma precaução especial quando circula dentro das localidades?",
    image: "https://i.ibb.co/wzD3Gjw/image-13-new.jpg",
    explanation: "Sim, ao circular dentro das localidades, o condutor deve moderar a velocidade, especialmente nas vias marginais por edificações. Isso contribui para a segurança de todos os utentes da via.",
    options: [
      { content: "Não.", isCorrect: false },
      { content: "Sim, utilizar os sinais sonoros quando se aproximar de peões.", isCorrect: false },
      { content: "Sim, moderar a velocidade, especialmente nas vias marginais por edificações.", isCorrect: true },
      { content: "Sim, apenas não ficar imobilizado nos cruzamentos ou entroncamentos.", isCorrect: false }
    ]
  },
  {
    content: "O que indica a marca rodoviária amarela?",
    image: "https://i.ibb.co/ygkXMSW/image-14-new.jpg",
    explanation: "A marca rodoviária amarela indica 'Proibição de estacionamento'. Os condutores não podem estacionar nessa zona, contribuindo para a fluidez do tráfego.",
    options: [
      { content: "Proibição de paragem.", isCorrect: false },
      { content: "Estacionamento condicionado.", isCorrect: false },
      { content: "Proibição de estacionamento.", isCorrect: true },
      { content: "Zona de estacionamento gratuito.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal de perigo?",
    image: "https://i.ibb.co/th0nXD7/image-15-new.jpg",
    explanation: "O sinal de perigo indica 'Sinalização luminosa'. Os condutores devem estar cientes da presença de sinalização luminosa na via e agir de acordo.",
    options: [
      { content: "Controlo policial por pirilampos.", isCorrect: false },
      { content: "Aproximação de uma estrada com prioridade.", isCorrect: false },
      { content: "Sinalização luminosa.", isCorrect: true },
      { content: "Presença de passagem de nível.", isCorrect: false }
    ]
  },
  {
    content: "Nesta via de dois sentidos, posso ultrapassar o veículo azul que assinala a sua intenção de ultrapassar o veículo que o precede?",
    image: "https://i.ibb.co/gdwfvzT/image-16-new.jpg",
    explanation: "Não, o condutor não pode ultrapassar o veículo azul que assinala a sua intenção de ultrapassar o veículo que o precede. Ultrapassar nesta situação pode ser perigoso e contra as regras de trânsito.",
    options: [
      { content: "Sim, pela direita.", isCorrect: false },
      { content: "Não.", isCorrect: true },
      { content: "Sim, pela esquerda.", isCorrect: false },
      { content: "Sim, se existir espaço suficiente para os três na faixa de rodagem.", isCorrect: false }
    ]
  },
  {
    content: "Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis:",
    image: "https://i.ibb.co/sRLsCdw/image-17-new.jpg",
    explanation: "O egoísmo não faz parte das virtudes profissionais necessárias para a boa condução de veículos automóveis. Responsabilidade, cortesia e boas maneiras, e honestidade são importantes.",
    options: [
      { content: "Responsabilidade.", isCorrect: true },
      { content: "Egoísmo.", isCorrect: false },
      { content: "Cortesia e boas maneiras.", isCorrect: true },
      { content: "Honestidade.", isCorrect: true }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/kD9Sn0f/image-18-new.jpg",
    explanation: "O sinal indica 'Obrigação de circular à velocidade mínima de 60 km/h na fila à direita'. Os condutores devem cumprir a velocidade mínima estabelecida para manter um fluxo adequado.",
    options: [
      { content: "Obrigação de circular à velocidade mínima de 60 km/h na fila à direita.", isCorrect: true },
      { content: "Proibição de circular à velocidade máxima de 60 km/h na fila à direita.", isCorrect: false },
      { content: "Obrigação de circular à velocidade mínima de 60 km/h na fila à esquerda.", isCorrect: false },
      { content: "Fim da proibição de estacionamento.", isCorrect: false }
    ]
  },
  {
    content: "O sono pode provocar um acidente durante o dia?",
    image: "https://i.ibb.co/f4SQyHF/image-19-new.jpg",
    explanation: "Sim, o sono pode provocar um acidente durante o dia. Conduzir com sono pode levar a lapsos de atenção e aumento do tempo de reação, colocando em risco a segurança na estrada.",
    options: [
      { content: "Não, esse tipo de acidentes só acontece à noite.", isCorrect: false },
      { content: "Sim, os acidentes motivados pelo sono também acontecem durante o dia.", isCorrect: true },
      { content: "Sim, mas só se conduz sob a influência de álcool.", isCorrect: false },
      { content: "Sim, mas apenas durante as primeiras horas da manhã.", isCorrect: false }
    ]
  },
  {
    content: "O condutor pode fazer a verificação do nível do óleo no motor do veículo?",
    image: "https://i.ibb.co/M8T8Y57/image-20-new.jpg",
    explanation: "Sim, o condutor pode fazer a verificação do nível do óleo no motor do veículo. É importante que o condutor saiba como realizar essa verificação corretamente.",
    options: [
      { content: "Sim, desde que mantenha o motor do veículo a trabalhar.", isCorrect: false },
      { content: "Não, apenas técnicos especializados o podem fazer.", isCorrect: false },
      { content: "Sim, desde que saiba a forma correta de verificação.", isCorrect: true },
      { content: "Não, é uma tarefa exclusiva de mecânicos profissionais.", isCorrect: false }
    ]
  },
  {
    content: "O que indica o sinal?",
    image: "https://i.ibb.co/Qr7wGVZ/image-21-new.jpg",
    explanation: "O sinal indica 'Pista obrigatória para veículos de tração animal'. Os condutores devem seguir a pista indicada pelo sinal.",
    options: [
      { content: "Pista obrigatória para veículos de tração manual.", isCorrect: false },
      { content: "Pista obrigatória para veículos de tração animal.", isCorrect: true },
      { content: "Pista obrigatória para cavaleiros.", isCorrect: false },
      { content: "Pista obrigatória para ciclistas.", isCorrect: false }
    ]
  },
  {
    content: "Para a iluminação da via, os condutores devem ligar as luzes de:",
    image: "https://i.ibb.co/s1vM1Fx/image-22-new.jpg",
    explanation: "Para a iluminação da via, os condutores devem ligar as luzes médias ou máximas. Isso melhora a visibilidade e a segurança, especialmente em condições de pouca luz.",
    options: [
      { content: "Mínimos ou máximos.", isCorrect: true },
      { content: "Mínimos ou médios.", isCorrect: false },
      { content: "Médios ou máximos.", isCorrect: false },
      { content: "Mínimos apenas.", isCorrect: false }
    ]
  },
  {
    content: "Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de:",
    image: "https://i.ibb.co/6gWXHhV/image-23-new.jpg",
    explanation: "Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de 90 km/h. Respeitar os limites de velocidade contribui para a segurança rodoviária.",
    options: [
      { content: "90 km/h.", isCorrect: true },
      { content: "60 km/h.", isCorrect: false },
      { content: "70 km/h.", isCorrect: false },
      { content: "80 km/h.", isCorrect: false }
    ]
  },
  {
    content: "Uma mulher grávida é obrigada a usar o cinto de segurança?",
    image: "https://i.ibb.co/XF3WmCV/image-24-new.jpg",
    explanation: "Sim, uma mulher grávida é obrigada a usar o cinto de segurança. É crucial que o cinto esteja bem colocado para garantir a segurança tanto da mulher como da criança em caso de acidente.",
    options: [
      { content: "Não, porque é prejudicial para a criança.", isCorrect: false },
      { content: "Sim, e é muito importante que esteja bem colocado porque senão, tanto ela como a criança, podem sofrer lesões graves em caso de acidente.", isCorrect: true },
      { content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
      { content: "Sim, mas apenas fora das cidades.", isCorrect: false }
    ]
  }
]
const drivingTestQuestions7: Question[] = [
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/6JrxNBG/image-new.png)",
    image: "https://i.ibb.co/6JrxNBG/image-new.png",
    explanation: "A presença de cancela motorizada ao centro.",
    options: [
      { content: "A presença de cancela motorizada ao centro.", isCorrect: false },
      { content: "A presença de entroncamento oblíquo à esquerda.", isCorrect: false },
      { content: "A presença de ponte móvel.", isCorrect: true },
    ],
  },
  {
    content: "Se o condutor sofre de uma doença, que deve fazer para reduzir o risco de ter um acidente? (img: https://i.ibb.co/wh85N7b/image-1-new.png)",
    image: "https://i.ibb.co/wh85N7b/image-1-new.png",
    explanation: "Conhecer os efeitos secundários dos medicamentos.",
    options: [
      { content: "Interromper a medicação que estiver a tomar, se tem que conduzir.", isCorrect: false },
      { content: "Deixar de conduzir em todos os casos.", isCorrect: false },
      { content: "Conhecer os efeitos secundários dos medicamentos.", isCorrect: true },
      { content: "Ignorar os sintomas para evitar distrações.", isCorrect: false },
    ],
  },
  {
    content: "Nos veículos destinados ao transporte de passageiros mistos… (img: https://i.ibb.co/JyF9qMp/image-2-new.png)",
    image: "https://i.ibb.co/JyF9qMp/image-2-new.png",
    explanation: "A carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.",
    options: [
      { content: "A carga pode ocultar a matrícula e os dispositivos de sinalização e iluminação.", isCorrect: false },
      { content: "A carga deve colocar-se na parte reservada aos passageiros, mesmo que reduza a visibilidade do condutor.", isCorrect: false },
      { content: "A carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.", isCorrect: true },
      { content: "A carga pode ultrapassar os contornos do veículo.", isCorrect: false },
    ],
  },
  {
    content: "Os sistemas de segurança passiva dos veículos… (img: https://i.ibb.co/RBfSW6w/image-3-new.png)",
    image: "https://i.ibb.co/RBfSW6w/image-3-new.png",
    explanation: "Devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.",
    options: [
      { content: "Não são eficazes para reduzir as consequências dos acidentes.", isCorrect: false },
      { content: "Devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.", isCorrect: true },
      { content: "Evitam os acidentes.", isCorrect: false },
      { content: "Têm uma manutenção muito cara e complexa.", isCorrect: false },
    ],
  },
  {
    content: "A recolha de informação é afetada pela condução noturna. Assim, de noite devo: (img: https://i.ibb.co/9Yq9smp/image-4-new.png)",
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
    content: "Os peões podem transitar pela faixa de rodagem nesta estrada? (img: https://i.ibb.co/4fvpDZd/image-5-new.png)",
    image: "https://i.ibb.co/4fvpDZd/image-5-new.png",
    explanation: "Sim, com prudência e por forma a não prejudicar o trânsito de veículos.",
    options: [
      { content: "Não, nesta estrada não podem transitar, já que não tem bermas.", isCorrect: false },
      { content: "Sim e devem fazê-lo pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.", isCorrect: false },
      { content: "Sim, com prudência e por forma a não prejudicar o trânsito de veículos.", isCorrect: true },
      { content: "Sim, mas só quando necessitarem atravessar.", isCorrect: false },
    ],
  },
  {
    content: "O que devem fazer os condutores se o sinal luminoso desta interseção está avariado? (img: https://i.ibb.co/41YsDMM/image-6-new.png)",
    image: "https://i.ibb.co/41YsDMM/image-6-new.png",
    explanation: "Ceder a passagem aos condutores que se apresentem pela direita.",
    options: [
      { content: "Ceder a passagem a todos os condutores que se apresentem pela via transversal.", isCorrect: false },
      { content: "Ceder a passagem aos condutores que se apresentem pela direita.", isCorrect: true },
      { content: "Ceder a passagem aos condutores que se apresentem pela esquerda.", isCorrect: false },
      { content: "Continuar a marcha, já que tenho prioridade de passagem.", isCorrect: false },
    ],
  },
  {
    content: "Fatores de risco serão: (img: https://i.ibb.co/rdnGwJH/image-7-new.png)",
    image: "https://i.ibb.co/rdnGwJH/image-7-new.png",
    explanation: "Todos os fatores que aumentem o risco de acidente.",
    options: [
      { content: "Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.", isCorrect: false },
      { content: "Todas as marcas rodoviárias que contenham riscos.", isCorrect: false },
      { content: "Todos os fatores que aumentem o risco de acidente.", isCorrect: true },
      { content: "Todos os fatores externos ao condutor.", isCorrect: false },
    ],
  },
  {
    content: "É proibido parar ou estacionar, fora das localidades: (img: https://i.ibb.co/FhfQvg3/image-8-new.png)",
    image: "https://i.ibb.co/FhfQvg3/image-8-new.png",
    explanation: "A menos de 50 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.",
    options: [
      { content: "A menos de 30 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.", isCorrect: false },
      { content: "A menos de 10 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.", isCorrect: false },
      { content: "A menos de 50 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.", isCorrect: true },
      { content: "A menos de 20 m dos cruzamentos, entroncamentos, curvas ou lombas de visibilidade reduzida.", isCorrect: false },
    ],
  },
  {
    content: "O significado deste sinal é: (img: https://i.ibb.co/K7YM5Dv/image-9-new.png)",
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
    content: "O uso do cinto de segurança nos assentos traseiros... (img: https://i.ibb.co/9ZPRWMW/image-11-new.png)",
    image: "https://i.ibb.co/9ZPRWMW/image-11-new.png",
    explanation: "Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.",
    options: [
      { content: "Só são obrigatórios fora das localidades.", isCorrect: false },
      { content: "São da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.", isCorrect: false },
      { content: "Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.", isCorrect: true },
      { content: "Não é obrigatório, mas é aconselhável.", isCorrect: false },
    ],
  },
  {
    content: "O condutor que pretenda mudar de direção para a esquerda deve: (img: https://i.ibb.co/ZXhHgM4/image-12-new.png)",
    image: "https://i.ibb.co/ZXhHgM4/image-12-new.png",
    explanation: "Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais curto.",
    options: [
      { content: "Aproximar-se, com a necessária antecedência, da margem direita da faixa de rodagem e efetuar a manobra no trajecto mais curto.", isCorrect: false },
      { content: "Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais longo.", isCorrect: false },
      { content: "Aproximar-se, com a necessária antecedência, da margem esquerda da faixa de rodagem e efetuar a manobra no trajecto mais curto.", isCorrect: true },
      { content: "Aproximar-se, com a necessária antecedência, do eixo da via e efetuar a manobra no trajecto mais curto.", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/VNcHmh4/image-13-new.png)",
    image: "https://i.ibb.co/VNcHmh4/image-13-new.png",
    explanation: "Trânsito proibido a veículos automóveis e motociclos com carro.",
    options: [
      { content: "Trânsito proibido a veículos automóveis e motociclos com carro.", isCorrect: true },
      { content: "Trânsito proibido a automóveis ligeiros de passageiros.", isCorrect: false },
      { content: "Trânsito proibido a táxis.", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal de interesse turístico? (img: https://i.ibb.co/4YZyFRC/image-14-new.png)",
    image: "https://i.ibb.co/4YZyFRC/image-14-new.png",
    explanation: "Reserva florestal.",
    options: [
      { content: "Lugar histórico e genérico.", isCorrect: false },
      { content: "Reserva florestal.", isCorrect: true },
      { content: "Parque de campismo.", isCorrect: false },
    ],
  },
  {
    content: "A definição de parque de estacionamento é: (img: https://i.ibb.co/kQW7n2p/image-15-new.png)",
    image: "https://i.ibb.co/kQW7n2p/image-15-new.png",
    explanation: "Local exclusivamente destinado ao estacionamento de veículos.",
    options: [
      { content: "Local exclusivamente destinado ao descanso dos condutores.", isCorrect: false },
      { content: "Local exclusivamente destinado às cargas e descargas dos veículos.", isCorrect: false },
      { content: "Local exclusivamente destinado ao estacionamento de veículos.", isCorrect: true },
      { content: "Local exclusivamente destinado à manutenção e reparação dos veículos.", isCorrect: false },
    ],
  },
  {
    content: "Existe algum truque para conseguir eliminar o álcool do corpo do condutor, de uma forma mais rápida? (img: https://i.ibb.co/6HC1TRM/image-16-new.png)",
    image: "https://i.ibb.co/6HC1TRM/image-16-new.png",
    explanation: "Não.",
    options: [
      { content: "Sim, dormir um pouco.", isCorrect: false },
      { content: "Sim, tomar doces.", isCorrect: false },
      { content: "Não.", isCorrect: true },
      { content: "Consumir alguma substância psicotrópica, como cannabis ou cocaína.", isCorrect: false },
    ],
  },
  {
    content: "O significado deste sinal é: (img: https://i.ibb.co/prwSwqs/image-17-new.png)",
    image: "https://i.ibb.co/prwSwqs/image-17-new.png",
    explanation: "Entroncamento agudo para a esquerda.",
    options: [
      { content: "Entroncamento divergente para a esquerda.", isCorrect: false },
      { content: "Entroncamento agudo para a esquerda.", isCorrect: true },
      { content: "Entroncamento agudo para a direita.", isCorrect: false },
      { content: "Entroncamento divergente para a direita.", isCorrect: false },
    ],
  },
  {
    content: "A capacidade de o condutor prever e antecipar aumenta: (img: https://i.ibb.co/PrkJBdy/image-18-new.png)",
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
    content: "Exceto o disposto em regulamentos locais e em caso de manifesta necessidade: (img: https://i.ibb.co/9hV5bLR/image-19-new.png)",
    image: "https://i.ibb.co/9hV5bLR/image-19-new.png",
    explanation: "Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direção.",
    options: [
      { content: "Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direção.", isCorrect: true },
      { content: "Pode utilizar-se o lado direito da faixa de rodagem para estacionar.", isCorrect: false },
      { content: "Pode utilizar-se o lado direito da faixa de rodagem para a manobra de marcha atrás.", isCorrect: false },
      { content: "Pode utilizar-se o lado direito da faixa de rodagem para conduzir a grande velocidade.", isCorrect: false },
    ],
  },
  {
    content: "O que indica o sinal? (img: https://i.ibb.co/d289vSz/image-20-new.png)",
    image: "https://i.ibb.co/d289vSz/image-20-new.png",
    explanation: "Ponte estreita.",
    options: [
      { content: "Passagem estreita.", isCorrect: false },
      { content: "Ponte estreita.", isCorrect: true },
      { content: "Entroncamentos sucessivos.", isCorrect: false },
    ],
  },
  {
    content: "Qual é a função do cinto de segurança de um veículo? (img: https://i.ibb.co/GQXqMJc/image-21-new.png)",
    image: "https://i.ibb.co/GQXqMJc/image-21-new.png",
    explanation: "Reter e proteger os ocupantes numa colisão.",
    options: [
      { content: "Manter os ocupantes sentados na posição correta.", isCorrect: false },
      { content: "Permitir que os ocupantes se desloquem sobre o assento em caso de acidente.", isCorrect: false },
      { content: "Reter e proteger os ocupantes numa colisão.", isCorrect: true },
      { content: "Apenas impedir as lesões do condutor em caso de capotagem.", isCorrect: false },
    ],
  },
  {
    content: "Em épocas de nevoeiro (cacimba), deve manter: (img: https://i.ibb.co/ZmJ3BX2/image-22-new.png)",
    image: "https://i.ibb.co/ZmJ3BX2/image-22-new.png",
    explanation: "As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado a ventilar contra o pára-brisas.",
    options: [
      { content: "Os vidros e os filtros de óleo sempre limpos.", isCorrect: false },
      { content: "O interior do veículo bem aquecido.", isCorrect: false },
      { content: "As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado desligados para não prejudicar o pára-brisas.", isCorrect: false },
      { content: "As escovas limpa-vidros funcionais, água no depósito do limpa pára-brisas e o aquecimento ou o ar condicionado a ventilar contra o pára-brisas.", isCorrect: true },
    ],
  },
  {
    content: "Que efeitos tem a fadiga na condução? (img: https://i.ibb.co/ZGxWRC9/image-23-new.png)",
    image: "https://i.ibb.co/ZGxWRC9/image-23-new.png",
    explanation: "Reduz a capacidade de concentração e a segurança.",
    options: [
      { content: "Reduz o tempo de reação do condutor.", isCorrect: false },
      { content: "Reduz a capacidade de concentração e a segurança.", isCorrect: true },
      { content: "Diminui a sensibilidade ao encandeamento.", isCorrect: false },
      { content: "Melhora a atenção do condutor.", isCorrect: false },
    ],
  },
];


const drivingTestQuestions: Question[] = [...drivingTestQuestions1, ...drivingTestQuestions2, ...drivingTestQuestions3, ...drivingTestQuestions4, ...drivingTestQuestions5, ...drivingTestQuestions6]


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

  console.log('Seed data created successfully');
} catch (error) {
  console.log('Error creating seed data:', error);
}
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });