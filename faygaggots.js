document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const messageDiv = document.getElementById("submissionMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page reload

    // Get values
    const name = document.getElementById("name").value.trim();
    const length = document.getElementById("length").value;
    const age = document.getElementById("score").value;
    const updates = document.getElementById("updates").checked;
    const solution = document.getElementById("solution").value;
    const feedback = document.getElementById("feedback").value.trim();
    const status = document.querySelector('input[name="status"]:checked')?.value;

    // Validation
    if (!name || !length || !age || !status || !solution) {
      alert("Please fill out all required fields.");
      return;
    }

    // Log info
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Length:", length);
    console.log("Status:", status);
    console.log("Liked Age:", age);
    console.log("Is Special:", updates);
    console.log("Who Would Win:", solution);
    console.log("Feedback:", feedback);

    // Show message
    messageDiv.style.display = "block";

    // 🧨 Optional: Confetti (if added)
    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ff00ff']
      });

      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          confetti({
            particleCount: 20,
            startVelocity: 60,
            spread: 360,
            ticks: 90,
            origin: {
              x: Math.random(),
              y: Math.random() * 0.6
            },
            colors: ['#ffffff', '#ffccff', '#ccffff'],
            scalar: 0.8
          });
        }, i * 200);
      }
    }

    // Nerd alert
    alert("Thanks for submitting your cooked form, nerd.");

    // Reset form
    setTimeout(() => {
      form.reset();
    }, 1000);
  });
});















