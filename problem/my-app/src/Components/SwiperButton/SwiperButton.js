
import './SwiperButton.css'
import { useSwiper } from 'swiper/react'
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
function SwiperButton(){
    const swiper=useSwiper()
    return(
        <>

        <div className="swiperBtn">
            <button onClick={()=>swiper.slidePrev()}><FcNext size='30' /></button>
            <button onClick={()=>swiper.slideNext()}><FcPrevious size='30' /></button>
        </div>

        </>
    )
}
export default SwiperButton