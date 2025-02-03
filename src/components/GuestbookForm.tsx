'use client'

import { useState } from 'react'

type GuestbookFormProps = {
  onSubmit: (message: { name: string, content: string, isAnonymous: boolean }) => void
}

export default function GuestbookForm({ onSubmit }: GuestbookFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    isAnonymous: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.content) return

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setFormData({
        name: '',
        content: '',
        isAnonymous: false
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Tên của bạn"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Nhập lời chúc của bạn"
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          className="w-full h-32 px-4 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
          required
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="anonymous"
          checked={formData.isAnonymous}
          onChange={(e) => setFormData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
          className="w-4 h-4 text-rose-600 border-rose-300 rounded focus:ring-rose-500"
        />
        <label htmlFor="anonymous" className="ml-2 text-gray-600">
          Ẩn tên
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi lời chúc'}
      </button>
    </form>
  )
} 