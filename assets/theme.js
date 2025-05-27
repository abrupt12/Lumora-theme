// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (mobileMenuToggle && siteNav) {
    mobileMenuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('is-active');
      mobileMenuToggle.setAttribute('aria-expanded', 
        mobileMenuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // Cart drawer functionality
  const cartIcon = document.querySelector('.site-header__icon[href="/cart"]');
  
  if (cartIcon) {
    cartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Fetch cart data
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          updateCartCount(cart.item_count);
        })
        .catch(error => console.error('Error:', error));
    });
  }

  function updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = count;
      cartCount.classList.toggle('hide', count === 0);
    }
  }

  // Product image gallery
  const productImages = document.querySelectorAll('.product-single__thumbnail');
  const mainImage = document.querySelector('.product-single__image');

  if (productImages.length && mainImage) {
    productImages.forEach(image => {
      image.addEventListener('click', function() {
        const newSrc = this.getAttribute('data-src');
        mainImage.setAttribute('src', newSrc);
        productImages.forEach(img => img.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
}); 