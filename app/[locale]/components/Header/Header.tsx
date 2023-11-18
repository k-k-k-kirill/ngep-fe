"use client";

import React, { useState } from "react";
import SectionLink from "../SectionLink/SectionLink";
import Arrow from "../../../../assets/arrow.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import Hamburger from "../../../../assets/hamburger.svg";

interface HeaderProps {
  data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const locale = useLocale();
  const { Navigation } = data;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = ["en", "fi", "vi"];
  const currentLanguage = locale;
  const otherLanguages = languages.filter((lang) => lang !== currentLanguage);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 grid grid-cols-4 gap-4 py-5">
      <div className="lg:col-span-2">
        <h1>EPD</h1>
      </div>
      <div className="col-span-3 lg:col-span-1 flex justify-end lg:justify-start items-center">
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <span>
            <Image src={Hamburger} alt="Menu" width={24} height={24} />
          </span>
        </div>
        <div
          className={`hidden lg:flex items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {Navigation && (
            <nav>
              {Navigation.map(
                (item, index) =>
                  item.Url && (
                    <SectionLink
                      className={`${
                        index < Navigation.length - 1
                          ? "mr-1 md:mr-2 lg:mr-2 "
                          : ""
                      } text-sm lg:text-base ${styles.navLink}`}
                      key={`desktop-nav-link-${index}`}
                      url={
                        item.Url
                          ? item.Url.includes("http")
                            ? item.Url
                            : `/${item.Url}`
                          : "/"
                      }
                      title={item.Title}
                    />
                  )
              )}
            </nav>
          )}
        </div>
      </div>
      <div className={`hidden lg:flex items-center justify-end relative`}>
        <div
          onClick={toggleDropdown}
          className={`cursor-pointer flex items-center`}
        >
          <span className={styles.currentLanguage}>{locale}</span>
          <Image
            priority
            src={Arrow}
            alt="Dropdown Arrow"
            className={isDropdownOpen ? styles.flipArrow : ""}
          />
        </div>
        {isDropdownOpen && (
          <div className={`${styles.dropdown} absolute right-0 bg-white`}>
            {otherLanguages.map((lang) => (
              <div key={lang} className={`${styles.dropdownItem}`}>
                <Link className="capitalize block" href={`/${lang}`}>
                  {lang}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div
          className={`${styles.mobileNav} px-4 sm:px-6 lg:hidden z-10 border-t py-2`}
        >
          <nav>
            {Navigation &&
              Navigation.map(
                (item, index) =>
                  item.Url && (
                    <div key={`mobile-nav-link-${index}`}>
                      <SectionLink
                        className={`block py-2`}
                        url={
                          item.Url.includes("http") ? item.Url : `/${item.Url}`
                        }
                        title={item.Title}
                      />
                    </div>
                  )
              )}
            <div className="pt-4">
              {otherLanguages.map((lang, index) => (
                <Link
                  key={`mobile-lang-switcher-${lang}`}
                  href={`/${lang}`}
                  className={`${
                    index < otherLanguages.length - 1 ? "mr-2" : ""
                  } capitalize inline-block py-2`}
                >
                  {lang}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
