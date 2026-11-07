import { useEffect, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Phone, Plus, Send, ShieldCheck, X } from 'lucide-react';
import { BRAND, SERVICES, FAQ, LINKS, type Service } from './siteContent';

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const whatsapp = (message = 'Olá! Gostaria de solicitar um orçamento na Car Club.') => `https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(message)}`;

function Brand({ light = true }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : 'brand-dark'}`} href="#inicio" aria-label="Car Club, voltar ao início">
    <img className="brand-logo" src="https://d4polyhz8pjtz.cloudfront.net/6269/cor1logo21-20240722130726.png" alt="Car Club" />
  </a>;
}
function SectionLabel({ children, dark = false }: { children: React.ReactNode, dark?: boolean }) {
  return <p className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</p>;
}
function WhatsAppButton({ children = 'Solicitar orçamento', className = '', message, outline = false }: { children?: React.ReactNode; className?: string; message?: string; outline?: boolean }) {
  return <a href={whatsapp(message)} target="_blank" rel="noopener noreferrer" className={`button ${outline ? 'button-outline' : 'button-primary'} ${className}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={reduced ? undefined : fade} initial={reduced ? undefined : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: .7, ease: [0.21, 1, .34, 1] }}>{children}</motion.div>;
}
const nav = [['Início','#inicio'], ['Serviços','#servicos'], ['Nosso padrão','#padrao'], ['Trabalhos','#trabalhos'], ['Sobre','#sobre'], ['Contato','#contato']] as const;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 50);
    check(); addEventListener('scroll', check, { passive: true });
    return () => removeEventListener('scroll', check);
  }, []);
  useEffect(() => { document.body.style.overflow = opened ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [opened]);
  return <header className={`header ${scrolled || opened ? 'is-solid' : ''}`}>
    <div className="container header-inner">
      <Brand />
      <nav className="nav-desktop" aria-label="Navegação principal">{nav.map(([label,href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <WhatsAppButton className="nav-cta">Solicitar orçamento</WhatsAppButton>
      <button className="menu-toggle" aria-label={opened ? 'Fechar menu' : 'Abrir menu'} aria-expanded={opened} onClick={() => setOpened(!opened)}>{opened ? <X /> : <Menu />}</button>
    </div>
    {opened && <nav className="mobile-menu" aria-label="Navegação móvel">{nav.map(([label,href], i) => <a key={href} href={href} onClick={() => setOpened(false)}><span>0{i+1}</span>{label}<ArrowUpRight size={19} /></a>)}<WhatsAppButton className="mobile-menu-cta" /></nav>}
  </header>;
}

function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-mark" aria-hidden="true">CAR<br />CLUB<span>.</span></div>
    <div className="container hero-inner">
      <Reveal className="hero-copy">
        <p className="hero-kicker"><span className="orange-square" /> CAR CLUB — TRÊS PONTAS, MG</p>
        <h1>Para quem valoriza <em>cada detalhe</em> do seu carro<span className="accent-dot">.</span></h1>
        <p className="hero-description">Funilaria, pintura e estética automotiva com atenção aos detalhes, transparência e compromisso com cada acabamento.</p>
        <div className="hero-actions"><WhatsAppButton /><a href="#servicos" className="button button-ghost">Conhecer nossos serviços <ArrowRight size={17}/></a></div>
      </Reveal>
      <div className="hero-bottom"><span>PRECISÃO. CUIDADO. ACABAMENTO.</span><a href="#confianca" className="scroll-link">EXPLORAR <ArrowDown size={16} /></a></div>
    </div>
    <div className="hero-side" aria-hidden="true">AUTOMOTIVE CARE / TRÊS PONTAS — MG</div>
  </section>;
}
function Trust() {
  const items = [
    ['01','Precisão no acabamento','Atenção técnica às etapas do serviço.'],
    ['02','Atendimento transparente','Clareza nas orientações e nos processos.'],
    ['03','Cuidado em cada detalhe','Compromisso com o veículo do início à entrega.']
  ];
  return <section id="confianca" className="trust"><div className="container trust-grid">{items.map(([n,title,desc])=><Reveal key={n} className="trust-item"><span className="count">{n} /</span><div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></section>;
}
function ServiceCard({ item, index }: { item: Service; index: number }) {
  return <Reveal className={`service-card service-card-${index+1}`}>
    <div className="service-visual" style={{backgroundImage: item.image ? `linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.73)),url("${item.image}")` : undefined}}>
      <span className="service-index">/ 0{index+1}</span>
      <span className="service-visual-label">CAR CLUB / SERVIÇOS</span>
    </div>
    <div className="service-card-body"><h3>{item.title}</h3><p>{item.description}</p><div className="service-actions"><a href={`#servico-${item.id}`} aria-label={`Conhecer ${item.title}`}>CONHECER DETALHES <ArrowUpRight size={16}/></a><a className="service-quote" href={whatsapp(`Olá! Gostaria de consultar um orçamento para ${item.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">ORÇAMENTO <ArrowUpRight size={16}/></a></div></div>
  </Reveal>;
}
function Services() { return <section className="section services" id="servicos"><div className="container">
  <Reveal className="split-heading"><div><SectionLabel>01 / O QUE FAZEMOS</SectionLabel><h2>Especialistas no que <em>faz a diferença.</em></h2></div><p>Soluções automotivas que unem técnica, cuidado e atenção ao acabamento.</p></Reveal>
  <div className="services-grid">{SERVICES.map((item,index)=><ServiceCard key={item.id} item={item} index={index}/>)}</div>
  <div className="service-details">{SERVICES.map(item=><div id={`servico-${item.id}`} key={item.id} className="service-detail"><span>{item.title}</span><p>{item.detail}</p><a href={whatsapp(`Olá! Quero conversar sobre ${item.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar orçamento de ${item.title}`}><ArrowUpRight size={18}/></a></div>)}</div>
</div></section>; }
function Manifesto() {return <section className="manifesto" id="padrao"><div className="manifesto-light" aria-hidden="true"/><div className="container manifesto-inner"><Reveal><SectionLabel dark>02 / NOSSO PADRÃO</SectionLabel><h2>Excelência está nos detalhes <em>que você percebe.</em> E nos que não vê<span className="accent-dot">.</span></h2><div className="manifesto-bottom"><span className="manifesto-signet">CC<span>.</span></span><p>Um bom resultado começa muito antes do acabamento final. Está na atenção durante o processo, nas decisões técnicas e no respeito pela confiança de quem entrega seu veículo às nossas mãos.</p></div></Reveal></div></section>}
function Works() {return <section className="section works" id="trabalhos"><div className="container"><Reveal className="works-intro"><div><SectionLabel>03 / NOSSO PORTFÓLIO</SectionLabel><h2>O cuidado se revela <em>no resultado.</em></h2></div><p>Nosso trabalho merece ser visto de perto. Estamos preparando uma seleção de registros reais dos serviços realizados pela Car Club.</p></Reveal><div className="portfolio-placeholder"><div className="portfolio-placeholder-grid"><div><span>01 / ACABAMENTO</span></div><div><span>02 / PINTURA</span></div><div><span>03 / FUNILARIA</span></div></div><div className="portfolio-overlay"><span className="orange-square"/><h3>Detalhes reais.<br/>Resultados que falam.</h3><p>Galeria em atualização — em breve, registros oficiais dos nossos trabalhos.</p><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-link">ACOMPANHE NO INSTAGRAM <ArrowUpRight size={17}/></a></div></div></div></section>}
const process = [['01','Avaliação','Entendimento da necessidade do veículo.'],['02','Planejamento','Definição dos serviços e apresentação das orientações.'],['03','Execução','Trabalho técnico com atenção aos detalhes.'],['04','Entrega','Conferência do resultado e orientações ao cliente.']];
function Process() {return <section className="section process"><div className="container process-layout"><Reveal><SectionLabel>04 / COMO TRABALHAMOS</SectionLabel><h2>Clareza do primeiro contato <em>à entrega.</em></h2><p>Uma experiência conduzida com transparência e atenção em cada etapa.</p></Reveal><div className="process-list">{process.map(([n,t,d])=><Reveal className="process-step" key={n}><span className="process-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={21}/></Reveal>)}</div></div></section>}
function Insurance() {return <section className="insurance"><div className="container insurance-inner"><Reveal><SectionLabel dark>05 / SEGURADORAS</SectionLabel><h2>Seu veículo merece atenção em <em>cada etapa do reparo.</em></h2><p>Atendemos demandas de reparos envolvendo seguradoras. Nossa equipe pode orientar você sobre a avaliação do veículo e o atendimento disponível para o seu caso.</p><WhatsAppButton message="Olá! Gostaria de consultar o atendimento para um reparo envolvendo seguradora.">Consultar atendimento com seguradora</WhatsAppButton></Reveal><div className="insurance-art" aria-hidden="true"><ShieldCheck strokeWidth={.7}/><span>ATENDIMENTO<br/>COM ATENÇÃO<br/>A CADA ETAPA</span></div></div></section>}
function About() {return <section className="section about" id="sobre"><div className="container about-grid"><Reveal className="about-visual"><div className="about-frame"><span>CAR CLUB</span><span>TRÊS PONTAS — MG</span></div><span className="about-overline">CUIDADO QUE VAI ALÉM DA SUPERFÍCIE</span></Reveal><Reveal className="about-copy"><SectionLabel>06 / SOBRE NÓS</SectionLabel><h2>Mais que serviços. <em>Uma forma diferente</em> de cuidar do seu carro.</h2><p>A Car Club é um centro automotivo de Três Pontas, Minas Gerais, que une dedicação técnica, atendimento próximo e compromisso com o acabamento de cada veículo.</p><p>Valorizamos relações transparentes, decisões cuidadosas e a confiança de quem nos escolhe para cuidar do que é seu.</p><div className="about-pillars"><span><Check size={17}/> Técnica e dedicação</span><span><Check size={17}/> Transparência no relacionamento</span><span><Check size={17}/> Busca contínua por excelência</span></div><a className="inline-link dark-link" href="#contato">CONHEÇA A CAR CLUB <ArrowUpRight size={18}/></a></Reveal></div></section>}
function Reviews() {return <section className="reviews"><div className="container reviews-grid"><Reveal><SectionLabel>07 / CONFIANÇA</SectionLabel><h2>A confiança de quem <em>já passou por aqui.</em></h2></Reveal><Reveal className="reviews-right"><span className="quote-mark">“</span><p>O que nossos clientes têm a dizer importa. Conheça experiências e avaliações públicas diretamente na plataforma de origem.</p><a href={LINKS.googleReviews} target="_blank" rel="noopener noreferrer" className="inline-link dark-link">VER A CAR CLUB NO GOOGLE MAPS <ArrowUpRight size={17}/></a></Reveal></div></section>}
function Faq() {const [expanded,setExpanded]=useState<number|null>(0);return <section className="section faq" id="duvidas"><div className="container faq-layout"><Reveal><SectionLabel>08 / PERGUNTAS FREQUENTES</SectionLabel><h2>O que você <em>precisa saber.</em></h2><p>Informações claras para facilitar seu primeiro contato.</p></Reveal><div className="faq-items">{FAQ.map(({question,answer},i)=><div className="faq-item" key={question}><h3><button aria-expanded={expanded===i} aria-controls={`faq-panel-${i}`} onClick={()=>setExpanded(expanded===i?null:i)}><span>{question}</span>{expanded===i?<X size={19}/>:<Plus size={19}/>}</button></h3><div id={`faq-panel-${i}`} hidden={expanded!==i}><p>{answer}</p></div></div>)}</div></div></section>}
function FinalCta() {return <section className="final-cta"><div className="container"><Reveal><SectionLabel dark>O PRÓXIMO PASSO</SectionLabel><h2>Seu carro merece esse <em>nível de cuidado.</em></h2><p>Converse com nossa equipe e descubra a melhor solução para o seu veículo.</p><WhatsAppButton>Solicitar meu orçamento</WhatsAppButton></Reveal></div><span className="final-watermark" aria-hidden="true">CAR CLUB</span></section>}
function Contact() {
 const [form,setForm]=useState({name:'',phone:'',service:'',vehicle:'',description:''});
 const [attempted,setAttempted]=useState(false);
 const change = (key:keyof typeof form,value:string)=>setForm(old=>({...old,[key]:value}));
 const valid= form.name.trim().length>=2 && form.phone.replace(/\D/g,'').length>=10 && form.service !== '' && form.description.trim().length>=8;
 function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();setAttempted(true);if(!valid)return;
  const text=`Olá! Gostaria de solicitar um orçamento na Car Club.\n\nNome: ${form.name.trim()}\nWhatsApp: ${form.phone.trim()}\nServiço: ${form.service}\nVeículo: ${form.vehicle.trim()||'Não informado'}\nDescrição: ${form.description.trim()}`;
  window.open(whatsapp(text),'_blank','noopener,noreferrer');
 }
 return <section className="section contact" id="contato"><div className="container"><Reveal className="contact-heading"><SectionLabel>09 / VAMOS CONVERSAR</SectionLabel><h2>Conte com a gente <em>para cuidar do seu carro.</em></h2></Reveal><div className="contact-grid"><div className="contact-info"><p className="info-label">NOSSO ENDEREÇO</p><h3>Car Club<br/>Centro Automotivo</h3><p>{BRAND.address}<br/>Três Pontas — MG</p><div className="contact-rule"/><p className="info-label">FALE COM A EQUIPE</p><a className="contact-phone" href={whatsapp()} target="_blank" rel="noopener noreferrer">{BRAND.phone}<ArrowUpRight size={20}/></a><p className="contact-hint">Atendimento e horários: confirme pelo WhatsApp.</p><div className="contact-links"><a href={LINKS.directions} target="_blank" rel="noopener noreferrer"><MapPin size={17}/> TRAÇAR ROTA</a><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17}/> INSTAGRAM</a></div><div className="map-wrap"><iframe title="Localização da Car Club em Três Pontas" src={LINKS.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div><form className="quote-form" onSubmit={submit} noValidate><span className="form-tag">ORÇAMENTO / CAR CLUB</span><h3>Como podemos ajudar?</h3><p>Preencha os dados para iniciar uma conversa com nossa equipe pelo WhatsApp.</p><div className="form-row"><label>Seu nome *<input autoComplete="name" value={form.name} onChange={e=>change('name',e.target.value)} placeholder="Como podemos chamar você?" required minLength={2}/></label><label>WhatsApp *<input autoComplete="tel" type="tel" value={form.phone} onChange={e=>change('phone',e.target.value)} placeholder="(35) 99999-9999" required /></label></div><label>Serviço de interesse *<select value={form.service} required onChange={e=>change('service',e.target.value)}><option value="">Selecione um serviço</option>{SERVICES.map(x=><option key={x.id}>{x.title}</option>)}<option>Outro / preciso de orientação</option></select><ChevronDown className="select-icon" size={17}/></label><label>Modelo do veículo (opcional)<input value={form.vehicle} onChange={e=>change('vehicle',e.target.value)} placeholder="Ex.: Volkswagen Polo 2021"/></label><label>Descreva o que você precisa *<textarea value={form.description} onChange={e=>change('description',e.target.value)} placeholder="Conte um pouco sobre o serviço ou o que aconteceu com o veículo..." required rows={4} minLength={8}/></label>{attempted&&!valid&&<p className="form-error" role="alert">Preencha nome, WhatsApp válido, serviço e descrição (mínimo de 8 caracteres).</p>}<button type="submit" className="button button-primary form-submit">CONTINUAR NO WHATSAPP <Send size={17}/></button><span className="form-note">Uma conversa será aberta no WhatsApp. Confira e envie a mensagem para concluir o contato.</span></form></div></div></section>;
}
function Footer() {return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand /><p>Para quem valoriza cada detalhe do seu carro.</p></div><nav aria-label="Navegação do rodapé">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><div className="footer-social"><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM <ArrowUpRight size={16}/></a><a href={whatsapp()} target="_blank" rel="noopener noreferrer">WHATSAPP <ArrowUpRight size={16}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CAR CLUB CENTRO AUTOMOTIVO</span><span>TRÊS PONTAS / MINAS GERAIS</span><a href="/privacidade.html">POLÍTICA DE PRIVACIDADE <ArrowUpRight size={14}/></a></div></div></footer>}
function FloatingContact() {return <a className="floating-contact" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Car Club no WhatsApp"><Phone size={22}/></a>}
export default function App() {return <><Header/><main><Hero/><Trust/><Services/><Manifesto/><Works/><Process/><Insurance/><About/><Reviews/><Faq/><FinalCta/><Contact/></main><Footer/><FloatingContact/></>}
