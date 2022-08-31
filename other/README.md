# 2022-8-31

其他一些常用组件

## vue3-clipboard

https://github.com/soerenmartius/vue3-clipboard

```
1:
npm install --save @soerenmartius/vue3-clipboard

2:
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
createApp(App).use(VueClipboard).mount('#app')

3:
<button v-clipboard:copy="value" v-clipboard:success="onCopySuccess" v-clipboard:error="onError" > Copy </button>

4:
const onCopySuccess = (value) => {
  toastSuccess(`${value.text} 复制成功`)
}
```
