//add label to each input
document.getElementById('username')
  .insertAdjacentHTML('beforebegin','<label for=username>username:</label>');
  document.getElementById('password')
   .insertAdjacentHTML('beforebegin','<label for=password>password:</label>');
   document.getElementById('confirm-password')
   .insertAdjacentHTML('beforebegin','<label for=confirm-password>confirm:<label>');

   //validation of form
   // it doesnt work i should check again

   const checkinput = (event) =>{
    const errorElement =Array.from(event.target.parentNode.queryselectorAll('span'));
     if(event.target.value ==='' && !errorElement.length){
        event.target.insertAdjacentHTML('afterend','<span class="required">Required</span>')
     }
     if (errorElement &&event.target.value!==''){
        errorElement.forEach(ele => ele.remove());

     }

   };
   document.getElementById('username')
     .addEventListener('blur',checkinput);

     //to check the crct password

     document.getElementById('confirm-password')
      .addEventListener('blur',(event) =>{
        if(event.target.value !==document.getElementById('password').value){
            event.target.insertAdjacentHTML('afterend','<span class ="text-danger">password should match </span>');
        }
      });
      

      //successful registration

      const form = document.getElementById('submit');
      form.addEventListener('sumbit',(event)=>{
        event.preventDefault();
        const alert = document.createElement('div');
        alert.classList.add('alert','alert-success');
        alert.innertext = 'you have sucessfully registered';
        form.prepend(alert);
      })