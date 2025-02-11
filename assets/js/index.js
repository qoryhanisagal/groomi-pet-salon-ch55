// I am using `const` for the `pets` array because I want to prevent reassignment of the entire array.
// However, using `const` still allows me to modify its contents (e.g., adding new pets using .push()).
const pets = [
    { name: 'Buddy', age: 3, gender: 'Male', service: 'Grooming', breed: 'Golden Retriever' },
    { name: 'Mittens', age: 2, gender: 'Female', service: 'Nail Clipping', breed: 'Siamese Cat' },
    { name: 'Rex', age: 5, gender: 'Male', service: 'Bathing', breed: 'Bulldog' }
];

/**
 * Display the total number of registered pets.
 */
function displayPetCount() {
    document.getElementById('petCount').textContent = `Total Registered Pets: ${pets.length}`;
}

/**
 * Display pet names dynamically in the HTML.
 */
function displayPetNames() {
    const petNamesList = document.getElementById('petNamesList');
    petNamesList.innerHTML = ''; // Clear previous list

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        const listItem = document.createElement('li');
        listItem.textContent = pet.name;
        petNamesList.appendChild(listItem);
    }
}

/**
 * Initialize the page by displaying pet count and names.
 */
document.addEventListener('DOMContentLoaded', () => {
    displayPetCount();  // Show total registered pets
    displayPetNames();  // Show pet names dynamically
});