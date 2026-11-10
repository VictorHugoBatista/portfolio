#!/usr/bin/env node
// Cria o arquivo markdown de um novo post e registra a entrada na listagem do blog.
// Uso: node scaffold.mjs "Título do post" "Tag 1,Tag 2" [DD/MM/AAAA]

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
const [title, tagsArg, dateArg] = process.argv.slice(2);

if (!title || !tagsArg) {
  console.error('Uso: node scaffold.mjs "Título do post" "Tag 1,Tag 2" [DD/MM/AAAA]');
  console.error('A data é opcional (padrão: hoje). O slug é gerado a partir do título.');
  process.exit(1);
}

const escapeSingleQuotes = (text) => text.replace(/'/g, "\\'");

const slug = title
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

if (!slug) {
  console.error(`Não consegui gerar um slug a partir do título "${title}".`);
  process.exit(1);
}

const today = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${now.getFullYear()}`;
};

const date = dateArg ?? today();
if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
  console.error(`Data inválida: "${date}". Use o formato DD/MM/AAAA.`);
  process.exit(1);
}

const tags = tagsArg
  .split(',')
  .map(tag => tag.trim())
  .filter(Boolean);

const mdPath = join(root, 'public', 'content', 'markdown', `${slug}.md`);
if (existsSync(mdPath)) {
  console.error(`Já existe um post com o slug "${slug}": ${mdPath}`);
  process.exit(1);
}

const skeleton = `Abertura do post em um parágrafo sem cabeçalho: referencie o contexto ou os posts anteriores, entregue o tema e feche com o convite de jornada.

### Primeira seção

### O que sobrou (ou o fecho reflexivo)

No mais, fiquem com os links:

 - [Link](https://...)

Obrigado e até mais o/

--------

PS: observação final opcional.
`;

writeFileSync(mdPath, skeleton, 'utf8');

const blogPath = join(root, 'src', 'content', 'blog.js');
const source = readFileSync(blogPath, 'utf8');
const marker = 'export const blog = [\n';
if (!source.includes(marker)) {
  console.error(`Não encontrei o array "blog" em ${blogPath}.`);
  process.exit(1);
}

const tagsBlock = tags.length > 0
  ? `    tags: [\n${tags.map(tag => `      '${escapeSingleQuotes(tag)}',`).join('\n')}\n    ],\n`
  : '    tags: [],\n';

const entry = `  {
    link: '${escapeSingleQuotes(slug)}',
    title: '${escapeSingleQuotes(title)}',
    date: '${date}',
${tagsBlock}  },
`;

writeFileSync(blogPath, source.replace(marker, marker + entry), 'utf8');

console.log(`Post criado: public/content/markdown/${slug}.md`);
console.log(`Entrada adicionada ao topo de src/content/blog.js`);
console.log(`Slug: ${slug} | Data: ${date} | Tags: ${tags.join(', ')}`);
