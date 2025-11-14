# MineSiteOptimizer - Guia de Configuração

## Pré-requisitos

- Node.js v18 ou superior
- PostgreSQL (local ou remoto)

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:

Edite o arquivo `.env` na raiz do projeto com suas configurações:

```env
# Database Configuration
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco

# Server Configuration
NODE_ENV=development
PORT=3000
```

## Executar o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Executar em Produção

```bash
npm start
```

## Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm start` - Executa o projeto em modo produção
- `npm run check` - Verifica erros de TypeScript
- `npm run db:push` - Atualiza o schema do banco de dados

## Estrutura do Projeto

```
MineSiteOptimizer/
├── client/          # Código frontend (React + Vite)
│   ├── src/         # Código fonte do frontend
│   └── index.html   # HTML principal
├── server/          # Código backend (Express)
├── shared/          # Código compartilhado entre frontend e backend
├── attached_assets/ # Assets anexados
└── .env            # Variáveis de ambiente
```

## Tecnologias Utilizadas

### Frontend
- React 18
- Vite
- TailwindCSS
- Radix UI
- Wouter (roteamento)
- TanStack Query

### Backend
- Express.js
- TypeScript
- Drizzle ORM
- PostgreSQL
- Passport.js (autenticação)

## Notas

- O projeto está configurado para rodar em Node.js v18.18.2
- Certifique-se de que o PostgreSQL esteja rodando antes de iniciar o projeto
- Para desenvolvimento, o Vite HMR está habilitado para reload automático
