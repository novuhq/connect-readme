import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Market.module.css"
import {useState, useEffect, useRef} from "react"


const market = () => {
    const markets = ['crypto', 'stock']
    const [isOpen, setIsOpen] = useState(false)
    const [market, setMarket] = useState(markets[0])

    const selectMarketRef = useRef(null);

    const handleClickOutsideModal = (event) => {
        if (selectMarketRef.current && !selectMarketRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    };
    
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleClickOutsideModal);
        }

        return () => {
            window.removeEventListener('click', handleClickOutsideModal);
        };
    }, [isOpen]);

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
    ]

  return (
    <>
        <Head>
            <title>Market</title>
            <meta name="description" content="Market content" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"></link>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.marketContainer}>
            <Navbar />
            <section>
                <div className={styles.selectMarketContainer}>
                    <div ref={selectMarketRef} className={styles.selectMarketDropDown} onClick={()=> setIsOpen(!isOpen)}>
                        <p>{market}</p>
                        <i className={`ri-arrow-${isOpen ? "up" : "down"}-line`}></i>
                    </div>
                    <div className={`${!isOpen && styles.marketOptionsOpen}`}>
                        <ul>
                            {
                                markets.map((market, index) => (
                                    <li onClick={()=> setIsOpen(false)}>
                                        <button onClick={() => setMarket(market)}>{market}</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.itemListContainer}>
                <ul>
                    {
                        sampleList.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <div>
                                        <div></div>
                                        <div>
                                            <h4>{item.symbol}</h4>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                    <h2>
                                        ${item.price}
                                    </h2>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    </>
  )
}

export default market