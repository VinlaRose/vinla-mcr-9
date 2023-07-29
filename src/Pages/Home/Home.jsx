import { useNavigate } from "react-router-dom"
import { categories } from "../../data/categories"
import "./Home.css"
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { videos } from "../../data/videos";
export const Home = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(DataContext)
    useEffect(() => {
        dispatch({type: "FETCH_DATA", payload: videos.map(item => {
            return {
                ...item,
                inPlaylist: false,
                inWatchLater: false
            }
        })})
        console.log(state);
    },[]);
    
    return (
        <div className="homeContainer">
            <h1>Categories</h1>
            
                <ul className="categoriesList">
                    {
                        categories.map((item) => (
                            <li key={item.category}>
                                 <div  onClick={() => navigate(`/${item.category}`)} className="image-with-title-container">
                                    <img className="image-with-title-image" src={item.thumbnail} alt="" />
                                    <div className="image-with-title-title">{item.category}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            
        </div>
    )
}