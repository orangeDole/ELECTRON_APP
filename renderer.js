 import { info,inputTime,btn,btnClear,seconds,min_s,stopBtn,resumeBtn } from "./elements.js";
const checkValue = /^\d+$/;
let int = {
    interval: null,
    count: 60,
    mins : inputTime.value
}


function startInt  () {
    if (int.count === 0 && int.mins >0) {
        int.mins -=1;
        int.count = 60;
    }  else if (int.mins === 0 && int.count === 0){
        clearInt();
        window.api.shutDown();
    }
        int.count -=1;



seconds.textContent =`seconds: ${int.count}`;
min_s.textContent = `minutes: ${int.mins}`
    } 

function starTimer () {
    const val = inputTime.value.trim();
if (!checkValue.test(val) || val === 0) {
    info.textContent = 'put number> 0 '
}

    stopInt();
    int.count = 60;
    if (isNaN(inputTime.value) || inputTime.value <= 0) {
        inputTime.value = ''
    } else{
min_s.textContent = `minutes ${int.mins} `;
 int.mins = inputTime.value -1;

 inputTime.value = ''
int.interval = setInterval(startInt,1000)
    }

}


function stopInt() {
    clearInterval(int.interval);
btn.disabled = true;
    int.interval = null;
}

function clearInt () {
stopInt();
btn.disabled = false;
int.mins = 0;
int.count = 0;
inputTime.value ='';
seconds.textContent = 'seconds 0';
min_s.textContent = 'minutes 0';

}


function resumeInt () {
    int.interval = setInterval(startInt,1000)
}

btn.addEventListener("click",starTimer)
stopBtn.addEventListener("click",stopInt)
btnClear.addEventListener("click",clearInt)
resumeBtn.addEventListener("click",resumeInt)




