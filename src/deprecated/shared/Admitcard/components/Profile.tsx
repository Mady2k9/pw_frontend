import React, { useState } from 'react';
import Image from 'next/image';
import PWLogo from '../../../assets/Images/pw-logo.webp';
import Link from 'next/link';
import Logout from '../../../assets/Images/admitcard/Logout.svg';
import MyProfile from '../../../assets/Images/admitcard/MyProfile.svg';
import Centers from '../../../assets/Images/admitcard/Centers.svg';
import Batches from '../../../assets/Images/admitcard/Batches.svg';
import Study from '../../../assets/Images/admitcard/Study.svg';
import { logOutUser } from '../api/logout';

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logOutHandler = async () => {
    const status = await logOutUser();
    if (status) {
      localStorage.clear();
      window.location.reload();
    }
  };
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="relative dropdown">
      <button className="flex" onClick={handleProfileClick}>
        <Image
          src={PWLogo}
          alt="Profile Picture"
          height={34}
          width={34}
        ></Image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            'h-8 w-8  transition-all duration-400 ease-in-out transform rotate-center origin-center'
          }
          viewBox="0 0 24 24"
        >
          {' '}
          <g>
            {' '}
            <path
              fill="none"
              d="M0 0h24v24H0z"
            /> <path d="M12 14l-4-4h8z" />{' '}
          </g>{' '}
        </svg>
        <ul
          className={`dropdown-menu absolute right-0 mt-10 py-2 w-48 bg-white rounded-md shadow-lg ${
            isDropdownOpen ? '' : 'hidden'
          }`}
        >
          <li key={'profile'}>
            <Link
              href={`${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/profile`}
              target="_blank"
              className="flex px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <Image src={MyProfile} alt="logout" height={20} width={20} />
              <p className="mx-2">My Profile</p>
            </Link>
          </li>
          <li key={'study'}>
            <Link
              href={`${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/batches/study`}
              target="_blank"
              className="flex px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <Image src={Study} alt="logout" height={20} width={20} />
              <p className="mx-2"> Study</p>
            </Link>
          </li>
          <li key={'batches'}>
            <Link
              href={`${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/batches`}
              target="_blank"
              className="flex px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <Image src={Batches} alt="logout" height={20} width={20} />
              <p className="mx-2">Batches</p>
            </Link>
          </li>
          <li key={'centers'}>
            <Link
              href={`${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}vidyapeeth-centres`}
              target="_blank"
              className="flex px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <Image src={Centers} alt="logout" height={20} width={20} />
              <p className="mx-2"> PW Centers</p>
            </Link>
          </li>
          <hr className="m-2"></hr>
          <li onClick={logOutHandler}>
            <div className="flex px-4 py-2  hover:bg-gray-200 cursor-pointer text-[#BF2734]">
              <Image src={Logout} alt="logout" height={16} width={16} />
              <span className="mx-2">Logout</span>
            </div>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default Profile;
