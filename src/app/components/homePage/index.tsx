"use client";
import React, { useEffect, useState } from 'react';
import styles from './homePage.module.css';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.logo} ${fadeIn ? styles.fadeIn : ''}`}>
        <img src="/assets/images/logo.png" alt="Logo"/>
      </div>
      <div className={styles.description}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque in ligula consequat, sed dignissim nibh feugiat. Aenean feugiat iaculis euismod. Nullam finibus porta dignissim. Aliquam erat volutpat. Sed tristique massa erat, eu bibendum enim semper volutpat. Proin id lectus quis mi condimentum eleifend. Nulla nisl magna, accumsan non felis in, maximus gravida nisi. Sed sed varius velit. Proin sed velit viverra, pulvinar leo eget, venenatis neque.
        </p>
      </div>
    </div>
  );
};

export default HomePage;