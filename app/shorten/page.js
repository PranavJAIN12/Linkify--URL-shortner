"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShortUrl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Link2 className="w-6 h-6 text-blue-500" />
              URL Shortener
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={generate} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700">
                  Original URL
                </label>
                <Input
                  id="originalUrl"
                  value={url}
                  placeholder="https://example.com/very-long-url"
                  type="url"
                  required
                  className="w-full"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="shortUrl" className="block text-sm font-medium text-gray-700">
                  Custom Short URL 
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{process.env.NEXT_PUBLIC_HOST}/</span>
                  <Input
                    id="shortUrl"
                    value={shortUrl}
                    placeholder="custom-name"
                    type="text"
                    className="flex-1"
                    onChange={(e) => setShortUrl(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Generate Short URL
              </Button>
            </form>

            {generated && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <Link 
                    href={generated} 
                    target="_blank" 
                    className="text-blue-500 hover:text-blue-700 break-all font-mono text-sm"
                  >
                    {generated}
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shorten;