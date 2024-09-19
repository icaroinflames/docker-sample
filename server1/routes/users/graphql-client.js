module.exports = async ({ query, variables, headers = {} }) => {
  const hasuraHeaders = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "hasura",
    "x-hasura-role": "admin",
  };

  const gqlBody = {
    query,
    variables,
  };

  const gqlBodyString = JSON.stringify(gqlBody);

  console.log(query);
  console.log(JSON.stringify(variables));
  const response = await fetch("http://hasura-engine:8080/v1/graphql", {
    method: "POST",
    headers: { ...hasuraHeaders, ...headers },
    body: gqlBodyString,
  });

  return await response.json();
};
