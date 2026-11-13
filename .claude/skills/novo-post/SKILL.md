---
name: novo-post
description: Escreve e publica um novo post no blog do portfólio, no formato e voz dos posts já existentes. Use SEMPRE que o usuário pedir para escrever, criar, rascunhar, revisar ou publicar um post/artigo/texto para o blog do portfólio, ou mencionar "novo post", "post do blog", "artigo para o blog" nesse contexto — mesmo que não cite o formato, o site ou arquivos específicos.
---

# Novo post do blog

Fluxo completo para criar um post no formato do blog (site React + conteúdo markdown em `public/content/markdown/`, listagem em `src/content/blog.js`).

## 1. Levantamento (antes de escrever)

- Entenda o tema e colete os fatos com o usuário e nas fontes que ele indicar (repositórios, gists, links, documentos). Nunca invente fatos, números, nomes ou datas.
- NUNCA coloque informações sensíveis de empresas no texto: sem nomes de empresas, clientes, projetos internos, parceiros, métricas, valores ou datas de lançamento. Texto publicado é público — quando a fonte tiver detalhes sensíveis, conte a história pela lição e pela metodologia, não pelo contexto.
- Se restar dúvida factual, pergunte. Nunca preencha lacunas com suposição.

## 2. Estilo

- Leia os posts existentes em `public/content/markdown/` — são a referência viva de voz e formato.
- Leia `references/estilo.md` — o guia completo de voz, estrutura, tipografia e convenções, com exemplos reais.
- Escreva o rascunho completo em PT-BR seguindo o guia e mostre ao usuário antes de registrar nos arquivos.

## 3. Registro (arquivos)

Gere o arquivo e a entrada na listagem com o scaffold:

```bash
node .claude/skills/novo-post/scripts/scaffold.mjs "Título do post" "Tag 1,Tag 2"
```

O script cria `public/content/markdown/<slug>.md` (slug gerado do título, sem acentos) e insere a entrada no topo do array em `src/content/blog.js`, com a data de hoje em DD/MM/AAAA. Depois, escreva o rascunho aprovado dentro do arquivo criado.

- Título e tags são do usuário; se não informou, pergunte antes de registrar.
- Data: use a data atual por padrão; se o usuário passar uma data específica (`node scaffold.mjs "Título" "Tags" 25/12/2026`), use-a.

## 4. Git

- Trabalhe em branch nova: `write-new-post-<tema>` (padrão do repositório).
- Commits em inglês, imperativo, no estilo do histórico: `Add blog content about X`, `Add new post to the list`.
- Push, PR e merge só com pedido explícito do usuário.
- Durante as iterações de revisão, cada rodada entra como commit novo, com mensagem própria dizendo o que mudou — nunca `--amend`, rebase ou squash: o histórico do repositório não é reescrito.

## 5. Iteração

- Revisão do usuário faz parte do fluxo, não é exceção: espere várias rodadas de ajuste de tom, fatos e estrutura.
- A cada rodada, reavalie o texto inteiro (coerência, ortografia, transições), não só o trecho pedido.
- O post está pronto quando o usuário disser — não antes.
