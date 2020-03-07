
// const count = 5;
// console.log('count: %d', count);
// console.log('count:', count);

// console.log(`count: ${count}`);


console.time("desafio");
for (let i = 0; i < 1000; i++) {
    for(let j = 0; j < 1000; j++){
        const a = i + j;
    }
};

console.timeEnd("desafio");
