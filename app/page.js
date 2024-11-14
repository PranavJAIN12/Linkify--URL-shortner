import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link2, Github, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="p-6">
    <CardContent className="p-0 space-y-2">
      <Icon className="w-8 h-8 text-blue-500" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate short URLs instantly with our optimized system"
    },
    {
      icon: Shield,
      title: "Secure Links",
      description: "All shortened URLs are encrypted and protected"
    },
    {
      icon: Clock,
      title: "Analytics",
      description: "Track clicks and visitor statistics in real-time"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Transform Your Links into
              <span className="text-blue-500"> Powerful Tools</span>
            </h1>
            <p className="text-lg text-gray-600">
              Create short, memorable links in seconds. Perfect for social media, marketing campaigns, or sharing with friends.
            </p>
            <div className="flex gap-4">
              <Link href="/shorten">
                <Button className="group">
                  Try Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="https://github.com">
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  Github
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square">
            <Image
              src="/img.png"
              alt="URL Shortener Illustration"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our URL Shortener?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and reliable link shortening with powerful features to help you track and manage your links.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-600">Links Shortened</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-500">counting</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-500">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Shortening URLs?</h2>
          <p className="mb-8 text-blue-100">Create your first shortened link in seconds. No registration required.</p>
          <Link href="/shorten">
            <Button size="lg" variant="secondary" className="gap-2">
              <Link2 className="w-4 h-4" />
              Start Shortening
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}