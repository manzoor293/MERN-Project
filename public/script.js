document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const toast = document.querySelector('#toast');
    const FName = document.querySelector('#FName').value;
    const LName = document.querySelector('#LName').value;
    const DOB = document.querySelector('#DOB').value;
    const Phone = parseInt(document.querySelector('#Phone').value, 10);
    const Email = document.querySelector('#Email').value;
    const textArea = document.querySelector('#textArea').value;
    const errorMessage = document.getElementById("errorMessage");
  
    errorMessage.textContent = '';
  
    try {
      const response = await fetch("/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ FName, LName, Phone, DOB, textArea, Email }),
      });
  
      if (response.ok) {
        toast.className = "show";
        setTimeout(() => {
          toast.className = toast.className.replace("show", "");
        }, 3000);
      } else {
        const errorData = await response.json();
        errorMessage.textContent = errorData.message || "Failed to save details.";
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      errorMessage.textContent = "An error occurred. Please try again.";
    }
  });
  