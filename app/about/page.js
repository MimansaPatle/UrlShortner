import React from 'react';

const About = () => {
  return (
    <section className=" min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white px-8 py-16">
      <div className="mt-28 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">About URL Shortener</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Our URL Shortener is a fast, simple, and secure tool designed to make your links more manageable. Whether you're a student, developer, marketer, or just someone who wants cleaner links — we've got you covered.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Use Our Tool?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>✨ Instantly shorten long, ugly URLs with a single click.</li>
            <li>🔗 Share neat and professional-looking links on social media, messages, or emails.</li>
            <li>🔒 100% privacy-focused — no sign-ups, no tracking.</li>
            <li>📱 Optimized for all devices — mobile, tablet, and desktop.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Made for Simplicity</h2>
          <p className="text-gray-300">
            This project was built with modern web technologies like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>. It reflects our belief in clean design, minimalism, and lightning-fast performance.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} URL Shortener. Built with ❤️ for the web. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;