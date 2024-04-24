document.addEventListener('DOMContentLoaded', function() {
    // Selecting form and result elements
    const form = document.getElementById('attendanceForm');
    const resultSection = document.getElementById('result');
    const attendancePercentage = document.getElementById('attendancePercentage');
    const additionalHours = document.getElementById('additionalHours');

    // Function to calculate attendance percentage
    function calculateAttendance(hoursAttended, totalHours) {
        return (hoursAttended / totalHours) * 100;
    }

    // Function to update result section
    function updateResult(hoursAttended, totalHours, requiredPercentage) {
        const currentAttendance = calculateAttendance(hoursAttended, totalHours);
        attendancePercentage.textContent = `Your attendance percentage is ${currentAttendance.toFixed(2)}%`;

        if (currentAttendance < requiredPercentage) {
            const additionalHrsNeeded = Math.ceil((requiredPercentage * totalHours / 100) - hoursAttended);
            additionalHours.textContent = `Attend ${additionalHrsNeeded} more hours to achieve ${requiredPercentage}% attendance`;
        } else {
            additionalHours.textContent = "You have met or exceeded the required attendance percentage.";
        }

        resultSection.style.display = 'block'; // Show the result section
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const hoursAttended = parseFloat(form.elements['hoursAttended'].value);
        const totalHours = parseFloat(form.elements['totalHours'].value);
        const requiredPercentage = parseFloat(form.elements['requiredPercentage'].value);

        // Update result section
        updateResult(hoursAttended, totalHours, requiredPercentage);
    });
});

