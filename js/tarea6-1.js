// Loop Example
function runLoop() {
    console.log('Loop Started');
    for (let i = 0; i < 6; i++) {
        console.log(i);
        document
            .getElementById('loopResult')
            .textContent += ' ' + i;
    }
    console.log('Loop Ended'); 
}

// Array Example
var names = [
    'Mateo Rivera',
    'Valentina Mendoza',
    'Santiago Jimenez',
    'Sofia Aguilar',
    'Diego Alvarado'
]

function loopArray() {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        let node =
            document.createElement('li');

        node.textContent = names[i];

        document
            .getElementById('arrayLoop')
            .appendChild(node);
    }
}

// Conditional Example
function runConditional() {
    let num = 6;
    if (num % 2 === 0) {
        document
            .getElementById('conditionalResult')
            .textContent = 'Even Number.';
    } else {
        document
            .getElementById('conditionalResult')
            .textContent = 'Odd Number.';
    }
    console.log('Conditional just ran.');

}

// Scope Example
var globalVariable = 'Global variable here.'

function runScope() {
    let localVar = 'Local variable';
    console.log('Local variable: ' + localVar);
    document
        .getElementById('scopeResult')
        .textContent = 'Local variable: ' + localVar;
    console.log('Global Variable: ' + globalVariable);
}

// Out of Scope Variable
function outOfScope() {
    console.log('Local variable: ' + localVar);
}

outOfScope();