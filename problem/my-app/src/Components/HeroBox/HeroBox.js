import './HeroBox.css';
import CountUp from 'react-countup';
function HeroBox({title,count,children}){
  return(
    <div className="heroboxContainer">
        <div className="heroboxHeader">
         {children}
        <b className="heroboxTitle">{title}</b>
        <p className="heroboxCount">
        <CountUp
        start={0}
        end={count}
        duration={5}
         />
        </p>
        </div>
    </div>
  )
}
export default HeroBox