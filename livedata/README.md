# 2021-11-28 

https://github.com/jonasrottmann/livedata

# 安装

```
npm install @jonasrottmann/livedata

yarn add @jonasrottmann/livedata
```

# 示例

```js
import {LiveData} from '@jonasrottmann/livedata'

// Create a new observable container with the initial value `true`
const livedata = new LiveData(true);

// Register an observer
const unsubscribe = livedata.subscribe((newValue, oldValue) => {
    console.log(`Value changed from ${oldValue} to ${newValue}!`)
})

// Change the value depending on the old value
livedata.transition(value => !value)

// Set the value
livedata.set(true)

//get the value
console.log(`Value is ${livedata}!`)

// End the subscription
unsubscribe()
```
