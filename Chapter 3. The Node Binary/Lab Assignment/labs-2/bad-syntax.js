const () = func => {
    console.log("This is correct syntax of an arrow functioin in JavaScript");
}
/*
Command:-
    node --check bad-syntax.js
Output:-
    const () = func => {
          ^
    SyntaxError: Unexpected token '('
        at Object.compileFunction (node:vm:352:18)
        at wrapSafe (node:internal/modules/cjs/loader:1033:15)
        at checkSyntax (node:internal/main/check_syntax:66:3)
*/