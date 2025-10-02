/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, ArrowUp } from 'lucide-react';

// Import local images
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import storyofus from './assets/story_of_us.jpg';

const LuxuryWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);

  const slides = [
    {
      title: "Purus",
      subtitle: "Sollicitudin Amet",
      description: "Mauris leo risus, porta ac consectetur ac, vestibulum at eros. Donec ultrices, nibh a cursus commondanue mauris",
      buttonText: "Read More",
      image: slide1
    },
    {
      title: "Elegance",
      subtitle: "Consectetur Adipiscing",
      description: "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum",
      buttonText: "Discover",
      image: slide2
    },
    {
      title: "Luxury",
      subtitle: "Vestibulum Tortor",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis",
      buttonText: "Explore",
      image: slide3
    }
  ];

  const featuredPosts = [
    {
      title: "ADIPISCING VEHICULA FUSCE",
      description: "Mauris leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel"
    },
    {
      title: "IPSUM PORTA PELLENTESQUE",
      description: "Mauris leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel"
    },
    {
      title: "QUAM MALESUADA TRISTIQUE",
      description: "Mauris leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel"
    }
  ];

  const products = [
    { name: "BLUE DIAMOND", price: "$500", category: "Bags" },
    { name: "MARC BAKER", price: "$750", category: "Bags" },
    { name: "BROWN SHOES", price: "$450", category: "Shoes" },
    { name: "LE MONTAGUE", price: "$890", category: "Bags" }
  ];

  const tags = [
    'camera', 'chef', 'city', 'cook',
    'fashion', 'inspiration', 'hipster',
    'motivation', 'photography', 'recipes',
    'style', 'travel', 'video'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextProduct = () => setCurrentProductSlide((prev) => Math.min(prev + 1, products.length - 1));
  const prevProduct = () => setCurrentProductSlide((prev) => Math.max(prev - 1, 0));

  const texts = {
    EN: {
      home: "HOME",
      product: "PRODUCT",
      pages: "PAGES",
      blog: "BLOG",
      features: "FEATURES",
      shortcodes: "SHORTCODES",
      newArrivals: "NEW ARRIVALS",
      viewAll: "View All Products",
      newBoutique: "THIEN PHU FOAM",
      comeVisit: "COME VISIT",
      fashionShow: "THIEN PHU SPONGE",
      learnMore: "Learn More",
      aboutUs: "ABOUT US",
      recentComments: "RECENT COMMENTS",
      tagCloud: "TAG CLOUD",
      about: "Cras luctus natoque penalibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada at eros. Praesent commodo at, vestibulum ac, consectetur",
      products: "Products",
      cart: "Cart",
      terms: "Terms",
      copyright: "Copyright 2025, Atwill spare"
    },
    VN: {
      home: "TRANG CHỦ",
      product: "SẢN PHẨM",
      pages: "TRANG",
      blog: "BLOG",
      features: "TÍNH NĂNG",
      shortcodes: "MÃ NGẮN",
      newArrivals: "HÀNG MỚI VỀ",
      viewAll: "Xem Tất Cả Sản Phẩm",
      newBoutique: "THIÊN PHÚ FOAM",
      comeVisit: "GHÉ THĂM",
      fashionShow: "THIÊN PHÚ MÚT",
      learnMore: "Tìm Hiểu Thêm",
      aboutUs: "VỀ CHÚNG TÔI",
      recentComments: "BÌNH LUẬN GẦN ĐÂY",
      tagCloud: "THẺ TAG",
      about: "Cửa hàng xa xỉ của chúng tôi mang đến những sản phẩm cao cấp nhất. Chúng tôi cam kết chất lượng và phong cách đẳng cấp cho khách hàng",
      products: "Sản Phẩm",
      cart: "Giỏ Hàng",
      terms: "Điều Khoản",
      copyright: "Bản quyền 2025, Atwill spare"
    }
  };

  const t = texts[language];

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light tracking-widest">THIÊN PHÚ MÚT</div>
            
            <div className="hidden md:flex space-x-8 text-sm tracking-wider">
              <a href="#" className="hover:text-gray-600 transition">{t.home}</a>
              <a href="#" className="hover:text-gray-600 transition">{t.product}</a>
              <a href="#" className="hover:text-gray-600 transition">{t.pages}</a>
              <a href="#" className="hover:text-gray-600 transition">{t.blog}</a>
              <a href="#" className="hover:text-gray-600 transition">{t.features}</a>
              <a href="#" className="hover:text-gray-600 transition">{t.shortcodes}</a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setLanguage(language === 'EN' ? 'VN' : 'EN')} 
                className="text-sm font-semibold hover:text-amber-700 transition"
              >
                {language}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300">{slide.subtitle}</h2>
                <p className="text-sm md:text-base mb-8 leading-relaxed">{slide.description}</p>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm tracking-widest">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded transition">
          <ChevronLeft className="text-white" size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded transition">
          <ChevronRight className="text-white" size={32} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

        {/* CTA Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-16 transition-colors duration-300`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-light tracking-widest mb-4">MAGNA PARTURIENT COMMODO</h2>
          <p className="text-sm mb-8 leading-relaxed">Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor</p>
          <button className="px-8 py-3 border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 text-sm tracking-widest">
            {t.learnMore}
          </button>
        </div>
      </div>

   {/* Brand Ambassador (moved up) */}
<div className="relative h-[400px] md:h-[500px]" style={{
  backgroundImage: `url(${storyofus})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  {/* Overlay làm tối ảnh */}
  <div className="absolute inset-0 bg-black/80"></div>

  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-md text-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-2 tracking-wide">VỀ CHÚNG TÔI</h2>
        <p className="text-lg mb-6 italic">Công ty TNHH Thiên Phú Mút khởi đầu từ một xưởng nhỏ, chỉ có vài công nhân miệt mài bên từng tấm mút. Qua bao năm gian khó, họ vẫn giữ niềm tin “chất lượng làm nên thương hiệu”. Từng sản phẩm gửi đi là từng giọt mồ hôi, tình yêu lao động. Đến hôm nay, Thiên Phú Mút không chỉ là công ty, mà còn là mái nhà ấm áp của bao gia đình.</p>
        <button className="px-6 py-2 border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm tracking-widest">
          {t.learnMore} →
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 h-64">
                <img 
                  // src={`https://images.unsplash.com/photo-${1490481651871 + index * 1000}-ab68de25d43d?w=600&h=400&fit=crop`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm tracking-widest mb-3 text-amber-700">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-widest mb-2">{t.newArrivals}</h2>
          <a href="#" className="text-sm text-amber-700 hover:text-amber-800">{t.viewAll} →</a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentProductSlide * 25}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[25%] px-4">
                  <div className="group cursor-pointer">
                    <div className="overflow-hidden mb-4 h-80 bg-gray-100 dark:bg-gray-800">
                      <img 
                        src={`https://images.unsplash.com/photo-${1491336477648 + index * 10000}-ab68de25d43d?w=400&h=600&fit=crop`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm tracking-widest mb-2 text-amber-700">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{product.category}, {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevProduct} disabled={currentProductSlide === 0} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextProduct} disabled={currentProductSlide >= products.length - 1} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Promo Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 overflow-hidden group cursor-pointer" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm tracking-widest mb-2">{t.comeVisit}</p>
                <h3 className="text-3xl font-light tracking-wide">{t.newBoutique}</h3>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden group cursor-pointer" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-light tracking-wide">{t.fashionShow}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-16 transition-colors duration-300`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-light tracking-widest mb-4">MAGNA PARTURIENT COMMODO</h2>
          <p className="text-sm mb-8 leading-relaxed">Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor</p>
          <button className="px-8 py-3 border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 text-sm tracking-widest">
            {t.learnMore}
          </button>
        </div>
      </div>

      {/* Brand Banner */}
      <div className="relative h-96" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=900&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest mb-2">THIÊN PHÚ MÚT</h2>
            <p className="text-sm tracking-widest">Chất lượng - Bền bỉ - Tận tâm - Niềm tin</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-16 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-sm tracking-widest mb-6">{t.aboutUs}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.about}</p>
              <div className="text-2xl font-light tracking-widest">THIÊN PHÚ MÚT</div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-6">{t.recentComments}</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <p>Jules Doe on <span className="text-amber-600">Project status discussion</span></p>
                <p>Jules Doe on <span className="text-amber-600">Etusmod tempor inciding</span></p>
                <p>Jules Doe on <span className="text-amber-600">Ultricies mollis erat</span></p>
                <p>Jules Doe on <span className="text-amber-600">Risus Ipsum tempor</span></p>
                <p>John Doe on <span className="text-amber-600">Consectetur</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-6">{t.tagCloud}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button key={index} className="px-3 py-1 bg-gray-800 hover:bg-amber-700 text-xs tracking-wider transition">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition">{t.home}</a>
                <a href="#" className="hover:text-white transition">{t.products}</a>
                <a href="#" className="hover:text-white transition">{t.cart}</a>
                <a href="#" className="hover:text-white transition">{t.terms}</a>
              </div>
              <div>{t.copyright}</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default LuxuryWebsite;
