"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Template1() {
  return (
    <main className="min-h-screen bg-white text-gray-900 [font-family:var(--font-inter),sans-serif]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Nassim Gacem</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            Nassim Gacem
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Développeur Full-Stack & Passionné DevOps / IA
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            En formation à l’ISCOD, je recherche une alternance de 2 ans pour
            concevoir des applications modernes, fiables et orientées
            innovation.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="default" size="lg">
              <a
                href="https://github.com/Noneku"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/nassim-gacem-3b269423a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:dev.nassim.pro@gmail.com">
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Compétences & Stack</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Frontend
              </h3>
              <p className="text-gray-600">
                React, TypeScript, Next.js, Angular, Symfony, Twig, Tailwind
                CSS, Bootstrap
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Backend & API
              </h3>
              <p className="text-gray-600">
                Node.js, NestJS, Spring Boot, API REST, Authentication, Prisma,
                GraphQL
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                DevOps & Outils
              </h3>
              <p className="text-gray-600">
                Git, Docker, Vercel, GitHub Actions, MySQL, PostgreSQL, CI/CD
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Méthodologies & BDD
              </h3>
              <p className="text-gray-600">
                Modélisation MCD/MLD, MCD via JMerise/Looping, Méthodes Agile,
                Gestion de projet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">Projets marquants</h2>
        <div className="space-y-12">
          {/* Projet HDM Network */}
          <div className="pb-12 border-b border-gray-200">
            <h3 className="text-2xl font-bold mb-2">
              HDM Network – Plateforme Web & Mobile
            </h3>
            <p className="text-gray-600 mb-4">
              Application web et mobile (React / React Native) + backend
              (NestJS, Prisma) + intégration DevOps avec Docker, pour la gestion
              d’un réseau collaboratif.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech : React, React Native, NestJS, GraphQL, Prisma, Docker
            </p>
            <img
              className="mb-4 h-48 bg-gray-100 rounded-lg"
              src="/hdm.jpg"
              alt=""
            />
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>
                • Mise en place d’une architecture full-stack fiable et
                modulable
              </li>
              <li>
                • Intégration de services backend (API, base de données,
                authentification)
              </li>
              <li>
                • Containerisation via Docker pour déploiement et maintenance
                facilitée
              </li>
            </ul>
            <div className="flex gap-3">
              <Button variant="default" size="sm">
                <a href="https://www.mywebcompanion.com/">View Demo</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/Noneku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Projet Mairie de Roubaix */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Site Web – Mairie de Roubaix
            </h3>
            <p className="text-gray-600 mb-4">
              Site institutionnel réalisé en Symfony et Twig, avec intégration
              Bootstrap pour responsive design et gestion de contenu dynamique.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech : Symfony, Twig, PHP, Bootstrap
            </p>
            <img
              className="mb-4 h-48 bg-gray-100 rounded-lg"
              src="/vilederoubaix.jpg"
              alt=""
            />
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Développement back-end et templating dynamique</li>
              <li>• Design responsive et ergonomique</li>
              <li>• Collaboration avec une équipe pour gestion de contenu</li>
            </ul>
            <div className="flex gap-3">
              <Button variant="default" size="sm" disabled>
                View Demo
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/Noneku/Mairie-Roubaix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
          <div className="space-y-4 text-gray-600 max-w-2xl">
            <p>
              Actuellement en formation à l’ISCOD, je suis un développeur
              full-stack passionné avec un fort intérêt pour le DevOps et l’IA.
            </p>
            <p>
              Autonome, rigoureux et curieux, je m’adapte rapidement et je suis
              toujours prêt à apprendre de nouvelles technologies pour réaliser
              des applications modernes et robustes.
            </p>
            <p>
              Motivé par l’innovation, je recherche une alternance de 2 ans pour
              continuer à monter en compétences et contribuer à des projets
              ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Email</p>
            <a
              href="mailto:dev.nassim.pro@gmail.com"
              className="text-lg font-semibold hover:text-gray-600"
            >
              dev.nassim.pro@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/nassim-gacem-3b269423a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-gray-600"
            >
              linkedin.com/in/nassim-gacem-3b269423a
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">GitHub</p>
            <a
              href="https://github.com/Noneku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-gray-600"
            >
              github.com/Noneku
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8 flex justify-center items-center text-sm text-gray-600">
          <p>© 2025 Nassim Gacem</p>
        </div>
      </footer>
    </main>
  );
}
