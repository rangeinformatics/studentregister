function loadInquiryHeader() {
  const school = getActiveSchool();
  if (!school) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("schoolHeader").innerHTML = `
    <h3>${school.name} – ${school.location}</h3>
    <img src="assets/logos/${school.logo}" height="60">
  `;
}

function saveInquiry() {
  const school = getActiveSchool();
  const key = `inquiries_${school.name}`;

  const list = JSON.parse(localStorage.getItem(key) || "[]");

  list.push({
    student: document.getElementById("studentName").value,
    parent: document.getElementById("parentName").value,
    mobile: document.getElementById("mobile").value,
    grade: document.getElementById("grade").value
  });

  localStorage.setItem(key, JSON.stringify(list));
  alert("Inquiry saved");
}
