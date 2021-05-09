
function generateBlocks() {
    document.body.insertAdjacentHTML('afterbegin', '<div style = "width:250px;">' +
    '<div class="square"></div>'.repeat(25) + '</div>');

    document.querySelectorAll('.square').forEach(element => {
        element.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
        element.style.height = "50px";
        element.style.width = "50px";
        element.style.display = "inline-block";
        element.style.float = "left";
    });
};

//Advanced
function generateBlocksInterval() {
    document.body.insertAdjacentHTML('afterbegin', '<div style = "width:250px;">' +
    '<div class="square"></div>'.repeat(25) + '</div>');

    setInterval(() => {
        document.querySelectorAll('.square').forEach(element => {
            element.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
            element.style.height = "50px";
            element.style.width = "50px";
            element.style.display = "inline-block";
            element.style.float = "left";
        });
    },1000);

};

generateBlocksInterval();

export {
    generateBlocksInterval,
}