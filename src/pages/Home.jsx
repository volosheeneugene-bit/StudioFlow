// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import Hero from '../components/Hero';
import TrainerCard from '../components/TrainerCard';
import ClassCard from '../components/ClassCard';

export default function Home() {
  const [trainers, setTrainers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data: trainersData } = await supabase.from('trainers').select('*');
      setTrainers(trainersData || []);

      const { data: classesData } = await supabase.from('classes').select('*');
      setClasses(classesData || []);
    }
    loadData();
  }, []);

  return (
    <div className="bg-black text-white">
      <Hero />

      {/* Блок "О нас" */}
      <section id="about" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6">
            О нас
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">ATAKA PILATES</strong> — это пространство, где пилатес становится искусством. 
            Мы объединили точность, силу и поток, чтобы создать тренировки нового уровня. 
            Наши занятия подходят для любого уровня подготовки.
          </p>
        </div>
      </section>

      {/* Блок "Тренеры" */}
      <section id="trainers" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center mb-12">
            Наши тренеры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trainers.map(trainer => (
              <TrainerCard 
                key={trainer.id}
                name={trainer.name}
                spec={trainer.specialization}
                photo={trainer.photo_url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Блок "Расписание" */}
      <section id="schedule" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center mb-12">
            Расписание
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {classes.map(cls => (
              <ClassCard 
                key={cls.id}
                title={cls.title}
                day={cls.day_of_week}
                time={cls.start_time}
                description={cls.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Блок "Записаться" */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6">
            Записаться
          </h2>
          <p className="text-gray-300 mb-8">Оставьте заявку, и мы свяжемся с вами</p>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
            />
            <input 
              type="tel" 
              placeholder="Номер телефона" 
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-amber-500 text-black font-bold py-3 px-6 rounded hover:bg-transparent hover:text-amber-500 hover:border-2 hover:border-amber-500 transition"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>ATAKA PILATES © 2026</p>
      </footer>
    </div>
  );
}