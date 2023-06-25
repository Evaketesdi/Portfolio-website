class PortfolioImage {
    constructor(element) {
      this.element = element;
      this.originalWidth = null;
      this.originalHeight = null;
      this.scaleFactor = 1.2;

      this.element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    handleMouseEnter() {
      this.originalWidth = this.element.offsetWidth;
      this.originalHeight = this.element.offsetHeight;

      this.element.style.transform = `scale(${this.scaleFactor})`;
      this.element.style.transition = 'transform 0.3s';
      const otherImages = Array.from(document.querySelectorAll('.portfolio-image')).filter(img => img !== this.element);
      otherImages.forEach(img => {
        img.style.opacity = '0.2';
        img.style.transition = 'opacity 0.3s';
      });
    }

    handleMouseLeave() {
      this.element.style.transform = 'none';
      this.element.style.transition = 'transform 0.3s';

      const otherImages = Array.from(document.querySelectorAll('.portfolio-image')).filter(img => img !== this.element);
      otherImages.forEach(img => {
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s';
      });
    }
  }

  const portfolioImages = Array.from(document.querySelectorAll('.portfolio-image'));
  portfolioImages.forEach(image => new PortfolioImage(image));