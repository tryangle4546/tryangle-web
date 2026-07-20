// تأثيرات التفاعل والتحكم في موقع تراي أنجل للتكييف والتبريد

// بيانات التكييف الافتراضية كـ SVG مدمج فائق الجودة لحين رفع صور حقيقية
const defaultAcSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150"><rect x="10" y="20" width="380" height="90" rx="10" fill="%23ffffff" stroke="%230062ac" stroke-width="3"/><rect x="15" y="105" width="370" height="8" rx="3" fill="%23cbd5e1"/><line x1="30" y1="85" x2="370" y2="85" stroke="%23f1f5f9" stroke-width="2"/><line x1="30" y1="95" x2="370" y2="95" stroke="%23e2e8f0" stroke-width="2"/><rect x="320" y="40" width="40" height="15" rx="3" fill="%23f39200"/><circle cx="330" cy="47" r="2.5" fill="%23ffffff"/><circle cx="340" cy="47" r="2.5" fill="%23ffffff"/><path d="M 60 115 Q 70 135 80 115 T 100 115 T 120 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 180 115 Q 190 135 200 115 T 220 115 T 240 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 280 115 Q 290 135 300 115 T 320 115 T 340 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><text x="140" y="65" fill="%230062ac" font-family="Segoe UI, Cairo, sans-serif" font-weight="800" font-size="14">تراي أنجل للتكييف</text></svg>`;

document.addEventListener("DOMContentLoaded", () => {
  // 1. التحكم في القائمة المتجاوبة للهواتف
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    
    // إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // 2. تغيير مظهر الهيدر عند التمرير (Shrink header on scroll)
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
    
    // تحديث الرابط النشط تلقائياً طبقاً لمكان التمرير (ScrollSpy)
    spyNavigation();
  });

  // 3. التنقل الفعال ونظام الـ ScrollSpy
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function spyNavigation() {
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  }

  // 4. عرض وتبديل المنتجات (Store Grid & Brand Tabs)
  const productsGrid = document.getElementById("productsGrid");
  const brandTabs = document.querySelectorAll(".brand-tab-btn");
  let currentBrand = "carrier"; // القيمة الافتراضية

  // دالة عرض المنتجات طبقاً للماركة المختارة
  function renderProducts(brand) {
    if (!productsGrid) return;
    
    // إخفاء الشبكة مؤقتاً لتأثير الحركة
    productsGrid.style.opacity = 0;
    productsGrid.style.transform = "translateY(10px)";
    
    setTimeout(() => {
      const filtered = products.filter(p => p.brand === brand);
      productsGrid.innerHTML = "";
      
      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // بناء قائمة المواصفات
        const featuresHTML = product.features.map(f => `<li>${f}</li>`).join("");
        
        // التحقق من وجود موديلات فرعية (Variants)
        let capacityHTML = "";
        let initialPrice = 0;
        let initialId = "";
        
        if (product.variants && product.variants.length > 0) {
          initialPrice = product.variants[0].price;
          initialId = product.variants[0].id;
          
          // بناء قائمة الاختيار الفرعية
          const optionsHTML = product.variants.map((v, idx) => `<option value="${idx}">${v.capacity}</option>`).join("");
          capacityHTML = `
            <div class="variant-selector-wrapper">
              <span class="capacity-lbl">القدرة المطلوبة:</span>
              <select class="variant-select select-custom" onchange="changeProductVariant('${product.id}', this.value, this)">
                ${optionsHTML}
              </select>
            </div>
          `;
        } else {
          initialPrice = product.price;
          initialId = product.id;
          capacityHTML = `<span class="product-capacity-tag">${product.capacity}</span>`;
        }
        
        const formattedPrice = initialPrice.toLocaleString("ar-EG");
        
        card.innerHTML = `
          <div class="product-img-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.onerror=null; this.src='${defaultAcSvg}';">
            <div class="product-badges">
              ${product.inverter ? '<span class="badge-inverter">إنفرتر موفر</span>' : ''}
              <span class="badge-type">${product.type}</span>
            </div>
          </div>
          <div class="product-info">
            ${capacityHTML}
            <h3 class="product-name">${product.name}</h3>
            <ul class="product-features-list">
              ${featuresHTML}
            </ul>
            <div class="product-footer">
              <div class="price-container">
                <span class="price-lbl">سعر الكاش</span>
                <span class="price-val">${formattedPrice} <span class="price-currency">ج.م</span></span>
              </div>
              <button class="btn btn-primary order-btn" onclick="openOrderModal('${initialId}')">اطلب الآن</button>
            </div>
          </div>
        `;
        
        productsGrid.appendChild(card);
      });
      
      // إظهار الشبكة مع تأثير الحركة
      productsGrid.style.opacity = 1;
      productsGrid.style.transform = "translateY(0)";
    }, 200);
  }

  // تفعيل تبديل التبويبات بالماوس
  brandTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      brandTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      currentBrand = tab.getAttribute("data-brand");
      renderProducts(currentBrand);
    });
  });

  // تشغيل العرض الأولي للمنتجات (Carrier)
  renderProducts(currentBrand);

  // تحديث صورة الهيرو تلقائياً كرمز تفاعلي
  const heroAcImg = document.getElementById("heroAcImg");
  if (heroAcImg) {
    heroAcImg.onerror = function() {
      this.onerror = null;
      this.src = defaultAcSvg;
    };
  }

  // 5. نموذج تواصل معنا
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // جمع البيانات (للمحاكاة)
      const name = document.getElementById("contactName").value;
      const phone = document.getElementById("contactPhone").value;
      const msg = document.getElementById("contactMsg").value;
      
      console.log("رسالة تواصل جديدة:", { name, phone, msg });
      
      // إظهار التنبيه بالنجاح
      showToast("تم إرسال رسالتك بنجاح! وسنتواصل معك قريباً.");
      
      // تفريغ الحقول
      contactForm.reset();
    });
  }

  // 6. معالجة نموذج إتمام الطلب من الواتساب
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const productId = document.getElementById("orderProductId").value;
      const clientName = document.getElementById("clientName").value;
      const clientPhone = document.getElementById("clientPhone").value;
      const clientAddress = document.getElementById("clientAddress").value;
      const clientNotes = document.getElementById("clientNotes").value || "لا توجد ملاحظات إضافية";
      
      // جلب تفاصيل المنتج من المصفوفة (البحث المباشر أو داخل الخيارات الفرعية)
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
      
      // رقم واتساب المكتب (المستلم للطلبات) - رقم عبد الرحمن فرحات
      const whatsappNumber = "201061694024"; 
      
      // صياغة الرسالة بتنسيق فاخر ومنظم للواتساب
      const messageText = `السلام عليكم ورحمة الله وبركاته،
أرغب في طلب تكييف من مكتب *تراي أنجل للتكييف والتبريد*:

*📦 تفاصيل التكييف المطلوب:*
- *الموديل:* ${product.name}
- *الماركة:* ${product.brand === 'carrier' ? 'كاريير (Carrier)' : 'ميديا (Midea)'}
- *القدرة:* ${selectedCapacity}
- *النوع:* ${product.type}
- *السعر الإجمالي:* ${selectedPrice.toLocaleString("ar-EG")} جنيه مصري
- *طريقة الدفع:* الدفع عند الاستلام بعد التركيب 💵

*👤 بيانات العميل للتركيب والتوصيل:*
- *الاسم بالكامل:* ${clientName}
- *رقم الهاتف:* ${clientPhone}
- *العنوان بالتفصيل:* ${clientAddress}
- *ملاحظات التركيب:* ${clientNotes}

شكراً لكم، أرجو التواصل لتأكيد موعد المعاينة والتركيب.`;

      // تشفير النص للرابط
      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      
      // إغلاق النافذة المنبثقة
      closeOrderModal();
      
      // إظهار تنبيه النجاح
      showToast("تم تسجيل طلبك بنجاح! جاري فتح محادثة الواتساب...");
      
      // فتح الواتساب بعد ثانية ونصف ليعطي العميل فرصة لقراءة التنبيه
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);
      
      // تفريغ الحقول
      orderForm.reset();
    });
  }

  // 7. إدارة شاشة التحميل المسبق وتفعيل حركات الدخول (Preloader & Entrance Animations)
  const preloader = document.getElementById("preloader");
  function hidePreloader() {
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        // تفعيل حركات الهيرو
        document.querySelectorAll(".reveal-fade").forEach(el => {
          el.classList.add("revealed");
        });
      }, 600);
    } else {
      document.querySelectorAll(".reveal-fade").forEach(el => {
        el.classList.add("revealed");
      });
    }
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    hidePreloader();
  } else {
    window.addEventListener("load", hidePreloader);
  }

  // 8. محرك الكشف عند التمرير (Scroll Reveal Engine)
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // إيقاف المراقبة بعد الكشف الأول
        }
      });
    }, {
      threshold: 0.1, // الكشف عند ظهور 10% من العنصر
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // كود احتياطي للمتصفحات القديمة
    revealElements.forEach(el => {
      el.classList.add("revealed");
    });
  }

  // 9. التحكم في الأسئلة الشائعة (FAQ Accordion)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    
    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        // إغلاق أي سؤال مفتوح آخر
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
          }
        });
        
        // تبديل حالة السؤال المختار
        if (isActive) {
          item.classList.remove("active");
          answer.style.maxHeight = "0px";
        } else {
          item.classList.add("active");
          // حساب الارتفاع الفعلي للمحتوى لحركة فتح شديدة السلاسة
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  });

  // 10. معالجة نموذج صيانة التكييف وإرسالها للواتساب
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
      
      // رقم الواتساب الخاص بالصيانة والطلبات
      const whatsappNumber = "201061694024"; 
      
      // صياغة رسالة حجز الصيانة بشكل احترافي ومنظم للواتساب
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

      // تشفير النص للرابط
      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      
      // إظهار تنبيه النجاح
      showToast("تم إرسال طلب الصيانة بنجاح! جاري فتح محادثة الواتساب للتأكيد...");
      
      // فتح الواتساب بعد ثانية ونصف
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);
      
      // تفريغ الحقول
      maintForm.reset();
    });
  }
});

// 7. دوال التحكم بالنافذة المنبثقة (Modal) بشكل خارجي لتصلح للاستدعاء من أزرار المنتجات
const orderModal = document.getElementById("orderModal");

window.changeProductVariant = function(productId, variantIndex, selectElement) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.variants) return;
  
  const variant = product.variants[variantIndex];
  if (!variant) return;
  
  // العثور على الكارت الخاص بالمنتج
  const card = selectElement.closest(".product-card");
  if (!card) return;
  
  // تحديث السعر
  const priceVal = card.querySelector(".price-val");
  if (priceVal) {
    priceVal.innerHTML = `${variant.price.toLocaleString("ar-EG")} <span class="price-currency">ج.م</span>`;
  }
  
  // تحديث معرّف الطلب في الزر
  const orderBtn = card.querySelector(".order-btn");
  if (orderBtn) {
    orderBtn.setAttribute("onclick", `openOrderModal('${variant.id}')`);
  }
};

window.openOrderModal = function(productId) {
  let product = products.find(p => p.id === productId);
  let selectedCapacity = "";
  let selectedPrice = 0;
  
  if (!product) {
    // البحث داخل الموديلات الفرعية
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
  
  if (!product || !orderModal) return;
  
  // ملء بيانات التكييف في النافذة
  document.getElementById("orderProductId").value = productId;
  document.getElementById("modalAcName").textContent = product.name;
  document.getElementById("modalAcMeta").textContent = `${selectedCapacity} | ${product.type} ${product.inverter ? ' | إنفرتر موفر' : ''}`;
  document.getElementById("modalAcPrice").textContent = `${selectedPrice.toLocaleString("ar-EG")} ج.م`;
  
  // إظهار المودال
  orderModal.classList.add("active");
  document.body.style.overflow = "hidden"; // منع سكرول الخلفية
};

window.closeOrderModal = function() {
  if (orderModal) {
    orderModal.classList.remove("active");
    document.body.style.overflow = ""; // استعادة سكرول الخلفية
  }
};

// ربط زر الإغلاق والضغط بالخارج لإغلاق المودال
document.getElementById("modalCloseBtn")?.addEventListener("click", window.closeOrderModal);
orderModal?.addEventListener("click", (e) => {
  if (e.target === orderModal) {
    window.closeOrderModal();
  }
});

// 8. التحكم في التنبيه العائم (Toast Notification)
const toastSuccess = document.getElementById("toastSuccess");
const toastSuccessMsg = document.getElementById("toastSuccessMsg");

function showToast(message) {
  if (!toastSuccess || !toastSuccessMsg) return;
  
  toastSuccessMsg.textContent = message;
  toastSuccess.classList.add("show");
  
  // إخفاء بعد 4 ثواني
  setTimeout(() => {
    toastSuccess.classList.remove("show");
  }, 4000);
}
