import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | creditcard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:creditcard');
    assert.ok(route);
  });
});
