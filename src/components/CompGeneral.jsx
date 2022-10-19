const Card = ({title, item1, item2, item3, color, sayHello}) => {
  return (
    <div onClick={sayHello} className="Container" style={{backgroundColor:color}}>
      <h1>{title}</h1>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  )
}  
export default Card;