'use strict';

const chai = require('chai');
const expect = chai.expect;

const SkipablePromise = require('../index');

describe('General usage:', function() {
	it('Skips an awaited long running promise', async function() {
		const longRunPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
				expect(true).to.equal(false);
			}, 1500);
		});

		const skipable = SkipablePromise.create(longRunPromise);

		setTimeout(() => {
			skipable.skip();
		}, 500);

		await skipable.promise;
		expect(true).to.equal(true);
	});
});
