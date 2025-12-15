"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Leaf, Sparkles, CheckCircle, Zap, Battery, Brain, MapPin, Star, Heart, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="animatedAurora"
      cardStyle="gradient-subtle"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Why Matcha", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794913509-ztgkh7h9.jpg"
          logoAlt="Matcha Amsterdam Logo"
          brandName="Matcha Amsterdam"
          button={{ text: "Order Now", href: "#products" }}
          buttonClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="Authentic Matcha, Amsterdam Soul"
          description="Experience the pure essence of Japanese matcha culture right here in Amsterdam. Handpicked, ceremonial-grade matcha delivered fresh to your door."
          kpis={[
            { value: "100%", label: "Organic & Pure" },
            { value: "Direct", label: "Farm to Cup" },
            { value: "365", label: "Days Fresh Guarantee" }
          ]}
          tag="Amsterdam's Matcha Destination"
          tagIcon={Leaf}
          buttons={[
            { text: "Shop Collection", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          globePosition="right"
          className="min-h-screen"
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Philosophy"
          description="We believe matcha is more than a beverage, it's a ritual. Every batch we source comes directly from family farms in Japan with generations of expertise. We bring that authenticity to Amsterdam, honoring the Japanese tea ceremony while making it accessible to everyone who seeks mindfulness in a cup."
          useInvertedBackground="noInvert"
          descriptionClassName="text-2xl md:text-4xl leading-relaxed"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Why Choose Our Matcha"
          description="What makes our matcha truly exceptional"
          tag="Premium Quality"
          tagIcon={Sparkles}
          features={[
            { title: "Ceremonial Grade", icon: Leaf },
            { title: "Organic Certified", icon: CheckCircle },
            { title: "Hand Whisked", icon: Zap },
            { title: "Energy Boost", icon: Battery },
            { title: "Mental Clarity", icon: Brain },
            { title: "Amsterdam Local", icon: MapPin }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          showIconBoxBackground={true}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Matcha Selection"
          description="Handpicked from the finest Japanese farms"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Matcha Amsterdam",
              name: "Classic Ceremonial Grade",
              price: "€24.99",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794919451-xph1utyd.jpg",
              imageAlt: "Classic Ceremonial Matcha",
              isFavorited: false
            },
            {
              id: "2",
              brand: "Matcha Amsterdam",
              name: "Premium Ceremonial Grade",
              price: "€34.99",
              rating: 5,
              reviewCount: "298",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794922372-b1gsunov.jpg",
              imageAlt: "Premium Ceremonial Matcha",
              isFavorited: false
            },
            {
              id: "3",
              brand: "Matcha Amsterdam",
              name: "Culinary Grade Matcha",
              price: "€14.99",
              rating: 4,
              reviewCount: "567",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794921074-4janaliw.jpg",
              imageAlt: "Culinary Matcha for Lattes",
              isFavorited: false
            },
            {
              id: "4",
              brand: "Matcha Amsterdam",
              name: "Organic Pure Matcha",
              price: "€29.99",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794921695-p282my26.jpg",
              imageAlt: "Organic Pure Matcha",
              isFavorited: false
            },
            {
              id: "5",
              brand: "Matcha Amsterdam",
              name: "Ceremonial Grade Deluxe",
              price: "€44.99",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794920156-l0c1hlfz.jpg",
              imageAlt: "Ceremonial Grade Deluxe",
              isFavorited: false
            },
            {
              id: "6",
              brand: "Matcha Amsterdam",
              name: "Bamboo Whisk Starter Kit",
              price: "€19.99",
              rating: 5,
              reviewCount: "412",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794922978-rjfiiikx.jpg",
              imageAlt: "Matcha Whisk Tool",
              isFavorited: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Community Says"
          description="Real experiences from matcha lovers across Amsterdam"
          tag="Customer Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah van Amsterdam",
              role: "Daily Matcha Enthusiast",
              testimonial: "This matcha changed my morning routine completely. The quality is exceptional and the flavor is incredibly smooth. Finally found authentic matcha in Amsterdam!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794926742-sbpve95r.jpg",
              imageAlt: "Sarah van Amsterdam"
            },
            {
              id: "2",
              name: "Marco de Groote",
              role: "Cafe Owner",
              testimonial: "We switched to Matcha Amsterdam for our specialty drinks. Our customers immediately noticed the difference in taste and quality. Highly recommended for any cafe.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794927930-jfkxh3u9.jpg",
              imageAlt: "Marco de Groote"
            },
            {
              id: "3",
              name: "Lisa Mueller",
              role: "Wellness Coach",
              testimonial: "The energy and mental clarity I get from their matcha is unmatched. I recommend it to all my clients. Pure, honest, and authentic quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794929045-7974p62s.jpg",
              imageAlt: "Lisa Mueller"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Tea Connoisseur",
              testimonial: "As someone who has lived in Japan, I can confirm this matcha rivals what I find there. Impressive sourcing and freshness. This is the real deal.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794929783-2zn6isu7.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "5",
              name: "Emma Jansen",
              role: "Fitness Trainer",
              testimonial: "My clients love the sustained energy they get from this matcha. No crash, pure focus. It's become our pre-workout ritual here at the gym.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794930555-587lcubz.jpg",
              imageAlt: "Emma Jansen"
            },
            {
              id: "6",
              name: "Thomas Bakker",
              role: "Meditation Teacher",
              testimonial: "The ceremonial ritual that comes with preparing matcha is what drew me in. Their product makes the experience truly special. Highly authentic.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765794931350-twxd5tw2.jpg",
              imageAlt: "Thomas Bakker"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Matcha Questions Answered"
          sideDescription="Everything you need to know about our matcha and how to prepare it"
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What makes matcha different from regular green tea?",
              content: "Matcha is the whole tea leaf ground into powder, so you consume the entire leaf. This means you get more antioxidants, chlorophyll, and nutrients compared to steeped green tea. Plus, the ceremonial preparation ritual creates a more mindful experience."
            },
            {
              id: "2",
              title: "How do I prepare matcha properly?",
              content: "Use about 1-2 teaspoons of matcha powder in a bowl. Add a small amount of hot water (not boiling - around 70°C) and whisk vigorously with a bamboo whisk until frothy. Then add more hot water or milk to taste. Our bamboo whisk kit comes with instructions!"
            },
            {
              id: "3",
              title: "Is matcha suitable for every day?",
              content: "Yes! Our matcha is safe for daily consumption. It contains L-theanine and caffeine which provide sustained energy without the jitters. Most people enjoy 1-2 cups daily, but listen to your body."
            },
            {
              id: "4",
              title: "How long does matcha stay fresh?",
              content: "Once opened, keep matcha in an airtight container away from light and heat. It stays fresh for about 3-4 weeks. We guarantee 365 days of freshness from purchase date when stored properly."
            },
            {
              id: "5",
              title: "Do you ship outside Amsterdam?",
              content: "We ship throughout the Netherlands and Europe. Orders arrive within 3-5 business days. All our matcha is packaged to maintain freshness during transit with special airtight sealing."
            },
            {
              id: "6",
              title: "What's the difference between ceremonial and culinary grade?",
              content: "Ceremonial grade is the highest quality, designed for traditional tea ceremony preparation. It has a brighter color and smoother taste. Culinary grade is perfect for lattes, smoothies, and baking. Both are premium quality, just different uses."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get In Touch"
          ctaDescription="Have questions about our matcha? Want to visit our Amsterdam showroom? We'd love to hear from you."
          ctaButton={{ text: "Send Message", href: "#contact" }}
          ctaIcon={MessageCircle}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "Where is your physical location in Amsterdam?",
              content: "Our showroom is located in the heart of Amsterdam at Prinsengracht 124. You can visit us Monday to Sunday, 10am-7pm, to experience our matcha and get expert recommendations from our team."
            },
            {
              id: "2",
              title: "Do you offer tastings or matcha classes?",
              content: "Yes! We host weekly matcha ceremony workshops every Saturday at 2pm and Wednesday at 6pm. Classes include preparation techniques, history, and a full matcha tasting. Sign up on our website or call us to reserve your spot."
            },
            {
              id: "3",
              title: "Can I return or exchange products?",
              content: "Absolutely. We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, we'll process a full refund or exchange. No questions asked."
            },
            {
              id: "4",
              title: "Do you have corporate or bulk orders?",
              content: "Yes! We offer special bulk pricing for cafes, offices, and events. Contact our corporate team at bulk@matchaamsterdam.nl for custom quotes and delivery options."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Matcha Amsterdam"
          logoAlt="Matcha Amsterdam"
          className="py-12"
        />
      </div>
    </ThemeProvider>
  );
}