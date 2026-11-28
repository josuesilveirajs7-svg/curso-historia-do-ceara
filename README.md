# Ceará: Terra e Gente — Curso de História do Ceará

Curso aberto de história do Ceará, dos povos originários aos dias de hoje.
5 trilhas e 168 aulas, com quiz, glossário, linha do tempo, buscador de bairros de Fortaleza e Maracanaú e progresso salvo no aparelho.

Desenvolvido por **Josué Silveira**.

## Estado atual (v9)

- 5 trilhas: 56 módulos, 168 aulas e 20 projetos
  - Trilha 1 · Terra e povos (antes de 1500 até 1799)
  - Trilha 2 · Província e Império (1799–1889)
  - Trilha 3 · República, sertão e fé (1889–1964)
  - Trilha 4 · Ceará contemporâneo (1964 até hoje)
  - Trilha 5 · Fortaleza e Maracanaú (do forte de 1649 aos 300 anos), com 24 aulas sobre a capital,
    seus bairros e a cidade vizinha
- **Buscador de bairros** (`#bairros`): os 121 bairros de Fortaleza (regional, território, população e
  IDH de 2010, nomes antigos, história e link para a ficha oficial) e 40 bairros de Maracanaú.
  Filtro por regional ou tema, busca por nome atual ou antigo, ligação com as aulas.
- Cada aula: objetivo, explicação, quiz de 5 questões com comentário, exercício e fontes
- Cada módulo: seção “Aprofundar” com vídeos, leituras grátis e livros
- Glossário com 71 termos, linha do tempo em ordem cronológica, busca (inclui bairros), tema claro/escuro e progresso salvo no aparelho
- Termos de Uso e Política de Privacidade (LGPD), dentro do app e em páginas próprias
- Botão “Apagar meu progresso” na página de Privacidade
- Alternativas dos quizzes embaralhadas de forma fixa (antes, a resposta certa caía na letra B em 69% das questões); respostas já salvas são convertidas automaticamente
- Funciona como app (PWA): instala no celular e abre sem internet

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O curso inteiro (HTML, CSS e JS num arquivo só) |
| `termos.html` | Termos de Uso em página própria |
| `privacidade.html` | Política de Privacidade em página própria (link exigido pela Play Store) |
| `manifest.webmanifest` | Nome, cores e ícones do app |
| `sw.js` | Service worker: guarda o curso para funcionar offline |
| `icons/` | Ícones do app (192, 512, maskable, Apple e favicon) |
| `.nojekyll` | Faz o GitHub Pages servir os arquivos como estão |

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo, `historia-do-ceara`), público.
2. Envie **todos** estes arquivos para a raiz do repositório, mantendo a pasta `icons/`
   (no site: *Add file › Upload files* e arraste tudo, inclusive `.nojekyll`).
3. Vá em *Settings › Pages*. Em *Source*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
4. Em um ou dois minutos o curso estará em `https://SEU-USUARIO.github.io/historia-do-ceara/`.

## Instalar como app

- **Android (Chrome):** abra o link, toque nos três pontos › *Instalar app* (ou *Adicionar à tela inicial*).
- **iPhone (Safari):** abra o link, toque em *Compartilhar* › *Adicionar à Tela de Início*.

## Gerar um app para a Play Store (opcional)

1. Com o site já no ar, acesse **pwabuilder.com** e cole o link do GitHub Pages.
2. Clique em *Package for stores › Android*. O PWABuilder gera o pacote (`.aab`) e o arquivo `assetlinks.json`.
3. Coloque o `assetlinks.json` numa pasta `.well-known/` do repositório para o app abrir sem a barra do navegador.
4. Envie o `.aab` pelo Google Play Console (exige conta de desenvolvedor).
5. No Play Console:
   - **Política de privacidade:** use `https://SEU-USUARIO.github.io/historia-do-ceara/privacidade.html`.
   - **Segurança dos dados:** responda que o app **não coleta nem compartilha dados** (o progresso fica só no aparelho).
   - **Classificação de conteúdo:** app educativo, sem compras nem anúncios; mencione que há temas históricos sensíveis (seca, escravidão, ditadura, violência) tratados de forma educativa.

## Atualizar o curso depois

1. Substitua o `index.html` (e, se mudarem, `termos.html` e `privacidade.html`) pelo novo.
2. No `sw.js`, mude a linha `const CACHE = 'terra-e-gente-v9';` para um número novo
   (por exemplo, `terra-e-gente-v10`). Isso faz os celulares baixarem a versão nova.
3. Envie os dois arquivos para o GitHub. O progresso dos alunos fica salvo no aparelho e não se perde.
