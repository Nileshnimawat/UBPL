import { Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
      <div className="bg-gray-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
            <Link href="/projects" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
  )
}

export default CallToAction
