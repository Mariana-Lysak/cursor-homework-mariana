const promise = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 50));
}

async function getRandomChinese(length) {
    let result ='';

    for(let i = 0; i < length; i++) {
        const sign = Date.now().toString().slice(-5);
        result += String.fromCharCode(sign);
        await promise();
    }
    
    console.log(result);
}

getRandomChinese(4).then(() => getRandomChinese(16));

export {
    getRandomChinese,
}