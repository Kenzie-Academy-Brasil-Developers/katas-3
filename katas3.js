const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let returnn = []
    for (let i = 1; i <= 25; i++) {
        returnn.push(i)
    }
    return returnn
}
console.log(kata1())
function kata2() {
    let returnn2 = []
    for (let i = 25; i > 0; i--) {
        returnn2.push(i)
    }
    return returnn2
}
console.log(kata2())
function kata3() {
    let returnn3 = []
    for (let i = -1; i >= -25; i--) {
        returnn3.push(i)
    }
    return returnn3
}
console.log(kata3())
function kata4() {
    let returnn4 = []
    for (let i = -25; i <= -1; i++) {
        returnn4.push(i)
    }
    return returnn4
}
console.log(kata4())
function kata5() {
    let returnn5 = []
    for (let i = -25; i <= 25; i++) {
        returnn5.push(-i)
    }
    return returnn5
}
console.log(kata5())
function kata6() {
    let returnn6 = []
    for (let i = 3; i <= 100; i += 3) {
        returnn6.push(i)
    }
    return returnn6
}
console.log(kata6())
function kata7() {
    let returnn7 = []
    for (let i = 7; i <= 100; i += 7) {
        returnn7.push(i)
    }
    return returnn7
}
console.log(kata7())
function kata8() {
    let returnn8 = []
    for (let i = 100; i >= 3; i--) {
        if (i % 3 == 0) {
            returnn8.push(i)
        }
        if (i % 7 == 0) {
            returnn8.push(i)
        }
    }
    return returnn8
}
console.log(kata8())
function kata9() {
    let returnn9 = []
    for (let i = 1; i < 100; i += 2) {
        if (i % 5 == 0) {
            returnn9.push(i)
        }
    }
    return returnn9
}
console.log(kata9())
function kata10() {
    return sampleArray
}
console.log(kata10())
function kata11() {
    let par = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            par.push(sampleArray[i])
        }
    }
    return par
}
console.log(kata11())
function kata12() {
    let imp = []
    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 1) {
            imp.push(sampleArray[i])
        }
    }
    return imp
}
console.log(kata12())
function kata13() {
    let returnn13 = []
    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            returnn13.push(sampleArray[i])
        }
    }
    return returnn13
}
console.log(kata13())
function kata14() {
    let returnn14 = []
    for (let i = 0; i < sampleArray.length; i++) {
        returnn14.push(sampleArray[i] * sampleArray[i])
    }
    return returnn14
}
console.log(kata14())
function kata15(soma) {
    let returnn15 = 0
    for (let i = 0; i < soma.length; i++) {
        if (soma[i] > 1) {
            returnn15 += soma[i]
        }
    }
    return returnn15
}
console.log(
    kata15([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ])
)
function kata16(soma) {
    let returnn16 = 0
    for (let i = 0; i < soma.length; i++) {
        if (soma[i] > 1) {
            returnn16 += soma[i]
        }
    }
    return returnn16
}
console.log(
    kata16([
        469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
        179, 535, 940, 472
    ])
)
function kata17() {
    let menNum = Math.min(...sampleArray)
    return menNum
}
console.log(kata17())
function kata18() {
    let maiNum = Math.max(...sampleArray)
    return maiNum
}
console.log(kata18())