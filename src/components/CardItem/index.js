// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  const listStyling = `card-style ${className}`
  return (
    <li className={listStyling}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
