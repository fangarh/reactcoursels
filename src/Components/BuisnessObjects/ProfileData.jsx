class ProfileData {
  constructor(CardId, Month, Year, HolderName) {
    this.CardId = CardId;
    this.Month = Month;
    this.Year = Year;
    this.HolderName = HolderName;

    this.verified = CardId ? true : false;
  }
  /*
  get Verified() {
    return this.verified;
  }

  set Verified(verified) {
    this.verified = verified;
  }*/
}

export default ProfileData;
