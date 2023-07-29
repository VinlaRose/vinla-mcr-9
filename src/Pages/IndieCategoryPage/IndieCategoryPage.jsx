import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import VideoThumbnail from "../../components/videoThumbnail/Thumbnail";

export const IndieCategory = () => {
    const {category} = useParams();
    const requiredVideos = videos.filter(item => item.category === category);
    console.log(requiredVideos);
    const navigate = useNavigate();
    
    return(
        <div >   
            
            <div className="homeContainer">
            <h1>{category}</h1>
            
                <ul className="categoriesList">
                    {
                        requiredVideos.map((item) => (
                            <li key={item._id} onClick={() => navigate(`/${item.category}/${item._id}`)}>
                                 <VideoThumbnail video={item} />
                            </li>
                        ))
                    }
                </ul>


            
        </div>
            
        </div>
    )
}