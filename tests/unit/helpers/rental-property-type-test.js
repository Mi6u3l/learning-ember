
import { rentalPropertyType } from 'super-rentals/helpers/rental-property-type';
import { module, test } from 'qunit';

module('Unit | Helper | rental property type');

test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{rental-property-type inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
  assert.equal(this.$().text().trim(), 'Standalone');
});