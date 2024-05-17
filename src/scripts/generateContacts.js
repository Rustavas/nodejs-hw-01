import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'

const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const newContacts = [];
    if (number === ''  || number < 1 || !Number.isInteger(number)) return console.log("Please enter an integer greater than zero.");
    for (let i = 1; i <= number; i++) {
      newContacts.push(createFakeContact())
    }
    const allContacts = [...contacts, ...newContacts];
    await fs.writeFile(PATH_DB,  JSON.stringify(allContacts))
  } catch (err) {
    console.log(err)
  }
}
await generateContacts();
