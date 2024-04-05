//@ts-ignore
import { service2, check } from '../../../assets';
import { PhotoChatMessage } from '../../design/Services';

export default function ServiceCard2() {
  return (
    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 ">
        <img
          src={service2}
          className="h-full w-full object-cover"
          width={630}
          height={750}
          alt="robot service 2"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
        <h4 className="h4 mb-4">Photo editing</h4>
        <p className="body-2 mb-[3rem] text-n-3">
          Automatically enhance your photos using our AI app's photo editing
          feature. Try it now!
        </p>
      </div>
      <PhotoChatMessage />
    </div>
  );
}
