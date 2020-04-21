class ProfileData {
  constructor(CardId, Exp, Cvv, HolderName) {
    this.CardId = CardId;
    this.Exp = Exp;
    this.Cvv = Cvv;
    this.HolderName = HolderName;

    this.verified = CardId ? true : false;
  }
  // {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}
  buildJson(token) {
    return {
      cardNumber: this.CardId,
      expiryDate: this.Exp,
      cardName: this.HolderName,
      cvc: this.Cvv,
      token: token,
    };
  }
}

export default ProfileData;
