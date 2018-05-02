function createPatternArray(string) {
    let arr = string.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push({name: arr[i], id: arr[i+1]});
    }
    return res;
}

let tmp = createPatternArray("red 1 yellow 2 black 3 white 4");
console.log(tmp);