import type { Foo } from './impure-file-with-type-export';

function test(
  first: Foo,
  second: import('./impure-file-with-type-export').Foo,
): void {
  console.log('This should evaluate:');
  console.log(first);
  console.log(second);
}

test(
  "TypeScript supports `import type { Type } from 'path/file'` imports",
  "TypeScript supports `import('path/file').Type` imports",
)
