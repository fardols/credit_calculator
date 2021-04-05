
export const PERCENT = 5.5;
const PERCENT_YEAR = PERCENT/100;
const PERCENT_MONTH = PERCENT_YEAR/12;
/*
    Расчет аннуитетного ежемесячного платежа,
    использована методика: https://www.raiffeisen.ru/wiki/kak-rasschitat-procenty-po-kreditu/
    sum - сумма займа,
    period - срок кредитования (в месяцах)
 */
export function getMonthlyPayment(sum, period) {
    return sum * (PERCENT_MONTH + PERCENT_MONTH/( Math.pow((1 + PERCENT_MONTH), period) - 1));
}

// /*
//     Расчет аннуитетного ежемесячного платежа,
//     использована методика: https://www.vtb.ru/personal/kredit-nalichnymi/kalkulyator/
//  */
// function calculateAnnuity(sum, months) {
//     const creditRate = 0.075;
//     const monthlyRate = creditRate / 12;
//     const coefMonth = Math.pow(1 + monthlyRate, months);
//     const result = monthlyRate * coefMonth / (coefMonth - 1);
//     return sum * result;
// }


// разделить цифру по разрядам
export function toDivide(numberArg: number) {
    let int = String(Math.trunc(numberArg));
    if(int.length <= 3) return int;
    let space = 0;
    let number = '';

    for(var i = int.length - 1; i >= 0; i--) {
        if(space == 3) {
            number = ' ' + number;
            space = 0;
        }
        number = int.charAt(i) + number;
        space++;
    }
    return number;
}
