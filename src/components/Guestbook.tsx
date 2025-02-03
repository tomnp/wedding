'use client'

import { useState } from 'react'
import GuestbookForm from './GuestbookForm'

// Mock messages
const mockMessages = [
  { id: 1, name: 'ABC', content: 'Test 01 <3' },
  { id: 2, name: 'Dũng Suneo', content: 'Thay cho lời chúc sến súa, ta chúc hạnh phúc nhesss :)))) chúc mừng hạnh phúc!!!' },
  { id: 3, name: 'Tun', content: 'Chúc mừng Hương đã tìm được bạn đời của mình 🥰' },
  { id: 4, name: 'Tân', content: 'Đẹp đôi quá a. Chúc anh chị hạnh phúc nha' },
  { id: 5, name: 'Chi Nhi', content: 'Chúc hai bạn trăm năm hạnh phúc, luôn vui vẻ và yêu thương nhau!' },
  { id: 6, name: 'Anonymous', content: 'Chúc mừng hạnh phúc!', isAnonymous: true },
  { id: 7, name: 'Minh Anh', content: 'Chúc hai bạn xây dựng được một tổ ấm thật hạnh phúc và tràn ngập tiếng cười!' },
  { id: 8, name: 'Hoàng Nam', content: 'Best wishes for a lifetime of love and happiness!' },
  { id: 9, name: 'Thu Hà', content: 'Chúc mừng hai bạn! Mong rằng tình yêu của hai bạn sẽ ngày càng bền chặt.' },
  { id: 10, name: 'Kim Oanh', content: 'Chúc hai bạn luôn hạnh phúc và gặp nhiều may mắn trên con đường phía trước!' }
]

// Design variation 1: Classic with pink border
function ClassicDesign() {
  const [messages, setMessages] = useState(mockMessages)

  const handleSubmit = async (message: { name: string, content: string, isAnonymous: boolean }) => {
    const newMessage = {
      id: messages.length + 1,
      name: message.isAnonymous ? 'Anonymous' : message.name,
      content: message.content,
      isAnonymous: message.isAnonymous
    }
    setMessages([newMessage, ...messages])
  }

  return (
    <section id="guestbook" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="font-great-vibes text-4xl md:text-5xl text-center text-rose-700 mb-12">
          Sổ Lưu Bút
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-rose-200 rounded-lg p-8">
            <GuestbookForm onSubmit={handleSubmit} />
            <div className="mt-8 space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="border-b border-rose-100 pb-4 last:border-0">
                  <p className="font-semibold text-rose-700 mb-1">
                    {message.name}
                  </p>
                  <p className="text-gray-600">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Design variation 2: Modern with cards
function ModernDesign() {
  const [messages, setMessages] = useState(mockMessages)

  const handleSubmit = async (message: { name: string, content: string, isAnonymous: boolean }) => {
    const newMessage = {
      id: messages.length + 1,
      name: message.isAnonymous ? 'Anonymous' : message.name,
      content: message.content,
      isAnonymous: message.isAnonymous
    }
    setMessages([newMessage, ...messages])
  }

  return (
    <section id="guestbook" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="font-great-vibes text-4xl md:text-5xl text-center text-rose-700 mb-12">
          Sổ Lưu Bút
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50/50 rounded-lg p-8 mb-8">
            <GuestbookForm onSubmit={handleSubmit} />
          </div>
          <div className="grid gap-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-rose-700 mb-2">
                  {message.name}
                </p>
                <p className="text-gray-600">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export both variations
export { ClassicDesign, ModernDesign }

// Default to Classic design
export default ClassicDesign 