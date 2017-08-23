'use strict';

class SkipablePromise {
	static create(promise) {
		let skip;
		let reject;
		const shortCircuitPromise = new Promise((resolve, reject) => {
			skip = resolve;
			reject = reject;
		});
		return {
			promise: Promise.race([promise, shortCircuitPromise]),
			skip: skip,
			reject: reject
		};
	}
}

module.exports = SkipablePromise;