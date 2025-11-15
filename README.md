# 🏔️ MineSiteOptimizer

Website institucional para cooperativa de mineração com suporte a múltiplos idiomas (PT, EN, ES) e práticas sustentáveis.

## 🌟 Características

- ✅ **Multi-idioma:** Português, Inglês e Espanhol
- ✅ **Responsivo:** Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Moderno:** React 18, TypeScript, TailwindCSS
- ✅ **Full-stack:** Backend Express.js + Frontend React
- ✅ **Banco de dados:** PostgreSQL com Drizzle ORM
- ✅ **Formulários:** Contato e Newsletter com validação
- ✅ **SEO otimizado:** Meta tags e estrutura semântica

## 📸 Páginas

1. **Home** - Hero carousel, estatísticas, depoimentos
2. **Sobre Nós** - Missão, visão, valores, equipe
3. **Produtos** - 6 produtos minerais com especificações
4. **Investidores** - Métricas financeiras, relatórios
5. **Sustentabilidade** - Iniciativas ambientais, galeria
6. **Notícias** - Artigos com categorias
7. **Contato** - Formulário de contato

## 🚀 Deploy Rápido

Quer colocar o site no ar GRATUITAMENTE? Siga o guia:

**[📖 GUIA DE DEPLOY COMPLETO](./DEPLOY.md)**

Resumo rápido:
1. Fazer upload do código para o GitHub
2. Conectar com o Render.com
3. Deploy automático (5-10 minutos)
4. Site online e acessível globalmente!

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Clonar o repositório (ou usar a pasta atual)
cd MineSiteOptimizer

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente (opcional para dev)
cp .env.example .env

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm start        # Inicia servidor de produção
npm run check    # Verifica tipos TypeScript
```

## 🗂️ Estrutura do Projeto

```
MineSiteOptimizer/
├── client/                  # Frontend React
│   ├── src/
│   │   ├── pages/          # Páginas (Home, About, etc.)
│   │   ├── components/     # Componentes React
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilitários
│   └── index.html
├── server/                  # Backend Express
│   ├── index.ts            # Servidor principal
│   ├── routes.ts           # Rotas da API
│   └── storage.ts          # Storage em memória
├── shared/                  # Código compartilhado
│   └── schema.ts           # Schemas Zod e tipos
├── attached_assets/         # Imagens e assets
├── render.yaml             # Configuração do Render
└── DEPLOY.md               # Guia de deploy
```

## 🌐 Tecnologias

### Frontend
- **React 18.3** - Framework UI
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Wouter** - Routing
- **Radix UI** - Componentes acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - State management

### Backend
- **Express.js** - Web framework
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database
- **Zod** - Schema validation

### Build Tools
- **Vite** - Frontend bundler
- **ESBuild** - Backend bundler

## 📝 API Endpoints

```
POST /api/contact          # Enviar formulário de contato
GET  /api/contact          # Listar contatos (admin)

POST /api/newsletter       # Inscrever na newsletter
GET  /api/newsletter       # Listar inscritos (admin)
```

## 🌍 Idiomas Suportados

- 🇺🇸 **Inglês (EN)** - Padrão
- 🇧🇷 **Português (PT)** - Português Brasileiro
- 🇪🇸 **Espanhol (ES)**

Troca de idioma disponível no header em todas as páginas.

## 🎨 UI Components

O projeto usa **50+ componentes** do shadcn/ui baseados em Radix UI:
- Formulários, botões, cards
- Dialogs, dropdowns, tooltips
- Carousels, tabs, accordions
- E muito mais...

## 🔒 Segurança

- ✅ Validação de dados com Zod
- ✅ Sanitização de inputs
- ✅ HTTPS automático (em produção)
- ✅ Proteção contra XSS e SQL Injection

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 🆘 Suporte

Precisa de ajuda?
- Leia o [GUIA DE DEPLOY](./DEPLOY.md)
- Verifique a [documentação do Render](https://render.com/docs)

## ✨ Status do Projeto

✅ **Pronto para produção!**

- [x] Todas as páginas implementadas
- [x] 3 idiomas funcionando
- [x] Formulários validados
- [x] Design responsivo
- [x] Backend funcional
- [x] Pronto para deploy

---

**Desenvolvido com ❤️ usando React + Express**
