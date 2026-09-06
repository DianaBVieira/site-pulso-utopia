# Pulso Utopia — Página de vendas

Landing estática (um único `index.html`, sem build) do app **Pulso Utopia** da
[Utopia Desenvolvimentos](https://www.utopiadesenvolvimentos.com.br).

App para organizar medicamentos, lembretes, agenda, tarefas, documentos e rotina
de cuidados — para a pessoa e para familiares/cuidadores. Teste grátis por 14 dias.

## Ver localmente

```bash
npx serve .
```

## Estrutura

- `index.html` — página inteira (CSS embutido, ícones SVG inline, FAQ via `<details>`)
- `assets/` — imagens otimizadas (~3,7 MB → ~200 KB) + `favicon.svg`
- `vercel.json` / `.nojekyll` — deploy estático

## SEO

- `<title>`, meta description e keywords (lembrete de remédio, cuidadores, rotina de idosos…)
- Open Graph + Twitter Card
- JSON-LD `SoftwareApplication` com `Offer` (R$ 14,99/mês)

## Deploy

100% estático — Vercel, Cloudflare Pages, GitHub Pages, Netlify ou Firebase Hosting,
sem passo de build. Domínio pretendido: `pulso.utopiadesenvolvimentos.com.br`
(ajustar `canonical`/OG ao definir). O CTA aponta para o app em
`pulso-utopia-desenvolvimento.web.app`.

## Histórico

Versão anterior em `vinext` (React/RSC em Cloudflare Worker) substituída por HTML
estático. O código antigo está no histórico do Git.
