import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Market.module.css";
import { useState } from "react";

const market = () => {
const [isOpen, setIsOpen] = useState(false);
  const sampleList = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 100000,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 18000,
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: 2900,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 100000,
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 30270,
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: 100000,
    },
  ];

  return (
    <>
      <Head>
        <title>Market</title>
        <meta name="description" content="Market content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.marketContainer}>
        <div className={styles.navWrap}>
          <Navbar />
        </div>
        <div className={styles.customSelect}>
          <select
            defaultValue={"stock"}
            className={styles.selectMarket}
          >
            <option value="stock">
              Stock
            </option>
            <option value="crypto">
              Crypto
            </option>
          </select>
        </div>

        <section className={styles.itemListContainer}>
          <ul>
            {sampleList.map((item, index) => (
              <li key={index}>
                <div>
                  <div>
                    <div></div>
                    <div>
                      <h4>{item.symbol}</h4>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <h2>${item.price}</h2>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default market;
