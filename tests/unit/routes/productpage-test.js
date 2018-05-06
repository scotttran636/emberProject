import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | productpage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:productpage');
    assert.ok(route);
  });
});
