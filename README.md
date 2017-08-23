# CancelPromise
Cancel and skip awaits when dealing with promises.
Published as an NPM package: cancelPromise.

# Install
Install as an NPM package
```javascript
npm i cancel-promise --save
```

# Usage
```javascript
const SkipablePromise = require('../index');

const longRunPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
		expect(true).to.equal(false);
	}, 1500);
});

// create a skipable object
const skipable = SkipablePromise.create(longRunPromise);

setTimeout(() => {
    skipable.skip();
    
    // if you want to early reject the promise
    // skipable.reject();
}, 500);

await skipable.promise;
// resolved at 500ms
```

# Tests
Run `npm test`