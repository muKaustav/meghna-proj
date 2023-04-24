function validateLogin(event) {
	event.preventDefault() // Prevent the form from submitting

	// Pre-defined username and password
	var validUsername = "user123"
	var validPassword = "pass123"

	// Get the form data
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	// Check if the username and password are valid
	if (username === validUsername && password === validPassword) {
		// Redirect to success page
		window.location.href = "success.html"
	} else {
		// Redirect to failure page
		window.location.href = "failure.html"
	}
}
