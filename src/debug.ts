import { parse } from "./index";
const ast = parse('export const a = "2"');
console.log(JSON.stringify(ast, null, 2));
