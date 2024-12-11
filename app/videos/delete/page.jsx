import deleteVideo from '../deleteVideos'

export default function Videos(props){
    return(
        <>
            <form action={deleteVideo}>
                <input type="hidden" name="videoID" value={props.videoID}/>
                <button>Delete</button>
            </form>
        </>
    )
}