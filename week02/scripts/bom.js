const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");
button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const dButton = document.createElement('button');
        li.textContent = input.value;
        dButton.textContent = 'X';
        li.append(dButton);
        list.append(li);
        dButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })
    }
    input.focus();
    input.value = '';
}) 