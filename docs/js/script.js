//form validation
(function () {
  'use strict';

  let forms = document.querySelectorAll('.needs-validation');

  // Loop over each form and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();// Prevent form submission if validation fails
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

let forms = document.querySelectorAll('.needs-validation');

forms.forEach(function(form) {
  form.addEventListener('submit', function(event) {
    if (form.checkValidity()) {
      event.preventDefault(); // Prevent default form submission

      let successModal = new bootstrap.Modal(document.getElementById('successModal'));
      let successMessage = document.getElementById('successMessage');
      
      if (form.id === 'form1') {
        let currentDate = new Date();
        let minBookingDate = new Date();
        minBookingDate.setDate(currentDate.getDate() + 14);

        let selectedDate = new Date(form1.date.value);

        if (selectedDate < minBookingDate) {
          alert('Please choose a date that is at least 2 weeks from today.');
          return;
        }
        successMessage.textContent = "Your session was successfully booked!";
      } else if (form.id === 'form2') {
        successMessage.textContent = "Your message was successfully sent!";
      }
      successModal.show(); // Show the success message modal
    }

    form.classList.add('was-validated');
  });
});

let successModalElement = document.getElementById('successModal');
successModalElement.addEventListener('hidden.bs.modal', function () {
  forms.forEach(function(form) {
    form.reset(); // Reset the form fields
    form.classList.remove('was-validated'); // Remove the validation styles
  });
});

  //backtotop button 

  window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    let btn = document.getElementById("backToTopBtn");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  