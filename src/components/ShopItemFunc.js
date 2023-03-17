import propTypes from 'prop-types';

function ShopItemFunc(props) {
  const { card } = props;
  const { brand, title, description, descriptionFull, currency, price } = card;
  return(
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency}{price}</div>
        <button>Добавить в корзину</button>
      </div>
  </div>
  )
}

ShopItemFunc.propTypes = {
  brand: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  descriptionFull: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
}
export default ShopItemFunc;
