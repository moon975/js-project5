const selectBtn = document.querySelector('.default-option');
const options = document.querySelector('.options');
const optionList = document.querySelectorAll('.options .option');
const input = document.querySelector('.select > input');

function onSelectClick(){

    options.classList.toggle('show_options');
    selectBtn.classList.toggle('active');
}

selectBtn.addEventListener('click', onSelectClick);

optionList.forEach(option => {

    option.addEventListener('click', () =>{
        const value = option.dataset.value;
        input.value = value;
        selectBtn.innerHTML = value;
        onSelectClick();
    })
})