async function getRandomChinese(length) {
    let result ='';

    for(let i = 0; i < length; i++) {
        await new Promise(resolve => {
            setTimeout (() => {
                const sign = Date.now().toString().slice(-5);
                result += String.fromCharCode(sign);
                resolve(result);
            }, 50);
        });
    }
    console.log(result);
}

getRandomChinese(4).then(() => getRandomChinese(16));