function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(150);

            };

            reader.readAsDataURL(input.files[0]);
        }
    }


//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let caption = document.querySelector('#caption').value;
  let description = document.querySelector('#description').value;
  let namec = document.querySelector('#namec').value;
  let phone = document.querySelector('#phone').value;
  // let file = document.querySelector('#file').value;
  

  //send message values
  sendMessage(name, caption, description, namec, phone);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, caption, description, namec, phone) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    caption: caption,
    description: description,
    namec: namec,
    phone: phone,
    file: file
    
  });
}
