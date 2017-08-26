# CancelPromise
Cancel and skip awaits when dealing with promises.
Published as an NPM package: cancel-promise.

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
    
    // you can also pass a resolve value
    // skipable.skip('Hello world!');
    
    // if you want to early reject the promise
    // skipable.skipReject();
}, 500);

await skipable.promise;
// resolved at 500ms
```

# Tests
Run `npm test`