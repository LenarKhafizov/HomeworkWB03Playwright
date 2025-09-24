import { test, expect } from '@playwright/test';
const { email, password, errorPassword } = require("../user").default;

// test("Успешная авторизация", async ({ page }) => {  
//   await page.goto('https://netology.ru/');
//   await expect(page.getByRole('link', { name: 'Войти' }))
//     .toBeVisible({ timeout: 10000 });
//   await page.getByRole('link', { name: 'Войти' }).click();
//   await expect(page.getByText('Войти по почте'))
//     .toBeVisible({ timeout: 10000 });
//   await page.getByText('Войти по почте').click();
//   await expect(page.getByRole('textbox', { name: 'Email' }))
//     .toBeVisible({ timeout: 10000 });
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill(email);
//   await expect(page.getByRole('textbox', { name: 'Пароль' }))
//     .toBeVisible({ timeout: 10000 });
//   await page.getByRole('textbox', { name: 'Пароль' }).click();
//   await page.getByRole('textbox', { name: 'Пароль' }).fill(password);
//   const submitBtn = page.getByTestId('login-submit-btn');
//   await expect(submitBtn).toBeVisible({ timeout: 10000 });
//   await submitBtn.click();
//   await expect(page.getByRole("heading", { name: "Моё обучение" }))
//     .toBeVisible({ timeout: 10000 });
// });

test("Успешная авторизация", async ({ page }) => {  
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByText("Войти по почте").click();
  await page.locator('input[placeholder="Email"]').click();
  await page.locator('input[placeholder="Email"]').fill(email);
  await page.locator('input[placeholder="Пароль"]').click();
  await page.locator('input[placeholder="Пароль"]').fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByRole("heading", { name: "Моё обучение" })).toBeVisible(
    { timeout: 10000 }
  );
});

test("Неуспешная авторизация", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByText("Войти по почте").click();
  await page.locator('input[placeholder="Email"]').click();
  await page.locator('input[placeholder="Email"]').fill(email);
  await page.locator('input[placeholder="Пароль"]').click();
  await page.locator('input[placeholder="Пароль"]').fill(errorPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByTestId("login-error-hint")).toBeVisible();
});