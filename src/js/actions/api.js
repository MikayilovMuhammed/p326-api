export const fetchMethod = async (url, method = "GET", data = {}) => {
  if (method === "GET") {
    return await fetch(url).then((res) => res.json());
  }

  return await fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
