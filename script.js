
// 1. Connect JavaScript to HTML

const loadButton = document.getElementById("loadUsers");

const userContainer = document.getElementById("userContainer");

// 2. Create a function to fetch users

async function getUsers() {

    userContainer.innerHTML = "Loading users...";

    try {

        // Request information from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check if the request was successful
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        // Convert the response into JavaScript data
        const users = await response.json();


        if (users.length === 0) {
            userContainer.innerHTML = "No users found.";
            return;
        }


        // 3. Display users on the webpage

        userContainer.innerHTML = "";

        users.forEach(function(user) {

            userContainer.innerHTML += `
                <div class="user-card">
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                </div>
            `;

        });


    } catch (error) {

        // Display an error message if something goes wrong
        userContainer.innerHTML = "Failed to load users. Please try again.";

        console.log(error);

    }

}


// 4. Make the button work

loadButton.addEventListener("click", getUsers);