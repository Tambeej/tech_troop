function validateForm() {
  // Clear previous messages
  const errorsDiv = document.getElementById("errors");
  const successDiv = document.getElementById("successMsg");
  errorsDiv.innerHTML = "";
  successDiv.innerHTML = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const salary = parseFloat(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();

  const errors = [];

  // Validate Name
  if (name.length <= 2) {
    errors.push("Name must be longer than 2 characters.");
  }

  // Validate Salary
  if (isNaN(salary) || salary < 10000 || salary > 16000) {
    errors.push("Salary must be between 10,000 and 16,000.");
  }

  // Validate Birthday
  if (!birthday) {
    errors.push("Birthday is required.");
  }

  // Validate Phone
  if (!/^\d{10}$/.test(phone)) {
    errors.push("Phone number must be exactly 10 digits.");
  }

  // Show errors or success
  if (errors.length > 0) {
    errors.forEach(msg => {
      const errorItem = document.createElement("p");
      errorItem.textContent = msg;
      errorsDiv.appendChild(errorItem);
    });
  } else {
    successDiv.textContent = "Form submitted successfully!";
    document.getElementById("myForm").reset();
  }
}
