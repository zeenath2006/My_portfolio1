// Show current year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form feedback
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const statusMsg = document.getElementById("statusMsg");
  statusMsg.textContent = "Thank you! Your message has been sent.";
  statusMsg.style.color = "#7c3aed";
  e.target.reset();
});
