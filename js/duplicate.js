function duplicates (arr) {
    const found = [];
    const duplicates = [];

    arr.map ( (num) => {
        if (found.indexOf(num) > -1) {
            duplicates.push(num)
        } else {found.push(num)}
    })
    return duplicates;    
}

console.log(duplicates([3,3,4,1,2,2,2,5]));