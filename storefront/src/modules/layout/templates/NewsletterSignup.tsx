import React from 'react';

export default function NewsletterSignup() {
  return (
    <form className="newsletter-form">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-grow border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
          required
        />
        <button 
          type="submit" 
          className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
} 