// Loop Example
function runLoop() {
    console.log('Loop Started.');
    for (let i = 0; i < 6; i++) {
        console.log(i);
        document
            .getElementById('loopResult')
            .textContent += " " + i;
    }
    console.log('Loop Ended.');
}

// Array Example
var names = [
    'Mateo Rivera',
    'Valentina Mendoza',
    'Santiago Jimenea',
    'Sofia Aguilar',
    'Diego Alvarez'
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
    let num = 5;
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

// Global Variable
var globalVariable = 'Global Variable Here!'

// Scope Example
function runScope() {
    let localVar = 'Local Variable';
    console.log('Local Variable: ' + localVar);
    document
        .getElementById('scopeResult')
        .textContent = 'Local Variable: ' + globalVariable;
    console.log('Global Variable: ' + globalVariable);
}

// Out of Scope Variable
function outOfScope() {
    console.log('Local Variable: ' + globalVariable);
}

outOfScope();