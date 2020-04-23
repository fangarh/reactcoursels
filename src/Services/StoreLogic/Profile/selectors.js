export const expDateFormated = (state) => {
  let datePart = state.profile.profile.Exp;

  if (!datePart) return null;

  let parts = datePart.split("/");
  let dateString = parts[0] + "/01/" + parts[1];
  return new Date(dateString);
};

export const expProfileError = (state) => {
  return state.profile.error ? state.profile.error : "";
};

export const getProfile = (state) => state.profile.profile;
