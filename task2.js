// !Задание №2

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    const promisses = updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user);
    
    return Promise.all(promisses);
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);