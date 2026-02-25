// main.js

document.addEventListener('DOMContentLoaded', () => {
              // Reveal elements on scroll using Intersection Observer
              const revealElements = document.querySelectorAll('.project-card, .glass-panel, .hero-content');

              // Initial state before observation
              revealElements.forEach(el => {
                            el.style.opacity = '0';
                            el.style.transform = 'translateY(30px)';
                            el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
              });

              // We don't want to hide hero content on first load if it's visible, so handle it specifically:
              const heroContent = document.querySelector('.hero-content');
              if (heroContent) {
                            setTimeout(() => {
                                          heroContent.style.opacity = '1';
                                          heroContent.style.transform = 'translateY(0)';
                            }, 100);
              }

              const revealObserver = new IntersectionObserver((entries, observer) => {
                            entries.forEach(entry => {
                                          if (entry.isIntersecting) {
                                                        entry.target.style.opacity = '1';
                                                        entry.target.style.transform = 'translateY(0)';
                                                        observer.unobserve(entry.target);
                                          }
                            });
              }, {
                            threshold: 0.15,
                            rootMargin: '0px 0px -50px 0px'
              });

              document.querySelectorAll('.project-card, .glass-panel').forEach(el => {
                            revealObserver.observe(el);
              });
});
