document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Fetch input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Display signup details
  document.getElementById('usernameDisplay').textContent = "Username/Email: " + username;
  document.getElementById('passwordDisplay').textContent = "Password: " + password;

  // Show signup details
  document.getElementById('signupDetails').style.display = 'block';
});