import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {
        id: 1, name: 'Karan Bromwich', phone: '01234 56734', address: '123, Some Street\nLeicester\nLE1 2AB',
        email: 'karan@example.com', website: 'stephenradford.me', notes: ''
      },
      {
        id: 2, name: 'Declan Proud', phone: '01234 567890', address: '234, Some Street\nLeicester\nLE1 2AB',
        email: 'declan@example.com', website: 'declanproud.me', notes: 'Some notes about the contact.'
      },
      {
        id: 3, name: 'Asdfg Rghytu', phone: '01234 567890', address: '234, Some Street\nLeicester\nLE1 2AB',
        email: 'declan@example.com', website: 'declanproud.me', notes: 'Some notes about the contact.'
      }
    ];
    return  {contacts};
  }
}
