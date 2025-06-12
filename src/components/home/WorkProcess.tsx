import SectionHeader from '@/components/section-header';
import PatternBG from '@/assets/patternBG.png';
import ArrowOdd from '@/assets/arrowOdd.svg';
import ArrowEven from '@/assets/arrowEven.svg';

interface WorkflowItem {
  id: number;
  title: string;
  text: string;
}

const data: WorkflowItem[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    text: 'We begin by understanding your unique business challenges, technical requirements, and project goals through comprehensive consultation and analysis.',
  },
  {
    id: 2,
    title: 'Solution Design & Planning',
    text: 'Our expert team creates detailed project plans, technical architecture, and implementation roadmaps tailored to your specific needs.',
  },
  {
    id: 3,
    title: 'Development & Implementation',
    text: 'We execute the project using agile methodologies, ensuring quality delivery with regular updates and milestone reviews throughout the process.',
  },
  {
    id: 4,
    title: 'Deployment & Ongoing Support',
    text: 'After successful deployment, we provide comprehensive support, maintenance, and optimization to ensure your solution continues to deliver value.',
  },
];

export default function WorkProcess() {
  return (
    <section className="relative">
      {/* Background wrapper with slant */}
      <div 
        className="absolute inset-0 bg-blue-800 dark:bg-blue-800"
        style={{
          backgroundImage: `url(${PatternBG.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 100px), 0 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 py-16 md:py-20 lg:py-24 pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            slogan="Our Process"
            title="How We Deliver Excellence"
            isWhite={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 md:gap-y-12 md:gap-x-8 xl:gap-x-16">
            {data.map((item) => (
              <div 
                key={item.id}
                className="relative flex flex-col items-center md:items-start text-center md:text-left w-full md:w-4/5 xl:w-full mx-auto px-4 md:px-0"
              >
                {/* Arrow backgrounds for desktop - only shown on large screens */}
                {item.id !== 4 && (
                  <div 
                    className="hidden xl:block absolute top-0 left-0 xl:left-[72px] 2xl:left-[90px] w-[215px] h-[60px]"
                    style={{
                      backgroundImage: `url(${item.id % 2 === 1 ? ArrowOdd.src : ArrowEven.src})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      top: item.id % 2 === 0 ? '17px' : '0',
                    }}
                  />
                )}

                {/* Icon Box */}
                <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] 
                              rounded-[15px] md:rounded-[23px] lg:rounded-[30px] 
                              bg-white dark:bg-gray-100
                              flex items-center justify-center 
                              mb-5 lg:mb-6 mx-auto md:mx-0
                              text-2xl md:text-[28px] lg:text-[30px] font-bold 
                              text-[#234582] dark:text-blue-900
                              flex-shrink-0">
                  {`0${item.id}`}
                </div>

                {/* Content Wrapper */}
                <div className="w-full -mt-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white 
                               leading-normal md:leading-snug lg:leading-snug
                               mb-2 md:mb-3 pr-0 lg:pr-2
                               font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/75 font-normal 
                              leading-[1.85] md:leading-[1.9] lg:leading-[2]
                              pr-0 lg:pr-5">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom spacing for the slant */}
      <div className="h-[60px]" />
    </section>
  );
}