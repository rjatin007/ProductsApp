const url = "http://localhost:1337/api/products"; // url

export const fetchData = (page,size) =>
  fetch(`${url}?page=${page}&size=${size}`)
    .then(res => res.json())
    .then(res => res);
