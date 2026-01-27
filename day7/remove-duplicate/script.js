function removeDuplicateUsers(users) {
  const map = new Map();

  for (let user of users) {
    if (!map.has(user.id)) {
      map.set(user.id, user);
    }
  }

  return Array.from(map.values());
}

console.log(removeDuplicateUsers([
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" },
  { id: 2, name: "B" }
]))