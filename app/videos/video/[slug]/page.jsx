import VideoInfo from '/videoInfo'

export default function Videos({params}){
    return(
        <>
            <VideoInfo videoID={params.slug}/>
        </>
    )
}