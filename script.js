// Relationship start date: January 19, 2025 at 11:52 PM
const relationshipStart = new Date("2025-01-19T23:52:00");

function updateTimer() {
  const now = new Date();
  const timeDiff = now - relationshipStart;

  // Calculate time units
  const totalSeconds = Math.floor(timeDiff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calculate years and months more accurately
  let years = now.getFullYear() - relationshipStart.getFullYear();
  let months = now.getMonth() - relationshipStart.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for day of month
  if (now.getDate() < relationshipStart.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  // Calculate remaining days after years and months
  const tempDate = new Date(relationshipStart);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  tempDate.setMonth(tempDate.getMonth() + months);
  const remainingDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));

  // Calculate hours, minutes, seconds for current day
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update the display
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = remainingDays;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add click effect to timer boxes
  const timerBoxes = document.querySelectorAll(".timer-box");
  timerBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateY(-5px)";
      }, 150);
    });
  });

  // Add parallax effect to floating hearts
  document.addEventListener("mousemove", function (e) {
    const hearts = document.querySelectorAll(".heart");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    hearts.forEach((heart, index) => {
      const speed = (index + 1) * 0.5;
      const x = mouseX * speed * 10;
      const y = mouseY * speed * 10;
      heart.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add smooth scroll behavior for better UX
  document.documentElement.style.scrollBehavior = "smooth";

  // Add entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll(
    ".timer-section, .gallery-section, .message-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Photo gallery lazy loading effect
  const photos = document.querySelectorAll(".photo-item");
  photos.forEach((photo, index) => {
    photo.style.opacity = "0";
    photo.style.transform = "translateY(20px)";
    photo.style.transition = `opacity 0.5s ease ${
      index * 0.1
    }s, transform 0.5s ease ${index * 0.1}s`;

    setTimeout(() => {
      photo.style.opacity = "1";
      photo.style.transform = "translateY(0)";
    }, 500 + index * 100);
  });
});

// Special birthday message for October 9th
function checkBirthdayDate() {
  const today = new Date();
  const isOctober9th = today.getMonth() === 9 && today.getDate() === 9; // October is month 9 (0-indexed)

  const birthdayContent = document.getElementById("birthday-content");
  const regularContent = document.getElementById("regular-content");

  if (isOctober9th) {
    // Show birthday content, hide regular content
    birthdayContent.style.display = "block";
    regularContent.style.display = "none";

    // Add birthday background animation
    document.body.classList.add("birthday-bg");

    // Start all birthday animations
    startBirthdayAnimations();

    // Show special birthday alert after a delay
    setTimeout(() => {
      alert("🎉 HAPPY BIRTHDAY ADI! 🎂✨ Today is your special day! 💕🎈");
    }, 3000);
  } else {
    // Show regular content, hide birthday content
    birthdayContent.style.display = "none";
    regularContent.style.display = "block";
  }
}

function startBirthdayAnimations() {
  // Start continuous animations
  createFallingHearts();
  createSparkles();
  createConfetti();
  createPartyPoppers();
  createFireworks();

  // Set intervals for continuous effects
  setInterval(createFallingHearts, 2000);
  setInterval(createSparkles, 1000);
  setInterval(createConfetti, 3000);
  setInterval(createPartyPoppers, 4000);
  setInterval(createFireworks, 5000);
}

function createFallingHearts() {
  const hearts = ["💕", "💖", "💗", "💝", "❤️", "💜", "🩷", "🤍"];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "falling-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDelay = Math.random() * 2 + "s";
      heart.style.fontSize = Math.random() * 1.5 + 1 + "rem";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, i * 200);
  }
}

function createSparkles() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }, i * 100);
  }
}

function createConfetti() {
  const colors = [
    "#FF69B4",
    "#FFB6C1",
    "#FFC0CB",
    "#FF1493",
    "#DA70D6",
    "#FFD700",
    "#FF6347",
    "#98FB98",
  ];
  const shapes = ["circle", "square", "triangle"];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 1 + "s";
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

      // Random shapes
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      if (shape === "circle") {
        confetti.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        confetti.style.width = "0";
        confetti.style.height = "0";
        confetti.style.borderLeft = "5px solid transparent";
        confetti.style.borderRight = "5px solid transparent";
        confetti.style.borderBottom =
          "10px solid " + colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = "transparent";
      }

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }, i * 100);
  }
}

function createPartyPoppers() {
  const poppers = ["🎉", "🎊", "🎈", "🎁", "🎂", "✨"];

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const popper = document.createElement("div");
      popper.className = "party-popper";
      popper.textContent = poppers[Math.floor(Math.random() * poppers.length)];
      popper.style.left = Math.random() * 100 + "vw";
      popper.style.top = Math.random() * 50 + "vh";
      popper.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(popper);

      setTimeout(() => popper.remove(), 2000);
    }, i * 300);
  }
}

function createFireworks() {
  const colors = [
    "#FF69B4",
    "#FFD700",
    "#FF6347",
    "#98FB98",
    "#87CEEB",
    "#DDA0DD",
  ];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 50 + "vh";
      firework.style.color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(firework);

      setTimeout(() => firework.remove(), 1500);
    }, i * 400);
  }
}

// Add special click effects for birthday
function addBirthdayInteractions() {
  const today = new Date();
  const isOctober9th = today.getMonth() === 9 && today.getDate() === 9;

  if (isOctober9th) {
    // Add click effects anywhere on the page
    document.addEventListener("click", function (e) {
      createClickExplosion(e.clientX, e.clientY);
    });

    // Add hover effects to photos
    const photos = document.querySelectorAll(".photo-item");
    photos.forEach((photo) => {
      photo.addEventListener("mouseenter", function () {
        createSparklesBurst(this);
      });
    });
  }
}

function createClickExplosion(x, y) {
  const colors = ["#FF69B4", "#FFD700", "#FF6347", "#98FB98"];

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.width = "6px";
    particle.style.height = "6px";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";

    const angle = (i / 12) * Math.PI * 2;
    const velocity = 100 + Math.random() * 50;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    particle.style.animation = `explodeParticle 1s ease-out forwards`;
    particle.style.setProperty("--vx", vx + "px");
    particle.style.setProperty("--vy", vy + "px");

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

function createSparklesBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = centerX + (Math.random() - 0.5) * 100 + "px";
      sparkle.style.top = centerY + (Math.random() - 0.5) * 100 + "px";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }, i * 50);
  }
}

// Add particle explosion animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
    @keyframes explodeParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Check if it's birthday when page loads
checkBirthdayDate();

// Add birthday interactions
addBirthdayInteractions();
