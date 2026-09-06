import {
  ArrowRight,
  BellRing,
  CalendarDays,
  Check,
  FileText,
  HeartPulse,
  Pill,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const appUrl = "https://pulso-utopia-desenvolvimento.web.app/";

const features = [
  { icon: Pill, title: "Medicamentos e lembretes", text: "Organize horários e receba lembretes claros para acompanhar a rotina com mais tranquilidade." },
  { icon: CalendarDays, title: "Agenda e tarefas", text: "Reúna compromissos, tarefas importantes e sincronização com o Google Agenda." },
  { icon: FileText, title: "Documentos importantes", text: "Guarde documentos e informações essenciais em um espaço organizado e protegido." },
  { icon: HeartPulse, title: "Bem-estar e hidratação", text: "Registre informações da rotina e acompanhe hábitos que merecem atenção." },
  { icon: Sparkles, title: "Assistente inteligente", text: "Conte com apoio para consultar sua rotina e encontrar informações importantes com rapidez." },
  { icon: Users, title: "Cuidado compartilhado", text: "Organize pessoas acompanhadas e mantenha cada rotina separada dentro da família." },
];

const faq = [
  ["Para quem é o Pulso Utopia?", "Para pessoas que desejam organizar a própria rotina e para familiares ou cuidadores que acompanham medicamentos, compromissos, documentos e tarefas."],
  ["Funciona no celular?", "Sim. O Pulso Utopia foi pensado para o uso diário no celular e também pode ser acessado pelo navegador."],
  ["Meus dados ficam protegidos?", "O acesso é individual e as informações são armazenadas em ambiente protegido. Recursos familiares respeitam as permissões de cada pessoa."],
  ["Quanto custa?", "Você pode experimentar gratuitamente por 14 dias. Depois, o plano Individual custa R$ 14,99 por mês."],
  ["O Pulso Utopia substitui orientação médica?", "Não. O aplicativo ajuda na organização da rotina e não realiza diagnósticos nem substitui profissionais de saúde."],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pulso Utopia",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android, Web",
    description: "Aplicativo para organizar medicamentos, lembretes, agenda, tarefas, documentos e rotina de cuidados.",
    offers: { "@type": "Offer", price: "14.99", priceCurrency: "BRL" },
    publisher: { "@type": "Organization", name: "Utopia Desenvolvimentos", url: "https://utopiadesenvolvimentos.com.br/" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Pulso Utopia — início">
          <img src="/pulso-logo.png" alt="Pulso Utopia" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#preco">Preço</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="nav-cta" href={appUrl}>Experimentar grátis</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow one" /><div className="hero-glow two" />
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Sua vida no seu ritmo</span>
            <h1>Organize o cuidado.<br /><em>Respire mais tranquilo.</em></h1>
            <p>Medicamentos, compromissos, tarefas e documentos em um só lugar. O Pulso Utopia ajuda você e sua família a cuidar do que importa, todos os dias.</p>
            <div className="hero-actions">
              <a className="button primary" href={appUrl}>Começar 14 dias grátis <ArrowRight size={19} /></a>
              <a className="button secondary" href="#recursos">Conhecer os recursos</a>
            </div>
            <div className="trust-row">
              <span><Check size={16} /> Sem cartão no teste</span>
              <span><Check size={16} /> Acesso pelo celular</span>
              <span><Check size={16} /> Cancele quando quiser</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="app-window">
              <div className="window-bar"><i /><i /><i /><span>pulso utopia</span></div>
              <img src="/pulso-dashboard.png" alt="Painel do Pulso Utopia com agenda, medicamentos e acompanhamento da rotina" />
            </div>
            <div className="float-card reminder"><BellRing size={20} /><span><small>Próximo lembrete</small>Medicamento às 14h</span></div>
            <div className="float-card secure"><ShieldCheck size={20} /><span><small>Seus dados</small>Protegidos</span></div>
          </div>
        </section>

        <section className="benefit-strip" aria-label="Principais benefícios">
          <span>Rotina organizada</span><i />
          <span>Lembretes claros</span><i />
          <span>Cuidado compartilhado</span><i />
          <span>Mais tranquilidade</span>
        </section>

        <section className="section features" id="recursos">
          <div className="section-intro">
            <span className="eyebrow">Tudo no mesmo pulso</span>
            <h2>Um aplicativo para cuidar da rotina por inteiro.</h2>
            <p>Recursos simples para quem cuida de si e para quem acompanha alguém de perto.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className={`feature-card feature-${index + 1}`} key={title}>
                <span className="feature-icon"><Icon size={24} /></span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps" id="como-funciona">
          <div className="steps-copy">
            <span className="eyebrow">Simples desde o começo</span>
            <h2>Comece em poucos minutos.</h2>
            <p>Sem configurações complicadas. Você entra, organiza o essencial e o Pulso Utopia ajuda a manter tudo no ritmo.</p>
            <a className="text-link" href={appUrl}>Criar minha conta <ArrowRight size={18} /></a>
          </div>
          <ol className="steps-list">
            <li><strong>01</strong><div><h3>Crie seu perfil</h3><p>Cadastre-se e escolha quem terá a rotina acompanhada.</p></div></li>
            <li><strong>02</strong><div><h3>Organize o que importa</h3><p>Adicione medicamentos, compromissos, tarefas e documentos.</p></div></li>
            <li><strong>03</strong><div><h3>Acompanhe com tranquilidade</h3><p>Receba lembretes e visualize o que precisa de atenção.</p></div></li>
          </ol>
        </section>

        <section className="section audience">
          <div className="audience-art"><img src="/pulso-icon.png" alt="Ícone do Pulso Utopia" /></div>
          <div className="audience-copy">
            <span className="eyebrow">Feito para pessoas reais</span>
            <h2>Para você, sua família ou quem está sob seus cuidados.</h2>
            <p>O Pulso Utopia acolhe diferentes rotinas sem complicar. Cada pessoa acompanhada tem seu próprio espaço, e as informações permanecem organizadas.</p>
            <ul>
              <li><Check size={17} /> Para organizar a própria rotina</li>
              <li><Check size={17} /> Para familiares e cuidadores</li>
              <li><Check size={17} /> Para acompanhar mais de uma pessoa</li>
            </ul>
          </div>
        </section>

        <section className="section pricing" id="preco">
          <div className="price-card">
            <span className="price-label">PLANO INDIVIDUAL</span>
            <h2>Cuide da rotina sem pesar no orçamento.</h2>
            <div className="price"><strong>R$ 14,99</strong><span>/mês</span></div>
            <p>Comece com 14 dias grátis. Depois, continue com todos os recursos incluídos.</p>
            <ul>
              {['Medicamentos e lembretes','Agenda e tarefas','Bem-estar e hidratação','Documentos importantes','Assistente de rotina','Relatórios e SOS'].map(item => <li key={item}><Check size={17} /> {item}</li>)}
            </ul>
            <a className="button primary full" href={appUrl}>Experimentar grátis <ArrowRight size={19} /></a>
            <small>Sem cartão de crédito durante o período de teste.</small>
          </div>
        </section>

        <section className="section faq" id="duvidas">
          <div className="section-intro"><span className="eyebrow">Perguntas frequentes</span><h2>Tire suas dúvidas.</h2></div>
          <div className="faq-list">
            {faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className="final-cta">
          <img src="/pulso-icon.png" alt="" />
          <span className="eyebrow">Seu próximo passo pode ser simples</span>
          <h2>Coloque sua rotina no ritmo.</h2>
          <p>Experimente o Pulso Utopia gratuitamente por 14 dias.</p>
          <a className="button primary" href={appUrl}>Começar agora <ArrowRight size={19} /></a>
        </section>
      </main>

      <footer>
        <img src="/pulso-logo.png" alt="Pulso Utopia" />
        <p>Um produto da <a href="https://utopiadesenvolvimentos.com.br/">Utopia Desenvolvimentos</a>.</p>
        <span>© 2026 Pulso Utopia. Todos os direitos reservados.</span>
      </footer>
    </>
  );
}
