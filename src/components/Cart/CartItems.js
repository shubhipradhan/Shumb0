
import { Link } from "react-router-dom";

const CartItems = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem row">
      <div className="cartitem__image col-lg-6 col-md-6 col-sm-12">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name col-lg-6 col-md-6 col-sm-12">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price col-lg-6 col-md-6 col-sm-12">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select col-lg-3 col-md-3 col-sm-12"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn col-lg-3 col-md-3 col-sm-12"
        onClick={() => removeHandler(item.product)}
      >
        <img src="/images/trash-bin.png" alt="trash" className="trash" />
      </button>
    </div>
  );
};

export default CartItems;