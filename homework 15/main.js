//1
function* createIdGenerator(start = 1, end = Infinity, step = 1) {
    let iterationCount = 0;
    for(let index = start; end <= end; index+= step) {
        iterationCount++;
        yield index;
    }
    return iterationCount;
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

