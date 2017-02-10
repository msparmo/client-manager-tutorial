import { test } from 'qunit';
import moduleForAcceptance from 'client-manager/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | clients/index');

test('shoe client list', function(assert) {
	server.createList('client', 3);
	
  visit('/');
  click('a[href="/clients"]');

  andThen(function() {
    assert.equal(find('.client').length, 3, "The number of clients did not match.");
  });
});
