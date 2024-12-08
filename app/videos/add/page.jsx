import addVideo from '../addVideos'
export default function Videos(){
    return(
        <>
            <h2>Add:</h2>
            <form action={addVideo}>
                <label>Video Name: <input type='text' name='videoname' placeholder='NAME'/></label>
                <label>Runtime: <input type='text' name='runtime' placeholder='RUNTIME'/></label>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}