let n = 8;

let nr = 2*n - 1;
let nc = 2*n - 1;

let final_ans = "";

for (let row = 0; row < nr; row++){

    for (let col = 0; col < nc; col++) {
        let v = row < col ? row : col;
        v = v < nr - row ? v : nr - row - 1;
        v = v < nr - col - 1 ? v : nr - col - 1;
        final_ans += n - v;  
    }
    final_ans += "\n";
}
console.log (final_ans);
/*
33333
32223
32123
32223
33333 */