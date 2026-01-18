import { useState } from "react"
import { LuSend } from "react-icons/lu"
import emailjs from '@emailjs/browser'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 text-[#94a3b8] max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto px-4">
        {submitted ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-white">
              <LuSend className="text-white" size={32} />
            </div>
            <h3 className="text-4xl font-semibold text-white mb-3">
              Thank You!
            </h3>
            <p className="font-light">
              Thanks for getting in touch! I'll review your message and reach out soon.
            </p>
          </div>
        ) : (
          <div className="bg-slate-800/20 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl px-4 py-8 sm:px-8 sm:py-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-white mb-3">
                Get in Touch
              </h2>
              <p className="font-light">
                Have a project, question, or just want to say hi?
                Feel free to send me a message.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-600"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
                <LuSend size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact