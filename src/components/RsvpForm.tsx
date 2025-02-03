"use client";

import { useState } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guestType: "bride", // 'bride' or 'groom'
    guestCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tên của bạn"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        {/* Phone Input */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        {/* Guest Type Radio */}
        <div className="flex justify-center space-x-8">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="guestType"
              value="bride"
              checked={formData.guestType === "bride"}
              onChange={handleChange}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span>Cô dâu</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="guestType"
              value="groom"
              checked={formData.guestType === "groom"}
              onChange={handleChange}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span>Chú rể</span>
          </label>
        </div>

        {/* Guest Count */}
        <div>
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            placeholder="Số khách"
            min="1"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Lời chúc"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Gửi
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          Chúng mình rất mong bạn/anh/chị đến chung vui với chúng mình
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Hãy dành chút thời gian để nói cho chúng mình biết nhé!
        </p>
      </div>
    </div>
  );
}
