function foo(count: number):number {
    console.log("pre", count);
    if (count === 1) {
        return count;
    }
   
    let out = count + foo(count - 1);
    console.log("post", count , {out});
    return out
}

const sum5 = foo(5);
console.log(sum5);

/*
Meaning that as we recurse we did the pre of adding, we went into foo4, we did the pre of adding, we went into foo3, and we went into foo2, we di the pre of adding, we went into foo1, we did the post of logging which is logging out one, we returned it back out 2.

2 did the post of login have 2, retuned it back up to 3, 3 did the post login, 3 turn it back on 4, 4 to the post of login 4, 4 return five, and five logging and then, boom, we're out,
*/
