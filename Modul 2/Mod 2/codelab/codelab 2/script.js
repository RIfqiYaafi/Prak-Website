function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  let message = "";

  if (nama === "") {
    message += "Nama harus diisi.\n";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    message += "Email harus diisi.\n";
  } else if (!emailPattern.test(email)) {
    message += "Email tidak valid.\n";
  }

  if (alamat === "") {
    message += "Alamat harus diisi.\n";
  }

  if (message !== "") {
    alert(message);
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
