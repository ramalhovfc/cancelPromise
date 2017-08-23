# CancelPromise
Cancel and skip awaits when dealing with promises

# Example
```javascript
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
// resolved before 1500ms
```

# Tests
Run `npm test`