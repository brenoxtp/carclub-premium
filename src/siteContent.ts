export const BRAND = {
 name:'Car Club Centro Automotivo',
 phone:'(35) 99954-1742',
 whatsappDigits:'5535999541742',
 address:'Rua José Carlos Andrade, 205 — Alcides Mesquita'
};
export const LINKS = {
 instagram:'https://www.instagram.com/oficinacarclub/',
 googleReviews:'https://www.google.com/maps/search/?api=1&query=Car+Club+Centro+Automotivo+Tr%C3%AAs+Pontas+MG',
 directions:'https://www.google.com/maps/dir/?api=1&destination=Rua+Jos%C3%A9+Carlos+Andrade+205+Tr%C3%AAs+Pontas+MG',
 mapEmbed:'https://www.google.com/maps?q=Rua+Jos%C3%A9+Carlos+Andrade+205+Tr%C3%AAs+Pontas+MG&output=embed'
};
export type Service = {id:string;title:string;description:string;detail:string;image?:string};
export const SERVICES:Service[] = [
 {id:'funilaria',title:'Funilaria e reparos de colisão',description:'Avaliação e reparos para recuperar a carroceria com atenção à precisão e ao acabamento.',detail:'Realizamos avaliação de necessidades de funilaria, desde pequenos danos até reparos relacionados a colisões.'},
 {id:'pintura',title:'Pintura automotiva',description:'Cuidado em cada etapa para valorizar a aparência e o acabamento do seu veículo.',detail:'Serviços de pintura automotiva, incluindo renovação de cor e acabamentos conforme avaliação do veículo.'},
 {id:'estetica',title:'Polimento e estética automotiva',description:'Detalhes que fazem diferença na apresentação e na conservação visual do carro.',detail:'Serviços de polimento e cuidados com a estética, orientados à necessidade específica de cada veículo.'},
 {id:'seguradoras',title:'Reparos envolvendo seguradoras',description:'Orientação e atendimento para demandas de reparos relacionados a seguradoras.',detail:'Converse com nossa equipe para verificar as possibilidades de atendimento relacionadas à sua seguradora.'}
];
export const FAQ = [
 {question:'Como solicitar um orçamento?',answer:'Entre em contato pelo WhatsApp ou preencha o formulário nesta página. Nossa equipe conversa com você sobre o serviço e orienta os próximos passos.'},
 {question:'A Car Club atende veículos de seguradora?',answer:'Sim, atendemos demandas de reparos envolvendo seguradoras. Consulte a equipe para verificar o atendimento disponível para o seu caso.'},
 {question:'Quais serviços de pintura e funilaria vocês realizam?',answer:'Trabalhamos com pintura automotiva, funilaria e reparos de colisão. O serviço indicado depende da avaliação das condições do veículo.'},
 {question:'Como funciona a avaliação de um veículo após uma colisão?',answer:'Nossa equipe analisa a necessidade apresentada e orienta sobre as possibilidades de reparo e orçamento antes do início dos serviços.'},
 {question:'Como posso acompanhar meu atendimento?',answer:'Você pode entrar em contato com a equipe pelo WhatsApp para solicitar informações sobre seu atendimento.'}
];
