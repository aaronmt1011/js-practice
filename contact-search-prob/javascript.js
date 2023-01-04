const contacts = ['Chris:223234', 'Sarah:3454554', 'Bill:7642464', 
    'Mary:9997234', 'Dianne:578423'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for(const contact of contacts) {
        const splitContact = contact.split(':');
        if(splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        }
    }
    if(para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
})
