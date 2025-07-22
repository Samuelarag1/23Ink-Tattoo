import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionDivider } from "@/components/SectionDivider";
import {
  Instagram,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  Award,
  Users,
  Zap,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const galleryImages = [
    "tattoo/1.png",
    "tattoo/2.png",
    "tattoo/3.png",
    "tattoo/4.png",
    "tattoo/5.png",
    "tattoo/6.png",
    "tattoo/7.png",
    "tattoo/8.png",
  ];

  const services = [
    {
      name: "Fineline Tattoos",
      description:
        "Tatuajes de línea fina, delicados y minimalistas. Especialidad de la casa.",
      price: "Desde $15,000 ARS",
      duration: "2-4 horas",
    },
    {
      name: "Micro Realismo",
      description:
        "Detalles increíbles en espacios pequeños con técnica de micro realismo.",
      price: "Desde $20,000 ARS",
      duration: "3-5 horas",
    },
    {
      name: "Blackwork",
      description: "Diseños en negro sólido, geométricos y minimalistas.",
      price: "Desde $12,000 ARS",
      duration: "2-3 horas",
    },
    {
      name: "Script/Lettering",
      description: "Tipografías únicas y lettering personalizado.",
      price: "Desde $8,000 ARS",
      duration: "1-2 horas",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Increíble trabajo, súper detallista y profesional. Mi tatuaje fineline quedó perfecto.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Carlos Rodríguez",
      text: "La atención es excelente y el ambiente del estudio es muy limpio. 100% recomendado.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Ana Martínez",
      text: "Mi primera experiencia tatuándome y no pudo ser mejor. Explicó todo el proceso paso a paso.",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  const openGalleryModal = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setSelectedImage(galleryImages[imageIndex]);
  };

  const navigateGallery = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
        : (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const closeGalleryModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const faqs = [
    {
      question: "¿Cuál es la edad mínima para tatuarse?",
      answer:
        "La edad mínima es 18 años. Para menores de edad se requiere autorización de los padres y presencia de al menos uno de ellos durante la sesión.",
    },
    {
      question: "¿Cómo debo cuidar mi tatuaje recién hecho?",
      answer:
        "Te daré todas las instrucciones detalladas después de la sesión. Incluye mantenerlo limpio, aplicar pomada específica y evitar sol y agua durante los primeros días.",
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos efectivo, transferencia bancaria, MercadoPago y tarjetas de crédito/débito. Se requiere seña del 50% para reservar turno.",
    },
    {
      question: "¿Cuánto tiempo toma hacer un tatuaje fineline?",
      answer:
        "Depende del tamaño y complejidad. Generalmente entre 2-4 horas para diseños medianos. En la consulta te doy un tiempo estimado más preciso.",
    },
    {
      question: "¿Hacen diseños personalizados?",
      answer:
        "Sí, me especializo en crear diseños únicos y personalizados para cada cliente. Trabajamos juntos hasta lograr el diseño perfecto.",
    },
    {
      question: "¿Trabajan a domicilio?",
      answer:
        "Sí, ofrezco servicio a domicilio en CABA y GBA con todos los protocolos de higiene y seguridad. Consulta por tarifas adicionales.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpeg"
            alt="Tattoo artist working"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-wider mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            23 INK
            <br />
            <motion.span
              className="text-4xl md:text-6xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              TATTOOS
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/90 mb-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Fineline · Micro Realismo · Buenos Aires
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="https://instagram.com/23.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-6 w-6" />
              <span>@23.ink</span>
            </motion.a>
            <motion.a
              href="https://tiktok.com/@23ink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTiktok className="h-6 w-6" />
              <span>@23ink</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reservar Turno
            </Button>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-card overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sobre mí
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Artist Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -80, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="/she.jpg"
                  alt="Retrato del tatuador de 23 Ink"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 80, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un artista especializado en tatuajes fineline y micro
                realismo con más de 5 años de experiencia en Buenos Aires. Mi
                pasión por el detalle y la precisión me llevó a especializarme
                en técnicas minimalistas que requieren pulso firme y visión
                artística.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En 23 Ink Tattoos, cada diseño es único y personalizado. Trabajo
                de cerca con cada cliente para crear piezas que no solo sean
                visualmente impactantes, sino también significativas y
                duraderas.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">5+ Años</h3>
                  <p className="text-muted-foreground text-sm">Experiencia</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">500+</h3>
                  <p className="text-muted-foreground text-sm">
                    Clientes Satisfechos
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Fineline</h3>
                  <p className="text-muted-foreground text-sm">Especialidad</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="lines" />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: true }}
          >
            Galería
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-card rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openGalleryModal(index)}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: index % 2 === 0 ? -100 : 100,
                  rotate: index % 2 === 0 ? -10 : 10,
                }}
                whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={image}
                  alt={`Tattoo work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Fullscreen Image Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeGalleryModal();
              }
            }}
          >
            {/* Header with close button and counter */}
            <div className="absolute top-4 left-0 right-0 z-10 flex justify-between items-center px-6">
              <div className="text-white/80 text-lg font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeGalleryModal}
                className="text-white hover:bg-white/20 h-10 w-10 p-0"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Main image area */}
            <div className="flex-1 flex items-center justify-center p-16 relative">
              <img
                src={selectedImage}
                alt={`Tattoo work ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateGallery("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 p-0"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateGallery("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 p-0"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Thumbnail strip */}
            <div className="p-6 border-t border-white/20">
              <div className="flex space-x-2 overflow-x-auto justify-center">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-white scale-110"
                        : "border-white/30 hover:border-white/60"
                    }`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setSelectedImage(galleryImages[index]);
                    }}
                    whileHover={{
                      scale: index === currentImageIndex ? 1.1 : 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>

      <SectionDivider variant="ink" />

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-card overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, x: -100, skewX: -10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Servicios y Precios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  x: index % 2 === 0 ? -50 : 50,
                  scale: 0.9,
                }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Los precios son orientativos y pueden variar según el tamaño y
              complejidad del diseño.
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Consultar Presupuesto
            </Button>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="geometric" />

      {/* Booking Section */}
      <section id="booking" className="py-24 px-4 overflow-x-hidden">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Reservar Turno
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <Input placeholder="+54 9 11 xxxx-xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tipo de tatuaje
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de tatuaje" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fineline">Fineline</SelectItem>
                        <SelectItem value="micro-realismo">
                          Micro Realismo
                        </SelectItem>
                        <SelectItem value="blackwork">Blackwork</SelectItem>
                        <SelectItem value="script">Script/Lettering</SelectItem>
                        <SelectItem value="no-seguro">
                          No estoy seguro/a
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Descripción del diseño
                    </label>
                    <Textarea
                      placeholder="Describe tu idea, tamaño aproximado, ubicación en el cuerpo, referencias, etc."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Solicitud
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Contacto directo:</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/5491123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp: +54 9 11 2345-6789</span>
                    </a>
                    <a
                      href="https://instagram.com/23.ink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram: @23.ink</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-card overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimonios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full bg-card mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-card overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Información del Estudio
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+54 9 11 2345-6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@23inktattoos.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p>Lun - Vie: 10:00 - 19:00</p>
                    <p>Sáb: 10:00 - 16:00</p>
                    <p>Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Sígueme en Redes</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/23.ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 py-3 px-6 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span>@23.ink</span>
                </a>
                <a
                  href="https://tiktok.com/@23ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 py-3 px-6 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <FaTiktok className="h-6 w-6" />
                  <span>@23ink</span>
                </a>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 py-3 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 23 Ink Tattoos. Todos los derechos reservados. Buenos Aires,
            Argentina.
          </p>
          <p className="text-muted-foreground text-sm">
            Desarrollado por{" "}
            <a
              href="https://samaragtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Samaragtech.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
