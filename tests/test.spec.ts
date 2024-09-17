import { test, expect } from '@playwright/test';
import { randomData } from '../helper/helper';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.cermati.com/gabung');
});

test.describe('Test Register - Postive Case', () => {
  test('TC-001: Should Create Account With Valid Input', async ({page}) => {
    const testData = randomData();
    // Fill Form data
    await page.getByPlaceholder('Masukkan No. Handphone').fill(testData.phoneNumber);
    await page.getByPlaceholder('Masukkan Email').fill(testData.email);
    await page.getByPlaceholder('Masukkan Nama Depan').fill(testData.firstName);
    await page.getByPlaceholder('Masukkan Nama Belakang').fill(testData.lastName);
    await page.getByRole('button', { name: 'Daftar' }).click();
  })

  test('TC-002: Should Redirect to Syarat dan Ketentuan Page', async ({page}) => {
    await page.getByText('Syarat dan Ketentuan').click();
    await expect(page.getByRole('heading', { name: 'Syarat dan Ketentuan' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Selamat datang di www.cermati' }).nth(2)).toBeVisible();
  })

  test('TC-003: Should Redirect to Kebijakan Privasi Page', async ({page}) => {
    await page.getByText('Kebijakan Privasi').click();
    await expect(page.getByRole('heading', { name: 'Kebijakan Privasi' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'PT Agregasi Cermat Indonesia ("Cermati" atau "kami") menyusun Kebijakan Privasi' }).nth(2)).toBeVisible();
  })
})
