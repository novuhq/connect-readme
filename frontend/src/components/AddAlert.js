import React, {useState, useEffect} from 'react'
import styles from "./AddAlert.module.css"
import otherStyles from "../styles/Market.module.css"
const AddAlert = ({ market, setAddAlert }) => {
    const alertTypes = ["simple", "dca"]
    const [alertType, setAlertType] = useState(alertTypes[0])
    const [simpleAlert, setSimpleAlert] = useState({
        price: roundOffToTwoDP(parseInt(market.price))
    })
    const [DCAAlert, setDCAAlert] = useState(
        {
            startingPrice: roundOffToTwoDP(parseInt(market.price)),
            levelTwo: null,
            levelThree: null,
            levelFour: null,
            levelFive: null,
        }
    )

    function roundOffToTwoDP(value) {return value.toFixed(6)}

    function generateLevelPrices() {
        const levelTwo = roundOffToTwoDP(DCAAlert.startingPrice * 0.80)
        const levelThree = roundOffToTwoDP(levelTwo * 0.75)
        const levelFour = roundOffToTwoDP(levelThree * 0.75)
        const levelFive = roundOffToTwoDP(levelFour * 0.70)
        setDCAAlert(prevState => ({...prevState, levelTwo, levelThree, levelFour, levelFive}))
    }

    function submitSimple() {
        console.log("simple alert", simpleAlert)
        setAddAlert(false)
    }

    function submitDCA() {
        console.log("DCA alert", DCAAlert)
        setAddAlert(false)
    }

    useEffect(() => {
      generateLevelPrices()    
    }, [DCAAlert.startingPrice])
    

  return (
    <div className={styles.alertBg}>
        <div className={styles.alertContainer}>
            <button onClick={() => setAddAlert(false)}>X</button>
            <h4>New Alert</h4>
            <div className={`${styles.selectMarketContainer} ${styles.flexed}`}>
                <div>
                    <select
                        defaultValue={alertType}
                        className={styles.selectMarket}
                        onChange={(e) => setAlertType(e.target.value)}
                    >
                        <option value={alertTypes[0]}>
                        Simple
                        </option>
                        <option value={alertTypes[1]}>
                        DCA
                        </option>
                    </select>
                </div>
                <p>Type</p>
            </div>
            <div>
                <div className={`${styles.flexed} ${styles.market}`}>
                    <div>
                        <div className={otherStyles.itemImage}></div>
                        <p>{market.symbol}</p>
                    </div>
                    <p>${market.price}</p>
                </div>
                {
                    alertType === alertTypes[0] ? (
                        <div className={`${styles.flexed} ${styles.value}`}>
                            <p>Price</p>
                            <label>$&emsp;<input type="number" value={simpleAlert.price} onChange={(e) => setSimpleAlert(prevState => ({...prevState, price: parseInt(e.target.value)}))} /></label>
                        </div>
                    ):(
                        <div>
                            <div className={`${styles.flexed} ${styles.value}`}>
                                <p>Price</p>
                                <label>$&emsp;<input type="number" value={DCAAlert.startingPrice} onChange={(e) => setDCAAlert(prevState => ({...prevState, startingPrice: parseInt(e.target.value)}))} /></label>
                            </div>
                            <div className={`${styles.preview}`}>
                                <p>preview</p>
                                <ul>
                                    <li>
                                        <p>0%</p>
                                        <p>${DCAAlert.startingPrice}</p>
                                    </li>
                                    <li>
                                        <p>20%</p>
                                        <p>${DCAAlert.levelTwo}</p>
                                    </li>
                                    <li>
                                        <p>25%</p>
                                        <p>${DCAAlert.levelThree}</p>
                                    </li>
                                    <li>
                                        <p>25%</p>
                                        <p>${DCAAlert.levelFour}</p>
                                    </li>
                                    <li>
                                        <p>30%</p>
                                        <p>${DCAAlert.levelFive}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
            <button className={styles.submit} onClick={alertType === alertTypes[0] ? submitSimple : submitDCA}>Done</button>

        </div>
    </div>
  )
}

export default AddAlert