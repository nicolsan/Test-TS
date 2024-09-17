import { test } from '@playwright/test';
import { randomData } from '../helper/helper';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.cermati.com/gabung');
});

test.describe('Test Register', () => {
  test('TC-001: Should Create Account With Valid Input', async ({page}) => {
    const testData = randomData();
    // Fill Form data
    await page.getByPlaceholder('Masukkan No. Handphone').fill(testData.phoneNumber);
    await page.getByPlaceholder('Masukkan Email').fill(testData.email);
    await page.getByPlaceholder('Masukkan Nama Depan').fill(testData.firstName);
    await page.getByPlaceholder('Masukkan Nama Belakang').fill(testData.lastName);
    await page.getByRole('button', { name: 'Daftar' }).click();
  })
})
