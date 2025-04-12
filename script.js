// Function to change months and save progress
function changeMonth(monthNumber) {
    // Hide all months first
    document.getElementById("month1").style.display = "none";
    document.getElementById("month2").style.display = "none";
    document.getElementById("month3").style.display = "none";

    // Display the selected month
    document.getElementById("month" + monthNumber).style.display = "table";

    // Save progress when switching months
    saveProgress(monthNumber);
}

// Function to save progress (checkbox status) in localStorage
function saveProgress(monthNumber) {
    const checkboxes = document.querySelectorAll(`#month${monthNumber} input[type="checkbox"]`);
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`month${monthNumber}-checkbox${index}`, checkbox.checked);
    });
}

// Function to load saved progress
function loadProgress(monthNumber) {
    const checkboxes = document.querySelectorAll(`#month${monthNumber} input[type="checkbox"]`);
    checkboxes.forEach((checkbox, index) => {
        const savedStatus = localStorage.getItem(`month${monthNumber}-checkbox${index}`);
        checkbox.checked = savedStatus === "true"; // Convert string 'true'/'false' back to boolean
    });
}

// Initial load of saved progress
window.onload = function() {
    // Load progress for the first month on page load
    loadProgress(1);
    loadProgress(2);
    loadProgress(3);
}


// Function to change the month when clicking a button
function changeMonth(month) {
    // Hide all months
    document.getElementById("month1").style.display = "none";
    document.getElementById("month2").style.display = "none";
    document.getElementById("month3").style.display = "none";

    // Show the selected month
    document.getElementById("month" + month).style.display = "block";
}

// Save checkbox state
function saveCheckboxState(id) {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked);
}

// Load all checkbox states on page load
function loadAllCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState !== null) {
            checkbox.checked = (savedState === 'true');
        }

        // Save state on change
        checkbox.addEventListener('change', () => {
            saveCheckboxState(checkbox.id);
        });
    });
}

// Call this when page loads
window.onload = loadAllCheckboxStates;
