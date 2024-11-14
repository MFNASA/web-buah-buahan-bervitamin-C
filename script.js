function showContent(sectionId) {
    // Mengambil semua elemen dengan class 'content-section'
    const sections = document.querySelectorAll('.content-section');
    
    // Menyembunyikan semua section
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Menampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Menampilkan halaman "Home" secara default saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    showContent('home');
});
