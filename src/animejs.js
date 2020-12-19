import React from 'react';

const words = [
  { id: "nav-home", japanese: "ホーム", english: "Englisheee" },
  { id: "nav-about", japanese: "紹介", english: "Englisheee" },
  { id: "nav-work", japanese: "作品", english: "Englisheee" },
  { id: "nav-contact", japanese: "連絡", english: "Englisheee" },
  { id: "home", japanese: "ホーム", english: "honest" },
  { id: "construction", japanese: "工事してます", english: "construct!!!" },
];
export const handleClick = () => {
  words.map(word => {
    document.getElementById(word.id).textContent = word.japanese;
  })
}
export const handleHover = () => {
  document.getElementById("home").style.color = "red";
}
export const handleUnHover = () => {
  document.getElementById("home").style.color = "green";
}
