'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-center text-4xl font-bold">
              Свяжитесь с нами
            </h1>
            <p className="mb-12 text-center text-xl text-gray-600">
              Готовы обсудить ваш проект? Заполните форму ниже, и мы свяжемся с
              вами в ближайшее время.
            </p>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="web-design">Веб-дизайн</option>
                    <option value="branding">Брендинг</option>
                    <option value="ui-ux">UI/UX Дизайн</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-900 px-8 py-3 text-white transition-colors duration-200 hover:bg-gray-800"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <p className="text-gray-600">info@designbureau.com</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Адрес</h3>
                <p className="text-gray-600">Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
