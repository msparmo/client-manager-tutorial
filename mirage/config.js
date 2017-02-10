export default function() {
  this.namespace = '/api';

  this.get('/clients');
  this.post('/clients');
  this.get('/clients/:id');
  this.put('/clients/:id');
  this.del('/clients/:id');
}
