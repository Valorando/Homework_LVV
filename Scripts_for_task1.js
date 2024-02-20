function Age(form)
{
    var age = form.text1.value

    if(age >= 0 && age <=11)
    {
        alert('Введённый вами вазраст равен статусу: Ребенок')
    }

    else if(age >= 12 && age <=17)
    {
        alert('Введённый вами вазраст равен статусу: Подросток')
    }

    else if(age >= 18 && age <=59)
    {
        alert('Введённый вами вазраст равен статусу: Взрослый')
    }

    else if(age >=60)
    {
        alert('Введённый вами вазраст равен статусу: Пенсионер')
    }

    else
    {
        alert('Введённый вами вазраст - некорректный')
    }
}

function Symbol(form)
{
    var digit = form.text1.value

    if(digit == 0)
    {
        alert('Символ 0 это: )')
    }

    else if(digit == 1)
    {
        alert('Символ 1 это: !')
    }

    else if(digit == 2)
    {
        alert('Символ 2 это: @ и "')
    }

    else if(digit == 3)
    {
        alert('Символ 3 это: № и #')
    }

    else if(digit == 4)
    {
        alert('Символ 4 это: $ и ;')
    }

    else if(digit == 5)
    {
        alert('Символ 5 это: %')
    }

    else if(digit == 6)
    {
        alert('Символ 1 это: : и ^')
    }

    else if(digit == 7)
    {
        alert('Символ 7 это: ? и &')
    }

    else if(digit == 8)
    {
        alert('Символ 8 это: *')
    }

    else if(digit == 9)
    {
        alert('Символ 1 это: (')
    }

    else
    {
        alert('Введённое вами число - некорректное')
    }
}

function Examination(form)
{
    var digit = form.text1.value
    
    var digitString = digit.toString()
    var digitArray = digitString.split('')
    var uniqueDigits = new Set(digitArray)

    if (uniqueDigits.size !== digitArray.length)
    {
        alert('Ваше число имеет одинаковые цифры')
    }
    else
    {
        alert('Ваше число не имеет одинаковых цифр')
    }
}

function Year(form)
{
    var year = form.text1.value

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
    {
        alert(year + ' - высокосный год')
    }
    else
    {
        alert(year + ' - не высокосный год')
    }
}

function Palindrom(form)
{
    var digit = form.text1.value
    var digitString = digit.toString()
    var reversedString = digitString.split('').reverse().join('')

    if(digitString === reversedString)
    {
        alert(digit + ' - палиндром')
    }
    else
    {
        alert(digit + ' - не палиндром')
    }

}

function Convert(form)
{
    var sum = form.text1.value
    var currency = form.currency
    var result
    var eur = 0.93
    var uah = 38.06
    var azn = 1.70

    if(currency.options[currency.selectedIndex].value == 'EUR')
    {
        result = sum * eur
        form.text2.value = result
    }

    else if(currency.options[currency.selectedIndex].value == 'UAH')
    {
        result = sum * uah
        form.text2.value = result
    }

    else if(currency.options[currency.selectedIndex].value == 'AZN')
    {
        result = sum * azn
        form.text2.value = result
    }
}

function Discount(form)
{
    var sum = form.text1.value
    var discount
    var result

    if(sum >= 200 && sum <= 299)
    {
        discount = sum * 0.03
        result = sum - discount.toFixed(0)
        alert('С учетом скидки 3%, к оплате: ' + result)
    }

    else if(sum >= 300 && sum <= 499)
    {
        discount = sum * 0.05
        result = sum - discount.toFixed(0)
        alert('С учетом скидки 5%, к оплате: ' + result)
    }

    else if(sum >= 500)
    {
        discount = sum * 0.07
        result = sum - discount.toFixed(0)
        alert('С учетом скидки 7%, к оплате: ' + result)
    }
}

function Circle(form)
{
    var width = form.text1.value
    var perimetr = form.text2.value

    if(width <= perimetr)
    {
        alert('Окружность поместится в указанный квадрат.')
    }
    else
    {
        alert('Окружность не поместится в указанный квадрат.')
    }
}

function Test(form)
{
    var score = 0

    if(form.l1[0].checked)
    {
        score += 2
    }

    if(form.l2[1].checked)
    {
        score += 2
    }

    if(form.l3[2].checked)
    {
        score += 2
    }

    alert('Вы набрали: ' + score + '/6 баллов.')
}


function NextDate(form)
{
    var date = form.text1.value
    var parts = date.split("/")
    var new_date = new Date(parts[2], parts[1] - 1, parseInt(parts[0]) + 1)
    var next_date = new_date.getDate() + "/" + (new_date.getMonth() + 1) + "/" + new_date.getFullYear()
    alert("Следующая дата: " + next_date)
}