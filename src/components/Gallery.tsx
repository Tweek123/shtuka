'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from './Typography';
import Image from 'next/image'
const projects = [
  {
    id: 1,
    title: 'клиника RESTETICA',
    category: 'Коммерческие объекты',
    image: '/shtuka/images/portfolio/1.jpg',
  },
  {
    id: 2,
    title: 'Дом. Санкт-Петербург',
    category: 'Дома',
    image: '/shtuka/images/portfolio/2.jpg',
  },
  {
    id: 3,
    title: 'Коттедж',
    category: 'Дома',
    image: '/shtuka/images/portfolio/3.jpg',
  },
  {
    id: 4,
    title: 'Квартира в Москве',
    category: 'Квартиры',
    image: '/shtuka/images/portfolio/4.jpg',
  },
  {
    id: 5,
    title: 'Дом 500 м2',
    category: 'Дома',
    image: '/shtuka/images/portfolio/5.jpg',
  },
  {
    id: 6,
    title: 'ЖК ТРИЛОГИЯ',
    category: 'Квартиры',
    image: '/shtuka/images/portfolio/6.jpg',
  },
];

const categories = [
  { value: 'all', label: 'Все' },
  { value: 'Квартиры', label: 'Квартиры' },
  { value: 'Дома', label: 'Дома' },
  { value: 'Коммерческие объекты', label: 'Коммерческие объекты' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-row flex-wrap gap-4 whitespace-nowrap uppercase">
        {categories.map((c) => (
          <div
            className="flex flex-row"
            onClick={() => setSelectedCategory(c.value)}
          >
            <Typography
              className="cursor-pointer md:text-xl"
              variant="p"
              color={
                selectedCategory === c.value
                  ? 'text-[#eb2f5b]'
                  : 'text-[#aaaaaa]'
              }
            >
              {c.label}
            </Typography>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden"
            >
              <div className="group relative">
                <div className="flex flex-col grayscale transition-all duration-300 hover:grayscale-0 md:aspect-[1.5/1]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="aspect-[1.5/1] w-full object-cover "
                  fill
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transform bg-[#eb2f5b] p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm uppercase md:text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
