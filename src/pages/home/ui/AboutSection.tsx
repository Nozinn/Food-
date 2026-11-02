import React from 'react';
import { SectionLabel } from '@/shared/ui';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-14 lg:px-20 max-w-7xl mx-auto">
      <SectionLabel title="О ресторане" className="mb-10 sm:mb-14" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Big Heading */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1F1F] tracking-tight leading-[1.08]">
            Food <br />
            Exxe <br />
            Relo
          </h2>
        </div>

        {/* Right Column: Narrative Text */}
        <div className="lg:col-span-7 space-y-6 text-[#555555] text-sm sm:text-base leading-relaxed font-normal">
          <p>
            Food Exxe Relo — это уникальное гастрономическое пространство на живописном побережье
            Крестовского острова. Панорамные виды на водную гладь, продуманный до мельчайших
            деталей интерьер из натурального дерева и камня, а также атмосфера уединённого
            комфорта создают идеальные условия для незабываемого отдыха.
          </p>
          <p>
            Наша кухня — это гармония авторских рецептов от шеф-повара и безупречной классики
            европейской и средиземноморской кулинарии. Мы бережно отбираем фермерские продукты
            наивысшего качества, чтобы каждое блюдо дарило вам глубокие и сбалансированные
            вкусовые впечатления.
          </p>
        </div>
      </div>
    </section>
  );
};
