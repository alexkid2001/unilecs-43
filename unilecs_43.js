
let a = 30;
let d = 5;
let n = 1.5;

function deltaCalc(rect, height) {
    // переводим значение градусов в радианы и находим синус угла приломления
    let b = Math.sin(degToRad(a)) / n;

    // зная угол и прилежащий катен, находим противоположный катеки - смещение
    // и сразу округляем значение до второго знака
    let x = (Math.tan(Math.asin(b)) * d).toFixed(2);

    // Выводим результат в консоль
    console.log('a = ' + rect + ', d = ' + height + ', x = ' + x);
}

// переводим градусы в радианы
function degToRad(deg) {
    return (Math.PI * deg) / 180;
}

deltaCalc(a, d);