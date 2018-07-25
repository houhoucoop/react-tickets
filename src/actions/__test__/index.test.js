import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const item = {
  id: 'Hyq2-P3GQ',
  subject: 'A new rating has been received',
  category: 'Marketing',
  assignee: 'Erwin',
  priority: 'Medium',
  status: 'Open',
  update: false,
};

describe('actions', () => {
  it('should get /api/items', () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/api/items').reply(200, item);
    axios.get('/api/items').then((res) => {
      expect(res.data).toEqual(item);
    });
  });
  it('should post /api/items', () => {
    const mock = new MockAdapter(axios);
    mock.onPost('/api/items').reply(200, item);
    axios.post('/api/items').then((res) => {
      expect(res.data).toEqual(item);
    });
  });
  it('should delete /api/items/:id', () => {
    const mock = new MockAdapter(axios);
    mock.onDelete('/api/items/-64JwFNsW').reply(200, item);
    axios.delete('/api/items/-64JwFNsW').then((res) => {
      expect(res.data).toEqual(item);
    });
  });
  it('should save /api/items/:id', () => {
    const mock = new MockAdapter(axios);
    mock.onPut('/api/items/-64JwFNsW').reply(200, item);
    axios.put('/api/items/-64JwFNsW').then((res) => {
      expect(res.data).toEqual(item);
    });
  });
});
