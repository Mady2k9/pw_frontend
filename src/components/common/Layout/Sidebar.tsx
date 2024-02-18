import { Image } from '@/components/ui/image';
import PwLogoInverted from '@/assets/images/pw-logo.webp';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  return (
    <div className={'flex flex-col h-full'}>
      <div className={'h-[60px] animationFromTop delay-100 px-4 flex items-center'}>
        <Link href={'/'} className={'pr-3 h-full flex flex-col items-center justify-center'}>
          <Image className={'w-[35px] md:w-[55px]'} alt={'PW Logo'} src={PwLogoInverted.src} />
        </Link>
      </div>
      <div className={'flex-1 overflow-y-auto scrollbar-hide'}>

      </div>
      <div className={'p-4 animationFromBottom delay-100'}>
        <Button className={'w-full'}>Login/Register</Button>
      </div>
    </div>
  );
}
