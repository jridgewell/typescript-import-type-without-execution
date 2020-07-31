# Importing types without executing executing other module

> Demonstrates that TypeScript supports importing a type from an impure file without executing it.

TypeScript actually supports to forms of type-only importing:

1. `import type { Type } from 'path/file'` syntax

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-exports

```ts
// This will not execute any code from 'path/file'
import type { Foo as Local } from 'path/file';
```

2. `import('path/file').Type` syntax

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#import-types

```ts
// This will not execute any code from 'path/file'
type Local = import('path/file').Foo;
```
