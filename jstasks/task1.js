function reverse(string) {
    let chars = string.split('');
    let tmpString = [];
    for(let i = chars.length-1; i >= 0; i--) {
        tmpString.push(chars[i]);
    }
    return tmpString.join('');
}

//--------------------------------------------------------------------------------------------------------------------//

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//--------------------------------------------------------------------------------------------------------------------//

function ucWords(string) {
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = ucFirst(words[i]);
    }
    return words.join(' ');
}

//--------------------------------------------------------------------------------------------------------------------//

function round(num) {
    let tmp = num.toString().split('.');
    tmp[1] = tmp[1].slice(0, 8).split('');
    for(let i = tmp[1].length-1; i >= 0; i--) {
        if (tmp[1][i] == 0) {
            tmp[1] = tmp[1].slice(0, i);
        } else {
            break;
        }
    }
    tmp[1] = tmp[1].join('');
    return tmp.join('.');
}
//Else solution:
//function round(num) {
//    return parseFloat(num.toFixed(8));
//}

//--------------------------------------------------------------------------------------------------------------------//

function isEmail(email) {
    return /^\w{3,}@\w+\.\w+$/.test(email);
}

//--------------------------------------------------------------------------------------------------------------------//

function isUrl(url) {
    return /^(http|ftp|https):\/\/\w+\.\w+\/?$/.test(url) || /^\w+\.\w+\/?$/.test(url);
}

//--------------------------------------------------------------------------------------------------------------------//

function isDate(date) {
    return /^\d{2}(\/|\.|\-)\d{2}(\/|\.|\-)\d{4}$/.test(date);
}

//--------------------------------------------------------------------------------------------------------------------//

function isPhoneNumber(number) {
    return /^\+\d{12}$/.test(number);
}
