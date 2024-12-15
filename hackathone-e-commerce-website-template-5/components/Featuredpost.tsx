import React from 'react'

const Featuredpost = () => {

const post = [

    {
        id:1,
        images:"/images/post1.jpeg",
        badge:"NEW",
        title:"Loudest à la Madison #1 (L'intégral)",
        description:"We Focus On Ergonomics and Meeting You Where Your Work. It's Only A Keystroke Away.",
        date:"22 April 2021",
        comments:"10 Comments",
        tag:["Google","Trending","New"]

    },

    {
        id:2,
        images:"/images/post2.jpeg",
        badge:"NEW",
        title:"Loudest à la Madison #1 (L'intégral)",
        description:"We Focus On Ergonomics and Meeting You Where Your Work. It's Only A Keystroke Away.",
        date:"22 April 2021",
        comments:"10 Comments",
        tag:["Google","Trending","New"]

    },

    {
        id:3,
        images:"/images/post3.jpeg",
        badge:"NEW",
        title:"Loudest à la Madison #1 (L'intégral)",
        description:"We Focus On Ergonomics and Meeting You Where Your Work. It's Only A Keystroke Away.",
        date:"22 April 2021",
        comments:"10 Comments",
        tag:["Google","Trending","New"]

    },
]


  return (

    <div className=' bg-white py-16'>

        <div className="max-w-[1440px] mx-auto px-6 text-center">

            <h4 className="text-blue-500 text-sm uppercase font-extrabold">Practice Advice</h4>

            <h2 className="text-4xl font-extrabold text-gray-800 mt-2">Featured Posts</h2>

            <p className="text-gray-500 mt-2 font-bold">Problems Trying To Resolve The Conflict Between The Two Major Realms Of Classical Physics: Newtonian Mechanics</p>
        </div>
      
    <div className="max-w-[1440px] mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {post.map((post) => (

        <div
        key={post.id}
        className="bg-white border rounded-lg shadow-md overflow-hidden">

            <div className="relative">

            <img 
            src={post.images}
            alt={post.title} 
            className='w-full h-48 object-cover'/>

            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">{post.badge}</span>
            </div>

        <div className="p-6">

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">

                {post.tag.map((tag, index) =>(

                    <span 
                    key={index}
                    className="capitalize">{tag}</span>

                ))}
            </div>

                <h3 className="font-extrabold text-lg text-gray-800">{post.title}</h3>

                <p className="text-gray-500 text-sm mt-2 font-bold">{post.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-400 mt-4">

                    <div className="flex items-center gap-1">

                        <span className="mayerial-icons font-extrabold">Schedule</span>
                        <span className='font-bold'>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-1">

                        <span className="material-icons"></span>
                        <span className='font-extrabold'>{post.comments}</span>
                    </div>
                </div>

                <div className="mt-4">
                    
                    <a 
                    href="#"
                    className='text-blue-500 text-sm font-bold hover:underline'>Learn More →</a>
                </div>
             </div>
        </div>
        ))}
    </div>
</div>
  )
}

export default Featuredpost
