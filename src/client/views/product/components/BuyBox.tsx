import { formatPrice } from "../../../helpers/formatters";
import "./buyBox.scss";

const BuyBox = ({ title, amount }: { title: string; amount: number }) => {
  return (
    <div className="buy-box">
      <h1 className="buy-box__title">{title}</h1>
      <p className="buy-box__price">{formatPrice(amount)}</p>
      <button className="buy-box__button">Comprar</button>
    </div>
  );
};

export default BuyBox;
