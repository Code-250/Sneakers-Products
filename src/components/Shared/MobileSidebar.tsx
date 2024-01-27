import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import Close from "../../../public/images/icon-close.svg"

interface Props {
  isOpen: boolean;
  onClose: () => void
}

function MobileSidebar(props: Props) {
  const { isOpen, onClose } = props
  const sidebarClasses = `fixed inset-y-0 left-0 z-50 top-0 bottom-0 w-[80%] md:w-[60%] overflow-y-auto h-[100%] bg-gray-100 transform transition-transform text-black ${isOpen ? "translate-x-0" : "-translate-x-full"
    }`;

  const overlayClasses = `fixed top-0 inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity overflow-hidden ${isOpen ? "block" : "hidden"
    }`;
  return (
    <div>
      <div className={overlayClasses} onClick={onClose}></div>
      <motion.div
        className={sidebarClasses}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          open: {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="sticky top-0 left-0 flex justify-between items-center z-20 bg-primary">
          <div className="flex items-center p-4 ml-2 mt-3 w-full">
            <Image
              src={Close}
              className="h-auto"
              alt="Close drawer"
              width={20}
              height={80}
              priority={true}
              quality={100}
              unoptimized
              onClick={onClose}
            />
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-0 font-medium text-md">
            <li onClick={onClose}>
              <Link
                href="/collections"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                Collections
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/men"
                className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100  group"
              >
                Men
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/women"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                Women
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/about"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                About
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileSidebar
