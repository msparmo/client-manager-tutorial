import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	firstName: 'User',
	lastName(i) {
		return i;
	}
});
