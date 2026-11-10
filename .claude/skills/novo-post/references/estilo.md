# Guia de estilo — blog do Victor

Destilado dos posts publicados em `public/content/markdown/`. Em caso de dúvida, os posts publicados vencem este guia.

## Voz

- Primeira pessoa, PT-BR, conversacional e direto. Técnico quando preciso, humano sempre.
- Humor leve e pontual: autoironia (`:v`), pergunta retórica (`opinião polêmica?`), interjeição solta. Não forçar piada em toda linha.
- Honesto com o processo: admite erro e dor real ("Não vou mentir que foi só glória", "Não vou mentir que foi só glória... o erro vira dado, não derrota"). Nunca tom de propaganda ou hype.
- Tecnologia serve a pessoas: sempre há um fio de propósito por trás da escolha técnica, e ele aparece no texto.
- Trata o leitor como par: explica sem condescendência, assume que ele sabe se virar com detalhes técnicos.

## Estrutura canônica (nesta ordem)

1. **Abertura sem cabeçalho** — 1 parágrafo que referencia o contexto ou os posts anteriores, entrega o tema do post e fecha com convite de jornada:
   > Aperte os cintos para mais uma viagem pelo ciberespaço!

   Variações aceitas: gancho cultural (livro, filme, referência dev) no lugar do convite, desde que mantenha o tom de "vamos viajar juntos".
2. **Seções `###`** com títulos curtos e narrativos — contam a história da seção, não descrevem tecnicamente ("Conhecendo o ralph", "Cara e coração", "Problemas e soluções técnicas"). Sem seções de 1 linha; sem paredões de texto — parágrafos de 2 a 4 frases.
3. **Fecho reflexivo** — a lição de propósito/aprendizado, conectando com o leitor ("lembre-se disso!"). É a assinatura do blog: sem ela, o post fica raso.
4. **Links** — introdução "No mais, fiquem com os links:" seguida de lista markdown com os repositórios/estudos citados.
5. **Despedida** — "Obrigado e até mais o/" (com o emoticon `o/`).
6. **PS (opcional)** — depois de um divisor `--------`, observação curta e gancho para posts futuros ("Quem sabe não rende uma sequência hein??"). PS2 é permitido se render.

## Tipografia e markdown

| Elemento | Convenção | Exemplo |
|---|---|---|
| *Itálico* | termos estrangeiros e de tecnologia em geral | *frontend*, *pull request*, *workflow*, *blog* |
| **Negrito** | ênfase e conceito-chave da narrativa | **agentes aceleram, humanos decidem** |
| `Código inline` | arquivos, comandos, identificadores | `prd.json`, `npm start` |
| Links | markdown normal, direto no texto | [Light SDD Workflow](https://...) |

Frases curtas. Parágrafo de uma frase só para efeito dramático ("Pronto, *blog* feito!") ou continuação de raciocínio ("..."). Reticências com espaço ("..."), interrogação dupla permitida ("hein??").

## Imagens (quando houver)

Padrão de bloqueio: divisor, imagem com alt descritivo, legenda em itálico na linha seguinte:

```
----

![Descrição do que aparece na imagem](/portfolio/content/image/nome-do-arquivo.jpg)

*Descrição do que aparece na imagem*
```

Caminho de imagem sempre com raiz `/portfolio/content/image/`. Só referencie imagens que existam em `public/content/image/` — se não existirem, escreva o texto sem imagens e avise o usuário quais faltam.

## Registro na listagem

- `src/content/blog.js`: novo post sempre no **topo** do array `blog` (ordem: mais recente primeiro).
- Data em DD/MM/AAAA. Tags: 2 a 4, substantivos próprios do tema ("Inteligência Artificial", "Devlog", "Metodologia").
- Slug espelha o título em kebab-case sem acentos — o scaffold faz isso sozinho.

## Frases de referência (tom, não verbatim)

- Abertura: "Aperte os cintos para mais uma viagem pelo ciberespaço!"
- Meio honesto: "Não vou mentir que foi só glória."
- Insight com imagem: "Pouca liberdade para quem ainda está aprendendo a dirigir não é amarração, é faixa de segurança."
- Fecho: "No fim, agente de IA é como qualquer outro sistema: perde o propósito se não tiver ninguém dos dois lados da conversa, lembre-se disso!"
- Despedida: "Obrigado e até mais o/"
