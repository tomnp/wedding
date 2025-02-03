'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'

type PersonInfo = {
  name: string
  role: string
  image: string
  description: string
  fullDescription: string
}

const coupleInfo: PersonInfo[] = [
  {
    name: 'Phát Nghị',
    role: 'THE GROOM',
    image: '/images/gallery/photo3.jpeg',
    description: 'Là một người hiền lành ít nói. Thích đi du lịch, thích kiếm tiền và tiêu tiền. Đặc biệt là "Thích Bông".',
    fullDescription: 'Là một người hiền lành ít nói. Thích đi du lịch, thích kiếm tiền và tiêu tiền. Đặc biệt là "Thích Bông". Luôn coi trọng tình cảm và yêu thương gia đình. Đối với mình " Gia đình là trên hết"'
  },
  {
    name: 'Chung Thảo',
    role: 'THE BRIDE',
    image: '/images/gallery/photo2.jpeg',
    description: 'Là một cô gái xinh đẹp, dịu dàng và đảm đang. Thích nấu ăn và chăm sóc gia đình.',
    fullDescription: 'Là một cô gái xinh đẹp, dịu dàng và đảm đang. Thích nấu ăn và chăm sóc gia đình. Luôn mong muốn xây dựng một tổ ấm hạnh phúc cùng người mình yêu thương.'
  }
]

export default function CoupleIntro() {
  const [selectedPerson, setSelectedPerson] = useState<PersonInfo | null>(null)
  const [hoveredPerson, setHoveredPerson] = useState<PersonInfo | null>(null)

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="font-great-vibes text-4xl md:text-5xl text-center text-rose-700 mb-12">
          Ngày ấy đã tới
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt - Ngày cưới của chúng mình . Chúng mình muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết rằng chúng mình rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng mình nha!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coupleInfo.map((person) => (
            <div
              key={person.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredPerson(person)}
              onMouseLeave={() => setHoveredPerson(null)}
              onClick={() => setSelectedPerson(person)}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 transition-opacity duration-300 ${hoveredPerson?.name === person.name ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-3xl font-great-vibes mb-2">{person.name}</h3>
                  <p className="text-sm mb-4">{person.role}</p>
                  <p className="text-sm text-center mb-4">{person.description}</p>
                  <button className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            
            <div className="aspect-[3/4] relative w-64 mx-auto mb-6">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <h3 className="text-4xl font-great-vibes text-center text-rose-700 mb-2">
              {selectedPerson.name}
            </h3>
            <p className="text-sm text-center text-gray-500 mb-4">{selectedPerson.role}</p>
            <p className="text-gray-600 text-center">{selectedPerson.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  )
} 