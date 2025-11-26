const fibonacci = function(x) {

    let array = [];

    if (typeof x == 'string') {
        x = parseInt(x);
    }

    if (x < 0) {
        return "OOPS";
    } else if (x == 0) {
        return 0;
    } else if (x == 1 || x == 2) {
        return 1;
    } else {
        array[0] = 1;
        array[1] = 1;

        for (let i = 2; i < x; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
        return array[x - 1];
        // console.log(array[x]);
    }
};

let result = fibonacci(-10);

console.log(result);

// Do not edit below this line
module.exports = fibonacci;
