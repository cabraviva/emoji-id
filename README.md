# emoid
 Create 😎 Emoji IDs instead of uuids because they are more 🧑🏻 friendly

# Usage
```js
const id = require('emoid')

// 🙂 is a placeholder for one of 1493 emojis
// The default length is 3
id() // -> 🙂🙂🙂


id(1) // -> 🙂
id(2) // -> 🙂🙂
id(3) // -> 🙂🙂🙂
id(5) // -> 🙂🙂🙂🙂🙂
// ...
```

# Probabilities of a non-unique id
For the default length (3), the probability of a non-unique id is 1/3327970157
If you want to calculate it for a custom length, use the following formula:
```js
const id = require('emoid')
id.calculateProbability(length) // -> Output String

id.calculateProbability(3) // -> Every 3327970157th id is non unique when the length is 3 (thats 3.0048346374038715e-8%)
```
