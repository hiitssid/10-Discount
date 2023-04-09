import './Card.css'
export default function Card(props) {
    return (
      <div class="sellCard">
        <h1 className='sellPrice'>{props.sp}</h1>
        <h4>{props.mrp}</h4>
      </div>
    );
  }
  