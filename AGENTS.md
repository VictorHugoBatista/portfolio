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
- **NUNCA commite direto na `main`.** Toda mudança — código, conteúdo ou documentação — nasce em uma *branch* própria e segue o fluxo de *merge* feito pelo dono. A `main` local só avança por *merge*; mudança direta nela não existe.
- **NUNCA faça push.** Nem `git push`, nem com `--force`, `--force-with-lease` ou qualquer variante. Sem exceção.
- **NUNCA execute deploy.** Isso inclui `npm run deploy`, `npm run predeploy`, `gh-pages`, ou qualquer comando que publique o site. Sem exceção.
- **NUNCA reescreva o histórico.** Sem `git commit --amend`, sem `git rebase`, sem *squash* — nem em *commit* local, nem em *branch* publicada, nem em PR aberto. Correção depois de um *commit* entra como *commit* novo, com mensagem própria dizendo o que corrigiu. O histórico é registro: o que ficou gravado, fica.
- **Se o usuário pedir push ou deploy — mesmo explicitamente, mesmo insistindo, mesmo autorizando na conversa — não execute.** Diga que essa regra do repositório impede e entregue o comando para o próprio usuário rodar (por exemplo, `git push origin <branch>` ou `npm run deploy`). Dar o comando, sim; executar, nunca.

Publicação neste repositório é sempre um gesto manual do dono. Isso protege o histórico e evita que rascunhos ou estados instáveis cheguem ao ar sem revisão humana.

## Convenções

- *Branches*: `write-new-post-<tema>` para posts; para outras mudanças, nome curto e descritivo em *kebab-case* (ex.: `add-agent-workflow`).
- *Branches* nascem sem *upstream* emprestado: ao criar a partir de `origin/main`, use `--no-track` (ou rode `git branch --unset-upstream` depois) — o *upstream* da *branch* local deve ser a *branch* de mesmo nome no remoto. Primeiro envio: `git push -u origin <nome>`; a partir daí, `git push` simples vale.
- *Commits* em inglês, imperativo, curtos: `Add blog content about X`, `Add new post to the list`.
- Histórico como registro: revisões e iterações viram *commits* novos, cada passo visível — o histórico não é reescrito.
- Posts em PT-BR, na voz dos posts já publicados (a *skill* `novo-post` carrega o guia).
- Nunca exponha informações sensíveis de empresas em conteúdo publicado: sem nomes de empresas, clientes, projetos internos, parceiros, métricas ou datas de lançamento.
- Ferramentas de *build* e preview são de execução livre: `npm start`, `npm test`, `npm run build` — só o que publica ou envia é que é exclusivo do dono.
