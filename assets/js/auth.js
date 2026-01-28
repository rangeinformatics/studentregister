// LocalStorage key
const SCHOOL_KEY = "pndms_schools";
const ACTIVE_SCHOOL_KEY = "pndms_active_school";

// Load schools
function getSchools() {
  return JSON.parse(localStorage.getItem(SCHOOL_KEY) || "[]");
}

// Save schools
function saveSchools(list) {
  localStorage.setItem(SCHOOL_KEY, JSON.stringify(list));
}

// Register school
function registerSchool() {
  const name = document.getElementById("schoolName").value;
  const location = document.getElementById("location").value;
  const password = document.getElementById("password").value;
  const logo = document.getElementById("logoFile").value;

  const schools = getSchools();

  schools.push({ name, location, password, logo });
  saveSchools(schools);

  alert("School registered successfully. Upload logo manually to /assets/logos/");
  window.location.href = "index.html";
}

// Load dropdown
function loadSchoolDropdown() {
  const schools = getSchools();
  const select = document.getElementById("schoolSelect");

  schools.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = `${s.name} (${s.location})`;
    select.appendChild(opt);
  });
}

// Login
function loginSchool() {
  const name = document.getElementById("schoolSelect").value;
  const password = document.getElementById("password").value;

  const schools = getSchools();
  const school = schools.find(s => s.name === name);

  if (!school || school.password !== password) {
    alert("Invalid login");
    return;
  }

  localStorage.setItem(ACTIVE_SCHOOL_KEY, JSON.stringify(school));
  window.location.href = "student-register.html";
}

// Get active school
function getActiveSchool() {
  return JSON.parse(localStorage.getItem(ACTIVE_SCHOOL_KEY));
}
