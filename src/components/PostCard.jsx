
export default function PostCard({ post }) {

    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`http://localhost:3000${post.image}`} className="img-fluid rounded-start" alt={post.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.content.substring(0, 30) + '....'}</p>
                            <a href="#" className="unstyle">
                                <button className="btn btn-primary">
                                    Guarda
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}