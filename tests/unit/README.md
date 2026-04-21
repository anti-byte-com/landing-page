# Testes Unitários

## Sobre

Os testes desta pasta são testes unitários que validam o comportamento básico da aplicação.

## Propósito

Os testes unitários têm como objetivo principal validar se a página abre corretamente e não apresenta erros no console.

## Estrutura da Pasta

```
tests/unit/
├── index.spec.ts      # Teste de validação básica da página
└── setup.ts           # Configurações para testes
```

## Executando Testes

Para rodar todos os testes:

```bash
npx playwright test tests/unit/
```

Para rodar apenas o teste de homepage:

```bash
npx playwright test tests/unit/index.spec.ts
```

## Configuração

Os testes unitários utilizam o Playwright e são executados contra o servidor de preview (`http://localhost:4173`).
