import { useNavigate } from "react-router-dom"
import { categories } from "../../data/categories"
import "./Home.css"
export const Home = () => {
    const navigate = useNavigate();
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