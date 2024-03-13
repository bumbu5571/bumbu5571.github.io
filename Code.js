/*Семь грузов весят одинаково, но один оставшийся немного легче остальных.
На весах присутствует кнопка “Измерить”, по нажатию которой чаши приходят в движение, если вес грузов одной 
чаши отличается от веса на другой. Если вес равен, то положение чаш не меняется. Без нажатия кнопки чаши 
весов надежно фиксируются в равновесии, вне зависимости от расположенного на них груза. Вам необходимо 
описать последовательность действий, как за два нажатия кнопки безошибочно определить самый легкий груз.
*/

//Шары из задачи представлены как параметры функции scales(Шар№1 = b_1)
//Меняя значение аргументов функции scales мы решаем задачу - результат выводится на HTML страничке  
//если условие нарушено, то будет выведена ошибка.

function scales ( b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8 ) {

    const res_1 =  b_1 + b_2 + b_3;
    const res_2 = b_4 + b_5 + b_6;
    //Переменные check_1 - 8 нужны для правильной проверки первого условия if
    const check_1 = (b_1 + b_2 + b_3 + b_4 + b_5 + b_6 + b_7) / 7;
    const check_2 = (b_1 + b_2 + b_3 + b_4 + b_5 + b_6 + b_8) / 7;
    const check_3 = (b_1 + b_2 + b_3 + b_4 + b_5 + b_8 + b_7) / 7;
    const check_4 = (b_1 + b_2 + b_3 + b_4 + b_8 + b_6 + b_7) / 7; 
    const check_5 = (b_1 + b_2 + b_3 + b_8 + b_5 + b_6 + b_7) / 7;
    const check_6 = (b_1 + b_2 + b_8 + b_4 + b_5 + b_6 + b_7) / 7;
    const check_7 = (b_1 + b_8 + b_3 + b_4 + b_5 + b_6 + b_7) / 7;
    const check_8 = (b_8 + b_2 + b_3 + b_4 + b_5 + b_6 + b_7) / 7;
    //Первое условие if сделано для то что бы соответсвовать условию задачи (7 грузов одного весв, 8 груз легче остальных), если 
    //условие нарушено будет ошибка!
    if ((check_1 === b_1 && b_8 < check_1) || (check_2 === b_2 && b_7 < check_2) || (check_3 === b_3 && b_6 < check_3)
        || (check_4 === b_4 && b_5 < check_4) || (check_5 === b_5 && b_4 < check_5) || (check_6 === b_6 && b_3 < check_6)
        || (check_7 === b_7 && b_2 < check_7) ||  (check_8 === b_8 && b_1 < check_8)){ 
    if (res_1 == res_2 && b_7 != b_8){
        document.getElementById("res_1").innerHTML = " чаши равны(первое действие), взвешиваем оставшиеся два шара.";
        document.getElementById("two").innerHTML = " ";
        if(b_7 > b_8 ){
        document.getElementById("res_1").innerHTML = "Ball_7 > Ball_8 - Шар №8 легче остальных(второе действие)"
        }else{document.getElementById("res_1_1").innerHTML = "Ball_7 < Ball_8 - Шар №7 легче остальных(второе действие)"
        }
    }
    //Комментарий "/* - */" используемый во втором варианте задачи, необходим для проверки разных вариантов событий 
    else if (res_1 < res_2){
        document.getElementById("res_2").innerHTML = " чаши пришли в движение, левая часть легче(первое действие). Взвешиваем любые два шара левой чаши";
        document.getElementById("one").innerHTML = " ";
        if (b_1 == b_2) {
            document.getElementById("res_2_2").innerHTML = "Ball_1 == Ball_2 - Шар №3 легче остальных(второе действие)"
        }/*else if (b_1 == b_3){
            document.getElementById("res_2_2").innerHTML = "Ball_1 == Ball_3 - Шар №2 легче остальных(второе действие)"
        }else if (b_2 == b_3) {
            document.getElementById("res_2_2").innerHTML = "Ball_2 == Ball_3 - Шар №1 легче остальных(второе действие)"
        }*/else if (b_1 < b_2){
            document.getElementById("res_2_2").innerHTML = "Ball_1 < Ball_2 - Шар №1 легче остальных(второе действие)"
        }else if (b_1 > b_2){
            document.getElementById("res_2_2").innerHTML = "Ball_1 > Ball_2 - Шар №2 легче остальных(второе действие)"
        }else if (b_1 < b_3){
            document.getElementById("res_2_2").innerHTML = "Ball_1 < Ball_3 - Шар №1 легче остальных(второе действие)"
        }else if (b_1 > b_3){
            document.getElementById("res_2_2").innerHTML = "Ball_1 > Ball_3 - Шар №3 легче остальных(второе действие)"
        }/*else if (b_2 < b_3){
            document.getElementById("res_2_2").innerHTML = "Ball_2 < Ball_3 - Шар №2 легче остальных(второе действие)"
        }*/else if (b_2 > b_3){
            document.getElementById("res_2_2").innerHTML = "Ball_2 > Ball_3 - Шар №3 легче остальных(второе действие)"
    }}else if (res_1 > res_2){
        document.getElementById("res_2").innerHTML = " Чаши пришли в движение, правая часть легче(первое действие). Взвешиваем любые два шара правой чаши";
        document.getElementById("one").innerHTML = " ";
        if (b_4 == b_5 ) {
            document.getElementById("res_2_2").innerHTML = "Ball_4 == Ball_5 - Шар №6 легче остальных(второе действие)";
        }/*else if (b_4 == b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_4 == Ball_6 - Шар №5 легче остальных(второе действие)";
        }else if (b_5 == b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_5 == Ball_6 - Шар №4 легче остальных(второе действие)";
        }*/else if (b_4 < b_5){
            document.getElementById("res_2_2").innerHTML = "Ball_4 < Ball_5 - Шар №4 легче остальных(второе действие)";
        }else if (b_4 > b_5){
            document.getElementById("res_2_2").innerHTML = "Ball_4 > Ball_5 - Шар №5 легче остальных(второе действие)";
        }else if (b_4 < b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_4 < Ball_6 - Шар №4 легче остальных(второе действие)";
        }else if (b_4 > b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_4 > Ball_6 - Шар №6 легче остальных(второе действие)";
        }else if (b_5 < b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_5 < Ball_6 - Шар №5 легче остальных(второе действие)";
        }else if (b_5 > b_6){
            document.getElementById("res_2_2").innerHTML = "Ball_5 > Ball_6 - Шар №6 легче остальных(второе действие)";
    }}else {document.getElementById("er").innerHTML = "Ошибка: 7 шаров должны быть одного значения"
            document.getElementById("one").innerHTML = " ";
            document.getElementById("two").innerHTML = " ";}
    }else{
        document.getElementById("one").innerHTML = " ";
        document.getElementById("two").innerHTML = " ";
        document.getElementById("er").innerHTML = "Ошибка: 7 шаров должны быть одного значения"}
}

scales(25,25,25,25,25,25,10,25)


