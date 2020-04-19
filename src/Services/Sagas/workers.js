export function* logonWorker(params) {
  yield logon(params.payload.email, params.payload.password);
}

async function logon(login, password) {
  const response = await fetch(
    "https://loft-taxi.glitch.me/auth?username=" +
      login +
      "&password=" +
      password
  );

  var result = await response.json();

  console.log(result.token);
  console.log(result);

  return result;
}
