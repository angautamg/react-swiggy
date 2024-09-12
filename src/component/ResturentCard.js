const styleCart={backgroundColor:'#dfdfdf'};
const ResturentCard = (props) => {
    return (
        <div className='res-card' style={styleCart}>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/30/d0691e8d-58d3-4f21-98b0-76c07c5c7462_a546fbdc-b062-4848-b96e-6a4b519223fc.jpg' className='res-logo' />
            <h3>{props?.info?.info?.name}</h3>
            <h4>{props?.info?.info?.cuisines.join(',')}</h4>
            <h5>{props?.info?.info?.avgRating} star ({props?.info?.info?.totalRatingsString})</h5>
            <h5>48 Minuts</h5>
        </div>
    )
}
export default ResturentCard;