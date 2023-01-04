// Uses input to get number, then uses number to find all square roots between 1 
// and whatever picked number
const sqPara = document.querySelector(".paraText");
const sqInput = document.querySelector(".number");
const sqBtn = document.querySelector('.btn');

sqBtn.addEventListener('click', () => {
    sqPara.textContent = 'Output: ';
    const sqNum = sqInput.value;
    sqInput.value = '';
    sqInput.focus();
    for (let i = 1; i <= sqNum; i++) {
        let sqRoot = Math.sqrt(i);
        if(Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        sqPara.textContent += `${i} `;
    }
})