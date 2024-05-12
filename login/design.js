document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  document.getElementById('usernameDisplay').textContent = "Username/Email: " + username;
  document.getElementById('passwordDisplay').textContent = "Password: " + password;

  
  document.getElementById('signupDetails').style.display = 'block';
});
