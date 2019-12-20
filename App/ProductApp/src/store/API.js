const url = "http://localhost:1337/api/products"; // url

export const fetchData = (page,size) =>
  fetch(`${url}?page=${page}&size=${size}`)
    .then(res => {
      console.log(res)
      return res.json()})
    .then(res => {
      console.log(res)
      return res
    });
