
// Получения значения и его прибавление к полю input

function get_num(num) {

    input = String(document.getElementById("input").textContent).length

    if(input <= 18){

        document.getElementById("input").textContent += num
    }
    else{
        // ничего не делаем
    }

}


// Получения результата

function result() {

    nums = document.getElementById("input").innerText

    answer = eval(nums)

    if(answer == Infinity){
        document.getElementById("input").textContent = "На 0 делить нельзя!"
        
    }
    else{
        document.getElementById("input").textContent = answer
    }
}
