let input = document.querySelector('.a');
let button = document.querySelector('.b');
let number = 5;
let i = 0;
button.onclick = function() {
    if (input.value == 5) {
        alert('bạn đã đoán đúng')
    } else {
        alert("bạn đã đoán sai mời bạn nhập lại");
    }
}