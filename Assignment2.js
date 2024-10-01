// User group
const users = [
    { name: "Samuel Correa", email: "samuelcorrea@email.com", phone: "69696969", height: "171", weight: "67", country: "Panama"},
    { name: "Taehyun Oh", email: "taehyunoh@email.com", phone: "420420420", height: "178", weight: "79", country: "North Korea"},
    { name: "Victor Olarve", email: "victorolarve@email.com", phone: "10101010", height: "186", weight: "72", country: "Philippines"},
    { name: "Henry Dineros", email: "henrydineros@email.com", phone: "09682418332", height: "175", weight: "76", country: "Canada"},
    { name: "Uzumaki Naruto", email: "narutouzumaki@konoha.com", phone: "912343395", height: "177", weight: "69", country: "Japan"}
];

// filter users by height and weight
const filterUsers = (users) => {
    return users.filter(user => user.height >= 170 && user.height <= 190 && user.weight >= 60 && user.weight <= 80);
};

// map users to their  information
const mapUserInfo = (users) => {
    return users.map(user => ({
        name: user.name,
        email: user.email,
        phone: user.phone,
        height: user.height,
        weight: user.weight,
        country: user.country
    }));
};

// group users by country using reduce
const groupByCountry = (users) => {
    return users.reduce((groups, user) => {
        if (!groups[user.country]) {
            groups[user.country] = [];
        }
        groups[user.country].push(user);
        return groups;
    }, {});
};

// print user information
const printUserInfo = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}, Height: ${user.height}, Weight: ${user.weight}, Country: ${user.country}`);
};

// sort users by height in ascending order
const sortUsersByHeight = (users) => {
    return users.sort((a, b) => a.height - b.height);
};

// Main function with promises and async/await
const processUsers = async (users) => {
    try {
        // Filtering by height and weight
        const filteredUsers = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterUsers(users));
            }, 1000); // Simulating async operation
        });

        // Mapping users to extract necessary information
        const mappedUsers = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(mapUserInfo(filteredUsers));
            }, 500); // Simulating async operation
        });

        // Grouping users by country
        const groupedUsers = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(groupByCountry(mappedUsers));
            }, 500); // Simulating async operation
        });

        // sorting users within each country group by height
        Object.keys(groupedUsers).forEach(country => {
            groupedUsers[country] = sortUsersByHeight(groupedUsers[country]);
        });

        // printing the user information
        Object.values(groupedUsers).forEach(group => {
            group.forEach(printUserInfo);
        });
    } catch (error) {
        console.error("Error processing users:", error);
    }
};

// Call the main function
processUsers(users);