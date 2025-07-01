"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

export default function MoodMakersWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    "/images/Slide_main.jpg",
    "/images/Slide_1.jpg",
    "/images/Slide_2.jpg",
    "/images/Slide_3.jpg",
    "/images/Slide_4.jpg",
  ];

  const services = [
    {
      title: "Signature Cocktails",
      description:
        "Artisan cocktails crafted by master mixologists with premium spirits and fresh ingredients",
      image: "/images/Signature.webp",
      icon: "🍸",
      features: ["Premium Spirits", "Fresh Ingredients", "Custom Recipes"],
    },
    {
      title: "Liquor Chocolates",
      description:
        "Handcrafted alcohol-infused chocolates that melt in your mouth",
      image: "/images/liquor.jpg",
      icon: "🍫",
      features: ["Artisan Crafted", "Premium Chocolate", "Unique Flavors"],
    },
    {
      title: "Molecular Mixology",
      description:
        "Innovative techniques creating extraordinary visual and taste experiences",
      image: "/images/nitrogen_balls.jpg",
      icon: "⚗️",
      features: ["Liquid Nitrogen", "Edible Art", "Instagram Worthy"],
    },
    {
      title: "Premium Bar Setups",
      description:
        "Custom bar designs that become the centerpiece of your event",
      image: "/images/ice_bar.jpg",
      icon: "🥃",
      features: ["Custom Design", "Premium Equipment", "Professional Setup"],
    },
    {
      title: "Fruit Caviar & Spheres",
      description:
        "Exotic fruit presentations using molecular gastronomy techniques",
      image: "/images/fruit_caviar.jpg",
      icon: "🫧",
      features: ["Molecular Gastronomy", "Fresh Fruits", "Visual Impact"],
    },
    {
      title: "Premium Add-ons",
      description:
        "Exclusive additions to elevate your event to the next level",
      image: "/images/Add_on.png",
      icon: "✨",
      features: ["Luxury Touches", "Custom Options", "Memorable Details"],
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "₹25,000",
      description: "Perfect for intimate gatherings",
      features: [
        "Professional Bartender",
        "Basic Bar Setup",
        "Standard Cocktails",
        "4 Hour Service",
        "Basic Glassware",
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Premium",
      price: "₹45,000",
      description: "Our most popular choice",
      features: [
        "Master Mixologist",
        "Premium Bar Setup",
        "Signature Cocktails",
        "Molecular Elements",
        "Butler Service",
        "6 Hour Service",
        "Premium Glassware",
      ],
      popular: true,
      color: "from-red-600 to-red-700",
    },
    {
      name: "Luxury",
      price: "₹75,000",
      description: "The ultimate experience",
      features: [
        "Expert Team",
        "Luxury Bar Setup",
        "Full Molecular Bar",
        "Ice Sculptures",
        "Flair Bartending Show",
        "Crystal Glassware",
        "8 Hour Service",
        "Photography Support",
      ],
      popular: false,
      color: "from-amber-600 to-amber-700",
    },
  ];

  const galleryImages = [
    {
      src: "/images/gall_1.jpg",
      category: "weddings",
      alt: "Elegant Wedding Bar Setup",
    },
    {
      src: "/images/gall_2.jpg",
      category: "corporate",
      alt: "Corporate Event Excellence",
    },
    {
      src: "/images/gall_3.jpg",
      category: "private",
      alt: "Private Party Luxury",
    },
    {
      src: "/images/gall_4.jpg",
      category: "weddings",
      alt: "Wedding Cocktail Artistry",
    },
    {
      src: "/images/gall_5.jpg",
      category: "corporate",
      alt: "Professional Corporate Service",
    },
    {
      src: "/images/gall_6.jpg",
      category: "private",
      alt: "Intimate Private Experience",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding Reception",
      text: "Mood Makers transformed our wedding into a magical experience. The molecular cocktails were absolutely stunning!",
      rating: 5,
      image: "/images/gall_1.jpg",
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Gala",
      text: "Exceptional service and incredible attention to detail. Our clients were thoroughly impressed with the presentation.",
      rating: 5,
      image: "/images/gall_2.jpg",
    },
    {
      name: "Anita Gupta",
      event: "Birthday Celebration",
      text: "The flair bartending show was the highlight of the evening. Truly unforgettable entertainment!",
      rating: 5,
      image: "/images/gall_3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const filteredGalleryImages =
    activeGalleryFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeGalleryFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-red-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[1000] bg-white border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Mood Makers Logo"
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white/30"
                />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-red-800 to-red-900 bg-clip-text text-transparent">
                  Mood Makers
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  BEVERAGE CATERING
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                "Home",
                "About",
                "Services",
                "Packages",
                "Gallery",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-black cursor-pointer hover:text-red-600 transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("Contact".toLowerCase())}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-white/20">
              <div className="flex flex-col space-y-4 mt-6">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Packages",
                  "Gallery",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-black hover:text-red-600 transition-colors text-left font-medium"
                  >
                    {item}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("Contact".toLowerCase())}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full mt-4"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentSlide] || "/placeholder.svg"}
            alt="Mood Makers Premium Service"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Premium Beverage Catering
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Mood Makers
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-red-100">
              Crafting Unforgettable Experiences Through Artisan Mixology &
              Premium Service
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group"
                onClick={() => scrollToSection("contact")}
              >
                Book Your Event
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 group"
                onClick={() => scrollToSection("services")}
              >
                <Play className="mr-2 w-5 h-5" />
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-500 scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Hero Controls */}
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroImages.length) % heroImages.length
            )
          }
        >
          <ChevronLeft size={48} />
        </button>
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
          }
        >
          <ChevronRight size={48} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-20"></div>
              <Image
                src="/images/ice_bar.jpg"
                alt="Master Mixologist at Work"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 z-50 -right-6 md:-right-8 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm opacity-90">Years Excellence</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="bg-red-100 text-red-800 mb-4">
                  Our Story
                </Badge>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Crafting Liquid
                  <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {" "}
                    Art
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded by master mixologist{" "}
                  <strong className="text-gray-900">Raj Wadhwa</strong>, Mood
                  Makers represents the pinnacle of beverage artistry. With over
                  8 years of expertise, we don&apos;t just serve drinks—we
                  create liquid masterpieces that tell stories.
                </p>
                <p>
                  From molecular gastronomy to classic cocktail perfection,
                  every element is meticulously crafted to transform your event
                  into an unforgettable sensory journey.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "8+", label: "Years Experience", icon: "🏆" },
                  { number: "500+", label: "Events Crafted", icon: "🎉" },
                  { number: "100%", label: "Satisfaction Rate", icon: "⭐" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-red-50"
                  >
                    <CardContent className="p-0">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl md:text-3xl font-bold text-red-600 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-stone-50 to-red-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-800 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of luxury beverage services, each
              designed to elevate your event experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-800 mb-4">
              Investment Options
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the perfect package tailored to your vision and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl group ${
                  pkg.popular ? "scale-105 shadow-2xl" : "hover:scale-105"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 font-semibold">
                    Most Popular Choice
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5`}
                ></div>

                <CardContent
                  className={`p-8 relative ${pkg.popular ? "pt-16" : ""}`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">
                      {pkg.price}
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full cursor-pointer py-4 rounded-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl"
                        : "border-2 border-gray-300 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                    }`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Select {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Client Stories
            </Badge>
            <h2 className="text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it—hear from those who&apos;ve
              experienced the Mood Makers difference
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-red-100 mb-6 italic leading-relaxed text-lg">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-red-200">
                        {testimonial.event}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-800 mb-4">
              Our Portfolio
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Explore our portfolio of stunning events and see how we bring
              magic to every celebration
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { key: "all", label: "All Events" },
                { key: "weddings", label: "Weddings" },
                { key: "corporate", label: "Corporate" },
                { key: "private", label: "Private Parties" },
              ].map((filter) => (
                <Button
                  key={filter.key}
                  variant={
                    activeGalleryFilter === filter.key ? "default" : "outline"
                  }
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    activeGalleryFilter === filter.key
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                      : "border-gray-300 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                  }`}
                  onClick={() => setActiveGalleryFilter(filter.key)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="font-semibold text-lg">{image.alt}</div>
                    <div className="text-sm text-red-200 capitalize">
                      {image.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-stone-50 to-red-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-800 mb-4">Get In Touch</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Create Magic Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your event? Let&apos;s discuss your vision and
              craft the perfect experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        First Name
                      </label>
                      <Input
                        placeholder="Your first name"
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl py-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Last Name
                      </label>
                      <Input
                        placeholder="Your last name"
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl py-3"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98112 95571"
                      className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Event Type
                    </label>
                    <Input
                      placeholder="Wedding, Corporate Event, Private Party, etc."
                      className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your event, guest count, date, and any special requirements..."
                      rows={4}
                      className="border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        icon: MapPin,
                        title: "Location",
                        content:
                          "A 325, Basement, Sector 55\nGurugram, Haryana, India",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "+91 98112 95571",
                        link: "tel:+919811295571",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "moodmakers_bar@yahoo.in",
                        link: "mailto:moodmakers_bar@yahoo.in",
                      },
                      {
                        icon: Clock,
                        title: "Availability",
                        content: "Always Open for Bookings",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 rounded-xl">
                          {React.createElement(item.icon, {
                            className: "w-6 h-6",
                          })}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-600 hover:text-red-600 transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <div className="text-gray-600 whitespace-pre-line">
                              {item.content}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-600 to-red-700 text-white">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Why Choose Mood Makers?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Award, text: "8+ Years of Excellence" },
                      { icon: Users, text: "500+ Successful Events" },
                      { icon: Star, text: "Premium Quality Service" },
                      { icon: Calendar, text: "Flexible Scheduling" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {React.createElement(item.icon, {
                          className: "w-5 h-5 text-red-200",
                        })}
                        <span className="text-red-100">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Mood Makers Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">Mood Makers</h3>
                  <div className="text-xs text-gray-400">BEVERAGE CATERING</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Crafting unforgettable experiences through exceptional beverage
                catering and mixology artistry.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {["About", "Services", "Packages", "Gallery", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div>A 325, Basement, Sector 55</div>
                <div>Gurugram, Haryana, India</div>
                <div>Phone: +91 98112 95571</div>
                <div>Email: moodmakers_bar@yahoo.in</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Mood Makers Beverage Catering.
              All rights reserved.
            </p>
            <p className="mt-1">
              Website by{" "}
              <a
                href="https://www.linkedin.com/in/naveenbasyal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline hover:text-blue-400 transition-colors"
              >
                Naveen Basyal
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
