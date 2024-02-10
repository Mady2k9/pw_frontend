import {Navbar} from "@/components/common/Layout/Navbar";

interface LayoutProps {
    children: React.ReactNode;
}
export function Layout({children}: LayoutProps) {
    return (
        <main className={''}>
            <Navbar/>
            <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'}/>
            {children}
        </main>
    );

}
