var terminal = new Terminal();

var termInput = document.querySelector("#terminal-text");

var termHelper = document.querySelector("#terminal-helper");

var focusTermInput = () => {
    document.execCommand("copy");
    termInput.focus();
};

termInput.onkeydown = (event) => {
    if (event.keyCode == 13) {
        var command = termInput.value;
        terminal.execute(command);
    }
};

termHelper.onclick = (event) => {
    focusTermInput();
    terminalType("help", 0);
};

var terminalType = (txt, i) => {
    if (i < txt.length) {
        terminal.input.value += txt.charAt(i);
        i++;
        setTimeout(terminalType, 50, txt, i);
    }
};

window.onload = focusTermInput();

document.addEventListener("mouseup", focusTermInput);

window.addEventListener('load', function() {
    setTimeout(() => {
        var loader = document.getElementById('loading-bar-container');
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
});