// @ts-check
const { test, expect } = require('@playwright/test');

test.setTimeout(60000); // 60 segundos para todos os testes

test('login with phone number and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com número de telefone
  await page.fill('input[name="loginKey"]', '(+55) 81 98564 2119'); // Substitua com um número de telefone válido

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se o usuário foi redirecionado para a página inicial ou uma página esperada após o login
  await expect(page).toHaveURL('https://shopee.com.br/verify/ivs?is_initial=true'); // Substitua pelo URL correto após o login
});

test('login with username and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com nome de usuário
  await page.fill('input[name="loginKey"]', 'LuzeNet48'); // Substitua com um nome de usuário válido

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se o usuário foi redirecionado para a página inicial ou uma página esperada após o login
  await expect(page).toHaveURL('https://shopee.com.br/?is_from_login=true'); // Substitua pelo URL correto após o login
});

test('login with email and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com email
  await page.fill('input[name="loginKey"]', 'luzineteelvira2921@gmail.com'); // Substitua com um email válido

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se o usuário foi redirecionado para a página inicial ou uma página esperada após o login
  await expect(page).toHaveURL('https://shopee.com.br/?is_from_login=true'); // Substitua pelo URL correto após o login
});

test('login with incorrect phone number and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com um número de telefone incorreto
  await page.fill('input[name="loginKey"]', '(+55) 81 99188 8947'); // Substitua com um número de telefone incorreto

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

   // Clicar no botão de login
   await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('login with incorrect username and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com um nome de usuário incorreto
  await page.fill('input[name="loginKey"]', 'Isabelalve'); // Substitua com um nome de usuário incorreto

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('login with incorrect email and correct password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com um email incorreto
  await page.fill('input[name="loginKey"]', 'luzenete2921@gmail.com'); // Substitua com um email incorreto

  // Preencher o campo de senha
  await page.fill('input[name="password"]', 'Luzinete48@'); // Substitua com uma senha válida

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('login with correct phone number and incorrect password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com número de telefone correto
  await page.fill('input[name="loginKey"]', '(+55) 81 98564 2119'); // Substitua com um número de telefone válido

  // Preencher o campo de senha com uma senha incorreta
  await page.fill('input[name="password"]', 'Luzinete19@'); // Substitua com uma senha incorreta

  // Clicar no botão de login
  await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('login with correct username and incorrect password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com nome de usuário correto
  await page.fill('input[name="loginKey"]', 'LuzeNet48'); // Substitua com um nome de usuário válido

  // Preencher o campo de senha com uma senha incorreta
  await page.fill('input[name="password"]', 'Luzinete19@'); // Substitua com uma senha incorreta

 // Clicar no botão de login
await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('login with correct email and incorrect password', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Preencher o campo de login com email correto
  await page.fill('input[name="loginKey"]', 'luzineteelvira2921@gmail.com'); // Substitua com um email válido

  // Preencher o campo de senha com uma senha incorreta
  await page.fill('input[name="password"]', 'Luzinete19@'); // Substitua com uma senha incorreta

  // Clicar no botão de login
await page.click('button.vvOL40:has-text("Entre")');

  // Verificar se uma mensagem de erro é exibida
  await expect(page.locator('div.OtUKFV')).toBeVisible();
});

test('password recovery with email', async ({ page }) => {
  await page.goto('https://shopee.com.br/buyer/login');

  // Clicar no link "Esqueci minha senha"
  await page.click('text="Esqueci minha senha"');

  // Preencher o campo de recuperação de senha com email
  await page.fill('input[name="phoneOrEmail"]', 'luzineteelvira2921@gmail.com'); // Substitua com um email válido

  // Clicar no botão "Próximo"
  await page.click('button.vw0L40:has-text("Próximo")');

  // Verificar se o botão "OK" está visível após a recuperação de senha
  await expect(page.locator('button.vvOL40:has-text("OK")')).toBeVisible();
});
