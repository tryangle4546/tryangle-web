// ==========================================================================
// محرك التفاعل والمؤثرات لموقع تراي أنجل للتكييف والتبريد
// ==========================================================================

const defaultAcSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150"><rect x="10" y="20" width="380" height="90" rx="10" fill="%23ffffff" stroke="%230062ac" stroke-width="3"/><rect x="15" y="105" width="370" height="8" rx="3" fill="%23cbd5e1"/><line x1="30" y1="85" x2="370" y2="85" stroke="%23f1f5f9" stroke-width="2"/><line x1="30" y1="95" x2="370" y2="95" stroke="%23e2e8f0" stroke-width="2"/><rect x="320" y="40" width="40" height="15" rx="3" fill="%23f39200"/><circle cx="330" cy="47" r="2.5" fill="%23ffffff"/><circle cx="340" cy="47" r="2.5" fill="%23ffffff"/><path d="M 60 115 Q 70 135 80 115 T 100 115 T 120 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 180 115 Q 190 135 200 115 T 220 115 T 240 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 280 115 Q 290 135 300 115 T 320 115 T 340 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><text x="140" y="65" fill="%230062ac" font-family="Segoe UI, Cairo, sans-serif" font-weight="800" font-size="14">تراي أنجل للتكييف</text></svg>`;

document.addEventListener("DOMContentLoaded", () => {

  // 1. نظام جزيئات التبريد التفاعلية في الهيرو (Hero Air Canvas)
  initHeroAirCanvas();

  // 2. التحكم في القائمة المتجاوبة للهواتف وتثبيت الهيدر (Navigation)
  initNavigation();

  // 3. عرض وتبديل المنتجات (Store Grid - ثابتة ومستقرة تماماً)
  initProductsGrid();

  // 4. نظام كارت وسائل الدفع التفاعلي (Payment Showcase)
  initPaymentShowcase();

  // 5. نموذج تواصل معنا
  initContactForm();

  // 6. استمارة طلب التكييف وحجز الصيانة عبر الواتساب (WhatsApp Dispatch)
  initOrderAndMaintenanceForms();

  // 7. إدارة شاشة التحميل المسبق وحركات الدخول (Preloader & Reveal)
  initIntroAndScrollReveal();

  // 8. التحكم في الأسئلة الشائعة (FAQ Accordion)
  initFaqAccordion();

  // 9. الأزرار العائمة ومؤشر تقدم التمرير (Floating Actions)
  initFloatingActions();
});

/* ==========================================================================
   1. محرك جزيئات الهواء والتبريد (Hero Air Canvas)
   ========================================================================== */
function initHeroAirCanvas() {
  const canvas = document.getElementById("heroAirCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resizeCanvas() {
    const parent = canvas.parentElement;
    if (!parent) return;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 60);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.6 + 0.3,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.15,
      color: Math.random() > 0.3 ? "#00b4d8" : "#f39200"
    });
  }

  function renderAir() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
      if (p.y > height) p.y = 0;
      if (p.y < 0) p.y = height;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(renderAir);
  }

  renderAir();
}

/* ==========================================================================
   2. التحكم في القائمة والتنقل (Navigation)
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.querySelector("header");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("header-scrolled");
    } else {
      header?.classList.remove("header-scrolled");
    }
    spyNavigation();
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function spyNavigation() {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  }
}

/* ==========================================================================
   3. عرض وتبديل المنتجات (Products Grid - ثابتة بدون اهتزاز)
   ========================================================================== */
function initProductsGrid() {
  const productsGrid = document.getElementById("productsGrid");
  const brandTabs = document.querySelectorAll(".brand-tab-btn");
  let currentBrand = "carrier";

  window.renderProducts = function(brand) {
    if (!productsGrid || typeof products === "undefined") return;

    productsGrid.style.opacity = 0;
    productsGrid.style.transform = "translateY(10px)";

    setTimeout(() => {
      const filtered = products.filter(p => p.brand === brand);
      productsGrid.innerHTML = "";

      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card"; // ثابت تماماً بدون 3D tilt

        const featuresHTML = product.features.map(f => `<li>${f}</li>`).join("");

        let capacityHTML = "";
        let initialPrice = 0;
        let initialId = "";
        let initialCapacity = "";

        if (product.variants && product.variants.length > 0) {
          initialPrice = product.variants[0].price;
          initialId = product.variants[0].id;
          initialCapacity = product.variants[0].capacity;

          const optionsHTML = product.variants.map((v, idx) => `<option value="${idx}">${v.capacity}</option>`).join("");
          capacityHTML = `
            <div class="variant-selector-wrapper">
              <span class="capacity-lbl">القدرة المطلوبة:</span>
              <select class="variant-select" onchange="changeProductVariant('${product.id}', this.value, this)">
                ${optionsHTML}
              </select>
            </div>
          `;
        } else {
          initialPrice = product.price;
          initialId = product.id;
          initialCapacity = product.capacity;
          capacityHTML = `<span class="product-capacity-tag">${product.capacity}</span>`;
        }

        const formattedPrice = initialPrice.toLocaleString("ar-EG");
        const galleryItems = Array.isArray(product.gallery) && product.gallery.length > 0
          ? product.gallery
          : [{ src: product.image, label: "صورة المنتج" }];

        const galleryThumbsHTML = galleryItems.map((item, index) => `
          <button type="button" class="product-thumb ${index === 0 ? "active" : ""}" data-gallery-index="${index}" aria-label="عرض ${item.label}">
            <img src="${item.src}" alt="${item.label}" loading="lazy">
          </button>
        `).join("");

        const specsHTML = (product.specs || []).map(spec => `
          <div class="product-spec-item">
            <span>${spec.label}</span>
            <strong>${spec.value}</strong>
          </div>
        `).join("");

        const initialModelCode = product.modelCodes?.[initialCapacity] || "متعدد حسب القدرة";

        card.innerHTML = `
          <div class="product-img-wrapper product-gallery" data-gallery-count="${galleryItems.length}">
            <div class="product-image-stage">
              <img src="${galleryItems[0].src}" alt="${galleryItems[0].label}" class="product-img" loading="lazy">
              <div class="product-gallery-count"><span aria-hidden="true">▣</span> ${galleryItems.length} صور</div>
            </div>
            <button type="button" class="gallery-nav gallery-prev" data-gallery-action="prev" aria-label="الصورة السابقة">‹</button>
            <button type="button" class="gallery-nav gallery-next" data-gallery-action="next" aria-label="الصورة التالية">›</button>
            <div class="product-badges">
              ${product.inverter ? '<span class="badge-inverter">إنفرتر موفر</span>' : ''}
              <span class="badge-type">${product.type}</span>
            </div>
            <div class="product-thumbnails">
              ${galleryThumbsHTML}
            </div>
          </div>
          <div class="product-info">
            ${capacityHTML}
            <div class="product-model-row">
              <span>كود الموديل:</span>
              <span class="product-model-code">${initialModelCode}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-specs">
              <div class="product-specs-heading">✦ مواصفات المنتج</div>
              <div class="product-specs-grid">${specsHTML}</div>
            </div>
            <ul class="product-features-list">
              ${featuresHTML}
            </ul>
            <div class="product-footer">
              <div class="price-container">
                <span class="price-lbl">سعر الكاش</span>
                <span class="price-val">${formattedPrice} <span class="price-currency">ج.م</span></span>
              </div>
              <button class="btn btn-primary order-btn btn-glow" onclick="openOrderModal('${initialId}')">اطلب الآن</button>
            </div>
          </div>
        `;

        const productImage = card.querySelector(".product-img");
        const galleryElement = card.querySelector(".product-gallery");
        const thumbnailButtons = card.querySelectorAll(".product-thumb");

        const setProductImage = (index) => {
          const safeIndex = (index + galleryItems.length) % galleryItems.length;
          const selected = galleryItems[safeIndex];
          if (productImage) {
            productImage.src = selected.src;
            productImage.alt = selected.label;
          }
          thumbnailButtons.forEach((thumb, thumbIndex) => {
            thumb.classList.toggle("active", thumbIndex === safeIndex);
          });
          if (galleryElement) galleryElement.dataset.galleryIndex = String(safeIndex);
        };

        if (galleryElement) {
          galleryElement.addEventListener("click", (event) => {
            const control = event.target.closest("[data-gallery-index], [data-gallery-action]");
            if (!control) return;
            const currentIndex = Number(galleryElement.dataset.galleryIndex || 0);
            if (control.dataset.galleryAction === "prev") setProductImage(currentIndex - 1);
            if (control.dataset.galleryAction === "next") setProductImage(currentIndex + 1);
            if (control.dataset.galleryIndex !== undefined) setProductImage(Number(control.dataset.galleryIndex));
          });
        }

        productsGrid.appendChild(card);
      });

      productsGrid.style.opacity = 1;
      productsGrid.style.transform = "translateY(0)";
    }, 200);
  };

  brandTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      brandTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentBrand = tab.getAttribute("data-brand");
      renderProducts(currentBrand);
    });
  });

  renderProducts(currentBrand);
}

// دالة تغيير القدرة للموديل
window.changeProductVariant = function(productId, variantIndex, selectElement) {
  if (typeof products === "undefined") return;
  const product = products.find(p => p.id === productId);
  if (!product || !product.variants) return;

  const variant = product.variants[variantIndex];
  if (!variant) return;

  const card = selectElement.closest(".product-card");
  if (!card) return;

  const priceVal = card.querySelector(".price-val");
  if (priceVal) {
    priceVal.innerHTML = `${variant.price.toLocaleString("ar-EG")} <span class="price-currency">ج.م</span>`;
  }

  const modelCode = card.querySelector(".product-model-code");
  if (modelCode) {
    modelCode.textContent = product.modelCodes?.[variant.capacity] || "متعدد حسب القدرة";
  }

  const orderBtn = card.querySelector(".order-btn");
  if (orderBtn) {
    orderBtn.setAttribute("onclick", `openOrderModal('${variant.id}')`);
  }
};

/* ==========================================================================
   4. نظام كارت وسائل الدفع التفاعلي (Payment Showcase)
   ========================================================================== */
function initPaymentShowcase() {
  const interactiveCard = document.getElementById("interactivePaymentCard");
  const card3dLogoBadge = document.getElementById("card3dLogoBadge");
  const card3dTagline = document.getElementById("card3dTagline");
  const card3dNumber = document.getElementById("card3dNumber");
  const paymentCards = document.querySelectorAll(".payment-method-card");

  const paymentData = {
    instapay: {
      theme: "instapay-theme",
      logo: '<span class="badge-text-logo" style="color: #ff4db8;">InstaPay</span>',
      tagline: "شبكة المدفوعات اللحظية IPN - تحويل فوري 24/7",
      number: "<span>IPA:</span> <span>user@instapay</span>"
    },
    vodafone: {
      theme: "vodafone-theme",
      logo: '<span class="badge-text-logo" style="color: #ff4444;">Vodafone Cash</span>',
      tagline: "المحافظ الإلكترونية: فودافون / أورانج / اتصالات / WE",
      number: "<span>WALLET:</span> <span>010 6169 4024</span>"
    },
    cod: {
      theme: "cod-theme",
      logo: '<span class="badge-text-logo" style="color: #f39200;">Cash On Delivery</span>',
      tagline: "ادفع بعد التركيب والمعاينة الفنية بالموقع 100%",
      number: "<span>ضمان المعاينة:</span> <span>سداد بعد الاستلام</span>"
    },
    cards: {
      theme: "cards-theme",
      logo: '<span class="badge-text-logo" style="color: #38bdf8;">VISA / meeza / valU</span>',
      tagline: "تقسيط مريح يصل حتى 36 شهر بالتعاون مع البنوك المعتمدة",
      number: "<span>••••</span> <span>••••</span> <span>••••</span> <span>2026</span>"
    }
  };

  paymentCards.forEach(card => {
    card.addEventListener("click", () => {
      paymentCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const type = card.getAttribute("data-payment-type");
      const config = paymentData[type];

      if (interactiveCard && config) {
        interactiveCard.className = `payment-card-3d ${config.theme}`;
        if (card3dLogoBadge) card3dLogoBadge.innerHTML = config.logo;
        if (card3dTagline) card3dTagline.textContent = config.tagline;
        if (card3dNumber) card3dNumber.innerHTML = config.number;
      }
    });
  });
}

/* ==========================================================================
   5. استمارات الطلب والصيانة وتنسيق رسائل الواتساب
   ========================================================================== */
const orderModal = document.getElementById("orderModal");

window.openOrderModal = function(productId) {
  if (typeof products === "undefined" || !orderModal) return;

  let product = products.find(p => p.id === productId);
  let selectedCapacity = "";
  let selectedPrice = 0;

  if (!product) {
    for (const p of products) {
      if (p.variants) {
        const variant = p.variants.find(v => v.id === productId);
        if (variant) {
          product = p;
          selectedCapacity = variant.capacity;
          selectedPrice = variant.price;
          break;
        }
      }
    }
  } else {
    selectedCapacity = product.capacity;
    selectedPrice = product.price;
  }

  if (!product) return;

  document.getElementById("orderProductId").value = productId;
  document.getElementById("modalAcName").textContent = product.name;
  document.getElementById("modalAcMeta").textContent = `${selectedCapacity} | ${product.type} ${product.inverter ? ' | إنفرتر موفر' : ''}`;
  document.getElementById("modalAcPrice").textContent = `${selectedPrice.toLocaleString("ar-EG")} ج.م`;

  orderModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeOrderModal = function() {
  if (orderModal) {
    orderModal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

document.getElementById("modalCloseBtn")?.addEventListener("click", window.closeOrderModal);
orderModal?.addEventListener("click", (e) => {
  if (e.target === orderModal) window.closeOrderModal();
});

function initOrderAndMaintenanceForms() {
  const whatsappNumber = "201061694024";

  // نموذج الطلب
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const productId = document.getElementById("orderProductId").value;
      const clientName = document.getElementById("clientName").value;
      const clientPhone = document.getElementById("clientPhone").value;
      const clientAddress = document.getElementById("clientAddress").value;
      const clientNotes = document.getElementById("clientNotes").value || "لا توجد ملاحظات إضافية";
      const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "كاش عند الاستلام (Cash on Delivery)";

      let product = products.find(p => p.id === productId);
      let selectedCapacity = "";
      let selectedPrice = 0;

      if (!product) {
        for (const p of products) {
          if (p.variants) {
            const variant = p.variants.find(v => v.id === productId);
            if (variant) {
              product = p;
              selectedCapacity = variant.capacity;
              selectedPrice = variant.price;
              break;
            }
          }
        }
      } else {
        selectedCapacity = product.capacity;
        selectedPrice = product.price;
      }

      if (!product) return;

      const messageText = `السلام عليكم ورحمة الله وبركاته،
أرغب في طلب تكييف من مكتب *تراي أنجل للتكييف والتبريد*:

*📦 تفاصيل التكييف المطلوب:*
- *الموديل:* ${product.name}
- *الماركة:* ${product.brand === 'carrier' ? 'كاريير (Carrier)' : 'ميديا (Midea)'}
- *القدرة:* ${selectedCapacity}
- *النوع:* ${product.type}
- *السعر الإجمالي:* ${selectedPrice.toLocaleString("ar-EG")} جنيه مصري
- *طريقة الدفع:* ${selectedPayment}

*👤 بيانات العميل للتركيب والتوصيل:*
- *الاسم بالكامل:* ${clientName}
- *رقم الهاتف:* ${clientPhone}
- *العنوان بالتفصيل:* ${clientAddress}
- *ملاحظات التركيب:* ${clientNotes}

شكراً لكم، أرجو التواصل لتأكيد موعد المعاينة والتركيب.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      closeOrderModal();
      showToast("تم تسجيل طلبك بنجاح! جاري فتح محادثة الواتساب...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      orderForm.reset();
    });
  }

  // نموذج الصيانة
  const maintForm = document.getElementById("maintenanceForm");
  if (maintForm) {
    maintForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("maintName").value;
      const phone = document.getElementById("maintPhone").value;
      const gov = document.getElementById("maintGov").value;
      const service = document.getElementById("maintService").value;
      const date = document.getElementById("maintDate").value;
      const address = document.getElementById("maintAddress").value;
      const desc = document.getElementById("maintDesc").value || "لا توجد متطلبات إضافية";

      const messageText = `السلام عليكم ورحمة الله وبركاته،
أرغب في حجز موعد صيانة من موقع *تراي أنجل للتكييف والصيانة*:

*🛠️ تفاصيل طلب الصيانة:*
- *نوع الخدمة:* ${service}
- *تاريخ الزيارة المفضل:* ${date}

*👤 بيانات العميل للتواصل والزيارة:*
- *الاسم بالكامل:* ${name}
- *رقم الهاتف:* ${phone}
- *المحافظة:* ${gov}
- *العنوان بالتفصيل:* ${address}
- *وصف المشكلة / تفاصيل إضافية:* ${desc}

شكراً لكم، أرجو التواصل لتأكيد موعد الحضور.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      showToast("تم إرسال طلب الصيانة بنجاح! جاري فتح محادثة الواتساب للتأكيد...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      maintForm.reset();
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("تم إرسال رسالتك بنجاح! وسنتواصل معك قريباً.");
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   6. الأسئلة الشائعة وشاشة التحميل والكشف عند التمرير
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
          }
        });

        if (isActive) {
          item.classList.remove("active");
          answer.style.maxHeight = "0px";
        } else {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  });
}

function initIntroAndScrollReveal() {
  const preloader = document.getElementById("preloader");
  const entryHeader = document.querySelector(".entry-header");
  const entryTargets = document.querySelectorAll(".reveal-fade");

  function startIntro() {
    if (entryHeader) entryHeader.classList.add("is-visible");

    entryTargets.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("revealed");
      }, 120 + (index * 80));
    });

    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 120);
      setTimeout(() => {
        preloader.remove();
      }, 700);
    }
  }

  requestAnimationFrame(() => {
    setTimeout(startIntro, 120);
  });

  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("revealed"));
  }
}

/* ==========================================================================
   7. الأزرار العائمة ومؤشر التقدم (Floating Actions Suite)
   ========================================================================== */
function initFloatingActions() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const circle = document.getElementById("scrollProgressCircle");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, (scrollTop / (docHeight || 1)) * 100));

    if (circle) {
      circle.style.strokeDasharray = `${progress}, 100`;
    }

    if (scrollTop > 300) {
      backToTopBtn?.classList.add("show");
    } else {
      backToTopBtn?.classList.remove("show");
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showToast(message) {
  const toastSuccess = document.getElementById("toastSuccess");
  const toastSuccessMsg = document.getElementById("toastSuccessMsg");
  if (!toastSuccess || !toastSuccessMsg) return;

  toastSuccessMsg.textContent = message;
  toastSuccess.classList.add("show");

  setTimeout(() => {
    toastSuccess.classList.remove("show");
  }, 4000);
}
