import { useEffect, useState } from 'react';
import { MouseParallax } from 'react-just-parallax';
// @ts-ignore

import { loading } from '../../assets';
// @ts-ignore
import PlusSvg from '../../assets/svg/PlusSvg';
// @ts-ignore

import { notification1 } from '../../assets';
// @ts-ignore

import { notificationImages } from '../../consts';

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

export const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ''
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export const Notification = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <div
      className={`${
        className || ''
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
