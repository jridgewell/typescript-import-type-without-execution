"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function test(first, second) {
    console.log('This should evaluate:');
    console.log(first);
    console.log(second);
}
test("TypeScript supports `import type { Type } from 'path/file'` imports", "TypeScript supports `import('path/file').Type` imports");
