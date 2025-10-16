import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xqaywwoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 py-8 max-w-[1400px]">
          <div className="text-center">
            <h1 className="heading-hero">
              Connect + Collaborate
            </h1>
            <h2 className="heading-subhero" style={{ fontSize: '27px' }}>
              Advancing color learning and creative practice
            </h2>
          </div>

          <div className="body-text">
            <p className="mb-0">Colormxr is a creative platform for rediscovering the joy of color — combining sensory play, visual discovery, and hands-on learning in the digital world.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">I'm looking to partner with educators, researchers and creative organizations  who want to explore how Colormxr can transform the way <span className="font-semibold">we learn, teach, and experience color</span>.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">I offer guest lectures, workshops, and custom programs — and can adapt Colormxr for educational, research, or neuroarts projects, or deliver custom Colormxr <span className="font-semibold">tailored applications</span> to specific learning or research goals.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">If you're curious to see what's possible, I'd love to share a demo and <span className="font-semibold">discuss opportunities</span>. Reach out using the form below and let's start the conversation.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                Sorry, there was an error sending your message. Please try again or email directly at dwitt@colormxr.com
              </div>
            )}
          </form>
        </div>

        {/* Desktop Layout: Original Split Design */}
        <div className="hidden lg:block relative" style={{ minHeight: 'calc(100vh - 120px)', background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>

          {/* Graphic Background */}
          <div className="absolute h-[945px] left-[716px] top-0 w-[2065px] z-0">
            <img
              alt="Background gradient"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/bg-grad.jpg"
            />
          </div>

          {/* Main Content */}
          <div className="relative pt-[48px]">
            {/* Header - Centered in left space */}
            <div className="absolute text-center top-[181px] w-[595px] z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero mb-0">
                Connect + Collaborate
              </p>
              <p className="heading-subhero mb-0" style={{ fontSize: '27px' }}>
                Advancing color learning and creative practice
              </p>
            </div>

            {/* Body Text - Centered in left space */}
            <div className="absolute body-text leading-[normal] top-[308px] w-[488px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="mb-0">Colormxr is a creative platform for rediscovering the joy of color — combining sensory play, visual discovery, and hands-on learning in the digital world.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I'm looking to partner with educators, researchers and creative organizations  who want to explore how Colormxr can transform the way <span className="font-semibold">we learn, teach, and experience color</span>.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I offer guest lectures, workshops, and custom programs — and can adapt Colormxr for educational, research, or neuroarts projects, or deliver custom Colormxr <span className="font-semibold">tailored applications</span> to specific learning or research goals.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">If you're curious to see what's possible, I'd love to share a demo and <span className="font-semibold">discuss opportunities</span>. Reach out using the form below and let's start the conversation.</p>
              <p className="mb-0">&nbsp;</p>

            </div>

            {/* Contact Form - Centered in right space */}
            <div className="absolute top-[181px] w-[520px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div></div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Sorry, there was an error sending your message. Please try again or email directly at dwitt@colormxr.com
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#fefefe] py-2">
        <div className="container mx-auto px-5 text-center">
          <p className="footer-text">
            © 2025 David Witt. All rights reserved. Colormxr™
          </p>
        </div>
      </footer>
    </div>
  );
}
