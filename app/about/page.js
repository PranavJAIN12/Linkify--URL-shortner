import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Link2, Shield, Zap, Users, LineChart } from "lucide-react";
import Link from "next/link";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate shortened URLs instantly with our optimized infrastructure."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your links are protected with enterprise-grade security measures."
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Simple and intuitive interface for both beginners and professionals."
    },
    {
      icon: LineChart,
      title: "Analytics Ready",
      description: "Track your link performance with detailed click analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 text-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-950 rounded-full">
              <Link2 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            About Our URL Shortener
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            we are on a mission to make the web more accessible by providing a simple, 
            fast, and reliable way to shorten your URLs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-950 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="mb-16 bg-gray-900 border-gray-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 font-semibold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Paste Your Long URL</h3>
                  <p className="text-gray-400">Enter your long URL into our shortener input field.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 font-semibold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Customize Your Link (Optional)</h3>
                  <p className="text-gray-400">Choose a custom alias for your shortened URL or let us generate one for you.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 font-semibold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Share Your Short URL</h3>
                  <p className="text-gray-400">Copy your shortened URL and share it anywhere you want.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start Shortening URLs?</h2>
          <p className="text-gray-400 mb-6">
            Join thousands of users who trust our service for their URL shortening needs.
          </p>
          <Link href="/shorten">
            <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Link2 className="w-4 h-4" />
              Try It Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;