import PostCard from "./PostCard"


export default function PostsList({ postsList }) {

    return (

        <div className="row row-cols-md-3 row-cols-lg-5 gap-4">
            {
                postsList.map((post) => {
                    return (
                        <PostCard key={`post-${post.id}`} post={post} />
                    )
                })
            }
        </div>
    )
}