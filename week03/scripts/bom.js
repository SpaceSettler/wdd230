const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
})
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
    }
    input.focus();
    input.value = '';
}) 
function displayList(item) {
    const li = document.createElement('li');
    const dButton = document.createElement('button');
    li.textContent = item;
    dButton.textContent = 'X';
    dButton.classList.add('delete');
    li.append(dButton);
    list.append(li);
    dButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
    console.log('I like to not explain things to my students and then punish them for not knowing how to write code.')
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}