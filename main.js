const resul = document.getElementById('resul')
const btn = document.getElementsByClassName('numbt')

const calc = {
    num : {
    0 : btn[0],
    1 : btn[1],
    2 : btn[2],
    3 : btn[3],
    4 : btn[4],
    5 : btn[5],
    6 : btn[6],
    7 : btn[7],
    8 : btn[8],
    9 : btn[9],
    },
    opt : {
        '+' : btn['+'],
        '-' : btn['-'],
        '/' : btn['/'],
        '*' : btn['*'],
        '.' : btn['.'],
        '%' : btn['%'],
        '=' : btn['='],
        'del' : btn['del'],
        'ac' : btn['ac']
    }
}

// números
calc.num[0].addEventListener("click", () => {
    resul.textContent += 0;
})
calc.num[1].addEventListener("click", () => {
    resul.innerText += 1;
})
calc.num[2].addEventListener("click",() => {
    resul.innerText += 2;
})
calc.num[3].addEventListener("click",() => {
    resul.innerText += 3;
})
calc.num[4].addEventListener("click",() => {
    resul.innerText += 4;
})
calc.num[5].addEventListener("click",() => {
    resul.innerText += 5;
})
calc.num[6].addEventListener("click",() => {
    resul.innerText += 6;
})
calc.num[7].addEventListener("click",() => {
    resul.innerText += 7;
})
calc.num[8].addEventListener("click",() => {
    resul.innerText += 8;
})
calc.num[9].addEventListener("click",() => {
    resul.innerText += 9;
})

//operadores
calc.opt["+"].addEventListener("click", () => {
    resul.innerText += '+';
})
calc.opt["-"].addEventListener("click", () => {
    resul.innerText += '-';
})
calc.opt["/"].addEventListener("click", () => {
    resul.innerText += '/';
})
calc.opt["*"].addEventListener("click", () => {
    resul.innerText += '*';
})
calc.opt["%"].addEventListener("click", () => {
    resul.innerText += '%';
})
calc.opt["."].addEventListener("click", () => {
    resul.innerText += '.';
})

calc.opt['del'].addEventListener("click", () => {
    resul.innerText = ''; // apaga tudo
})

/*calc.opt['ac'].addEventListener("click", () => {
    resul.innerText = '0'; // tirar um numero
})*/

calc.opt['='].addEventListener("click", () => {
    const texto = resul.innerText

    if(texto.includes('+')){
        const b = texto.split('+')
        const calc = parseFloat(b[0]) + parseFloat(b[1]);
        resul.innerText = calc;
    }

    if(texto.includes('-')){
        const a = texto.split('-');
        const calc = parseFloat(a[0]) - parseFloat(a[1]);
        resul.innerText = calc;
    }

    if(texto.includes('*')){
        const a = texto.split('*');
        const calc = parseFloat(a[0]) * parseFloat(a[1]);
        resul.innerText = calc;
    }

    if(texto.includes('/')){
        const a = texto.split('/');
        const calc = parseFloat(a[0]) / parseFloat(a[1]);
        resul.innerText = calc;
    }
    if(texto.includes('%')){
        const a = texto.split('%');
        const calc = parseFloat(a[0]) / 100;
        resul.innerText = calc;
    }
})

