const graphQL_API = "http://localhost:9000";

const getGreeting = async () => {
  const response = await fetch(graphQL_API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const { data } = await response.json();

  return data;
};

setTimeout(() => {
  getGreeting().then(({ greeting }) => {
    const header = document.querySelector("h1");
    header.textContent = greeting;
  });
}, 500);
