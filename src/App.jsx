import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Home, 
  Sun, 
  Thermometer, 
  Battery, 
  Settings, 
  HelpCircle,
  CheckCircle,
  Star,
  Shield,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Euro
} from 'lucide-react'
import heroHouse from './assets/hero-house-new.jpg'
import { useIsMobile } from './hooks/use-mobile.js'
import './App.css'

function App() {
  const isMobile = useIsMobile()

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postalCode: '',
    phone: '',
    email: '',
    energyCosts: '',
    selectedOptions: []
  })

  const [isVisible, setIsVisible] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const sustainabilityOptions = [
    { 
      id: 'isolatie', 
      label: 'Isolatie (kozijnen & glas)', 
      icon: Home, 
      description: 'Bespaar tot 30% op je energierekening',
      color: 'blue',
      savings: '€50-150/maand'
    },
    { 
      id: 'zonnepanelen', 
      label: 'Zonnepanelen', 
      icon: Sun, 
      description: 'Wek je eigen groene stroom op',
      color: 'orange',
      savings: '€80-200/maand'
    },
    { 
      id: 'warmtepomp', 
      label: 'Warmtepomp', 
      icon: Thermometer, 
      description: 'Duurzaam verwarmen en koelen',
      color: 'purple',
      savings: '€100-250/maand'
    },
    { 
      id: 'thuisbatterij', 
      label: 'Thuisbatterij', 
      icon: Battery, 
      description: 'Sla je eigen energie op',
      color: 'teal',
      savings: '€30-80/maand'
    },
    { 
      id: 'ems', 
      label: 'EMS systeem', 
      icon: Settings, 
      description: 'Slim energiebeheer voor je huis',
      color: 'pink',
      savings: '€20-60/maand'
    },
    { 
      id: 'advies', 
      label: 'Ik weet het nog niet – ik wil advies', 
      icon: HelpCircle, 
      description: 'Onze experts helpen je verder',
      color: 'indigo',
      savings: 'Op maat'
    }
  ]

  const steps = [
    { number: 1, title: 'Vul je gegevens en wensen in', description: 'Geef aan welke kozijnen je zoekt en laat je gegevens achter', duration: '2 min' },
    { number: 2, title: 'Gratis advies aan huis', description: 'Een expert komt vrijblijvend bij je langs', duration: '1 uur' },
    { number: 3, title: 'Persoonlijke offerte', description: 'Ontvang een complete offerte op maat', duration: '2 dagen' },
    { number: 4, title: 'Akkoord & planning', description: 'Na jouw goedkeuring plannen we de montage in op een geschikt moment', duration: 'binnen 1 week' },
    { number: 5, title: 'Vakkundige plaatsing', description: 'Onze monteurs installeren de kozijnen netjes en professioneel', duration: '1-2 dagen' }
  ]

  const benefits = [
    { 
      icon: TrendingUp, 
      title: 'Verhoog de waarde van je woning', 
      description: 'Nieuwe kozijnen zorgen voor een moderne uitstraling én betere energielabel',
      highlight: 'Meer woningwaarde'
    },
    { 
      icon: Home, 
      title: 'Bespaar op energiekosten', 
      description: 'Goed geïsoleerde kozijnen verlagen je energieverbruik',
      highlight: 'Lagere maandlasten'
    },
    { 
      icon: CheckCircle, 
      title: 'Direct meer comfort in huis', 
      description: 'Minder tocht en betere isolatie vanaf dag één',
      highlight: 'Tot 30% minder warmteverlies'
    },
    { 
      icon: Shield, 
      title: 'Onderhoudsarm & duurzaam', 
      description: 'Kunststof en aluminium kozijnen gaan jarenlang mee',
      highlight: '20+ jaar levensduur'
    }
  ]

  const testimonials = [
    { 
      name: 'Familie van der Berg', 
      location: 'Utrecht', 
      rating: 5, 
      text: 'Onze woning voelt direct warmer en stiller. De nieuwe kozijnen maken echt een wereld van verschil.',
      image: '👨‍👩‍👧‍👦'
    },
    { 
      name: 'Jan en Marie Jansen', 
      location: 'Amsterdam', 
      rating: 5, 
      text: 'Van advies tot plaatsing perfect geregeld. Alles werd netjes afgewerkt en de monteurs werkten zeer professioneel. 3 maanden hadden we zonnepanelen en een warmtepomp. Alles werd perfect geregeld, van financiering tot installatie.',
      image: '👫'
    },
    { 
      name: 'Peter de Vries', 
      location: 'Rotterdam', 
      rating: 5, 
      text: 'De uitstraling van ons huis is compleet vernieuwd. We hadden dit veel eerder moeten doen. een partij die echt alles uit handen neemt. Onze woning is nu energieneutraal en we betalen minder dan voorheen.',
      image: '👨'
    }
  ]

  const handleOptionChange = (optionId) => {
    setFormData(prev => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(optionId)
        ? prev.selectedOptions.filter(id => id !== optionId)
        : [...prev.selectedOptions, optionId]
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hier zou de form submission logica komen
    console.log('Form submitted:', formData)
    
    // Animate success
    const button = e.target.querySelector('button[type="submit"]')
    button.innerHTML = '✓ Aanvraag verzonden!'
    button.classList.add('bg-green-700')
    
    setTimeout(() => {
      alert('Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op.')
    }, 500)
  }

  const scrollToForm = () => {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50 text-blue-700',
      orange: 'border-orange-500 bg-orange-50 text-orange-700',
      purple: 'border-purple-500 bg-purple-50 text-purple-700',
      teal: 'border-teal-500 bg-teal-50 text-teal-700',
      pink: 'border-pink-500 bg-pink-50 text-pink-700',
      indigo: 'border-indigo-500 bg-indigo-50 text-indigo-700'
    }
    return colors[color] || 'border-gray-500 bg-gray-50 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-20000 ease-out"
          style={{
            backgroundImage: `url(${heroHouse})`,
            ...(isMobile ? { backgroundPosition: '30% calc(50% - -10px)' } : {})
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <h1
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)' }}
              >
                Meer licht. Meer comfort. Minder energieverlies.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-100" style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)' }}>
                Ontvang binnen 2 minuten een vrijblijvende kozijnen offerte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 lg:px-12 lg:py-7 text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={scrollToForm}
                >
                  Start de aanvraag
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm lg:text-base opacity-100">
                  <CheckCircle className="w-4 h-4" />

                  <span>100% gratis en vrijblijvend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8 text-white">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">15.000+</div>
            <div className="text-sm opacity-80">Tevreden klanten</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Tot 30%</div>
            <div className="text-sm opacity-80">minder warmteverlies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-80">Goedkeuringspercentage</div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Vakkundige montage door eigen specialisten</span>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>100% onafhankelijk advies</span>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
              <Star className="w-5 h-5 text-green-600" />
              <span>Hoogwaardige materialen met lange levensduur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="pt-12 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible['form-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="form-section"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Klaar voor nieuwe kozijnen?
              </h2>
              <p className="text-lg text-gray-600">
                Vul je gegevens in en ontdek wat nieuwe kozijnen voor jou kunnen betekenen.
              </p>
            </div>

            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Naam *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Voor- en achternaam"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Telefoonnummer *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="06-12345678"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium">Adres *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Straat en huisnummer"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-sm font-medium">Postcode *</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        placeholder="1234 AB"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">E-mailadres *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="naam@email.nl"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start mijn aanvraag
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Door het versturen van dit formulier ga je akkoord met onze privacy voorwaarden
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* Steps Section (Auto Fade – No Click, No Buttons) */}
<section className="pt-0 pb-24 bg-white" id="steps-section">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">

      {/* Header */}
      <div
        className={`mb-12 transition-all duration-700 ${
          isVisible["steps-section"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Zo werkt het
        </h2>
        <p className="text-lg text-gray-600">
          In 5 eenvoudige stappen naar nieuwe kozijnen
        </p>
      </div>

      {/* Animated Card */}
      <div className="relative rounded-3xl border border-gray-100 bg-white shadow-sm p-10 overflow-hidden">

        {/* Soft top progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-[3500ms] ease-linear"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Animated Content */}
        <div
          key={currentStep}
          className="transition-all duration-500 ease-out animate-[fadeIn_500ms_ease]"
        >
          {/* Step Number */}
          <div className="mb-6">
            <span className="text-sm uppercase tracking-widest text-green-600 font-semibold">
              Stap {steps[currentStep].number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {steps[currentStep].title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            {steps[currentStep].description}
          </p>

          {/* Duration */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            {steps[currentStep].duration}
          </div>
        </div>
      </div>

      {/* Minimal Step Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentStep === index
                ? "w-8 bg-green-600"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  </div>

  {/* Local Animation */}
  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="benefits-section"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Waarom kiezen voor ons?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card 
                    key={index} 
                    className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-600">
                        <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                        {benefit.highlight}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible['testimonials-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="testimonials-section"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Wat onze klanten zeggen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{testimonial.image}</span>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        {testimonial.savings}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Vraag vandaag nog een vrijblijvende offerte aan en ontvang binnen 24 uur een voorstel op maat.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToForm}
          >
            Start nu je aanvraag
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Renovobouw</h3>
                <p className="text-gray-300 mb-4">
                  Maak je huis klaar voor de toekomst met nieuwe kozijnen. Wij begeleiden je van begin tot eind.
                </p>
                <div className="flex gap-4">
                  <Badge variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    <Shield className="w-4 h-4 mr-1" />
                    Erkend
                  </Badge>
                  <Badge variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Betrouwbaar
                  </Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>085 - 130 5000</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@renovobouw.nl</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>Heel Nederland</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Informatie</h4>
                <div className="space-y-2 text-gray-300">
                  <a href="#" className="block hover:text-white transition-colors">Privacy & Voorwaarden</a>
                  <a href="#" className="block hover:text-white transition-colors">Over ons</a>
                  <a href="#" className="block hover:text-white transition-colors">Veelgestelde vragen</a>
                  <a href="#" className="block hover:text-white transition-colors">Blog</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 Renovobouw. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
