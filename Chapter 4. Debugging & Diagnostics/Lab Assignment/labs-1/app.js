function f(n = 99) {
    if (n == 0) throw Error();
    f(n - 1);
}
f();

/*
command:- 
    -> change directory to correct path
    -> node --inspect-brk node.js

********************************************

function f(n = 99) {
    if (n == 0) throw Error();
    f(n - 1);
}
f(); <--- Debugger paused at this line by default i.e line-5 in actual code
*/