const fs = require('fs');

const findMaxPath = (triangle) => {
    const triangleArr = triangle.split(" \r\n"); 
    let intArr = triangleArr.map(numStr => {
        return numStr.split(' ').map(num => +num)
    })

    let currLine = intArr.length - 2
    while(currLine >= 0){
        let nextLine = currLine+1
        intArr[currLine] = intArr[currLine].map((num, index) => {
            let numPlusFirst = num+intArr[nextLine][index]
            let numPlusSecond = num+intArr[nextLine][index+1]
            return Math.max(numPlusFirst, numPlusSecond)
        })
        currLine--
    }
    console.log('Max Sum:>> ', intArr[0][0]);
}



fs.readFile('./triangle.txt', 'utf8', (err, data) => {
if (err) throw err;
 findMaxPath(data)
})
