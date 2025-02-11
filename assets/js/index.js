// I created an object literal called `salon` to store the salon's information.
// This helps organize the salon's details in one place and makes it easy to display on `index.html`.
const salon = {
    name: "Groomi by Descoteaux",
    address: {
        street: "0209 Descoteaux Lane",
        city: "Laurent City",
        zip: "22100"
    },
    phone: "(888) 321-7654"
};

/**
 * This function displays the salon's information dynamically on `index.html`.
 * I chose to use `innerHTML` so the details can be updated easily if needed.
 */
function displaySalonInfo() {
    document.getElementById('salonInfo').innerHTML = `
        <h2>Welcome to ${salon.name}</h2>
        <p>Located at: ${salon.address.street}, ${salon.address.city}, ZIP ${salon.address.zip}</p>
        <p>Contact us at: ${salon.phone}</p>
    `;
}

// I am using `const` for the `pets` array because I do not want to accidentally reassign it.
// However, `const` still allows me to modify the contents (like adding new pets using .push()).
const pets = [
    new Pet('Buddy', 3, 'Male', 'Golden Retriever', 'Grooming', 'Dog'),
    new Pet('Mittens', 2, 'Female', 'Siamese Cat', 'Nail Clipping', 'Cat'),
    new Pet('Rex', 5, 'Male', 'Bulldog', 'Bathing', 'Dog')
];

/**
 * This function calculates and displays the total number of registered pets.
 * I used `getElementById()` to dynamically update the pet count in the HTML.
 */
function displayPetCount() {
    document.getElementById('petCount').textContent = `Total Registered Pets: ${pets.length}`;
}

/**
 * This function loops through the `pets` array and dynamically displays each pet's name in the HTML.
 * I chose to clear the list each time (`innerHTML = ''`) to prevent duplicates when updating the display.
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
 * The `Pet` constructor function is used to create pet objects dynamically.
 * I structured this to ensure that all pets have the same properties when registered.
 */
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

/**
 * This function runs when the page loads to initialize the displayed data.
 * It ensures that the pet count, pet names, and salon info appear dynamically.
 */
document.addEventListener('DOMContentLoaded', () => {
    displaySalonInfo();  // Display salon information
    displayPetCount();   // Show total registered pets
    displayPetNames();   // Show pet names dynamically
});