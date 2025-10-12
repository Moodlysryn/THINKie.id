// Fungsi untuk menampilkan popup dari halaman manapun
function openPopup(pageName) {
  const popup = document.getElementById("popupOverlay");
  const popupContent = document.getElementById("popupContent");

  popup.style.display = "flex";

  // Kalau kamu ingin kontennya beda di setiap halaman, ubah berdasarkan pageName
  if (pageName === "private-note") {
    popupContent.querySelector("h2").textContent = "Private Note Folder";
  } else if (pageName === "private-list") {
    popupContent.querySelector("h2").textContent = "Private List Folder";
  } else if (pageName === "public-note") {
    popupContent.querySelector("h2").textContent = "Public Note Folder";
  } else if (pageName === "public-list") {
    popupContent.querySelector("h2").textContent = "Public List Folder";
  }

  // Tombol cancel
  const cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.onclick = () => {
    popup.style.display = "none";
  };
}
