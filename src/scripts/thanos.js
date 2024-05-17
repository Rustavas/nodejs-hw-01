import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    if (!contacts.length) return console.log("You don't have any contacts.");
    const selectedContacts = contacts.filter(() => Math.random() >= 0.5)
    await fs.writeFile(PATH_DB,  JSON.stringify(selectedContacts))
  } catch (err) {
    console.log(err)
  }
};

await thanos();
