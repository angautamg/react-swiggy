import { useEffect, useState } from "react";
import ResturentCard from './ResturentCard.js'
import { resList } from '../../utils/mocData.js'
import { RESTURENT_URL } from "../../utils/constant.js";
import TopItemsCard from "./TopItemsCard.js";

const Body = () => {
    const [listOfTop, setListOfTop] = useState([]);
    const [listOfResturent, setListOfResturent] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(RESTURENT_URL);
        const json = await data.json();
        console.log(json);
        setListOfTop(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setListOfResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filetrList = listOfResturent.filter((res) => res.info.avgRating > 4.3)
                        setListOfResturent(filetrList);
                    }}
                    
                >filter</button>
            </div>
            <div className='res-container'>
                <div className="top-heading">
                    <h3></h3>
                </div>
                {listOfTop?.map((res) => (
                    <TopItemsCard key={res.id} info={res.imageId} />
                ))}

            </div>
            <div className='res-container'>
                {listOfResturent?.map((res) => (
                    <ResturentCard key={res.id} info={res} />
                ))}

            </div>
        </div>
    )
}
export default Body;