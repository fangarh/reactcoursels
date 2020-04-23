export async function fetchJsonGet(method, params, thr = false) {
  try {
    const response = await fetch(
      "https://loft-taxi.glitch.me/" + method + "?" + params,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (e) {
    console.log(e);
    if (thr) throw e;
  }
}

export async function fetchJson(json, method, thr = false) {
  try {
    const response = await fetch("https://loft-taxi.glitch.me/" + method, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });

    return await response.json();
  } catch (e) {
    console.log(e);
    if (thr) throw e;
  }
}
