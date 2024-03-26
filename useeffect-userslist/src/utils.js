export const fetchUsersList = (count = 10) => {
  return fetch(`https://randomuser.me/api/?nat=gb&results=${count}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
