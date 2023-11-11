import star from "./../assets/star.png";

type Item = {
  key:number;
  item:CardType;
};

type CardType = {
    img:any;
    title:string;
    rating:string;
    count:number;
    country:string;
    rank:string;
    badge?:string;
}

function Card(props: Item) {
  return (
    <div className="card">
      {props.item.badge && <div className="card--badge">{props.item.badge}</div>}
      <img src={props.item.img} className="card--img" />
      <div className="card--details">
        <img src={star} className="card--star" />
        <span className="card--rating">{props.item.rating}</span>
        <span className="card--count gray">[{props.item.count}]</span>
        <span className="card--country gray">{props.item.country}</span>
      </div>
      <h4>{props.item.title}</h4>
      <p className="card--cost">
        <span className="bold">{props.item.rank}</span>
      </p>
    </div>
  );
}

export default Card;