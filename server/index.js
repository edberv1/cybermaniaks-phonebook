const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let contacts = [
  {
    id: 1,
    name: 'test1',
    lastName: 'test1',
    address: 'test1',
    city: 'test1',
    country: 'test1',
    emails: ['test1@test1.com'], 
    numbers: ['1111111'], 
  },
  {
    id: 2,
    name: 'test2',
    lastName: 'test2',
    address: 'test2',
    city: 'test2',
    country: 'test2',
    emails: ['test2@test2.com'], 
    numbers: ['2222222'], 
  },
  {
    id: 3,
    name: 'test3',
    lastName: 'test3',
    address: 'test3',
    city: 'test3',
    country: 'test3',
    emails: ['test3@test3.com'], 
    numbers: ['3333333'],
  },
];

app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.post('/contacts', (req, res) => {
  const { name, lastName, address, city, country, emails, numbers } = req.body;
  const newContact = {
    id: Date.now(),
    name,
    lastName,
    address,
    city,
    country,
    emails: Array.isArray(emails) ? emails : [emails], 
    numbers: Array.isArray(numbers) ? numbers : [numbers], 
  };
  contacts.push(newContact);
  res.json(newContact);
});

// app.put('/contacts/:id', (req, res) => {
//   const { id } = req.params;
//   const index = contacts.findIndex(contact => contact.id == id);
//   if (index !== -1) {
//     contacts[index] = { ...contacts[index], ...req.body };
//     res.json(contacts[index]);
//   } else {
//     res.status(404).send('Contact not found');
//   }
// });

// app.delete('/contacts/:id', (req, res) => {
//   const { id } = req.params;
//   contacts = contacts.filter(contact => contact.id != id);
//   res.status(204).send();
// });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
