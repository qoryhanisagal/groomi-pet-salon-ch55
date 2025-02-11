/**
 * I created a `Pet` constructor function to ensure that every pet object
 * follows the same structure. This allows for better organization when adding
 * new pets dynamically.
 */
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type; // I added `type` so I can categorize pets (e.g., Dog, Cat, Bird).
}

/**
 * I created an array called `pets` to store all registered pets.
 * Instead of using object literals like before, I am now using the `Pet` constructor.
 */
const pets = [
    new Pet('Buddy', 3, 'Male', 'Golden Retriever', 'Grooming', 'Dog'),
    new Pet('Mittens', 2, 'Female', 'Siamese Cat', 'Nail Clipping', 'Cat'),
    new Pet('Rex', 5, 'Male', 'Bulldog', 'Bathing', 'Dog')
];

/**
 * This function registers a new pet when the form is submitted.
 * It retrieves user input, validates it, creates a `Pet` object, and adds it to the array.
 */
function registerPet(event) {
    event.preventDefault(); // I use `preventDefault()` to stop the page from refreshing after form submission.

    // Retrieve user input values from the form
    const name = document.getElementById('petName').value;
    const age = parseInt(document.getElementById('petAge').value, 10);
    const gender = document.getElementById('petGender').value;
    const service = document.getElementById('petService').value;
    const breed = document.getElementById('petBreed').value;
    const type = document.getElementById('petType').value; // This ensures the pet type is selected.

    /**
     * Input validation:
     * - Ensures name and breed fields are not empty.
     * - Ensures age is a positive number.
     * - If validation fails, an alert message is shown and the function stops.
     */
    if (name.trim() === '' || breed.trim() === '' || isNaN(age) || age <= 0) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // I create a new pet using the `Pet` constructor with the user input values.
    const newPet = new Pet(name, age, gender, breed, service, type);

    // I push the new pet into the `pets` array so it is stored.
    pets.push(newPet);

    // Clear form inputs so that the form is reset after submission.
    document.getElementById('petForm').reset();

    // Update pet count and name list dynamically so the UI reflects the new registration.
    displayPetCount();
    displayPetNames();
}

/**
 * I use an event listener to ensure that functions run only after the page has fully loaded.
 * This prevents errors when trying to access DOM elements before they exist.
 */
document.addEventListener('DOMContentLoaded', () => {
    displayPetCount(); // Display total registered pets
    displayPetNames(); // Display list of registered pet names

    // Attach form submission event listener to `registerPet()`
    const petForm = document.getElementById('petForm');
    if (petForm) {
        petForm.addEventListener('submit', registerPet);
    }
});