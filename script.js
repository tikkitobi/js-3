var a = +prompt('Введите первое число');

var b = +prompt('Введите второе число');

var c = +prompt('Введите третье число');

if (a > b && a > c) {
    alert(a + ' больше чем ' + b + ' и ' + c);
}else if (b > a && b > c) {
    alert(b + ' больше чем ' + c + ' и ' + a);
}else if (c > a && c > b) {
    alert(c + ' больше чем ' + a + ' и ' + b);
}if (a < b && a < c) {
    alert(a + ' меньше чем ' + b + ' и ' + c);
}else if (b < a && b < c) {
    alert(b + ' меньше чем ' + c + ' и ' + a);
}else if (c < a && c < b) {
    alert(c + ' меньше чем ' + a + ' и ' + b);
}
else {
    alert('error 404');
}