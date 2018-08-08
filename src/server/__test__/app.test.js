const request = require('supertest');
const app = require('../app');

describe('express routes', () => {
  it('GET /api/items and responds 200', () => request(app).get('/api/items').expect(200));

  it('POST /api/items', () => {
    const item = {
      id: 'Hyq2-P3GQ',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    return request(app)
      .post('/api/items')
      .send(item)
      .expect(200);
  });

  it('PUT /api/items/:id', () => {
    const item = {
      id: '-64JwFNsW',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    return request(app)
      .put('/api/items/-64JwFNsW')
      .send(item)
      .expect(200);
  });

  it('DELETE /api/items/:id', () => {
    const item = {
      id: '-64JwFNsW',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    return request(app)
      .delete('/api/items/-64JwFNsW')
      .send(item)
      .expect(200);
  });
});
