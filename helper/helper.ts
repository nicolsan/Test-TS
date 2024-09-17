// helper.ts
import { faker } from '@faker-js/faker';

function randomPhoneNumber(): string {
    const remainingDigits = faker.string.numeric(8);
    return `08${remainingDigits}`;
}

export function randomData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const phoneNumber = randomPhoneNumber();

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
  };
}