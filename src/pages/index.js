// import logo from './logo.svg';
// import './App.css';
// import Image from "next/image";
// import Sample from "../components/sample";
import styles from "../styles/Home.module.css";
// import React, { Component } from "react";
import CardlistComponent from '../components/CardListcomponent';
import MainfeauturesComponent from '../components/Mainfeautures';
import AboutPartHome from '../components/AboutPartHome';
// import Carousal from '../components/Carousal';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="App">
        {/* <Carousal /> */}

        {/*Features part start*/}
        <MainfeauturesComponent />
        {/*Features part*/}

        {/*About card view start*/}
        <AboutPartHome />
        {/*About card view end*/}


        {/*Card for courses start*/}
        <CardlistComponent />
        {/*Card for courses end*/}

      </div>
    </div>
  );
}

