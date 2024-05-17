import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'

export const addOneContact = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const newContact = createFakeContact();
    const allContacts = [...contacts, newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts))
  } catch (err) {
    console.log(err)
  }
};

await addOneContact();







