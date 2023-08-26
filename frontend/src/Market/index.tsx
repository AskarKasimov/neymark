import style from "./Market.module.scss";

const Market = () => {
    return (
        <div className={style.Market}>
            <img src="/Vector.png" alt="" />
            <h1>Неймаркет</h1>
            <div className={style.list}>
                <div className={style.product}>
                    <img src="/ph.png" alt="" />
                    <div className={style.info}>
                        <p className={style.title}>Шопер Умный кампус</p>
                        <p className={style.price}>Цена: xxx</p>
                        <p className={style.desc}>Описание: Большая вместительная сумка, изготовленная из ткани, которая прекрасно подходит для походов на пары</p>
                    </div>
                </div>
                <div className={style.product}>
                    <img src="/ph.png" alt="" />
                    <div className={style.info}>
                        <p className={style.title}>Шопер Умный кампус</p>
                        <p className={style.price}>Цена: xxx</p>
                        <p className={style.desc}>Описание: Большая вместительная сумка, изготовленная из ткани, которая прекрасно подходит для походов на пары</p>
                    </div>
                </div>
                <div className={style.product}>
                    <img src="/ph.png" alt="" />
                    <div className={style.info}>
                        <p className={style.title}>Шопер Умный кампус</p>
                        <p className={style.price}>Цена: xxx</p>
                        <p className={style.desc}>Описание: Большая вместительная сумка, изготовленная из ткани, которая прекрасно подходит для походов на пары</p>
                    </div>
                </div>
                <div className={style.product}>
                    <img src="/ph.png" alt="" />
                    <div className={style.info}>
                        <p className={style.title}>Шопер Умный кампус</p>
                        <p className={style.price}>Цена: xxx</p>
                        <p className={style.desc}>Описание: Большая вместительная сумка, изготовленная из ткани, которая прекрасно подходит для походов на пары</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;