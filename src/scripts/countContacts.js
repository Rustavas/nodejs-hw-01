import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return contacts.length;
  } catch (err) {
    console.log(err)
  }
};

console.log(await countContacts());
