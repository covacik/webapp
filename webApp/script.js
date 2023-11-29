document.addEventListener("DOMContentLoaded", function() {
    // Initially show the first step
    showStep(1);
});

function showStep(stepNumber) {
    // Reveal the requested step
    var stepToShow = document.getElementById('step' + stepNumber);
    if (stepToShow) {
        stepToShow.style.display = 'block';
        stepToShow.scrollIntoView({ behavior: 'smooth' });
    }

    // Update the active state of the step indicator
    var stepIndicators = document.querySelectorAll('.nav-link');
    stepIndicators.forEach(function(indicator) {
        indicator.classList.remove('active');
    });
    var activeIndicator = document.getElementById('v-pills-step' + stepNumber + '-tab');
    if (activeIndicator) {
        activeIndicator.classList.add('active');
    }
    for (let i = 1; i < stepNumber; i++) {
        var completedStep = document.getElementById('v-pills-step' + i + '-tab');
        if (completedStep) {
            completedStep.classList.add('completed');
        }
    }

}

function makeAjaxCall() {
    // Implement your AJAX call here using XMLHttpRequest or Fetch API
    // Example with Fetch API:
    fetch('your-server-endpoint', {
        method: 'POST',
        // Include any necessary headers and body
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
        // Optionally move to a new step or show a completion message
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
