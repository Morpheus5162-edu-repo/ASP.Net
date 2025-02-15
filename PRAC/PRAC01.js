document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    let errorMessageBlock = document.getElementById("errorMessageBlock");
    var int1, int2, sum, difference, product, quotient, remainder;

    // Check if text fields are empty
    int1 = document.getElementById("int1").value;
    int2 = document.getElementById("int2").value;
    if (int1 == "" || int2 == "") {
        errorMessageBlock.innerHTML = "Both fields must be filled out to proceed";
        errorDesign();
        return;
    }

    //Convert values to integers
    int1 = parseInt(int1);
    int2 = parseInt(int2);

    // Validate inputs
    if (isNaN(int1) || isNaN(int2)) {
        errorMessageBlock.innerHTML = 
            "Invalid input.<br>" +
            "Please enter only whole numbers (e.g., 16, -5, 22).<br>" + 
            "Avoid letters or symbols.";
        errorDesign();
        return;
    }

    // Clear error message if input is valid
    errorMessageBlock.innerHTML = "";

    // Calculate
    sum = add(int1, int2);
    difference = subtract(int1, int2);
    product = multiply(int1, int2);
    quotient = divide(int1, int2);
    remainder = modulo(int1, int2);
    
    // Display result in the modal
    // Insert multiple lines into the modal
    document.getElementById("modalBody").innerHTML = `
        <p>Sum: <strong>${sum}</strong></p>
        <p>Difference: <strong>${difference}</strong></p>
        <p>Product: <strong>${product}</strong></p>
        <p>Quotient: <strong>${quotient}</strong></p>
        <p>Remainder: <strong>${remainder}</strong></p>
    `;

    // Show the Bootstrap modal
    let resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
});

function errorDesign() {
    errorMessageBlock.style.color = "red";
    errorMessageBlock.style.marginBottom = "15px"; // Adds space below the error
    errorMessageBlock.style.textAlign = "center"; // Centering text
}

function add (int1, int2) {
    return int1 + int2
}

function subtract (int1, int2) {
    return int1 - int2
}

function multiply (int1, int2) {
    return int1 * int2
}

function divide (int1, int2) {
    return parseInt(int1 / int2)
}

function modulo (int1, int2) {
    return int1 % int2
}