const graphQL_API = "http://localhost:9000";

const getGreeting = async () => {
  const response = await fetch(graphQL_API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {                                        # same as: "query {"   # query is default 
          greeting
          age
        }
      `,
    }),
  });

  const { data } = await response.json();

  return data;
};

setTimeout(() => {
  getGreeting().then((data) => {
    console.log(data);
  });
}, 500);
