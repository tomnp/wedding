'use client'

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

type RsvpModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    guest: 'groom', // 'groom' or 'bride'
    attending: 'yes', // 'yes' or 'no'
    companions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.code) {
      setMessage({
        type: 'error',
        text: 'Vui lòng điền đầy đủ thông tin bắt buộc (*)'
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage({
        type: 'success',
        text: 'Cảm ơn bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp!'
      })
      
      // Close modal after success
      setTimeout(() => {
        onClose()
        setMessage(null)
        setFormData({
          name: '',
          code: '',
          guest: 'groom',
          attending: 'yes',
          companions: ''
        })
      }, 2000)
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Hệ thống đang bận!'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        {/* Modal */}
        <div className="relative bg-white w-full max-w-lg rounded-lg shadow-xl p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>

          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">XÁC NHẬN THAM DỰ</h3>
            <p className="text-gray-600">Đám cưới của</p>
            <p className="text-rose-600 font-semibold">Phát Nghị & Chung Thảo</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Nhập Tên (*)"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
            </div>

            {/* Code */}
            <div>
              <input
                type="text"
                placeholder="Nhập Code (*)"
                value={formData.code}
                onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
            </div>

            {/* Guest Type */}
            <div>
              <p className="mb-2 text-gray-700">Bạn là khách của?</p>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="guest"
                    value="groom"
                    checked={formData.guest === 'groom'}
                    onChange={(e) => setFormData(prev => ({ ...prev, guest: e.target.value }))}
                    className="mr-2"
                  />
                  Chú rể
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="guest"
                    value="bride"
                    checked={formData.guest === 'bride'}
                    onChange={(e) => setFormData(prev => ({ ...prev, guest: e.target.value }))}
                    className="mr-2"
                  />
                  Cô dâu
                </label>
              </div>
            </div>

            {/* Attending */}
            <div>
              <p className="mb-2 text-gray-700">Bạn sẽ đến chứ?</p>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={(e) => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                    className="mr-2"
                  />
                  Có
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={(e) => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                    className="mr-2"
                  />
                  Không
                </label>
              </div>
            </div>

            {/* Companions */}
            <div>
              <input
                type="text"
                placeholder="Bạn đi một mình hay với ai?"
                value={formData.companions}
                onChange={(e) => setFormData(prev => ({ ...prev, companions: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            {message && (
              <div className={`text-center p-3 rounded-lg ${
                message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {message.text}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Đang xử lý...' : 'Xác nhận'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 