function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    console.log('New Arr')
    return newArr;
}

function doSomething(num) {
    console.log('num*2')
    return num*2;
}

modifyArray([1,2,3], doSomething);