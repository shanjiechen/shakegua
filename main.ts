function getRandomBinary () {
    // Math.random() 生成 [0, 1) 之间的浮点数
    // Math.round() 将浮点数四舍五入为最接近的整数，得到 0 或 1
    return Math.round(Math.random())
}
function drawActiveYao (yao: number) {
    let active_x = active_yao <= 3 ? 4 : 2
switch (active_yao) {
        case 1:
        case 4:
            active_y = 2
            break;
        case 2:
        case 5:
            active_y = 1
            break;
        default:
            active_y = 0
            break
    }
led.plot(active_x, active_y * 2)
}
function getRandomInt (min: number, max: number) {
    // Math.random() 生成 [0, 1) 之间的浮点数
    // 将其乘以 (max - min) 来得到 [0, max - min) 之间的浮点数
    // 再加上 min，得到 [min, max) 之间的浮点数
    // 最后使用 Math.floor() 向下取整，得到整数
    return Math.floor(Math.random() * (max - min + 1) + min)
}
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    six_yao = []
    for (let index = 0; index < 6; index++) {
        six_yao.push(getRandomBinary())
    }
    active_yao = getRandomInt(1, 6)
    gua(six_yao, active_yao)
console.log(six_yao)
console.log(active_yao)
})
let six_yao: number[] = []
let active_yao = 0
let active_y = 0
function gua(six_yao: number[], active_yao = 0) {
    // 检查输入数组是否有效
    if (!(Array.isArray(six_yao)) || six_yao.length != 6 || !(six_yao.every(bit => bit === 0 || bit === 1))) {
        console.log("Invalid input. Please provide an array of 6 binary digits (0 or 1).");
        return
    }
    let right_x = active_yao <= 3 ? 2 : 3;
    // 在micro:bit上显示六爻
    for (let j = 0; j < six_yao.length; j++) {
        if (j <= 2) {
            let y = 2 * j
            if (six_yao[j] == 1) {
                led.plot(0, y)
            } else {
                led.plot(1, y)
                led.plot(0, y)
            }
        } else {
            let y2 = 2 * (j - 3)
            if (six_yao[j] == 1) {
                led.plot(right_x, y2)
            } else {
                led.plot(right_x, y2)
                led.plot(right_x + 1, y2)
            }
        }
    }
    drawActiveYao(active_yao)
    return 
}
basic.forever(function () {
	
})
