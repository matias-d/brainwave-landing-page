//@ts-ignore
import { service3, check } from '../../../assets';
import { brainwaveServicesIcons } from '../../../consts';
import { VideoBar, VideoChatMessage } from '../../design/Services';

export default function ServiceCard3() {
  return (
    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
      <div className="py-12 px-4 xl:px-8">
        <h4 className="h4 mb-4">Video generation</h4>
        <p className="body-2 mb-[2rem] text-n-3">
          The world’s most powerful AI photo and video art generation engine.
          What will you create?
        </p>

        <ul className="flex items-center justify-between">
          {brainwaveServicesIcons.map((service, index) => (
            <li
              key={index}
              className={`rounded-2xl flex items-center justify-center ${
                index === 2
                  ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]'
                  : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'
              }`}
            >
              <div
                className={
                  index === 2
                    ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]'
                    : ''
                }
              >
                <img
                  src={service}
                  alt="icon brainwave service"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
        <img
          src={service3}
          className="h-full w-full object-cover"
          width={520}
          height={400}
          alt="scary robot service 3"
        />
        <VideoChatMessage />
        <VideoBar />
      </div>
    </div>
  );
}
