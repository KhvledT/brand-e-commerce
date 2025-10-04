import React from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white text-xs text-center py-2 w-full">
      FREE SHIPPING ON ALL ORDERS <Link href="#" className="underline ml-2">SHOP NOW</Link>
    </div>
  );
};

export default AnnouncementBar;
