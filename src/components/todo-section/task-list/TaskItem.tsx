import '../TodoSection.css';
import deleteIcon from "../../../assets/delete-button.png";
import editIcon from "../../../assets/edit-button.png";

export default function TaskItem(){
    return (
        <li className='task-item'>
            <div className='left-part'>
                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox-box" />
                </label>
                <div className="text-box">
                    <h3 className="topic">Make food</h3>
                    <p className='date'>14:00 12.01.2026</p>
                </div>
            </div>
            <div className="right-part">
                <button className='delete-button'>
                    <img src={deleteIcon} alt="delete-button-image"/>
                </button>
                <button className='edit-button'>
                    <img src={editIcon} alt="edit-button-image"/>
                </button>
            </div>

        </li>
    )
}