// ==========================================================================
// محرك التفاعل والمؤثرات ثلاثية الأبعاد لموقع تراي أنجل للتكييف والتبريد
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

  // 1. نظام الجزيئات ثلاثية الأبعاد التفاعلية في الهيرو (3D Air Flow Canvas)
  initHeroAirCanvas();

  // 2. محرك التدوير ثلاثي الأبعاد المتقدم (Interactive 3D Tilt Engine)
  init3DTilt();

  // 3. التحكم في القائمة المتجاوبة للهواتف (Mobile Navigation)
  initNavigation();

  // 4. نظام تبديل طرق الدفع في السيكشن والمودال (Payments Showcase Engine)
  initPaymentShowcase();

  // 5. عرض وتبديل المنتجات والمتغيرات (Products & Variants Grid)
  initProductsGrid();

  // 6. التحكم في الأسئلة الشائعة (FAQ Accordion)
  initFaqAccordion();

  // 7. نماذج الطلب والصيانة وتنسيق رسائل الواتساب (Forms & WhatsApp Dispatch)
  initFormsHandler();

  // 8. محرك الكشف عند التمرير وحركات الدخول (Scroll Reveal Engine)
  initScrollReveal();

  // 9. الأزرار العائمة ومؤشر تقدم الصفحة (Floating Actions & Scroll Progress)
  initFloatingActions();
});

/* ==========================================================================
   1. محرك جزيئات الهواء والتبريد التفاعلي ثلاثي الأبعاد (Hero Canvas)
   ========================================================================== */
function initHeroAirCanvas() {
  const canvas = document.getElementById("heroAirCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
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

  // إنشاء الجزيئات
  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 75);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.8 + 0.3, // تدفق الهواء لليمين قليلاً
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.25 ? "#00b4d8" : "#f39200"
    });
  }

  function renderAir() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // تدوير عند الخروج من الشاشة
      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
      if (p.y > height) p.y = 0;
      if (p.y < 0) p.y = height;

      // التفاعل مع الماوس (دفع لطيف لجزيئات الهواء)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    requestAnimationFrame(renderAir);
  }

  renderAir();
}

/* ==========================================================================
   2. محرك التدوير والمؤثرات المجسمة 3D (Vanilla 3D Tilt)
   ========================================================================== */
function init3DTilt() {
  // تفعيل الـ 3D Tilt على الكروت
  function applyTilt(el) {
    if (!el || el.dataset.tiltActive) return;
    el.dataset.tiltActive = "true";

    const maxTilt = 12; // أقصى زاوية ميلان
    const perspective = 1000;

    el.style.transformStyle = "preserve-3d";
    el.style.perspective = `${perspective}px`;

    el.addEventListener("mouseenter", () => {
      el.style.transition = "transform 0.1s ease-out, box-shadow 0.2s ease";
    });

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease";
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  // تطبيق على جميع العناصر المحددة
  document.querySelectorAll("[data-tilt], .payment-method-card, .feature-card, .info-card, .hero-stat-card").forEach(applyTilt);

  // مراقبة العناصر التي تضاف ديناميكياً
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.hasAttribute("data-tilt") || node.classList.contains("product-card")) {
            applyTilt(node);
          }
          node.querySelectorAll?.("[data-tilt], .product-card").forEach(applyTilt);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

/* ==========================================================================
   3. التحكم في القائمة وشريط التنقل العلوي (Navigation)
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
    if (window.scrollY > 40) {
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
   4. نظام كارت الدفع التفاعلي ولوجو الشركات (Payments Showcase)
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
      logo: '<span class="badge-text-logo" style="background: linear-gradient(90deg, #ff007f, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">InstaPay</span>',
      tagline: "شبكة المدفوعات اللحظية IPN - تحويل فوري 24/7",
      number: "<span>IPA:</span> <span>user@instapay</span>"
    },
    vodafone: {
      theme: "vodafone-theme",
      logo: '<span class="badge-text-logo" style="color: #ff3333;">Vodafone Cash</span>',
      tagline: "المحافظ الذكية: فودافون / أورانج / اتصالات / WE",
      number: "<span>WALLET:</span> <span>010 6169 4024</span>"
    },
    cod: {
      theme: "cod-theme",
      logo: '<span class="badge-text-logo" style="color: #f39200;">Cash On Delivery</span>',
      tagline: "ادفع بعد التركيب والتجربة الفنية بالموقع 100%",
      number: "<span>ضمان المعاينة:</span> <span>سداد بعد الاستلام</span>"
    },
    cards: {
      theme: "cards-theme",
      logo: '<span class="badge-text-logo" style="color: #38bdf8;">VISA / meeza / valU</span>',
      tagline: "تقسيط مريح يصل حتى 36 شهر مع البنوك المعتمدة",
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
        // تحديث الكلاس للثيم الجديد
        interactiveCard.className = `payment-card-3d ${config.theme}`;
        if (card3dLogoBadge) card3dLogoBadge.innerHTML = config.logo;
        if (card3dTagline) card3dTagline.textContent = config.tagline;
        if (card3dNumber) card3dNumber.innerHTML = config.number;

        // نبض حركي للكارت
        interactiveCard.style.transform = "scale(1.05)";
        setTimeout(() => {
          interactiveCard.style.transform = "";
        }, 200);
      }
    });
  });

  // تحديث المؤشر في المودال عند تغيير طريقة الدفع
  const modalRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const modalSelectedLabel = document.getElementById("modalSelectedPaymentLabel");

  modalRadios.forEach(radio => {
    radio.addEventListener("change", function() {
      if (modalSelectedLabel) {
        const brand = this.getAttribute("data-brand");
        if (brand === "instapay") modalSelectedLabel.textContent = "إنستا باي (تحويل فوري)";
        else if (brand === "vodafone") modalSelectedLabel.textContent = "فودافون كاش ومحافظ";
        else if (brand === "cards") modalSelectedLabel.textContent = "فيزا / ميزة / تقسيط";
        else modalSelectedLabel.textContent = "كاش عند الاستلام";
      }
    });
  });
}

/* ==========================================================================
   5. عرض وتبديل المنتجات والمواصفات (Products Grid & Gallery)
   ========================================================================== */
function initProductsGrid() {
  const productsGrid = document.getElementById("productsGrid");
  const brandTabs = document.querySelectorAll(".brand-tab-btn");
  let currentBrand = "carrier";

  window.renderProducts = function(brand) {
    if (!productsGrid || typeof products === "undefined") return;

    productsGrid.style.opacity = "0";
    productsGrid.style.transform = "translateY(15px)";

    setTimeout(() => {
      const filtered = products.filter(p => p.brand === brand);
      productsGrid.innerHTML = "";

      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-tilt", "");

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
          capacityHTML = `<div class="variant-selector-wrapper"><span class="capacity-lbl">القدرة:</span><strong>${product.capacity}</strong></div>`;
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
              <div class="product-gallery-count">▣ ${galleryItems.length} صور</div>
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
              <div class="product-specs-heading">✦ المواصفات المعتمدة</div>
              <div class="product-specs-grid">${specsHTML}</div>
            </div>
            <ul class="product-features-list">
              ${featuresHTML}
            </ul>
            <div class="product-footer">
              <div class="price-container">
                <span class="price-lbl">سعر الكاش المعتمد</span>
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

      productsGrid.style.opacity = "1";
      productsGrid.style.transform = "translateY(0)";
    }, 150);
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

// دالة تغيير القدرة
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
   6. التحكم في المودال وإرسال الطلبات للواتساب (Modal & Forms)
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

function initFormsHandler() {
  const whatsappNumber = "201061694024";

  // 1. استمارة طلب التكييف
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const productId = document.getElementById("orderProductId").value;
      const clientName = document.getElementById("clientName").value;
      const clientPhone = document.getElementById("clientPhone").value;
      const clientAddress = document.getElementById("clientAddress").value;
      const clientNotes = document.getElementById("clientNotes").value || "لا توجد ملاحظات إضافية";
      const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "كاش عند الاستلام";

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

*❄️ تفاصيل التكييف المطلوب:*
• *الموديل:* ${product.name}
• *الماركة:* ${product.brand === 'carrier' ? 'كاريير (Carrier)' : 'ميديا (Midea)'}
• *القدرة:* ${selectedCapacity}
• *النوع:* ${product.type}
• *السعر الإجمالي:* ${selectedPrice.toLocaleString("ar-EG")} ج.م
• *طريقة الدفع المختارة:* 💳 ${selectedPayment}

*👤 بيانات العميل للتركيب والتوصيل:*
• *الاسم بالكامل:* ${clientName}
• *رقم الهاتف للتواصل:* ${clientPhone}
• *العنوان بالتفصيل:* ${clientAddress}
• *ملاحظات إضافية:* ${clientNotes}

شكراً لكم، أرجو التواصل لتأكيد موعد المعاينة والتركيب.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      closeOrderModal();
      showToast("تم تسجيل طلبك بنجاح! جاري فتح الواتساب...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1200);

      orderForm.reset();
    });
  }

  // 2. استمارة حجز الصيانة
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
أرغب في حجز موعد صيانة من *تراي أنجل للتكييف والصيانة*:

*🛠️ تفاصيل الخدمة المطلوبة:*
• *نوع الخدمة:* ${service}
• *تاريخ الزيارة المفضل:* ${date}

*👤 بيانات العميل:*
• *الاسم:* ${name}
• *رقم الهاتف:* ${phone}
• *المحافظة:* ${gov}
• *العنوان بالتفصيل:* ${address}
• *وصف العطل:* ${desc}

أرجو تأكيد الحضور في أقرب وقت.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      showToast("تم إرسال طلب الصيانة بنجاح! جاري فتح الواتساب...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1200);

      maintForm.reset();
    });
  }

  // 3. استمارة تواصل معنا السريعة
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value;
      const phone = document.getElementById("contactPhone").value;
      const msg = document.getElementById("contactMsg").value;

      const messageText = `رسالة استفسار جديدة من موقع تراي أنجل:
• الاسم: ${name}
• الهاتف: ${phone}
• الاستفسار: ${msg}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      showToast("تم إرسال رسالتك بنجاح! جاري فتح الواتساب...");
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1200);

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   7. الأسئلة الشائعة (FAQ Accordion)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove("active");
            other.querySelector(".faq-answer").style.maxHeight = "0px";
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

/* ==========================================================================
   8. محرك الكشف عند التمرير وحركات الدخول (Scroll Reveal)
   ========================================================================== */
function initScrollReveal() {
  const preloader = document.getElementById("preloader");
  const entryHeader = document.querySelector(".entry-header");
  const entryTargets = document.querySelectorAll(".reveal-fade");

  function startIntro() {
    if (entryHeader) entryHeader.classList.add("is-visible");

    entryTargets.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("revealed");
      }, 100 + i * 80);
    });

    if (preloader) {
      preloader.classList.add("fade-out");
      setTimeout(() => preloader.remove(), 600);
    }
  }

  requestAnimationFrame(() => {
    setTimeout(startIntro, 100);
  });

  const reveals = document.querySelectorAll(".scroll-reveal");
  if (reveals.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("revealed"));
  }
}

/* ==========================================================================
   9. الأزرار العائمة ومؤشر تقدم الصفحة (Floating Suite)
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

/* ==========================================================================
   10. التنبيه العائم (Toast Message)
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById("toastSuccess");
  const msgEl = document.getElementById("toastSuccessMsg");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
