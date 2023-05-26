document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // Simulate a successful login for demonstration purposes
      if (username === 'admin' && password === 'pass') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard or desired page
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  