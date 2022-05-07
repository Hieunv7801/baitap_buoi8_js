var number = [];
function Add() {
    var output = ' ';
    var phantu = Number(document.getElementById("number").value);
    number.push(phantu);
    for (var index = 0; index < number.length; index++) {
        var giatri = number[index];
        output += giatri + ' ';
    }
    output = '[' + output + ']';
    document.getElementById("array").innerHTML = output;
}
function TongDuong() {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        if(number[i] > 0){
            sum += number[i];
        }
    }
    document.getElementById("output").innerHTML = sum;
}
function DemSoDuong(){
    var count = 0;
    for (var i = 0; i < number.length; i++) {
        if(number[i] > 0){
            count++;
        }
    }
    document.getElementById("output").innerHTML = count;
}
function SoNhoNhat(){
    var min = number[0];
    for (var index = 0; index < number.length; index++) {
        if(number[index] < min){
           min = number[index];
        }
    }
    document.getElementById("output").innerHTML = min;
}
function SoDuongNhoNhat(){
    var min_duong = number[0];
    for (var index = 0; index < number.length; index++) {
        if(number[index] > 0 && number[index] < min_duong){
                min_duong = number[index];
        }
    }
    document.getElementById("output").innerHTML = min_duong;
}
function ChanFinall(){
    for (var index = 0; index < number.length; index++) {
        //! số chẵn đầu tiên
        //* var index = number.length -1 ; index >= 0; index--
        if(number[index] % 2 == 0){
            var chanC = number[index];
        }
    document.getElementById("output").innerHTML = chanC;
}}
function TangDan(){
    for (var index = 0; index < number.length; index++) {
        var so = number.sort(function(soTruoc, soSau){
            return soTruoc - soSau;
        });
    }
    document.getElementById("output").innerHTML = so;
}
function SoSanh(){
    var soDuong = 0;
    var soAmm = 0;
    for (var index = 0; index < number.length; index++) {
        if(number[index] > 0){
            soDuong++;
        }else{
            soAmm++;
        }
    }
    if(soAmm > soDuong){
        document.getElementById("output").innerHTML = 'Số âm nhiều hơn <br> Số âm: '+soAmm+'<br> Số dương: '+soDuong;
    }else{
        document.getElementById("output").innerHTML = 'Số dương nhiều hơn <br> Số dương: '+soDuong+'<br> Số âm: '+soAmm;
    }
}
function DoiCho(){
    var vitri1 = document.getElementById("vitri1").value * 1;
    var vitri2 = document.getElementById("vitri2").value * 1;
    var doicho = ' ';
    var temp = number[vitri1];
    number[vitri1] = number[vitri2];
    number[vitri2] = temp;
    for (var index = 0; index < number.length; index++) {
       doicho += number[index];
    } 
       document.getElementById("doicho").innerHTML = doicho;
}
