// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider with Navigation
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dots .dot');
        const prevArrow = document.querySelector('.slider-arrow-prev');
        const nextArrow = document.querySelector('.slider-arrow-next');
        let currentSlide = 0;
        let autoplayInterval;
        
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Set current slide
            currentSlide = index;
            
            // Add active class to current slide and dot
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }
        
        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
        
        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        }
        
        // Navigation arrows
        if (nextArrow) {
            nextArrow.addEventListener('click', () => {
                nextSlide();
                stopAutoplay();
                startAutoplay();
            });
        }
        
        if (prevArrow) {
            prevArrow.addEventListener('click', () => {
                prevSlide();
                stopAutoplay();
                startAutoplay();
            });
        }
        
        // Navigation dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopAutoplay();
                startAutoplay();
            });
        });
        
        // Pause autoplay on hover
        heroSlider.addEventListener('mouseenter', stopAutoplay);
        heroSlider.addEventListener('mouseleave', startAutoplay);
        
        // Start autoplay
        if (slides.length > 0) {
            startAutoplay();
        }
    }
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Parallax Effect for Hero (disabled to prevent overlap issues)
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     const hero = document.querySelector('.hero');
    //     const heroContent = document.querySelector('.hero-content');
    //     
    //     if (hero && scrolled < hero.offsetHeight) {
    //         const parallaxSpeed = 0.5;
    //         if (heroContent) {
    //             heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    //             heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
    //         }
    //     }
    // });

    // Add stagger animation to gallery cards
    const galleryCards = document.querySelectorAll('.category-card');
    galleryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Category Items Data
    const categoryItems = {
        pizza: {
            toppings: [
                { name: "Halal Bbq Chicken", size: "1 kg" },
                { name: "Halal Chinese Chicken", size: "" },
                { name: "Halal Meat Balls", size: "" },
                { name: "Halal Mexican Chicken", size: "" },
                { name: "Halal Pepperoni", size: "" },
                { name: "Halal Plain Chicken Iqf", size: "2.5 kg" },
                { name: "Halal Salami", size: "" },
                { name: "Halal Spicy Beef", size: "" },
                { name: "Halal Spicy Chicken", size: "" },
                { name: "Halal Tandoori Chicken Iqf", size: "" },
                { name: "Halal Tikka Chicken", size: "" },
                { name: "Halal Turkey Julienne", size: "" }
            ],
            pizzaBox: [
                { name: "Pizza Box Brown", size: "7 inch" },
                { name: "Pizza Box Brown", size: "(12, 14) inch" },
                { name: "Pizza Box Brown", size: "(09, 10 inches)" },
                { name: "Pizza Box Brown", size: "(15, 16) inch" }
            ],
            pizzaCheese: [
                { name: "Pizza Cheese", size: "6x1.8 kg" }
            ],
            others: [
                { name: "Pizza Flour Bravo", size: "16 kg" },
                { name: "Pizza Yeast", size: "(1X500) g" },
                { name: "Siced Jalapeno Peppers", size: "" },
                { name: "Black Olives", size: "(1xa10)" },
                { name: "Black Sliced Olives", size: "3 kg" },
                { name: "Mix olive", size: "" },
                { name: "Pizza Cut Pineapple Pieces In Syrup", size: "1xa10" },
                { name: "Duacy sweet corn", size: "(1X2.15Kg)" },
                { name: "Famously Spicy Pizza Sauce Pouches", size: "(5 Bags) 3kg" },
                { name: "Dips Garlic & Herb", size: "(100 X 25g)" }
            ]
        },
        sauces: [
            { name: "Heinz Real Mayonnaise", size: "(1x10L)" },
            { name: "Quality Real Mayonnaise Wernsing", size: "(10L)" },
            { name: "Miracel Whip", size: "(1X5L) Bucket" },
            { name: "Olympic Mayonnaise", size: "" },
            { name: "Smokey Bbq Sauce", size: "10L" },
            { name: "Lion Very Hot Chilli Sauce", size: "(2X2.27L)" },
            { name: "Lions Sticky Bbq Sauce", size: "(2X2.27L)" },
            { name: "Lion Sweet Chilli Sauce", size: "(2X2.27L)" },
            { name: "Lions Hot Piri Piri Sauce", size: "(2X2.27L)" },
            { name: "Lions Lemon & Herb Peri Peri Sauce", size: "(2X2.27L)" },
            { name: "Lions Mild Piri Piri Sauce", size: "(2X2.27L)" },
            { name: "Lions Original Piri Piri Sauce", size: "(2X2.27L)" },
            { name: "Mint Sauce", size: "2X2.27 Ltr" },
            { name: "Crucial Squeezy Burger Sauce", size: "6X 1 Ltr" },
            { name: "Crucial Garlic Mayo Sauce", size: "6X1 Ltr" },
            { name: "Crucial Squeezy Mayo Sauce", size: "6X1-L" },
            { name: "Squeezy Sweet Chilli Sauce", size: "1X6-1L" },
            { name: "Tomatio Puree (Tins)", size: "12X425gm" },
            { name: "Mayonnaise Sauce Sachets", size: "(200X9G)" },
            { name: "Tomato Ketch Up Sauce Sachet", size: "(200X9g)" },
            { name: "Malt Vinegar Sachet", size: "(200X6g)" },
            { name: "Tomato Ketch Up", size: "(2X4.5kg)" },
            { name: "Dips Garlic & Herbs", size: "(100 X 25g)" }
        ],
        oils: [
            { name: "KTC Vegetable Oil", size: "20L" },
            { name: "Rapeseed Oil", size: "20L" },
            { name: "AVR 60 Rape Seed Oil", size: "(1X1)2.5kg" },
            { name: "KTC Palmax Fat", size: "12.5Kg" },
            { name: "Prep Ultra", size: "20L" }
        ],
        hygiene: [
            { name: "Washing Up Liquid Capricorn", size: "(7.5%) (4x5L)" },
            { name: "Diapio Washing Powder", size: "6kg" },
            { name: "Thick Bleach Capricorn", size: "4x5L" },
            { name: "Ubik Degreaser", size: "2x5L" },
            { name: "Bloom Tissue 2-Ply", size: "(4x10)" },
            { name: "Napkins 1 Ply (Soft Tissues)", size: "(1x5000)" },
            { name: "Centrefeed Rolls", size: "12.5kg" },
            { name: "Lime Fresh Hand Wet Wipes", size: "1X1000" },
            { name: "Multi Surface Cleaner", size: "6x1 L" },
            { name: "Aprons White Opaque Disposable", size: "1x100" },
            { name: "Cleaning Pads", size: "" },
            { name: "Disposable Gloves", size: "" }
        ],
        buns: [
            { name: "Americana 4' & 4.5' Seeded Buns", size: "(4x12)" },
            { name: "American 5\" Bap", size: "(9.5mm)" },
            { name: "Americana 5' Seeded Buns", size: "(6x8)" },
            { name: "Americana Brioch", size: "(4.5\")" }
        ],
        flour: [
            { name: "Emam normal chicken breading", size: "12.5 kg" },
            { name: "Spicy Wings Breading", size: "12.5 kg" },
            { name: "SS Fried Breading", size: "25 kg" },
            { name: "Plain flour (Brown bag)", size: "1X16 kg" },
            { name: "Piri Piri Salt", size: "750 gms" },
            { name: "Salt Sachet", size: "1X5000" },
            { name: "Black Pepper Sachets", size: "1x5000" },
            { name: "Rooster Peri Peri Marinade", size: "1x2 kg" },
            { name: "Rooster Marinade", size: "500 gm" }
        ],
        drinks: {
            drinks: [
                { name: "7up Cans", size: "(24x330 ml)" },
                { name: "Pepsi Cola Cans (Euro)", size: "(24x330 ml)" },
                { name: "Pepsi Cola Cans (Uk)", size: "330 ml" },
                { name: "Pepsi Diet", size: "(24x330 ml)" },
                { name: "Pepsi Max Cans(Euro)", size: "(24x330ml)" },
                { name: "Pepsi Max Cans Gb", size: "(24x330 ml)" },
                { name: "Tango Dark Berry Cans", size: "(24x330 ml)" },
                { name: "Mirinda Orange Cans", size: "(24x330 ml)" },
                { name: "Mirinda Strawberry Cans", size: "24x330 ml" },
                { name: "Fanta Orange Cans", size: "(24x330 ml)" },
                { name: "Dr Pepper (Uk)", size: "(24x330ml)" },
                { name: "Coke Zero", size: "(24x330 ml)" },
                { name: "Coca Cola (Uk)", size: "(24x330 ml)" },
                { name: "Coca Cola Euro", size: "(24x330 ml)" },
                { name: "Coca Cola Cans Euro", size: "(24x330 ml)" },
                { name: "Diet Coke Cans (Uk)", size: "(24x330 ml)" },
                { name: "Tango Orange Cans", size: "(24x330 ml)" },
                { name: "Tango Apple", size: "(24x330 ml)" },
                { name: "Tango Cherry Cans", size: "(330 ml)" },
                { name: "Ginger Beer", size: "(24x330 ml)" },
                { name: "Sprite Cans", size: "(24x330 ml)" },
                { name: "Rio Tropical Cans", size: "(24x330 ml)" },
                { name: "Vimto Cans", size: "(24x330 ml)" },
                { name: "Umdah Mango Juice", size: "36x250 ml" },
                { name: "Capri Sun Orange", size: "40x200 ml" },
                { name: "Caprisun Multi Vitamin", size: "(40x200 ml)" }
            ],
            bottles: [
                { name: "7up (Eng, Eur)", size: "(12x1.5L)" },
                { name: "Pepsi (Eng, Eur)", size: "(12x1.5L)" },
                { name: "Coca Cola Eng", size: "(12x1.5L)" },
                { name: "Coke", size: "(12x1.5L)" },
                { name: "Tango Orange", size: "(12x1.5L)" },
                { name: "Water", size: "24x500ml" }
            ]
        },
        fries: [
            { name: "Chips Agrarfrost", size: "(6x6, 9x9) 10kg" },
            { name: "Lambweston Private Reserve", size: "(6x6, 9x9) 10kg, (4x2.5kg)" },
            { name: "Lambweston Stealth Coated", size: "(6x6) 10kg(4x2.5kg)" },
            { name: "King Chips", size: "(10x10)" },
            { name: "Aviko Premium Crunch", size: "(9.5mm)" },
            { name: "Aviko Super Crunch", size: "(4x2.25), 7mm, 9.5mm" },
            { name: "Aviko super long", size: "(4x2500g) 7mm" }
        ],
        frozen: {
            beefBurgers: [
                { name: "2Oz Maw Beef Burger", size: "" },
                { name: "4Oz Paragon Classic Halal Quarter Pounder", size: "48x113 gms" },
                { name: "2Oz Paragon Halal Basics Beef Burger", size: "48x56 gms" },
                { name: "40Z Mawbeef quarter pounder", size: "" },
                { name: "2OZ Classic Halal Beef Burger", size: "48x56 gms" },
                { name: "6OZ Gourmet Halal Burger", size: "30x170 gms" },
                { name: "40Z Paragon Basic Halal Quarter Pounder", size: "48x113 gms" },
                { name: "Breaded Cod Fish Burger", size: "30x100 gms" }
            ],
            nuggets: [
                { name: "Nuggets Country Style", size: "6 kg" },
                { name: "Chilli Cheese Nuggets", size: "" },
                { name: "Meadowvale Halal Battered Chicken Nuggets", size: "6kg" },
                { name: "Golden Valley Nugget", size: "" }
            ],
            steaks: [
                { name: "Country Style Steak", size: "(72X85g) 6kg" },
                { name: "Meadowvale Halal Battered Chicken Steak", size: "(72X85g) 6kg" },
                { name: "Calibra Battered Chicken Steaks", size: "(72X85g) 6kg" },
                { name: "Golden Valley Steak", size: "(72X85g) 6kg" }
            ],
            kabab: [
                { name: "Halal Chicken Kebab (Hmc)", size: "1x20" },
                { name: "Halal Meat Kebab (Hmc)", size: "1x20" }
            ],
            cheese: [
                { name: "Burger Cheese Slices", size: "1x112" },
                { name: "Hochland Burger Cheese", size: "1x84" },
                { name: "Halloumi Cheese", size: "" }
            ],
            others: [
                { name: "Discovery 10' Tortilla Wraps", size: "10X10" },
                { name: "Lambweston Hashbrown", size: "10x1kg" },
                { name: "Discovery 12' Tortilla Wraps Santa Maria", size: "10X10" },
                { name: "Lamb Weston Original Seasoned Wedges", size: "4x2.5Kg" },
                { name: "Halal Chicken Poppers (Harvest)", size: "3x1kg" },
                { name: "Lambweston Sweet Potato Fries", size: "4x2.5Kg" },
                { name: "Calibra Popcorn Chicken", size: "6x1kg" },
                { name: "Vegi Burger Eurofreez 4Oz", size: "(48X113G)" },
                { name: "Chicken Strips (Harvest)", size: "3kg" },
                { name: "Apple Pies", size: "1X40" },
                { name: "Hot & Spicy Chicken Strips(Harvest)", size: "4x3kg" },
                { name: "Battered Onion Rings", size: "(24X450gms) (11kg)" },
                { name: "Lambweston Mozzarella Sticks", size: "" },
                { name: "Frozen Iqf Corn On The Cob", size: "24X397g" },
                { name: "Lambweston Cheddar Jalapenos", size: "" },
                { name: "Halal Frozen Lamb Ribs", size: "1x(9,10) kg" },
                { name: "Aviko Cheddar Jalapenos", size: "3kg" },
                { name: "Falafel Balls", size: "(375gm)-16 Pcs" },
                { name: "Aviko Mozzarella Sticks", size: "3kg" },
                { name: "Falafel Burger", size: "48x113 gms" }
            ]
        },
        poultry: {
            all: [
                { name: "Chicken whole", size: "(1100, 1200, 1300, 1500) gm" },
                { name: "Chicken 4 Way Cut", size: "1300 gm" },
                { name: "Chicken 8 Way Cut", size: "(1500, 1600, 1700) gm" },
                { name: "Chicken 9 Way Cut", size: "(1500, 1600, 1700) gm" },
                { name: "Halal Fresh Chicken Skinless Thai Meat", size: "10 Kg Box" },
                { name: "Leg Quarter", size: "(250 gm, 10 Kg)" },
                { name: "Fresh Prime", size: "10 kg" },
                { name: "Fresh Mixed", size: "10 kg" },
                { name: "Fresh Mid", size: "10 kg" },
                { name: "Fresh 2 joint", size: "" },
                { name: "Fresh 3 Joint", size: "" },
                { name: "Fresh Fillets", size: "9kg (90-130) gm" },
                { name: "Fresh Fillets", size: "9kg (130-170) gm" },
                { name: "Fresh Fillets", size: "250+ gm" },
                { name: "Inner Fillets", size: "10 kg" },
                { name: "Fillet IQF", size: "10kg (90, 110, 130, 150) gm" },
                { name: "Fillet IQF", size: "10kg (250 gm)" }
            ],
            freshChicken: [
                { name: "Chicken whole", size: "(1100, 1200, 1300, 1500) gm" },
                { name: "Chicken 4 Way Cut", size: "1300 gm" },
                { name: "Chicken 8 Way Cut", size: "(1500, 1600, 1700) gm" },
                { name: "Chicken 9 Way Cut", size: "(1500, 1600, 1700) gm" },
                { name: "Halal Fresh Chicken Skinless Thai Meat", size: "10 Kg Box" },
                { name: "Leg Quarter", size: "(250 gm, 10 Kg)" },
                { name: "Fresh Mixed", size: "10 kg" }
            ],
            wings: [
                { name: "Fresh Prime", size: "10 kg" },
                { name: "Fresh Mixed", size: "10 kg" },
                { name: "Fresh Mid", size: "10 kg" },
                { name: "Fresh 2 joint", size: "" },
                { name: "Fresh 3 Joint", size: "" }
            ],
            fillets: [
                { name: "Fresh Fillets", size: "9kg (90-130) gm" },
                { name: "Fresh Fillets", size: "9kg (130-170) gm" },
                { name: "Fresh Fillets", size: "250+ gm" },
                { name: "Inner Fillets", size: "10 kg" }
            ],
            frozenFillets: [
                { name: "Fillet IQF", size: "10kg (90, 110, 130, 150) gm" },
                { name: "Fillet IQF", size: "10kg (250 gm)" }
            ]
        },
        packaging: [
            { name: "Grease Proof Bags", size: "5x5, 6x4" },
            { name: "Grease Proof Chips Bags", size: "6x6, 7x7" },
            { name: "Scotch, Grease Proof Chips", size: "8.5" },
            { name: "Clear Plastic Container", size: "8oz" },
            { name: "Lemon Dressing", size: "(24X400 ml)" },
            { name: "Lids", size: "No 2,6" },
            { name: "Majestic Clear Plastic Cup", size: "10,20,40 z" },
            { name: "Microwave Container", size: "500,650,700 c" },
            { name: "Tea Cups", size: "8oz" },
            { name: "Brown SOS Carry Bag", size: "L, Med" },
            { name: "FC3 Chicken Box", size: "1x200" },
            { name: "Chips Scoope", size: "Large" },
            { name: "Foil Bags", size: "14'" },
            { name: "Foil Container", size: "No 1,6" },
            { name: "Plastic Forks", size: "1x1000" },
            { name: "Plastic Knives", size: "1x1000" },
            { name: "Plastic Spoons", size: "1x1000" },
            { name: "Plates Paper", size: "9'" },
            { name: "Plates Polly", size: "9'" },
            { name: "R12 Bags", size: "(7X11.5X13.75')" },
            { name: "R8 Bags", size: "" },
            { name: "Fries Bag", size: "" },
            { name: "Large Food Box", size: "" },
            { name: "R4 Bags", size: "" },
            { name: "Refuse Black bin Bag", size: "" },
            { name: "Salad Container", size: "" },
            { name: "Smoothie Straw", size: "" },
            { name: "Tortilla Wrap Sheets", size: "" },
            { name: "Quarter Punder Box", size: "" },
            { name: "Small Burger Box", size: "" },
            { name: "Small food Box", size: "" },
            { name: "Henny Penny Filter", size: "" },
            { name: "Grease Proof Sheet", size: "14X14" },
            { name: "White Carrier Bag", size: "Medium, Large" },
            { name: "White Large SOS Carrier Bag", size: "" },
            { name: "Wooden Forks", size: "" }
        ]
    };

    // Category Items Display
    const categoryItemsContainer = document.getElementById('categoryItemsContainer');
    const categoryItemsTitle = document.getElementById('categoryItemsTitle');
    const categoryItemsGrid = document.getElementById('categoryItemsGrid');
    const subcategoryButtons = document.getElementById('subcategoryButtons');
    let currentCategory = '';
    let currentSubcategory = '';

    function getImageUrl(itemName, category, itemSize) {
        // Map specific item names to their actual image files
        const specificImages = {
            'KTC Vegetable Oil': 'KTC Vegetable Oil.png',
            'KTC Palmax Fat': 'Palmax Palm Fat packaging close-up.png',
            'Rapeseed Oil': 'Rapeseed Oil.png',
            'Prep Ultra': 'Prep Ultra.png',
            'AVR 60 Rape Seed Oil': 'AVR 60 Rape Seed Oil.png',
            'Chips Agrarfrost': 'Chips Agrarfrost.png',
            'Aviko Premium Crunch': 'Aviko Premium Crunch.png',
            'Aviko Super Crunch': 'Aviko Super Crunch.png',
            'Aviko super long': 'Aviko super long.png',
            'Lambweston Private Reserve': 'Lambweston Private Reserve.png',
            'Lambweston Stealth Coated': 'Lambweston Stealth Coated.png',
            'Lambweston Hashbrown': 'Lambweston Hashbrown.png',
            'Lambweston Sweet Potato Fries': 'Lambweston Sweet Potato Fries.png',
            'Lambweston Mozzarella Sticks': 'Lambweston Mozzarella Sticks.png',
            'Lambweston Cheddar Jalapenos': 'Lambweston Cheddar Jalapenos.png',
            'Lamb Weston Original Seasoned Wedges': 'Lamb Weston Original Seasoned Wedges.png',
            'King Chips': 'King Chips.png',
            'Emam normal chicken breading': 'Emam normal chicken breading.png',
            'Salt Sachet': 'Salt Sachet.png',
            'Black Pepper Sachets': 'Black Pepper Sachets.png',
            'Black Olives': 'Black Olives.png',
            'Black Sliced Olives': 'Black sliced Olive.jpeg',
            'Mix olive': 'Mix olive.jpeg',
            'Spicy Wings Breading': 'Spicy Wings Breading.png',
            'SS Fried Breading': 'SS Fried Breading.png',
            'Rooster Peri Peri Marinade': 'Rooster Peri Peri Marinade.png',
            'Rooster Marinade': 'Rooster Marinade.png',
            'Plain flour (Brown bag)': 'Plain flour(Brown bag).png',
            'Piri Piri Salt': 'Piri Piri Salt.png',
            'Americana 4\' & 4.5\' Seeded Buns': 'Americana Seeded bun.png',
            'Americana 5\' Seeded Buns': 'Americana 5\' Seeded Buns.png',
            'American 5" Bap': 'American 5 Bap.png',
            'Americana Brioch': 'Americana Brioch.png',
            'Heinz Real Mayonnaise': 'Heinz Real Mayonnaise.png',
            'Quality Real Mayonnaise Wernsing': 'Quality Real Mayonnaise Wernsing.png',
            'Lions Sticky Bbq Sauce': 'Lions Sticky Bbq Sauce.png',
            'Mint Sauce': 'Mint Sauce.png',
            'Miracel Whip': 'Miracel Whip.png',
            'Crucial Squeezy Burger Sauce': 'Crucial Squeezy Burger Sauce.png',
            'Crucial Garlic Mayo Sauce': 'Crucial Garlic Mayo Sauce.png',
            'Crucial Squeezy Mayo Sauce': 'Crucial Squeezy Mayo Sauce.png',
            'Olympic Mayonnaise': 'Olympic Mayonnaise.png',
            'Smokey Bbq Sauce': 'Smokey Bbq Sauce.png',
            'Lion Very Hot Chilli Sauce': 'Lion Very Hot Chilli Sauce.png',
            'Lion Sweet Chilli Sauce': 'Lion Sweet Chilli Sauce.png',
            'Lions Hot Piri Piri Sauce': 'Lions Hot Piri Piri Sauce.png',
            'Lions Mild Piri Piri Sauce': 'Lions Mild Piri Piri Sauce.png',
            'Lions Original Piri Piri Sauce': 'Lions Orignal Piri Piri Sauce.png',
            'Lions Lemon & Herb Peri Peri Sauce': 'Lions Lemon & Herb Peri Peri Sauce.png',
            'Squeezy Sweet Chilli Sauce': 'Squeezy Sweet Chilli Sauce.png',
            'Tomatio Puree (Tins)': 'Tomatio Puree (Tins).png',
            'Mayonnaise Sauce Sachets': 'Mayonnaise Sauce Sachets.png',
            'Tomato Ketch Up Sauce Sachet': 'Tomato Ketch Up Sauce Sachet.png',
            'Tomato Ketch Up': 'Tomato Ketch Up.png',
            'Malt Vinegar Sachet': 'Malt Vinegar Sachet.png',
            'Dips Garlic & Herb': 'Dips Garlic & Herb.jpeg',
            'Dips Garlic & Herbs': 'Dips Garlic & Herb.jpeg',
            'Thick Bleach Capricorn': 'images/hygiene/Thick bleach Capricorn.jpeg',
            'Diapio Washing Powder': 'images/hygiene/Diapio washing powder.jpeg',
            'Washing Up Liquid Capricorn': 'images/hygiene/Washing up liquid Capricorn.jpeg',
            'Ubik Degreaser': 'images/hygiene/Ubik degreaser.jpeg',
            'Multi Surface Cleaner': 'images/hygiene/Multi Surface Cleaner.png',
            'Lime Fresh Hand Wet Wipes': 'images/hygiene/Lime Fresh Hand Wet Wipes.png',
            'Centrefeed Rolls': 'images/hygiene/Centrefeed Rolls.png',
            'Aprons White Opaque Disposable': 'images/hygiene/Aprons White Opaque Disposable.png',
            'Bloom Tissue 2-Ply': 'images/hygiene/Bloom Tissue 2-Ply.png',
            'Napkins 1 Ply (Soft Tissues)': 'images/hygiene/Napkins 1 Ply (Soft Tissues).png',
            'Cleaning Pads': 'images/hygiene/Cleaning Pads.png',
            'Disposable Gloves': 'images/hygiene/Disposable Gloves.png',
            'Halal Bbq Chicken': 'Halal Bbq Chicken.png',
            'Halal Chinese Chicken': 'Halal Chinese Chicken.png',
            'Halal Meat Balls': 'Halal Meat Balls.png',
            'Halal Mexican Chicken': 'Halal Mexican Chicken.png',
            'Halal Pepperoni': 'Halal Pepperoni.png',
            'Halal Salami': 'Halal Salami.png',
            'Halal Spicy Beef': 'Halal Spicy Beef.png',
            'Halal Spicy Chicken': 'Halal Spicy Chicken.png',
            'Halal Tandoori Chicken Iqf': 'Halal Tandoori Chicken Iqf.png',
            'Halal Plain Chicken Iqf': 'Halal Plain Chicken Iqf.png',
            'Halal Tikka Chicken': 'Halal Tikka Chicken.png',
            'Halal Turkey Julienne': 'Halal Turkey Julienne.png',
            'Fresh Mixed': 'Fresh Mixed.jpeg',
            'Fresh Prime': 'Fresh Prime.jpeg',
            'Fresh Mid': 'Fresh Mid.jpeg',
            'Fresh 2 joint': 'Fresh 2 Joint.jpeg',
            'Fresh 3 Joint': 'Fresh 3 Joint.jpeg',
            'Fillet IQF': 'Fillet IQF.jpeg',
            'Fresh Fillets': 'Fresh Fillets 9kg (90 - 130) gm.png',
            'Inner Fillets': 'Inner Fillets.jpeg',
            'Chicken whole': 'Chicken Whole.jpeg',
            'Chicken 4 Way Cut': 'Chicken 4 Way Cut.jpeg',
            'Chicken 8 Way Cut': 'Chicken 8 Way Cut.jpeg',
            'Chicken 9 Way Cut': 'Chicken 9 Way Cut.jpeg',
            'Halal Fresh Chicken Skinless Thai Meat': 'Halal chicken thigh meat in box.png',
            'Leg Quarter': 'Leg Quarter.jpeg',
            'Pizza Box Brown': 'Pizza Box Brown 7 inch.png',
            'Pizza Cheese': 'Pizza Cheese.png',
            'Famously Spicy Pizza Sauce Pouches': 'Famously Spicy Pizza Sauce Pouches.png',
            'Duacy sweet corn': 'Duacy sweet corn.jpeg',
            'Siced Jalapeno Peppers': 'Siced jalapeno poppers.jpeg',
            'Pizza Yeast': 'Pizza Yeast.png',
            'Pizza Flour Bravo': 'Pizza flour bravo.jpeg',
            'Pizza Cut Pineapple Pieces In Syrup': 'Pizza cut in pineapple piece surep.jpeg',
            'Grease Proof Bags': 'Grease proof bags.png',
            'Grease Proof Chips Bags': 'grease Proof Chips Bags.png',
            'Scotch, Grease Proof Chips': 'Scotch, Grease Proof Chips.png',
            'Lemon Dressing': 'Lemon Dressing.png',
            'Lids': 'Lids.png',
            'Majestic Clear Plastic Cup': 'Majestic Clear Plastic Cup.png',
            'Clear Plastic Container': 'Clear Plastic Container.png',
            'Microwave Container': 'Microwave Container.png',
            'Tea Cups': 'Tea Cups.png',
            'Plastic Forks': 'Plastic Forks.png',
            'Plastic Knives': 'Plastic Knives.png',
            'Plastic Spoons': 'Plastic Spoons.png',
            'Brown SOS Carry Bag': 'Brown SOS Carry Bag.png',
            'White Carrier Bag': 'White Carrier Bag.png',
            'White Large SOS Carrier Bag': 'White Large SOS Carrier Bag.png',
            'FC3 Chicken Box': 'FC3 Chicken Box.png',
            'Chips Scoope': 'Chips Scoope.png',
            'Plates Paper': 'Plates Paper.png',
            'Plates Polly': 'Plates Polly.png',
            'Foil Bags': 'Foil Bags.png',
            'Foil Container': 'Foil Container.png',
            'R12 Bags': 'R12 Bags.png',
            'R8 Bags': 'R8 Bags.png',
            'R4 Bags': 'R4 Bags.png',
            'Fries Bag': 'Fries Bag.png',
            'Large Food Box': 'Large Food Box.png',
            'Quarter Punder Box': 'Quarter Punder Box.png',
            'Small Burger Box': 'Small Burger Box.png',
            'Small food Box': 'Small food Box.png',
            'Refuse Black bin Bag': 'Refuse Black bin Bag.png',
            'Salad Container': 'Salad Container.png',
            'Smoothie Straw': 'Smoothie Straw.png',
            'Henny Penny Filter': 'Henny Penny Filter.png',
            'Tortilla Wrap Sheets': 'Tortilla Wrap Sheets.png',
            'Grease Proof Sheet': 'Grease Proof Sheet.png',
            'Wooden Forks': 'Wooden Forks.png',
            '2Oz Paragon Halal Basics Beef Burger': '2oz paragon halal basic beef burger.jpeg',
            '2OZ Classic Halal Beef Burger': '2OZ Classic Halal Beef Burger.png',
            '2Oz Maw Beef Burger': '2Oz Maw Beef Burger.png',
            '4Oz Paragon Classic Halal Quarter Pounder': '4Oz Paragon Classic Halal Quarter Pounder.jpeg',
            '40Z Paragon Basic Halal Quarter Pounder': '40Z paragon basic halal quarter pounder.jpeg',
            '40Z Mawbeef quarter pounder': '40Z Mawbeef quarter pounder.jpeg',
            '6OZ Gourmet Halal Burger': '60Z gourmet halal burger.jpeg',
            'Golden Valley Nugget': 'Golden valley nuggets.jpeg',
            'Meadowvale Halal Battered Chicken Nuggets': 'Meadowvale halal battered chicken nuggets.jpeg',
            'Chilli Cheese Nuggets': 'Chilli cheese nuggets.jpeg',
            'Nuggets Country Style': 'Nuggets country style.jpeg',
            'Breaded Cod Fish Burger': 'Breaded cod fish burger.jpeg',
            'Country Style Steak': 'Country Style Steak.png',
            'Calibra Battered Chicken Steaks': 'Calibra Battered Chicken Steaks.png',
            'Meadowvale Halal Battered Chicken Steak': 'Meadowvale Halal Battered Chicken Steak.png',
            'Golden Valley Steak': 'Golden Valley Steak.png',
            'Halal Chicken Kebab (Hmc)': 'Halal Chicken Kebab (Hmc).png',
            'Halal Meat Kebab (Hmc)': 'Halal Meat Kebab (Hmc).png',
            'Burger Cheese Slices': 'Burger Cheese Slices.png',
            'Hochland Burger Cheese': 'Hochland Burger Cheese.png',
            'Halloumi Cheese': 'Halloumi Cheese.png',
            'Discovery 10\' Tortilla Wraps': 'Discovery 10\' Tortilla Wraps.png',
            'Discovery 12\' Tortilla Wraps Santa Maria': 'Discovery 12\' Tortilla Wraps Santa Maria.png',
            'Halal Chicken Poppers (Harvest)': 'Halal Chicken Poppers (Harvest).png',
            'Chicken Strips (Harvest)': 'Chicken Strips (Harvest).png',
            'Hot & Spicy Chicken Strips(Harvest)': 'Hot & Spicy Chicken Strips(Harvest).png',
            'Calibra Popcorn Chicken': 'Calibra Popcorn Chicken.png',
            'Vegi Burger Eurofreez 4Oz': 'Vegi Burger Eurofreez 4Oz.png',
            'Apple Pies': 'Apple Pies.png',
            'Battered Onion Rings': 'Battered Onion Rings.png',
            'Frozen Iqf Corn On The Cob': 'Frozen Iqf Corn On The Cob.png',
            'Halal Frozen Lamb Ribs': 'Halal Frozen Lamb Ribs.png',
            'Aviko Cheddar Jalapenos': 'Aviko Cheddar Jalapenos.png',
            'Aviko Mozzarella Sticks': 'Aviko Mozzarella Sticks.png',
            'Falafel Balls': 'Falafel Balls.png',
            'Falafel Burger': 'Falafel Burger.png',
            'Water': 'Water.png',
            'Coca Cola Eng': 'Coca Cola Eng.png',
            'Coca Cola (Uk)': 'Coca Cola (Uk).png',
            'Coca Cola Euro': 'Coca Cola Euro.jpeg',
            'Coca Cola Cans Euro': 'Coca-Cola eee.png',
            'Coke': 'Coke.png',
            'Coke Zero': 'Coke Zero.png',
            'Diet Coke Cans (Uk)': 'Diet Coke Cans (Uk).jpeg',
            'Pepsi (Eng, Eur)': 'Pepsi (Eng, Eur).png',
            'Pepsi Cola Cans (Euro)': 'Pepsi Cola Cans (Euro).png',
            'Pepsi Cola Cans (Uk)': 'Pepsi Cola Cans (Uk).png',
            'Pepsi Diet': 'Pepsi Diet.png',
            'Pepsi Max Cans(Euro)': 'Pepsi Max Cans(Euro).png',
            'Pepsi Max Cans Gb': 'Pepsi Max Cans Gb.png',
            '7up (Eng, Eur)': '7up (Eng , Eur).png',
            '7up Cans': '7up Cans.png',
            'Tango Orange': 'Tango Orange.png',
            'Tango Orange Cans': 'Tango Orange Cans.png',
            'Tango Dark Berry Cans': 'Tango Dark Berry Cans.png',
            'Tango Apple': 'Tango Apple.png',
            'Tango Cherry Cans': 'Tango Cherry Cans.png',
            'Mirinda Orange Cans': 'Mirinda Orange Cans.png',
            'Mirinda Strawberry Cans': 'Mirinda Strawberry Cans.png',
            'Fanta Orange Cans': 'Fanta Orange Cans.png',
            'Dr Pepper (Uk)': 'Dr Pepper (Uk).png',
            'Ginger Beer': 'Ginger Beer.png',
            'Sprite Cans': 'Sprite Cans.jpeg',
            'Rio Tropical Cans': 'Rio Trocpical Cans.jpeg',
            'Vimto Cans': 'Vimto Cans.jpeg',
            'Umdah Mango Juice': 'Umdah Mango Juice.jpeg',
            'Capri Sun Orange': 'Capri-Sun Orange.jpeg',
            'Caprisun Multi Vitamin': 'Capri-Sun Multi Vitamin.jpeg'
        };
        
        // Check for size-specific pizza box images
        if (itemName === 'Pizza Box Brown' && itemSize) {
            if (itemSize.includes('7 inch')) {
                return './Pizza Box Brown 7 inch.png';
            }
            if (itemSize.includes('(12, 14) inch')) {
                return './Pizza Box Brown(12, 14) inch.png';
            }
            if (itemSize.includes('(09, 10 inches)') || itemSize.includes('(9, 10) inch')) {
                return './Pizza Box Brown(09,10 inches).png';
            }
            if (itemSize.includes('(15, 16) inch')) {
                return './Pizza Box Brown (15,16inches).png';
            }
        }
        
        // Check for size-specific Fresh Fillets images
        if (itemName === 'Fresh Fillets' && itemSize) {
            if (itemSize.includes('250+')) {
                return './Fresh Fillets 250+ gm.png';
            }
            if (itemSize.includes('9kg (90-130)') || itemSize.includes('9kg (90 - 130)')) {
                return './Fresh Fillets 9kg (90 - 130) gm.png';
            }
            if (itemSize.includes('9kg (130-170)') || itemSize.includes('9kg (130 - 170)')) {
                return './Fresh Fillets 9kg (130 - 170) gm.png';
            }
        }
        
        // Check for size-specific Fillet IQF images
        if (itemName === 'Fillet IQF' && itemSize) {
            if (itemSize.includes('10kg (250') || itemSize.includes('250 gm)')) {
                return './Fillet IQF 10kg (250 gm).png';
            }
        }
        
        // Check if we have a specific image for this item
        if (specificImages[itemName]) {
            // Images are in root folder, return full path
            const imagePath = specificImages[itemName];
            return imagePath.startsWith('./') ? imagePath : './' + imagePath;
        }
        
        // Create a more realistic image URL based on item name and category
        const imageName = itemName.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        
        // Try to use category-specific image paths
        const categoryPaths = {
            'poultry': 'poultry',
            'frozen': 'frozen',
            'fries': 'fries',
            'drinks': 'drinks',
            'flour': 'flour',
            'buns': 'buns',
            'hygiene': 'hygiene',
            'oils': 'oils',
            'sauces': 'sauces',
            'pizza': 'pizza',
            'packaging': 'packaging'
        };
        
        const categoryPath = categoryPaths[category] || 'products';
        
        // First try local image path
        const localPath = `images/${categoryPath}/${imageName}.jpg`;
        
        return localPath;
    }

    // Parse size string into variant options
    function parseVariants(sizeString) {
        if (!sizeString) return null;
        
        // Check if size contains multiple options (e.g., "(1100, 1200, 1300, 1500) gm")
        const multiVariantPattern = /\(([^)]+)\)\s*([a-zA-Z]+)?/;
        const match = sizeString.match(multiVariantPattern);
        
        if (match) {
            const options = match[1].split(',').map(opt => opt.trim());
            const unit = match[2] || '';
            
            // Check if options already have units (e.g., "275 gm, 10 Kg")
            const hasUnits = options.some(opt => /\d+\s*(gm|kg|Kg|g|G|ml|ML|l|L)/i.test(opt));
            
            if (hasUnits) {
                // Options already have units, return as is
                return options;
            } else {
                // Apply unit to all options
                return options.map(opt => unit ? `${opt} ${unit}` : opt);
            }
        }
        
        // Check for comma-separated values without parentheses (e.g., "275 gm, 10Kg")
        if (sizeString.includes(',')) {
            const options = sizeString.split(',').map(opt => opt.trim());
            // Only treat as variants if there are multiple options
            if (options.length > 1) {
                return options;
            }
        }
        
        // Check for other patterns like "6x1.8 kg" or single values
        // Return null if it's a single value (no variants needed)
        return null;
    }

    function displayItems(items) {
        categoryItemsGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'product-item-card';
            
            // Get image URL
            const imageUrl = getImageUrl(item.name, currentCategory, item.size);
            const shortName = item.name.substring(0, 20);
            
            // Parse variants from size string
            const variants = parseVariants(item.size);
            const hasVariants = variants && variants.length > 0;
            
            // Use Unsplash for food/product images with category-specific search (fallback)
            const categoryKeywords = {
                'poultry': 'chicken',
                'frozen': 'frozen-food',
                'fries': 'french-fries',
                'drinks': 'beverage',
                'flour': 'flour',
                'buns': 'bread',
                'hygiene': 'cleaning',
                'oils': 'cooking-oil',
                'sauces': 'sauce',
                'pizza': 'pizza',
                'packaging': 'packaging'
            };
            
            const keyword = categoryKeywords[currentCategory] || 'product';
            const unsplashUrl = `https://source.unsplash.com/400x400/?${keyword},food&sig=${index}`;
            
            // Generate variant selector HTML
            let variantSelectorHTML = '';
            if (hasVariants) {
                const variantId = `variant-${index}-${Date.now()}`;
                variantSelectorHTML = `
                    <div class="variant-selector-container">
                        <label class="variant-label">Select weight/variant:</label>
                        <select class="variant-select" id="${variantId}" data-item-index="${index}" required>
                            <option value="">-- Please select --</option>
                            ${variants.map(variant => `<option value="${variant}">${variant}</option>`).join('')}
                        </select>
                        <p class="variant-error" id="error-${variantId}" style="display: none; color: #d32f2f; font-size: 0.85rem; margin-top: 5px;">
                            Please select a variant before adding to cart
                        </p>
                    </div>
                `;
            }
            
            itemCard.innerHTML = `
                <div class="product-image">
                    <img src="${imageUrl}" alt="${item.name}" 
                         onerror="this.onerror=null; this.src='${unsplashUrl}'; this.onerror=function(){this.src='https://via.placeholder.com/400x400/E6E6E9/0A2540?text=${encodeURIComponent(shortName)}';}"
                         loading="lazy">
                    <div class="image-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="product-info">
                    <h4>${item.name}</h4>
                    ${item.size && !hasVariants ? `<p class="product-size">${item.size}</p>` : ''}
                    ${variantSelectorHTML}
                    <button class="add-to-cart-btn" 
                            data-item-name="${item.name}" 
                            data-item-size="${item.size || ''}"
                            data-has-variants="${hasVariants}"
                            ${hasVariants ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            `;
            categoryItemsGrid.appendChild(itemCard);
        });
        
        // Attach add to cart event listeners
        attachAddToCartListeners();
        
        // Attach variant selector listeners
        attachVariantListeners();
    }

    function showCategoryItems(category) {
        const items = categoryItems[category];
        if (!items) {
            console.error('Category items not found:', category);
            return;
        }
        
        currentCategory = category;
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Check if category has subcategories (like pizza or drinks)
        if (typeof items === 'object' && !Array.isArray(items)) {
            // Show subcategory buttons and create them dynamically
            subcategoryButtons.style.display = 'flex';
            subcategoryButtons.innerHTML = '';
            
            // Create buttons based on category
            const subcategoryConfig = {
                'pizza': [
                    { key: 'toppings', label: 'Toopings' },
                    { key: 'pizzaBox', label: 'Pizza Box' },
                    { key: 'pizzaCheese', label: 'Pizza Cheese' },
                    { key: 'others', label: 'Others' }
                ],
                'drinks': [
                    { key: 'drinks', label: 'Drinks' },
                    { key: 'bottles', label: 'Bottles' }
                ],
                'frozen': [
                    { key: 'beefBurgers', label: 'Beef Burgers' },
                    { key: 'nuggets', label: 'Nuggets' },
                    { key: 'steaks', label: 'Steaks' },
                    { key: 'kabab', label: 'Kabab' },
                    { key: 'cheese', label: 'Cheese' },
                    { key: 'others', label: 'Others' }
                ],
                'poultry': [
                    { key: 'all', label: 'All' },
                    { key: 'freshChicken', label: 'Fresh Chicken' },
                    { key: 'wings', label: 'Wings' },
                    { key: 'fillets', label: 'Fillets' },
                    { key: 'frozenFillets', label: 'Frozen Fillets' }
                ]
            };
            
            const config = subcategoryConfig[category] || Object.keys(items).map(key => ({
                key: key,
                label: key.charAt(0).toUpperCase() + key.slice(1)
            }));
            
            config.forEach((sub, index) => {
                const btn = document.createElement('button');
                btn.className = `subcategory-btn ${index === 0 ? 'active' : ''}`;
                btn.setAttribute('data-subcategory', sub.key);
                btn.textContent = sub.label;
                subcategoryButtons.appendChild(btn);
            });
            
            // Re-attach event listeners
            attachSubcategoryListeners();
            
            // Set default subcategory based on category
            if (category === 'pizza') {
                currentSubcategory = 'toppings';
                categoryItemsTitle.textContent = `${categoryName} Toppings`;
            } else if (category === 'drinks') {
                currentSubcategory = 'drinks';
                categoryItemsTitle.textContent = `${categoryName}`;
            } else if (category === 'frozen') {
                currentSubcategory = 'beefBurgers';
                categoryItemsTitle.textContent = `${categoryName}`;
            } else if (category === 'poultry') {
                currentSubcategory = 'all';
                categoryItemsTitle.textContent = `${categoryName}`;
            } else {
                // Get first subcategory
                currentSubcategory = Object.keys(items)[0];
                categoryItemsTitle.textContent = `${categoryName}`;
            }
            
            const subcategoryItems = items[currentSubcategory] || [];
            displayItems(subcategoryItems);
        } else {
            // Regular category without subcategories
            subcategoryButtons.style.display = 'none';
            categoryItemsTitle.textContent = `${categoryName} Items`;
            displayItems(items);
        }
        
        categoryItemsContainer.style.display = 'block';
        
        // Scroll to items section smoothly
        setTimeout(() => {
            categoryItemsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Function to attach subcategory button listeners
    function attachSubcategoryListeners() {
        document.querySelectorAll('.subcategory-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.subcategory-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const subcategory = this.getAttribute('data-subcategory');
                currentSubcategory = subcategory;
                
                if (currentCategory === 'pizza' && categoryItems.pizza[subcategory]) {
                    const items = categoryItems.pizza[subcategory];
                    displayItems(items);
                    
                    // Update title based on subcategory
                    const subcategoryNames = {
                        'toppings': 'Toppings',
                        'pizzaBox': 'Pizza Box',
                        'pizzaCheese': 'Pizza Cheese',
                        'others': 'Others'
                    };
                    categoryItemsTitle.textContent = `Pizza ${subcategoryNames[subcategory]}`;
                } else if (currentCategory === 'drinks' && categoryItems.drinks[subcategory]) {
                    const items = categoryItems.drinks[subcategory];
                    displayItems(items);
                    
                    // Update title based on subcategory
                    const subcategoryNames = {
                        'drinks': 'Drinks',
                        'bottles': 'Bottles'
                    };
                    categoryItemsTitle.textContent = subcategoryNames[subcategory];
                } else if (currentCategory === 'frozen' && categoryItems.frozen[subcategory]) {
                    const items = categoryItems.frozen[subcategory];
                    displayItems(items);
                    
                    // Update title based on subcategory
                    const subcategoryNames = {
                        'beefBurgers': 'Beef Burgers',
                        'nuggets': 'Nuggets',
                        'steaks': 'Steaks',
                        'kabab': 'Kabab',
                        'cheese': 'Cheese',
                        'others': 'Others'
                    };
                    categoryItemsTitle.textContent = `Frozen ${subcategoryNames[subcategory]}`;
                } else if (currentCategory === 'poultry' && categoryItems.poultry[subcategory]) {
                    const items = categoryItems.poultry[subcategory];
                    displayItems(items);
                    
                    // Update title based on subcategory
                    const subcategoryNames = {
                        'all': 'All',
                        'freshChicken': 'Fresh Chicken',
                        'wings': 'Wings',
                        'fillets': 'Fillets',
                        'frozenFillets': 'Frozen Fillets'
                    };
                    categoryItemsTitle.textContent = `Poultry ${subcategoryNames[subcategory]}`;
                }
            });
        });
    }
    
    // Attach listeners initially (for pizza buttons in HTML)
    attachSubcategoryListeners();

    // Back to Gallery button
    const backToGalleryBtn = document.getElementById('backToGalleryBtn');
    if (backToGalleryBtn) {
        backToGalleryBtn.addEventListener('click', () => {
            categoryItemsContainer.style.display = 'none';
            // Scroll to gallery section
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Shopping Cart functionality
    let cart = [];
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotalItems = document.getElementById('cartTotalItems');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Load cart from localStorage
    function loadCart() {
        const savedCart = localStorage.getItem('foodCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('foodCart', JSON.stringify(cart));
        updateCartUI();
    }

    // Update cart UI
    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.setAttribute('data-count', totalItems);
        cartTotalItems.textContent = totalItems;
        
        // Show/hide badge based on count
        if (totalItems > 0) {
            cartCount.style.display = 'flex';
            cartCount.style.visibility = 'visible';
            cartCount.style.opacity = '1';
        } else {
            cartCount.style.display = 'none';
        }
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
        } else {
            cartItems.innerHTML = '';
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                // Display selected variant if available, otherwise display size
                const variantDisplay = item.selectedVariant ? item.selectedVariant : (item.size ? item.size : '');
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        ${variantDisplay ? `<p class="cart-item-size">${variantDisplay}</p>` : ''}
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="remove-item-btn" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
        }
    }

    // Make functions global for onclick handlers
    window.updateQuantity = function(index, change) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
    };

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        saveCart();
    };

    // Add to cart function
    function addToCart(itemName, itemSize, selectedVariant = null) {
        // Create a unique identifier for cart items (name + variant/size)
        const itemIdentifier = selectedVariant ? `${itemName} - ${selectedVariant}` : (itemSize ? `${itemName} - ${itemSize}` : itemName);
        
        const existingItem = cart.find(item => {
            const existingIdentifier = item.selectedVariant ? `${item.name} - ${item.selectedVariant}` : (item.size ? `${item.name} - ${item.size}` : item.name);
            return existingIdentifier === itemIdentifier;
        });
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: itemName,
                size: itemSize,
                selectedVariant: selectedVariant,
                quantity: 1
            });
        }
        
        saveCart();
        
        // Show notification
        const displayName = selectedVariant ? `${itemName} - ${selectedVariant}` : itemName;
        showCartNotification(`${displayName} added to cart!`);
    }

    // Show cart notification
    function showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    // Attach variant selector listeners
    function attachVariantListeners() {
        document.querySelectorAll('.variant-select').forEach(select => {
            select.addEventListener('change', function() {
                const itemIndex = this.getAttribute('data-item-index');
                const selectedVariant = this.value;
                const errorElement = document.getElementById(`error-${this.id}`);
                const addToCartBtn = this.closest('.product-item-card').querySelector('.add-to-cart-btn');
                
                // Hide error message
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
                
                // Enable/disable add to cart button
                if (selectedVariant) {
                    addToCartBtn.disabled = false;
                    addToCartBtn.style.opacity = '1';
                    addToCartBtn.style.cursor = 'pointer';
                    // Store selected variant in button data attribute
                    addToCartBtn.setAttribute('data-selected-variant', selectedVariant);
                } else {
                    addToCartBtn.disabled = true;
                    addToCartBtn.style.opacity = '0.5';
                    addToCartBtn.style.cursor = 'not-allowed';
                    addToCartBtn.removeAttribute('data-selected-variant');
                }
            });
        });
    }

    // Attach add to cart listeners
    function attachAddToCartListeners() {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item-name');
                const itemSize = this.getAttribute('data-item-size');
                const hasVariants = this.getAttribute('data-has-variants') === 'true';
                const selectedVariant = this.getAttribute('data-selected-variant');
                
                // Check if variant is required but not selected
                if (hasVariants && !selectedVariant) {
                    const variantSelect = this.closest('.product-item-card').querySelector('.variant-select');
                    if (variantSelect) {
                        const errorElement = document.getElementById(`error-${variantSelect.id}`);
                        if (errorElement) {
                            errorElement.style.display = 'block';
                        }
                        // Scroll to error
                        variantSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        variantSelect.focus();
                    }
                    return;
                }
                
                // Use selected variant if available, otherwise use original size
                const finalSize = selectedVariant || itemSize;
                addToCart(itemName, finalSize, selectedVariant);
            });
        });
    }

    // Open cart modal
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close cart modal
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close cart when clicking outside
    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Create WhatsApp message
            let message = 'Hello! I would like to place an order:\n\n';
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name}`;
                // Include selected variant if available, otherwise include size
                if (item.selectedVariant) {
                    message += ` - ${item.selectedVariant}`;
                } else if (item.size) {
                    message += ` (${item.size})`;
                }
                message += ` - Qty: ${item.quantity}\n`;
            });
            message += '\nPlease confirm availability and pricing.';
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/923064025025?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Load cart on page load
    loadCart();

    // Helper function to generate random color for placeholder
    function getRandomColor() {
        const colors = ['0A2540', 'F28C28', '4CAF50', 'E53935', 'FF9800'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Show items when category card is clicked
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            const category = this.getAttribute('data-category');
            if (category && categoryItems[category]) {
                showCategoryItems(category);
            }
        });
    });
});