import { BASE_URL } from "../../utils/constant";


const TopItemsCard = (props) => {
    
    return (
        <div className='res-item-card'>
            <img className='res-item-logo' src={BASE_URL+props?.info} />
        </div>
    )
}
export default TopItemsCard;