# Car Club | Premium Automotive Experience

Homepage institucional para a Car Club Centro Automotivo em Três Pontas/MG, desenvolvida com React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar os arquivos de produção:

```bash
npm run build
npm run preview
```

## Conteúdo editável

- `src/siteContent.ts`: telefone, endereço, rotas, links, serviços e FAQ.
- `src/App.tsx`: componentes de todas as seções da homepage.
- `src/styles.css`: paleta, layout, tipografia, motion e responsividade.
- `privacidade.html`: informações básicas de privacidade.

## Atenção antes de publicar

1. Substituir a assinatura tipográfica provisória pela **arte do logotipo oficial** quando o arquivo de marca autorizado estiver disponível.
2. Inserir **fotografias reais e autorizadas** no hero, cards de serviço, manifesto, sobre e portfólio. Os blocos visuais atuais são composições editoriais propositalmente abstratas e **não são registros de serviços realizados**.
3. Confirmar bairro do endereço: briefing recebido informa **Alcides Mesquita**, enquanto o site anterior descreve **Francisco V Campos** para a mesma rua e número. Atualmente o texto segue o briefing.
4. Confirmar horário de funcionamento e quaisquer detalhes adicionais junto à empresa.
5. Conferir a política de privacidade com o responsável antes de publicação.
6. O botão do formulário abre o WhatsApp com uma mensagem pronta. O visitante precisa confirmar o envio no WhatsApp; o website não salva os dados.

## Estrutura

14 seções principais conforme o briefing. Links de orçamento abrem o WhatsApp. A galeria foi criada como **estado editorial de conteúdo pendente**, sem inventar fotos de clientes ou avaliações.

## Publicação

Pode ser publicado em serviços de hospedagem estática com `npm run build` e saída `dist` (por exemplo, Vercel/Netlify).
