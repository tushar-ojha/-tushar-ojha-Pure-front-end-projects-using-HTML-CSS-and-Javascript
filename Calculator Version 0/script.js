 console.log("JS is linked properly");

 let string = ""; //for input
 
 let buttons = document.querySelectorAll('.button');

 //Array.from means make an array of these buttons.
 console.log(test);
Array.from(buttons).forEach((button) => { 
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            console.log("Equal key is pressed"); 
            string = eval(string); 
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            console.log("Equal key is pressed"); 
            string = ''; 
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        


    })
 })

