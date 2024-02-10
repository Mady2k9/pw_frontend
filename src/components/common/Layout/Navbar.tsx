import PwLogoInverted from '@/assets/images/pw-logo.webp';
import {Image} from "@/components/ui/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
interface NavbarProps {
}
export function Navbar({}: NavbarProps) {
    const handleLogin = () => {
        window.location.href = location.origin + '/study/auth/';
    }
    return (
        <nav className={'fixed z-10 top-0 left-0 flex items-center right-0 bottom-0 h-[60px] md:h-navbar bg-white shadow'}>
            <div className={'container flex justify-between items-center'}>
                <Link href={'/'}>
                    <Image className={'w-[35px] md:w-[55px]'} alt={'PW Logo'} src={PwLogoInverted.src}/>
                </Link>
                <Button onClick={handleLogin} className={'hidden md:block'} size={'lg'}>
                    Login/Register
                </Button>
                <Button onClick={handleLogin} className={'md:hidden'}>
                    Login/Register
                </Button>
            </div>
        </nav>
    );

}
