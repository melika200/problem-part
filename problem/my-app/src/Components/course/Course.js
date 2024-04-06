import { FaUser } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";
import './Course.css'
function Course(props){
    return(
        <>
        <div className="courseCardWrapper">
            <div className="courseCardImage">
                <img className="courseImage" src={props.image} />
                <p><FaUser size='20px' />
                <span>{props.studentCount}</span>
                </p>
            </div>
            <div className="courseCardContent">
                <h5 className="courseName">{props.title}</h5>
                <p className="courseDescription">{props.description}</p>

            </div>
            <div className="courseCardTeacher">
                <p><GiTeacher size='20px' />
                مدرس :{props.teacher}
                </p>
            </div>
            <div className="courseCardFooter">
                <p><button><b>ثبت نام دوره</b></button></p>
                <p><BiDollar size='20px' />
                <b>{props.mainPrice}</b>
                </p>
            </div>
        </div>
        </>
    )
}
export default Course