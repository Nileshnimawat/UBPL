'use client';

import Link from 'next/link';

interface Props {
  isOpen: boolean;
}

const MobileSidebar = ({ isOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white text-sm font-semibold border-t">
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/services">SERVICES</Link>
      <Link href="/projects">PROJECTS</Link>
      <Link href="/clients">CLIENTS</Link>
      <Link href="/machinery">MACHINERY </Link>
      <Link href="/career">CAREERS</Link>
      <Link href="/contact">CONTACT US</Link>
    </div>
  );
};

export default MobileSidebar;
