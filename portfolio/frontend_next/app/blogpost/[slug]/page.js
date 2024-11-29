export default function({params}){
    const blog={
        title:"Typescript tutorial in hindi",
        author:"john Doe",
        description:"This is a simple blog",
        date:"2024-09-02",
        content:"<p>This "
    }
    return(
    <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 ">{blog.title}</h1>
        <p className="text-base mb-2 border-1-4 border-gray-500 pl-4 italic">&quot;{blog.description}&quot;</p>
        <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-4 italic">By {blog.author}</p>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{__html:blog.content}} className="prose"></div>
    </div>)
}