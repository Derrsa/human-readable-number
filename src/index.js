module.exports = function toReadable (number) {
    if(exceptionsCheck(number)){
        return exceptions(number)
    }
    let numArr = number.toString().split('')

    if (numArr.length === 1){
        return onth(number)
    } else if (numArr.length === 2){
        return tenth(numArr)
    } else if (numArr.length === 3){
        return hundredths(numArr)
    }
}

const EXCEPTIONS =  [10,11,12,13,15,18,20,30,40,50,80]
// function toReadableNum (number) {
//     if(exceptionsCheck(number)){
//         return exceptions(number)
//     }
//     let numArr = number.toString().split('')
//
//     if (numArr.length === 1){
//         return onth(number)
//     } else if (numArr.length === 2){
//         return tenth(numArr)
//     } else if (numArr.length === 3){
//         return hundredths(numArr)
//     }
//
// }
//
// // console.log(toReadableNum(113))

function exceptionsCheck(number) {
    return EXCEPTIONS.some(num => num === number)
}

function onth (number){
    let textNumber
    switch (number) {
        case 1:
            textNumber =  'one'
            break
        case 2:
            textNumber =  'two'
            break

        case 3:
            textNumber =  'three'
            break

        case 4:
            textNumber =  'four'
            break

        case 5:
            textNumber =  'five'
            break

        case 6:
            textNumber =  'six'
            break

        case 7:
            textNumber =  'seven'
            break

        case 8:
            textNumber =  'eight'
            break

        case 9:
            textNumber =  'nine'
            break

        case 0:
            textNumber =  'zero'
            break
    }
    return textNumber

}

function tenth (numberArr){

    let number = Number(numberArr.join(''))
    if(exceptionsCheck(number)){
        return exceptions(number)
    }
    if (number <= 20){
        return  onth(Number(numberArr[1])) + 'teen'

    } else if (number > 20){
        let tenthEqual = Number((numberArr[0] + 0) )
        if(exceptionsCheck(tenthEqual)){
            return `${exceptions(tenthEqual)} ${onth(Number(numberArr[1]))}`
        } else if(+numberArr[1] === 0){
            return `${onth(Number(numberArr[0]))}ty`
        }
        return `${onth(Number(numberArr[0]))}ty ${onth(Number(numberArr[1]))}`
    }
}

function hundredths (numberArr){
    let tenthEqual = numberArr.slice(1)
    if(Number(numberArr[1]) === 0 && Number(numberArr[2]) !== 0){
        return `${onth(Number(numberArr[0]))} hundred ${onth(Number(numberArr[2]))}`
    } else if(Number(numberArr[1]) === 0 && Number(numberArr[2]) === 0){
        return `${onth(Number(numberArr[0]))} hundred`
    } else if(Number(numberArr[1]) !== 0 && Number(numberArr[2]) === 0){
        return `${onth(Number(numberArr[0]))} hundred ${tenth(tenthEqual)}`
    }
    return `${onth(Number(numberArr[0]))} hundred ${tenth(tenthEqual)}`
}

function exceptions (number){
    if(EXCEPTIONS.some(el => el === number )){
        switch (number) {
            case 10:
                textNumber =  'ten'
                break
            case 11:
                textNumber =  'eleven'
                break

            case 12:
                textNumber =  'twelve'
                break
            case 13:
                textNumber = 'thirteen'
                break
            case 15:
                textNumber = 'fifteen'
                break
            case 18:
                textNumber = 'eighteen'
                break
            case 20:
                textNumber = 'twenty'
                break
            case 30:
                textNumber = 'thirty'
                break
            case 40:
                textNumber = 'forty'
                break
            case 50:
                textNumber = 'fifty'
                break
            case 80:
                textNumber = 'eighty'
                break

        }
        return textNumber
    }

}



