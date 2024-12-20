const userForm = document.querySelector('#userForm')

userForm.addEventListener('submit',async function(e){
  e.preventDefault();
  const button = document.querySelector('.btn').value.trim()
  const toast = document.querySelector('#toast').value.trim()
  const FName = document.querySelector('#FName').value.trim()
  const LName = document.querySelector('#LName').value.trim()
  const DOB = document.querySelector('#DOB').value.trim()
  const Phone = document.querySelector('#Phone').value.trim()
  const Email = document.querySelector('#Email').value.trim()


})





//   // Clear previous error messages
//   errorMessage.textContent = "";

//   // Client-side validation
//   if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
//       errorMessage.textContent = "Invalid name. Please use only letters.";
//       return;
//   }
//   if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       errorMessage.textContent = "Invalid email format.";
//       return;
//   }
//   if (!phone || !/^\d{10}$/.test(phone)) {
//       errorMessage.textContent = "Phone number must be 10 digits.";
//       return;
//   }
//   if (!password || password.length < 6) {
//       errorMessage.textContent = "Password must be at least 6 characters long.";
//       return;
//   }

//   // Submit data to the server
//   try {
//       const response = await fetch("/submit", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, phone, password }),
//       });

//       if (response.ok) {
//           // Show toast notification
//           toast.className = "show";
//           setTimeout(() => {
//               toast.className = toast.className.replace("show", "");
//           }, 3000); // Toast will disappear after 3 seconds
//       } else {
//           const errorData = await response.json();
//           errorMessage.textContent = errorData.message || "Failed to save details.";
//       }
//   } catch (error) {
//       console.error("Error submitting the form:", error);
//       errorMessage.textContent = "An error occurred. Please try again.";
//   }
// });
