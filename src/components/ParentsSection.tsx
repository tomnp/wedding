import Image from 'next/image'

export default function ParentsSection() {
  return (
    <section className="py-20 bg-[#FDF6F0] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Groom's Family */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">NHÀ TRAI</h3>
              <div className="space-y-2 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Ông:</span> Trần Văn A
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Bà:</span> Nguyễn Thị B
                </p>
              </div>
            </div>

            {/* Bride's Family */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">NHÀ GÁI</h3>
              <div className="space-y-2 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Ông:</span> Trần Văn C
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Bà:</span> Nguyễn Thị D
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">TRÂN TRỌNG KÍNH MỜI</h3>
            <p className="text-gray-700 mb-2">Bạn cùng gia đình</p>
            <p className="text-gray-600 italic">(Tới dự Lễ Thành Hôn của hai con chúng tôi)</p>
          </div>
        </div>
      </div>
    </section>
  )
} 