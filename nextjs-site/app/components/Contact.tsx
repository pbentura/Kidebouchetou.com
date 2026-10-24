"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { EMAIL, PHONE_WA } from "../lib/site";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Le site est 100 % statique (pas de serveur) : le formulaire ouvre
  // votre messagerie ou WhatsApp avec le message pré-rempli.
  const buildMessage = () =>
    `Bonjour,

${formState.message}

Nom : ${formState.name}
Téléphone : ${formState.phone}${
      formState.email ? `
E-mail : ${formState.email}` : ""
    }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de débouchage – ${formState.name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(buildMessage())}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "06 03 74 07 04",
      href: "tel:+33603740704",
      description: "Urgence 24/7",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact.kidebouchetou@gmail.com",
      href: "mailto:contact.kidebouchetou@gmail.com",
      description: "Réponse sous 24h",
    },
    {
      icon: Clock,
      label: "Horaires",
      value: "24h/24, 7j/7",
      href: null,
      description: "Intervention urgente",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-blue-50"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold uppercase tracking-wider text-sm"
          >
            Contact
          </motion.span>
          <motion.h2
            id="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Contactez-Nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Besoin d&apos;un débouchage urgent ? Contactez-nous maintenant pour une
            intervention rapide ou demandez un devis gratuit.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-lg font-semibold text-primary hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-primary">
                      {info.value}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="p-6 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Urgence débouchage ?</h3>
              <p className="text-blue-100 mb-4">
                Appelez-nous maintenant pour une intervention rapide. Notre équipe
                est disponible 24h/24 et 7j/7.
              </p>
              <a
                href="tel:+33603740704"
                className="btn-primary bg-accent hover:bg-accent-dark w-full justify-center"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Demandez un devis
              </h3>

              {isSubmitted ? (
                <div className="p-6 bg-green-50 rounded-xl text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-green-800 mb-2">
                    Votre messagerie s&apos;ouvre
                  </h4>
                  <p className="text-green-600">
                    Il ne reste qu&apos;à cliquer sur « Envoyer ». Si rien ne s&apos;est ouvert,
                    écrivez-nous à {EMAIL} ou appelez-nous.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                      placeholder="Décrivez votre problème de canalisation..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-5 h-5" />
                    Envoyer par e-mail
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full justify-center inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Envoyer par WhatsApp
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Champs obligatoires. Le bouton ouvre votre messagerie ou WhatsApp avec le
                    message pré-rempli ; pour une urgence, appelez directement.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
