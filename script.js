//form validation
(function () {
  'use strict';

  // Fetch all the forms to apply custom Bootstrap validation styles
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over each form and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


var forms = document.querySelectorAll('.needs-validation');

forms.forEach(function(form) {
  form.addEventListener('submit', function(event) {
    if (form.checkValidity()) {
      event.preventDefault(); // Prevent default form submission

      var successModal = new bootstrap.Modal(document.getElementById('successModal'));
      var successMessage = document.getElementById('successMessage');
      
      if (form.id === 'form1') {
        var currentDate = new Date();
        var minBookingDate = new Date();
        minBookingDate.setDate(currentDate.getDate() + 14);

        var selectedDate = new Date(form1.date.value);

        if (selectedDate < minBookingDate) {
          // Date is beyond the allowed range
          alert('Please select a date within the next two weeks.');
          return;
        }

        successMessage.textContent = "Your session was successfully prebooked. We will contact you for further details!";
      } else if (form.id === 'form2') {
        successMessage.textContent = "Your message was successfully sent!";
      }

      successModal.show(); // Show the success message modal
    }

    form.classList.add('was-validated');
  });
});

var successModalElement = document.getElementById('successModal');
successModalElement.addEventListener('hidden.bs.modal', function () {
  forms.forEach(function(form) {
    form.reset(); // Reset the form fields
    form.classList.remove('was-validated'); // Remove the validation styles
  });
});



  //backtotop button 

  window.onscroll = function() { scrollFunction() };
  function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  