let gradeCalculator = function(studentsScore, totalScore = 20){
    let percent = (studentsScore / totalScore ) * 100
    if (percent >= 90 && percent <= 100 ) {
        return `You got an A (${percent}%) `
    }
    else if(percent >= 80 && percent <= 90){
        return `You got a B (${percent}%)`
    }
    else if(percent >= 70 && percent <= 80) {
        return `You got a C (${percent}%)`
    }
    else if (percent >= 60 && percent <= 70) {
        return `You got a D (${percent}%)`
    }
    else{
        return `You got an F (${percent}%)`        
    }

}
let grade1 = console.log(gradeCalculator(20))
let grade2 = console.log(gradeCalculator(18))
let grade3 = console.log(gradeCalculator(16))
let grade4 = console.log(gradeCalculator(14))
let grade5  = console.log(gradeCalculator(12))


