function age() {
  // Get input values
  const day = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  var spb = document.querySelector('.form_area');

  // Get current date
  const currentDate = new Date();

  // Validate inputs
  let validInputs = true;

  // Validate day
  if ( day < 1 || day > 31) {
    validInputs = false;
    document.querySelector("label[for='date']").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".d-wrong").removeAttribute("hidden");
    document.getElementById("date").style.border = " .5px solid hsl(0, 100%, 67%)"
    spb.style.paddingBottom = '0rem';
  } else {
    document.querySelector("label[for='date']").style.color = "";
    document.getElementById("date").style.border = "";
    document.querySelector(".d-wrong").setAttribute("hidden", true);
  }

  // Validate month
  if (month < 1 || month > 12) {
    validInputs = false;
    document.querySelector("label[for='month']").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".m-wrong").removeAttribute("hidden");
    spb.style.paddingBottom = '0rem';
    document.getElementById("month").style.border = " .5px solid hsl(0, 100%, 67%)"
  } else {
    document.querySelector("label[for='month']").style.color = "";
    document.getElementById("month").style.border = "";
    document.querySelector(".m-wrong").setAttribute("hidden", true);
  }

  // Validate year
  if (year >= currentDate.getFullYear()) {
    validInputs = false;
    document.querySelector("label[for='year']").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".y-wrong").removeAttribute("hidden");
    spb.style.paddingBottom = '0rem';
    document.getElementById("year").style.border = " .5px solid hsl(0, 100%, 67%)"
  } else {
    document.querySelector("label[for='year']").style.color = "";
    document.getElementById("year").style.border = "";
    document.querySelector(".y-wrong").setAttribute("hidden", true);
  }

// If any input field is empty, show the empty message
if (!day) {
  validInputs = false;
  document.querySelector("label[for='date']").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("date").style.border = " .5px solid hsl(0, 100%, 67%)";
  document.querySelector(".d-empty").removeAttribute("hidden");
  spb.style.paddingBottom = '0rem';
} else {
  document.querySelector(".d-empty").setAttribute("hidden", true);
  document.getElementById("date").style.border = "";
}
if (!month) {
  validInputs = false;
  document.querySelector("label[for='month']").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("month").style.border = " .5px solid hsl(0, 100%, 67%)"
  document.querySelector(".m-empty").removeAttribute("hidden");
  spb.style.paddingBottom = '0rem';
} else {
  document.querySelector(".m-empty").setAttribute("hidden", true);
  document.getElementById("month").style.border = ""
}

if (!year) {
  validInputs = false;
  document.querySelector("label[for='year']").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("year").style.border = " .5px solid hsl(0, 100%, 67%)"
  document.querySelector(".y-empty").removeAttribute("hidden");
  spb.style.paddingBottom = '0rem';
} else {
  document.querySelector(".y-empty").setAttribute("hidden", true);
  document.getElementById("year").style.border = " .5px solid hsl(0, 100%, 67%)"
}

if (validInputs) {
  // Calculate age
  const birthDate = new Date(year, month - 1, day);
  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  // Display age
  document.getElementById("yr_out").textContent = years;
  document.getElementById("month_out").textContent = months;
  document.getElementById("date_out").textContent = days;
}
}
