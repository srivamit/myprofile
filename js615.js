const nameElement = document.getElementById('typing-animation');
const name = "Amit Srivastav";
let index = 0;

function type() {
  nameElement.textContent = name.slice(0, index);
  index++;

  if (index > name.length) {
    index = 0;
  }

  // Add black outline to the text
  nameElement.style.textShadow = "2px 2px 4px #000000";
}

setInterval(type, 200);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show scroll line when scrolling
window.addEventListener('scroll', () => {
  const scrollLine = document.querySelector('.scroll-line');
  if (window.scrollY > 0) {
    scrollLine.classList.add('show-scroll-line');
  } else {
    scrollLine.classList.remove('show-scroll-line');
  }
});

// Animate skill bars on scroll and display percentage
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const skillsTop = skillsSection.offsetTop;
  const skillsHeight = skillsSection.offsetHeight;
  const windowBottom = window.pageYOffset + window.innerHeight;

  if (windowBottom > skillsTop && window.pageYOffset < skillsTop + skillsHeight) {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-progress');
      bar.style.width = targetWidth;

      const percentage = parseInt(targetWidth, 10);
      const percentageElement = document.createElement('div');
      percentageElement.classList.add('progress-bar-percentage');
      percentageElement.textContent = `${percentage}%`;
      bar.appendChild(percentageElement);

      // Animate percentage display
      const animatePercentage = () => {
        let currentPercentage = 0;
        const animationInterval = setInterval(() => {
          if (currentPercentage >= percentage) {
            clearInterval(animationInterval);
          }
          percentageElement.textContent = `${currentPercentage}%`;
          currentPercentage++;
        }, 10);
      };

      animatePercentage();
    });
  }
});


// Color changing button
function changeColor(button) {
  let currentColor = [0, 0, 255]; // Initial RGB color
  let interval = setInterval(updateColor, 400); // Update color every 0.4 seconds

  function updateColor() {
    currentColor[0] += 5; // Increase the value of Red component
    currentColor[1] += 2; // Increase the value of Green component
    currentColor[2] -= 3; // Decrease the value of Blue component

    if (currentColor[0] > 255) currentColor[0] = 0; // Reset Red component if exceeds 255
    if (currentColor[1] > 255) currentColor[1] = 0; // Reset Green component if exceeds 255
    if (currentColor[2] < 0) currentColor[2] = 255; // Reset Blue component if below 0

    const rgbColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
    button.style.backgroundColor = rgbColor;
  }

  setTimeout(function () {
    clearInterval(interval); // Stop updating color after a certain duration (optional)
  }, 10000); // Change the duration (in milliseconds) as needed
}
const downloadButton = document.getElementById('download-resume');
const resumeURL = 'https://www.dropbox.com/s/avbh5xlgq2c53c8/Resume.pdf?dl=0';

downloadButton.addEventListener('click', () => {
  window.location.href = resumeURL;
});
