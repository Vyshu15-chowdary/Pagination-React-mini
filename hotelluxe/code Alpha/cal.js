const keys = document.querySelectorAll('.keys');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

 let input = "";
  for ( let key of keys) {
     const value = key.dataset.key ;
       
      key.addEventListener('click', () =>{ 
         if (value == "clear") {
             input = "";
             display_input.innerhtml ="";
             display_output.innerhtml ="";
         }else if (value =="backspace") {
             input =input.slice(0,-1);
             display_input.innerHTML = cleanInput(input);

         }else if (value == "="){
             let result = eval(PrepareInput(input));

             display_output.innerhtml = cleanoutput(result);
         }else if (value=="brackets"){

            if(
                 input.indexOf("(") == -1 ||
                 input.indexOf("(") != -1 &&
                 input.indexOf(")") != -1 &&
                 input.indexOf("(") < input.lastIndexOf(")") 

            ){
                input +=")";
            }
            display_input.innerHTML = cleanInput(input);
         } else {
             if (validateInput(value)) {

                input += value;
                display_input.innerHTML = cleanInput(input);
             }
         }
      })
  }

  function cleanInput(input){

     let input_array = input.split("");
     let input_array_length = input_array.length;

       for (let i=0 ; i < input_array_length ; i++){
           
        if (input_array[i] == "*"){
              
            input_array[i] = `<span class ="operator">X</span>`;
        } else if (input_array[i] == "/") {

            input_array[i] = `<span class ="operator">/ </span>`;

        }else if (input_array[i] =="+"){
            input_array[i] = `<span class = "operator"> + </span>`;
        }else if (input_array[i] == "-"){

            input_array[i] =`<span class = "operator" > - </span>`;
        }else if( input_array[i] == "(") {
             input_array[i] = `<span class = "operator" > ( </span>`;
        } else if (input_array [i] == ")") {
             
            input_array[i] =`<span class = "operator" > ) </span>`;
        } else if (input_array[i] == "%"){

            input_array[i] = `<span class = "percent" > % </span>`;
        }
       }
       return input_array.join("");
  }

  function cleanoutput (output){
     let output_string = output.output_string();
     let decimal = output_string.split(".") [1] ;
     output_string = output_string.split(".") [0] ;

     let output_array = output_string.split("");

      if (output_array.length > 3){
         for (let i = output_array.length - 3 ; i > 0 ; i-=3)

            output_array.splice(i,0,",");
      }
 

  }
   if (decimal){
     output_array.push(".");
     output_array.push(decimal);
   }

   return output_array.join("");

