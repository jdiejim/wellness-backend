class UserLogin {
  constructor({ id, first_name, last_name, email, avatar }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.avatar = avatar;
  }
}

module.exports = { UserLogin };
