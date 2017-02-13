import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/start-mirage';

moduleForComponent('clients/client-list', 'Integration | Component | clients/client list', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('it displays the client list', function(assert) {
  const model = server.createList('client', 3);

  this.set('model', model);
  this.render(hbs`{{clients/client-list model=model}}`);

  assert.equal(this.$('.client').length, 3, "Three clients in list.");
});
