function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  // Tampilkan tombol scroll ke atas
  window.onscroll = function () {
    var scrollButton = document.querySelector('.scroll-top-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };