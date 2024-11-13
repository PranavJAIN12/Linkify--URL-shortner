"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const shorten = () => {
    const[url, setUrl] = useState("")
    const[shortUrl, setShortUrl] = useState("")
    const[generated, setGenerated] = useState(false)

    const handleChange=(first)=>{
        
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">URL Shortener</h1>
      <form className="space-y-4 w-80">
        
        <div>
          <label htmlFor="originalUrl" className="block text-sm font-medium">
            Original URL
          </label>
          <Input
            id="originalUrl"
            value={url}
            placeholder="Enter your URL here"
            type="url"
            required
            onChange={(e)=>{setUrl(e.target.value)}}
          />
        </div>

        
        <div>
          <label htmlFor="shortUrl" className="block text-sm font-medium">
            Preferred Shortened URL
          </label>
          <Input
            id="shortUrl"
            value={shortUrl}
            placeholder="Custom short URL (optional)"
            type="text"
            onChange={(e)=>{setShortUrl(e.target.value)}}
          />
        </div>

        
        <Button type="submit" className="w-full mt-4">
          Generate
        </Button>
      </form>
    </div>
  );
};

export default shorten;
