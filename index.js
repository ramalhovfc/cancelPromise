'use strict';

class SkipablePromise {
	static create(promise) {
		let skip;
		let skipReject;
		const shortCircuitPromise = new Promise((resolve, reject) => {
			skip = resolve;
			skipReject = reject;
		});
		return {
			promise: Promise.race([promise, shortCircuitPromise]),
			skip: skip,
			skipReject: skipReject
		};
	}
}

module.exports = SkipablePromise;