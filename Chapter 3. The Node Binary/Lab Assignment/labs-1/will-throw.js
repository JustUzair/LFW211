function f(n = 99) {
    if (n == 85)
        throw Error();
    f(n - 1)
}
f()

/*
In the first case, there should only be ten stack frames in the error output.
Command:-
node --stack-trace-limit=10 will-throw.js

In the second case, there should be more than ten frames in the error in output.
Command:-
node --stack-trace-limit=1000 will-throw.js
*/