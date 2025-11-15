# 🔄 Como Evitar Hibernação do Site (100% Gratuito)

O plano gratuito do Render hiberna o site após 15 minutos de inatividade. Aqui estão as soluções gratuitas para manter seu site sempre ativo.

---

## ✅ **SOLUÇÃO RECOMENDADA: UptimeRobot**

O **UptimeRobot** é um serviço gratuito que faz "ping" no seu site a cada 5 minutos, mantendo-o sempre ativo.

### **Passo a Passo:**

#### 1. Criar Conta (Gratuita)

1. Acesse: https://uptimerobot.com
2. Clique em **Free Sign Up**
3. Preencha:
   - Email
   - Senha
4. Confirme o email
5. Faça login

#### 2. Adicionar Monitor

1. No dashboard, clique em **+ Add New Monitor**

2. Preencha os dados:
   ```
   Monitor Type: HTTP(s)
   Friendly Name: MineSiteOptimizer
   URL (or IP): https://minesiteoptimizer.onrender.com
   Monitoring Interval: Every 5 minutes
   ```

3. **Alert Contacts (opcional):**
   - Adicione seu email para receber alertas se o site cair

4. Clique em **Create Monitor**

#### 3. Pronto!

✅ Seu site **NUNCA** vai hibernar
✅ Você recebe alertas se o site ficar offline
✅ 100% gratuito, para sempre

### **Recursos Gratuitos do UptimeRobot:**

- ✅ Até 50 monitores
- ✅ Ping a cada 5 minutos
- ✅ Alertas por email, SMS, Slack, etc.
- ✅ Uptime monitoring dashboard
- ✅ Status pages públicas
- ✅ Sem limite de tempo

---

## 🔄 **ALTERNATIVA 1: GitHub Actions (Gratuito)**

Use GitHub Actions para fazer ping automático no seu site.

### **Configuração:**

1. Crie a pasta `.github/workflows/` no seu projeto:

```bash
mkdir -p .github/workflows
```

2. Crie o arquivo `.github/workflows/keep-alive.yml`:

```yaml
name: Keep Site Alive

on:
  schedule:
    # Executa a cada 5 minutos
    - cron: '*/5 * * * *'
  workflow_dispatch: # Permite execução manual

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping website
        run: |
          echo "Pinging website to keep it alive..."
          curl -f https://minesiteoptimizer.onrender.com || echo "Failed to ping"
          echo "Done!"
```

3. Commit e push:

```bash
git add .github/workflows/keep-alive.yml
git commit -m "Add keep-alive workflow"
git push
```

4. Ative no GitHub:
   - Vá em **Actions** no seu repositório
   - Ative os workflows se necessário

✅ Seu site será "pingado" a cada 5 minutos pelo GitHub
✅ 100% gratuito (GitHub Actions tem 2.000 minutos/mês grátis)

---

## 🌐 **ALTERNATIVA 2: Cron-job.org**

Serviço gratuito de cron jobs online.

### **Configuração:**

1. Acesse: https://cron-job.org
2. Crie conta gratuita
3. Clique em **Create cronjob**
4. Configure:
   ```
   Title: MineSiteOptimizer Keep Alive
   URL: https://minesiteoptimizer.onrender.com
   Schedule: */5 * * * * (a cada 5 minutos)
   ```
5. Salve

✅ Ping automático a cada 5 minutos
✅ Gratuito até 50 cron jobs

---

## 🚀 **ALTERNATIVA 3: Usar Plataforma Sem Hibernação**

Se preferir uma plataforma que **não hiberna por padrão**, considere:

### **Railway.app**

- **Plano Gratuito:** $5 de crédito/mês
- **Hibernação:** Não (mas crédito acaba rápido)
- **Deploy:** Similar ao Render
- **Limitação:** Crédito pode não ser suficiente para o mês todo

### **Fly.io**

- **Plano Gratuito:** 3 VMs compartilhadas (256MB RAM cada)
- **Hibernação:** Não
- **Deploy:** Via CLI (`flyctl`)
- **Limitação:** Configuração mais complexa

### **Cyclic.sh**

- **Plano Gratuito:** Ilimitado
- **Hibernação:** Não (cold starts, mas rápidos)
- **Deploy:** Via GitHub
- **Limitação:** Menos recursos que Render

---

## 📊 **COMPARAÇÃO DE SOLUÇÕES**

| Solução | Custo | Hibernação? | Facilidade | Recomendação |
|---------|-------|-------------|------------|--------------|
| **Render + UptimeRobot** | R$ 0 | Não (com ping) | ⭐⭐⭐⭐⭐ | ✅ **MELHOR** |
| **Render + GitHub Actions** | R$ 0 | Não (com ping) | ⭐⭐⭐⭐ | ✅ Excelente |
| **Render + Cron-job.org** | R$ 0 | Não (com ping) | ⭐⭐⭐⭐ | ✅ Boa |
| **Railway** | R$ 0* | Não | ⭐⭐⭐ | ⚠️ Crédito limitado |
| **Fly.io** | R$ 0 | Não | ⭐⭐ | ⚠️ Mais complexo |
| **Cyclic** | R$ 0 | Não | ⭐⭐⭐⭐ | ✅ Boa alternativa |

---

## 🎯 **SOLUÇÃO RECOMENDADA**

**Use: Render + UptimeRobot**

**Por quê?**
- ✅ 100% gratuito
- ✅ 2 minutos para configurar
- ✅ Sem hibernação
- ✅ Monitoramento incluído
- ✅ Alertas se o site cair
- ✅ Não precisa mudar nada no código
- ✅ Não precisa trocar de plataforma

---

## 📝 **INSTRUÇÕES RÁPIDAS**

### **Para manter seu site no Render sempre ativo:**

1. **Faça o deploy no Render** (conforme DEPLOY.md)

2. **Crie conta gratuita no UptimeRobot:**
   - https://uptimerobot.com

3. **Adicione monitor:**
   - Monitor Type: HTTP(s)
   - URL: https://minesiteoptimizer.onrender.com
   - Interval: Every 5 minutes

4. **Pronto!** Seu site nunca mais vai hibernar

**Tempo total:** 2 minutos
**Custo:** R$ 0,00

---

## 🆘 **FAQ**

### **Por que o Render hiberna?**
Para economizar recursos no plano gratuito. É uma política comum em planos free.

### **O UptimeRobot é realmente gratuito?**
Sim! Até 50 monitores, sem limite de tempo, sem cartão de crédito.

### **Isso afeta o tempo de resposta do site?**
Não! Com o ping a cada 5 minutos, seu site estará sempre "quente" e responderá instantaneamente.

### **Posso usar múltiplos serviços ao mesmo tempo?**
Sim! Você pode usar UptimeRobot + GitHub Actions juntos para redundância.

### **Existe algum risco?**
Nenhum! O UptimeRobot só faz requisições GET simples, como um visitante normal.

---

## ✅ **CHECKLIST**

- [ ] Site deployado no Render
- [ ] Conta criada no UptimeRobot
- [ ] Monitor configurado
- [ ] Testado: site responde rápido mesmo após 15+ minutos

---

**Criado por:** Claude Code
**Data:** 2025-11-15

**Dica:** Configure alertas no UptimeRobot para ser notificado se o site ficar offline!
