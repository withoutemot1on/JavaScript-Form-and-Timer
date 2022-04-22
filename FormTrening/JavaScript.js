let
    addButton = Main.addButton,
    Remove = Main.removeButton,
    UsersSelect = Main.Users;


// обработчик добавления элемента
function addOption(){
    // получаем текст для элемента
    let text = Main.textInput.value;
    // получаем значение для элемента
    // let value = Main.valueInput.value;
    // создаем новый элемента
    let newOption = new Option(text);
    UsersSelect.options[UsersSelect.options.length]=newOption;
}
// обработчик удаления элемент
function removeOption(){
    let selectedIndex = UsersSelect.options.selectedIndex;
    // удаляем элемент
    UsersSelect.options[selectedIndex] = null;
}

addButton.addEventListener("click", addOption);
Remove.addEventListener("click", removeOption);



//Таймер обратного отсчета


let timerInput = document.getElementById("time"); // Берём строку
let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
    RoundDurationTimer()
})


timer = setInterval(function () {
    seconds = timeMinut%60 // Получаем секунды
    minutes = timeMinut/60%60 // Получаем минуты
    hour = timeMinut/60/60%60 // Получаем часы
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)



// Таймер длительности (вызываеться в таймере обратного отсчета {На кнопку запустить (выше по коду)})

let gameTimerId;
let Timer = document.querySelector('.Timer')
function RoundDurationTimer() {
    let date2 = new Date(0, 0, 0,0,0 ,0,0)

    gameTimerId = setInterval(function(){
        date2.setSeconds(date2.getSeconds()+1);
        Timer.innerHTML ='Время игры: ' + Plus0(date2.getMinutes()) +" min "+ ': ' + Plus0(date2.getSeconds())+"sec";

    }, 1000);
    function Plus0(n){

        if (n<10){
            return '0'+n;
        } else {
            return ''+n;
        }
    }
}
