$(document).ready(function() {
    $('#calculateBtn').click(function() {
        let left = $('#left').val();
        let operator = $('#operator').val();
        let right = $('#right').val();

        let integerRegex = /^[0-9]+$/;

        if (!integerRegex.test(left) || !integerRegex.test(right)) {
            alert('Error :(');  
            console.log('Error :(');
            return;  
        }

        left = parseInt(left);
        right = parseInt(right);

        if ((operator === '/' || operator === '%') && right === 0) {
            alert("It’s over 9000!");
            console.log('It’s over 9000!');
            return;
        }

        let result;

        switch (operator) {
            case '+':
                result = left + right; break;
            case '-':
                result = left - right; break;
            case '*':
                result = left * right; break;
            case '/':
                result = left / right; break;
            case '%':
                result = left % right; break;
        }

        alert('Result: ' + result);
        console.log('Result: ' + result);
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});
