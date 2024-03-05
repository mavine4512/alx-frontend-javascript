function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: JSON.stringify(success) });
    reject(Error("API not working"));
  });
}

export default getResponseFromAPI;
