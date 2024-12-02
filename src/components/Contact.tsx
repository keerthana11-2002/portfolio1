// import React, { useRef, useState } from 'react';
// import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const formRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
//          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//          formRef.current!,
//          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
//       );
//       setIsSuccess(true);
//       if (formRef.current) {
//         (formRef.current as HTMLFormElement).reset();
//       }
//     } catch (err) {
//       setError('Failed to send message. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-20 bg-white" id="contact">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <Mail className="text-blue-500" />
//                 <span className="text-gray-600">jkkeerthana10@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="text-blue-500" />
//                 <span className="text-gray-600">7397013952</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="text-blue-500" />
//                 <span className="text-gray-600">Krishnagiri , TamilNadu</span>
//               </div>
//             </div>
//           </div>
          
//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="user_name"
//                 id="user_name"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="user_email"
//                 id="user_email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows={4}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Your message"
//               ></textarea>
//             </div>
            
//             {error && (
//               <p className="text-red-500 text-sm">{error}</p>
//             )}
            
//             {isSuccess && (
//               <div className="flex items-center gap-2 text-green-600">
//                 <CheckCircle size={20} />
//                 <span>Message sent successfully!</span>
//               </div>
//             )}
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      );
      setIsSuccess(true);
      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20  " id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8 bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" />
                <span className="text-gray-600">jkkeerthana10@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" />
                <span className="text-gray-600">7397013952</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" />
                <span className="text-gray-600">Krishnagiri, TamilNadu</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {isSuccess && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
