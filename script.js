document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    let errorMessage = '';
  
    const fullName = document.getElementById('fullName').value.trim();
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
      isValid = false;
      errorMessage += 'Full name must only contain letters and spaces.<br>';
    }
  
    const email = document.getElementById('email').value.trim();
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      isValid = false;
      errorMessage += 'Please enter a valid email address.<br>';
    }
  
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10,15}$/.test(phone)) {
      isValid = false;
      errorMessage += 'Phone number must be 10-15 digits.<br>';
    }
  
    const password = document.getElementById('password').value.trim();
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      isValid = false;
      errorMessage += 'Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.<br>';
    }
  
    document.getElementById('errorMessage').innerHTML = errorMessage;
    document.getElementById('successMessage').style.display = isValid ? 'block' : 'none';
    if (isValid) document.getElementById('successMessage').innerHTML = 'Form submitted successfully!';
  });
  

