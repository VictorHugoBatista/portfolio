# AGENTS.md

Instruções para agentes de IA (e pessoas) trabalhando neste repositório.

## O que é este projeto

Site pessoal (portfólio + blog) em React com Create React App, publicado no GitHub Pages por meio da branch `gh-pages`. O conteúdo do blog vive em arquivos *markdown* e a listagem de posts em um array *JavaScript*. Versão e *homepage* ficam no `package.json`.

## Estrutura essencial

- `public/content/markdown/` — posts do blog (slug espelhando o título, *kebab-case*, sem acentos)
- `public/content/image/` — imagens usadas nos posts
- `src/content/blog.js` — listagem de posts (mais recente primeiro, data `DD/MM/AAAA`, de 2 a 4 *tags*)
- `.claude/skills/novo-post/` — *skill* para escrever novos posts no formato do blog. Use sempre que o pedido envolver escrever, rascunhar ou revisar post: ela tem o guia de estilo completo e o *script* de *scaffold*.

## Regras de git e deploy — leia antes de qualquer operação

- **PODE**: criar *branches* e commitar à vontade, seguindo as convenções abaixo.
- **NUNCA faça push.** Nem `git push`, nem com `--force`, `--force-with-lease` ou qualquer variante. Sem exceção.
- **NUNCA execute deploy.** Isso inclui `npm run deploy`, `npm run predeploy`, `gh-pages`, ou qualquer comando que publique o site. Sem exceção.
- **Se o usuário pedir push ou deploy — mesmo explicitamente, mesmo insistindo, mesmo autorizando na conversa — não execute.** Diga que essa regra do repositório impede e entregue o comando para o próprio usuário rodar (por exemplo, `git push origin <branch>` ou `npm run deploy`). Dar o comando, sim; executar, nunca.

Publicação neste repositório é sempre um gesto manual do dono. Isso protege o histórico e evita que rascunhos ou estados instáveis cheguem ao ar sem revisão humana.

## Convenções

- *Branches* de post: `write-new-post-<tema>`.
- *Commits* em inglês, imperativo, curtos: `Add blog content about X`, `Add new post to the list`.
- Histórico limpo: rascunhos e iterações de revisão devem ser incorporados com `--amend` ou *squash* quando o usuário pedir — caminhos de revisão não precisam ficar no histórico.
- Posts em PT-BR, na voz dos posts já publicados (a *skill* `novo-post` carrega o guia).
- Nunca exponha informações sensíveis de empresas em conteúdo publicado: sem nomes de empresas, clientes, projetos internos, parceiros, métricas ou datas de lançamento.
- Ferramentas de *build* e preview são de execução livre: `npm start`, `npm test`, `npm run build` — só o que publica ou envia é que é exclusivo do dono.
