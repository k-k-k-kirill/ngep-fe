"use client";

import React, { useState } from "react";
import SectionLink from "../SectionLink/SectionLink";
import Arrow from "../../../../assets/arrow.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";

interface HeaderProps {
  data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const locale = useLocale();
  const { Navigation } = data;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ["en", "fi", "vi"];
  const currentLanguage = locale;
  const otherLanguages = languages.filter((lang) => lang !== currentLanguage);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container mx-auto px-4 grid grid-cols-4 gap-4 py-5">
      <div className="lg:col-span-2">
        <h1>EPD</h1>
      </div>
      <div className="flex items-center col-span-2 lg:col-span-1">
        {Navigation && (
          <nav>
            {Navigation.map(
              (item, index) =>
                item.Url && (
                  <SectionLink
                    className={`${
                      index < Navigation.length - 1 ? "mr-1" : ""
                    } lg:mr-4 text-sm lg:text-base ${styles.navLink}`}
                    key={index}
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
      <div className={`flex items-center justify-end relative`}>
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
              <Link key={lang} className="capitalize" href={`/${lang}`}>
                <div className={`${styles.dropdownItem}`}>{lang}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
