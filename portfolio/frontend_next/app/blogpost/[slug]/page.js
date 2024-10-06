export default function({params}){
    return(
    <div className="max-w-5xl mx-auto bg-red-400">
        <h1>Title</h1>
        <div dangerouslySetInnerHTML={{__html:"your HTML content here"}}></div>
        
    </div>)
}