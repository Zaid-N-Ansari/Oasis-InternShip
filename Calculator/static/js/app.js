const input = document.getElementById('InputFromButton');
let buttons = Array.from(document.querySelectorAll("input[type=button]"));

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.value === '='){
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = error;
            }
        }

        else if(e.target.value === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.value === 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.value;
            input.value = string;
        }
    });
});