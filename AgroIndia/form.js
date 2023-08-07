function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  var password2 = document.myform.password2.value;
  var n = document.myform.num.value;
  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (name == null || name == NaN) {
    alert("Name can't be blank");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if (password != password2) {
    alert("password must be same!");
    return false;
  }
  if (isNaN(n)) {
    alert("please enter a number!");
    return false;
  }
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address");
    return false;
  } else {
    return true;
  }
}
