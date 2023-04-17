import { ContainerG } from "../Container/container"
import { TitleCAt } from "../title/Title"
import { ListVideos } from "../videos/ListVideos"


export const Categoria = ({title,color,videos})=>{
    return(
        <>
        
        {videos.length>0&&<ContainerG key={title}>
            <TitleCAt color={color}> {title}</TitleCAt>
            <ListVideos  color={color} videos={videos}/>
          </ContainerG>}
        </>
    )
}