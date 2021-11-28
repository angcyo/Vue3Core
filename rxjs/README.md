# 2021-11-28

# API 

https://rxjs.dev/api

# 安装 

https://rxjs.dev/guide/installation

https://v6.rxjs.dev/guide/installation

```
npm install rxjs
```

示例:

```
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(map(x => x + '!!!')); // etc

//

import * as rxjs from 'rxjs';

rxjs.of(1, 2, 3);

```
