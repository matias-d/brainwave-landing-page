// @ts-ignore
import { brainwave } from '../../assets';
// @ts-ignore
import MenuSvg from '../../assets/svg/MenuSvg';

import { useLocation } from 'react-router-dom';

import { navigation } from '../../consts';

import Button from '../ui/button';
import { HamburgerMenu } from '../design/Header';
import { useState } from 'react';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default function Header() {
  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const onOpenNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const onCloseNavigation = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-n-8/90  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? ' bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl-[mr-8]" href="#hero">
          <img src={brainwave} alt="Brainwave" width="190" height="190" />
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex items-center justify-center m-auto lg:flex-row flex-col">
            {navigation.map((nav) => (
              <a
                onClick={onCloseNavigation}
                key={nav.id}
                href={nav.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  nav.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  nav.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {nav.title}
              </a>
            ))}
            <HamburgerMenu />
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden text-n-1/50 mr-8 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button onClick={onOpenNavigation} className="ml-auto lg:hidden">
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
}
