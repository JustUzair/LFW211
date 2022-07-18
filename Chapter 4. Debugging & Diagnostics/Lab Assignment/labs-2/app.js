function f(n = 99) {
    if (n === 0) return;
    debugger
    f(n - 1)
}
f()
/*
NOTE:- In some versions of node the --inspect flag doesn't work as intended
*/