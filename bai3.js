let input = document.querySelector("input");
let button = document.querySelector("button");
let a = 0;
button.onclick = function() {
    let number = 8;
    let inputUser = input.value;
    a++;
    if (inputUser < 0 || inputUser > 10) {
        input.value = "";
        alert("Bạn đã nhập sai mời bạn nhập lại số từ 0 đến 10");
        a = 0;
    } else {
        if (inputUser == number) {
            alert("chúc mừng bạn đã đoán đúng");
        }
        if (inputUser != number) {
            input.value = "";
            if (a < 3) {
                inputUser = "";
                alert(`kết quả sai`);
            }
            if (a >= 3) {
                alert(`Bạn đã đoán sai 3 lần kết quả là ${number}`);
            }
        }
    }
};