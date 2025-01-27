import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'e2e/features/*.feature',
  steps: 'e2e/features/steps/*.ts'
});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //testDir: './',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 20 : 20,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
      attachmentsBaseURL: 'http://127.0.0.1:8080/data',
    }),
    ['html', { open: 'never' }],
  ],

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://automationintesting.online/',
    /* add custom HTTP headers for API Testing is required */
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //'Accept': 'application/json',
      //'Accept-Encoding': 'gzip, deflate, br',
      //'Content-type': 'application/json; charset=UTF-8',
      // 'Content-type': 'text/plain',
      // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
      // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      // "Accept-Language": "en-US,en;q=0.5",
      // "Accept-Encoding": "gzip, deflate",
      // "Connection": "keep-alive",
      // "Upgrade-Insecure-Requests": "1",
      // "Sec-Fetch-Dest": "document",
      // "Sec-Fetch-Mode": "navigate",
      // "Sec-Fetch-Site": "none",
      // "Sec-Fetch-User": "?1",
      // "Cache-Control": "max-age=0",
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    timezoneId: 'Europe/London',
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
