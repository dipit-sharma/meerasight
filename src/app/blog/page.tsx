import { blogs } from "./constants";
import './style.css'

export default function Blogs() {
    return (
        <div className="parent" >
            {
                blogs.map(item => (
                    <div key={item.image} className="blog-card">
                        <div className="img-cnt" style={{ backgroundImage: `url(${item.image})` }}>

                        </div>
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="description">{item.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
} 