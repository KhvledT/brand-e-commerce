import React from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white text-xs text-center py-2 w-full">
      Get early access on launches and offers. <Link href="#" className="underline">Sign Up For Terts</Link> →
      </div>
  );
};

export default AnnouncementBar;
