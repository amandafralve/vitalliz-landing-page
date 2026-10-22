# Vitalliz — Landing Page

🔗 [Acesse o deploy](https://vitalliz-group.vercel.app/)

Landing page da equipe Vitalliz, apresentando o projeto, sua equipe e o processo de desenvolvimento.

## Tecnologias

- **React 19** para a construção da interface.
- **TypeScript** para tipagem estática.
- **Vite** para desenvolvimento local e geração da versão de produção.
- **CSS Modules e CSS** para os estilos.
- **i18next e react-i18next** para conteúdo em português e inglês.
- **Motion e Lenis** para animações e rolagem.
- **Lucide React, React Icons e CoreUI** para ícones e componentes visuais.
- **EmailJS** para integração de envio de e-mails.

## Como rodar localmente

Você precisa ter o **Node.js** e o **npm** instalados.

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd vitalliz-landing-page
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

## Outros comandos

- `npm run build` — verifica os tipos e gera a versão de produção em `dist/`.
- `npm run preview` — disponibiliza localmente a versão gerada para conferência.
- `npm run lint` — executa o ESLint.
