// Function untuk membaca data dari form
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

// Function untuk validasi nomer
function isNumber(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (isNaN(Number(inputString[i]))) {
      return false;
    }
  }
  return true;
}

// Function untuk validasi checkbox
function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  if (statusCheckbox) {
    return statusCheckbox.checked;
  }
  return false;
}

// Function untuk validasi seluruh input didalam form
function validateFormData(formData) {
  if (
    formData !== null &&
    !isNaN(Number(formData.zipCode)) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

// Function untuk validasi form
function submit() {
  const formData = handleGetFormData();
  const validasi = validateFormData(formData);

  if (validasi == false) {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").textContent = "";
  }
}
const button = document.getElementById("submit-form");

button.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
