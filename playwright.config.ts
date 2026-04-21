import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run preview',
    port: 4173,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  expect: {
    timeout: 5000,
  },

  // Garante que o expect está disponível no escopo do teste
  globalHook: async () => {
    // Não faz nada - apenas garante que o escopo está limpo
  },
});
