# Playwright Tests

## Sobre

Todos os testes desta aplicação são executados com o [Playwright](https://playwright.dev).

## Estrutura da Pasta

```
tests/
├── [arquivos_teste.spec.ts]      # Testes E2E das páginas
├── unit/                         # Testes de componentes
└── e2e/                          # Testes de integração
```

## Scripts Disponíveis

- `npm run test:playwright` - Executa todos os testes do Playwright
- `npx playwright test` - Executa testes direto pelo Playwright
- `npx playwright show-report` - Abre o relatório HTML dos testes

## Configuração

O `playwright.config.ts` é configurado para:
- Rodar no Chromium (pode adicionar Firefox e WebKit nas configurações)
- Server o app em http://localhost:5173 durante os testes
- Suportar execução em CI/CD ambiente

## Exemplo de Teste

```typescript
import { test, expect } from '@playwright/test';

test('landing page deve carregar sem erros', async ({ page }) => {
  await page.goto('/');

  const heroTitle = page.locator('.hero__title');
  await expect(heroTitle).toBeVisible();

  await expect(page.locator('h1')).toHaveText(/Anti-Byte/);
});
```

## Executando Testes Específicos

Para rodar um teste específico:

```bash
npx playwright test tests/resources.spec.ts
```

Para rodar apenas no Chromium:

```bash
npx playwright test --project=chromium
