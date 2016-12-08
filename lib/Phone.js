function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  }

Phone.prototype.callPhone = function(phoneNumber) {
  return this.phoneNumber + ' calls ' + phoneNumber;
};
/*
let phone_number = new Phone(5555555).callPhone();
let other_phone = new Phone(4444444).callPhone();
*/
module.exports = Phone;