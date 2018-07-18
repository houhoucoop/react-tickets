import shortid from 'shortid';

export const heads = [
  {
    id: '1',
    name: 'ID',
    class: 'w-12',
  }, {
    id: '2',
    name: 'Subject',
    class: 'w-25',
  }, {
    id: '3',
    name: 'Category',
    class: 'w-12',
  }, {
    id: '4',
    name: 'Assignee',
    class: 'w-10',
  }, {
    id: '5',
    name: 'Priority',
    class: 'w-10',
  }, {
    id: '6',
    name: 'Status',
    class: 'w-12',
  }, {
    id: '7',
    name: 'Action',
    class: 'w-19',
  },
];

export const items = [
  {
    id: shortid.generate(),
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  }, {
    id: shortid.generate(),
    subject: 'Billed twice',
    category: 'Billing',
    assignee: 'Jessica',
    priority: 'High',
    status: 'Pending',
    update: false,
  }, {
    id: shortid.generate(),
    subject: 'Verify email address',
    category: 'Service',
    assignee: 'George',
    priority: 'Normal',
    status: 'Open',
    update: false,
  }, {
    id: shortid.generate(),
    subject: 'Security alert for account',
    category: 'Service',
    assignee: 'Jose',
    priority: 'Low',
    status: 'Open',
    update: false,
  }, {
    id: shortid.generate(),
    subject: 'PHP 5.3 is not working',
    category: 'Dev',
    assignee: 'Luke',
    priority: 'High',
    status: 'Processing',
    update: false,
  },
];
