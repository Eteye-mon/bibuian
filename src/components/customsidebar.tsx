import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomSideBar() {
  return (
    <div className="hidden lg:block lg:w-[280px] lg:shrink-0 lg:border-r bg-gradient-to-tr from-[#D88D00] to-[#F6B10A]">
      <div className="flex h-full max-h-screen flex-col space-y-6">
        <div className="flex h-[60px] items-center px-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-white">BIBUAIN</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium gap-2.5">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md font-normal px-3 hover:bg-[#F6B10A]  py-2 text-white transition-all hover:text-white-50 "
              prefetch={false}
            >
              <HomeIcon />
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-md font-normal px-3 hover:bg-[#F6B10A]  py-2 text-white transition-all hover:text-white-50 "
              prefetch={false}
            >
              <CoinIcon />
              Coin Exchange
            </Link>
            <Link
              href="/exchange"
              className="flex items-center gap-3 rounded-md font-normal px-3 hover:bg-[#F6B10A]  py-2 text-white transition-all hover:text-white-50 "
              prefetch={false}
            >
              <BankIcon />
              Bank Management
            </Link>
            <Link
              href="/bank"
              className="flex items-center gap-3 rounded-[6px] font-normal bg-[#F6B10A] px-3 py-2 text-white transition-all hover:text-white-50"
              prefetch={false}
            >
              <InboxIcon />
              Inbox
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-md font-normal px-3 hover:bg-[#F6B10A]  py-2 text-white transition-all hover:text-white-50 "
              prefetch={false}
            >
              <SettingsIcon />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}


function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 2.5H12.5C12.0398 2.5 11.6667 2.8731 11.6667 3.33333V5.83333C11.6667 6.29357 12.0398 6.66667 12.5 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 10H12.5C12.0398 10 11.6667 10.3731 11.6667 10.8333V16.6667C11.6667 17.1269 12.0398 17.5 12.5 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V10.8333C17.5 10.3731 17.1269 10 16.6667 10Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7064 2.5 14.1667V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V14.1667C8.33333 13.7064 7.96024 13.3333 7.5 13.3333Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1833 1.66669H9.81667C9.37464 1.66669 8.95072 1.84228 8.63816 2.15484C8.3256 2.4674 8.15 2.89133 8.15 3.33335V3.48335C8.1497 3.77562 8.07255 4.06268 7.92628 4.31572C7.78002 4.56876 7.56978 4.77888 7.31667 4.92502L6.95834 5.13335C6.70497 5.27963 6.41756 5.35664 6.125 5.35664C5.83244 5.35664 5.54503 5.27963 5.29167 5.13335L5.16667 5.06669C4.78422 4.84607 4.32987 4.78622 3.90334 4.90028C3.47681 5.01433 3.11296 5.29297 2.89167 5.67502L2.70833 5.99169C2.48772 6.37413 2.42787 6.82849 2.54192 7.25502C2.65598 7.68155 2.93461 8.04539 3.31667 8.26669L3.44167 8.35002C3.69356 8.49545 3.90302 8.70426 4.04921 8.95571C4.1954 9.20716 4.27325 9.4925 4.275 9.78335V10.2084C4.27617 10.502 4.19971 10.7908 4.05337 11.0454C3.90703 11.3001 3.69601 11.5115 3.44167 11.6584L3.31667 11.7334C2.93461 11.9546 2.65598 12.3185 2.54192 12.745C2.42787 13.1716 2.48772 13.6259 2.70833 14.0084L2.89167 14.325C3.11296 14.7071 3.47681 14.9857 3.90334 15.0998C4.32987 15.2138 4.78422 15.154 5.16667 14.9334L5.29167 14.8667C5.54503 14.7204 5.83244 14.6434 6.125 14.6434C6.41756 14.6434 6.70497 14.7204 6.95834 14.8667L7.31667 15.075C7.56978 15.2212 7.78002 15.4313 7.92628 15.6843C8.07255 15.9374 8.1497 16.2244 8.15 16.5167V16.6667C8.15 17.1087 8.3256 17.5326 8.63816 17.8452C8.95072 18.1578 9.37464 18.3334 9.81667 18.3334H10.1833C10.6254 18.3334 11.0493 18.1578 11.3618 17.8452C11.6744 17.5326 11.85 17.1087 11.85 16.6667V16.5167C11.8503 16.2244 11.9275 15.9374 12.0737 15.6843C12.22 15.4313 12.4302 15.2212 12.6833 15.075L13.0417 14.8667C13.295 14.7204 13.5824 14.6434 13.875 14.6434C14.1676 14.6434 14.455 14.7204 14.7083 14.8667L14.8333 14.9334C15.2158 15.154 15.6701 15.2138 16.0967 15.0998C16.5232 14.9857 16.887 14.7071 17.1083 14.325L17.2917 14C17.5123 13.6176 17.5721 13.1632 17.4581 12.7367C17.344 12.3102 17.0654 11.9463 16.6833 11.725L16.5583 11.6584C16.304 11.5115 16.093 11.3001 15.9466 11.0454C15.8003 10.7908 15.7238 10.502 15.725 10.2084V9.79169C15.7238 9.498 15.8003 9.20923 15.9466 8.9546C16.093 8.69997 16.304 8.48853 16.5583 8.34169L16.6833 8.26669C17.0654 8.04539 17.344 7.68155 17.4581 7.25502C17.5721 6.82849 17.5123 6.37413 17.2917 5.99169L17.1083 5.67502C16.887 5.29297 16.5232 5.01433 16.0967 4.90028C15.6701 4.78622 15.2158 4.84607 14.8333 5.06669L14.7083 5.13335C14.455 5.27963 14.1676 5.35664 13.875 5.35664C13.5824 5.35664 13.295 5.27963 13.0417 5.13335L12.6833 4.92502C12.4302 4.77888 12.22 4.56876 12.0737 4.31572C11.9275 4.06268 11.8503 3.77562 11.85 3.48335V3.33335C11.85 2.89133 11.6744 2.4674 11.3618 2.15484C11.0493 1.84228 10.6254 1.66669 10.1833 1.66669Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 10H13.3333L11.6667 12.5H8.33332L6.66666 10H1.66666"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.54166 4.25834L1.66666 10V15C1.66666 15.442 1.84225 15.866 2.15481 16.1785C2.46737 16.4911 2.8913 16.6667 3.33332 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1785C18.1577 15.866 18.3333 15.442 18.3333 15V10L15.4583 4.25834C15.3203 3.98067 15.1076 3.74699 14.8441 3.58358C14.5806 3.42017 14.2767 3.33351 13.9667 3.33334H6.03332C5.72325 3.33351 5.41938 3.42017 5.15586 3.58358C4.89234 3.74699 4.67964 3.98067 4.54166 4.25834Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66666 11.6667C9.42808 11.6667 11.6667 9.42808 11.6667 6.66666C11.6667 3.90523 9.42808 1.66666 6.66666 1.66666C3.90523 1.66666 1.66666 3.90523 1.66666 6.66666C1.66666 9.42808 3.90523 11.6667 6.66666 11.6667Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.075 8.64166C15.8628 8.93535 16.5637 9.42294 17.1131 10.0593C17.6625 10.6957 18.0426 11.4604 18.2181 12.2826C18.3937 13.1047 18.3591 13.9579 18.1175 14.7632C17.876 15.5685 17.4353 16.2998 16.8362 16.8897C16.2371 17.4795 15.4989 17.9087 14.69 18.1377C13.881 18.3666 13.0274 18.3879 12.2081 18.1995C11.3887 18.0112 10.6301 17.6192 10.0024 17.06C9.37462 16.5007 8.89803 15.7922 8.61667 15"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83334 5H6.66668V8.33333"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.925 11.5667L14.5083 12.1583L12.1583 14.5083"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1.66666H5.00001C4.07954 1.66666 3.33334 2.41285 3.33334 3.33332V16.6667C3.33334 17.5871 4.07954 18.3333 5.00001 18.3333H15C15.9205 18.3333 16.6667 17.5871 16.6667 16.6667V3.33332C16.6667 2.41285 15.9205 1.66666 15 1.66666Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 18.3333V15H12.5V18.3333"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66666 5H6.67499"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 5H13.3417"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5H10.0083"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.33334H10.0083"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.6667H10.0083"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 8.33334H13.3417"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 11.6667H13.3417"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66666 8.33334H6.67499"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66666 11.6667H6.67499"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}