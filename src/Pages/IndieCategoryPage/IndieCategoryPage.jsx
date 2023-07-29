import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import VideoThumbnail from "../../components/videoThumbnail/Thumbnail";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/Context";

export const IndieCategory = () => {
    const {state} = useContext(DataContext)
    const {category} = useParams();
    const requiredVideos = state.data.filter(item => item.category === category);
    console.log(requiredVideos);
   
    
    
    return(
        <div >   
            
            <div className="homeContainer">
            <h1>{category}</h1>
            
                <ul className="categoriesList">
                    {
                        requiredVideos.map((item) => (
                            <li key={item._id} >
                                 <VideoThumbnail video={item} />
                            </li>
                        ))
                    }
                </ul>


            
        </div>
            
        </div>
    )
}