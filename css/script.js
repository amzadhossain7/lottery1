const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

// Names corresponding to the segments
const names = ["MOON", "Amzad", "faria", "tripty", "tonima", "puja", "Riva", "lucky"];
spinButton.addEventListener("click", () => {
  // Random spin degree
  const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // Add multiple rotations for effect
  const selectedIndex = Math.floor(((randomDegree % 360) / 45) + 0.5) % names.length;

  // Spin the wheel
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // Delay to display the result after spinning
  setTimeout(() => {
    result.textContent = `The winner is: ${names[selectedIndex]}`;
  }, 3000); // Matches the CSS transition duration
});
