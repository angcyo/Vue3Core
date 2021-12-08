# 2021-12-8

VUE3 复制组件

https://github.com/soerenmartius/vue3-clipboard

## 安装

```
npm install --save @soerenmartius/vue3-clipboard
```

## 使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

createApp(App).use(VueClipboard).mount('#app')
```

## 示例

```js
<template>
  <input v-model="value" />
  <button v-clipboard="value">Copy</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('lorem')

    return { value }
  },
})
</script>
```

```js
<template>
  <input v-model="value" />
  <button
    v-clipboard:copy="value"
    v-clipboard:success="onSuccess"
    v-clipboard:error="onError"
  >
    Copy
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('lorem')

    const onSuccess = () => {
      console.log('success')
    }

    const onError = () => {
      console.log('error')
    }

    return { value, onSuccess, onError }
  },
})
</script>

```

```js
<template>
  <input v-model="value" />
  <button @click="toClipboard(value)">Copy</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { toClipboard } from '@soerenmartius/vue3-clipboard'

export default defineComponent({
  setup() {
    const value = ref('lorem')

    return { value, toClipboard }
  },
})
</script>

```
