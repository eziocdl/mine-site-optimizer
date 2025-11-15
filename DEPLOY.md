# 🚀 Guia de Deploy - MineSiteOptimizer

Este guia vai te ajudar a fazer o deploy GRATUITO do MineSiteOptimizer usando o Render.com.

## 📋 Pré-requisitos

1. Conta no [GitHub](https://github.com) (gratuita)
2. Conta no [Render](https://render.com) (gratuita)
3. Código do projeto no GitHub

---

## 🔧 Passo 1: Preparar o Repositório no GitHub

### 1.1 Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `minesiteoptimizer` (ou o nome que preferir)
3. Deixe como **Public** (necessário para o plano gratuito do Render)
4. **NÃO** marque "Initialize with README" (já temos um projeto)
5. Clique em **Create repository**

### 1.2 Fazer Upload do Código

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - MineSiteOptimizer ready for deployment"

# Conectar com o repositório do GitHub (substitua SEU_USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU_USUARIO/minesiteoptimizer.git

# Enviar o código para o GitHub
git branch -M main
git push -u origin main
```

✅ **Verificação:** Acesse seu repositório no GitHub e confirme que todos os arquivos estão lá.

---

## 🌐 Passo 2: Deploy no Render

### 2.1 Criar Conta no Render

1. Acesse [render.com](https://render.com)
2. Clique em **Get Started**
3. Faça login com sua conta do GitHub
4. Autorize o Render a acessar seus repositórios

### 2.2 Configurar o Deploy

1. No dashboard do Render, clique em **New +** → **Blueprint**

2. Conecte seu repositório:
   - Clique em **Connect a repository**
   - Selecione `minesiteoptimizer` (ou o nome que você escolheu)
   - Clique em **Connect**

3. O Render vai detectar automaticamente o arquivo `render.yaml` e criar:
   - ✅ Web Service (aplicação Node.js)
   - ✅ PostgreSQL Database (banco de dados gratuito)

4. Clique em **Apply** para confirmar

### 2.3 Aguardar o Deploy

- O Render vai:
  1. Instalar as dependências (`npm install`)
  2. Fazer o build do projeto (`npm run build`)
  3. Criar o banco de dados PostgreSQL
  4. Iniciar a aplicação (`npm start`)

- ⏱️ **Tempo estimado:** 5-10 minutos

### 2.4 Verificar o Deploy

Quando o deploy estiver completo:

1. Você verá o status **Live** (verde) no dashboard
2. Clique no link da aplicação (algo como `https://minesiteoptimizer.onrender.com`)
3. O site estará acessível! 🎉

---

## 🔍 Verificações Importantes

### ✅ Checklist Pós-Deploy

- [ ] O site carrega corretamente
- [ ] As 3 línguas (EN, PT, ES) funcionam
- [ ] A navegação entre páginas funciona
- [ ] As imagens carregam
- [ ] O formulário de contato funciona
- [ ] A newsletter funciona
- [ ] O carrossel da home page funciona
- [ ] O site é responsivo (teste no celular)

### 🧪 Testando a URL

Depois do deploy, seu site estará disponível em:

```
https://minesiteoptimizer.onrender.com
```

Você pode acessar de:
- ✅ Qualquer navegador
- ✅ Qualquer dispositivo (celular, tablet, desktop)
- ✅ Qualquer lugar do mundo

---

## 📊 Plano Gratuito do Render

### Recursos Inclusos (100% Grátis)

- ✅ **Web Service:** 750 horas/mês (suficiente para uso contínuo)
- ✅ **PostgreSQL:** 256 MB de armazenamento
- ✅ **SSL/HTTPS:** Certificado gratuito automático
- ✅ **Deploy automático:** Cada push no GitHub atualiza o site
- ✅ **Custom domain:** Pode usar seu próprio domínio (opcional)

### ⚠️ Limitações do Plano Gratuito

- **Hibernação:** O serviço hiberna após 15 minutos de inatividade
  - Primeiro acesso após hibernação pode demorar 30-60 segundos
  - Visitas subsequentes são instantâneas
- **Banda:** 100 GB/mês (suficiente para MVPs)
- **Build time:** 500 minutos/mês

---

## 🔄 Atualizações Futuras

Para atualizar o site depois do deploy:

```bash
# Fazer alterações no código...

# Adicionar as mudanças
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push
```

O Render vai **automaticamente**:
1. Detectar o push no GitHub
2. Fazer novo build
3. Fazer deploy da nova versão
4. Trocar para a nova versão sem downtime

---

## 🆘 Troubleshooting

### Problema: Build falhou

**Solução:**
1. Verifique os logs no dashboard do Render
2. Certifique-se de que `package.json` está correto
3. Teste localmente: `npm run build`

### Problema: Site não carrega

**Solução:**
1. Verifique se o deploy está **Live** (verde)
2. Aguarde 1-2 minutos após o primeiro deploy
3. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

### Problema: Formulários não funcionam

**Solução:**
1. Verifique se o banco de dados foi criado
2. Verifique os logs do servidor no Render
3. Certifique-se de que a variável `DATABASE_URL` está configurada

### Problema: Imagens não carregam

**Solução:**
1. Certifique-se de que a pasta `attached_assets` está no repositório
2. Verifique se os paths das imagens estão corretos
3. Limpe o cache do navegador

---

## 💡 Alternativas de Deploy Gratuito

Se quiser explorar outras opções:

### 1. **Railway** (railway.app)
- ✅ Fácil de usar
- ⚠️ $5 de crédito gratuito/mês (pode não ser suficiente)

### 2. **Fly.io** (fly.io)
- ✅ Bom free tier
- ⚠️ Mais complexo de configurar

### 3. **Vercel** (vercel.com)
- ✅ Excelente para frontend
- ❌ Backend precisa ser serverless (requer modificações no código)

### 4. **Replit** (replit.com)
- ✅ Já está configurado
- ⚠️ Versão gratuita tem muitas limitações

**Recomendação:** Render é a melhor opção para este projeto por não requerer modificações no código.

---

## 📞 Compartilhando o Site

Depois do deploy, você pode compartilhar a URL com qualquer pessoa:

```
https://minesiteoptimizer.onrender.com
```

- ✅ Funciona em qualquer dispositivo
- ✅ Não precisa instalar nada
- ✅ HTTPS seguro (cadeado verde)
- ✅ Acessível globalmente

---

## 🎯 Próximos Passos (Opcional)

### Custom Domain

Se quiser usar um domínio personalizado (ex: `www.meusite.com`):

1. Compre um domínio (GoDaddy, Namecheap, etc.)
2. No Render, vá em Settings → Custom Domain
3. Adicione seu domínio
4. Configure os DNS conforme instruções do Render

### Monitoramento

Para monitorar o site:
- Use o dashboard do Render para ver logs e métricas
- Configure alertas de uptime (UptimeRobot, etc.)

### Melhorias de Performance

Para melhorar a performance:
- Considere upgrade para plano pago (sem hibernação)
- Use CDN para assets estáticos
- Otimize imagens

---

## ✨ Pronto!

Agora seu site está online e acessível para o mundo todo! 🌍

Se tiver dúvidas ou problemas, consulte:
- [Documentação do Render](https://render.com/docs)
- [Render Community](https://community.render.com)

---

**Criado por:** Claude Code
**Data:** 2025-11-15
