"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });

    // Here you could add logic to send the form data to an API or email service

    // Clear form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 dark ">
      <h1 className="text-3xl font-bold mb-6 text-gray-50">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We would love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
      </p>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-70">Name</label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-70">Email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-70">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <Button type="submit" className="w-full mt-4">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
