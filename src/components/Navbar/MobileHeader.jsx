import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <>
      <div className="bg-teal-50 md:hidden">
        <div className="flex items-center justify-center gap-5 py-1.5">
          <Link href="/">
            <div className="w-12 h-12">
              <Image
                className="w-full object-cover"
                src="/logo/shop-track-logo.webp"
                alt="shop track logo"
                width={48}
                height={44}
              />
            </div>
          </Link>

          <Link href="/">
            <h2 className="text-lg font-semibold">Shop Track</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
