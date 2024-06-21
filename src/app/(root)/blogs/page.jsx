import Btn from '@/components/Btn';
import Container from '@/components/common/Container';
import { fetchBlogs } from '@/services/blogApi';
import Link from 'next/link';


export const metadata = {
    title: {
        absolute: "Blogs"
    },
    description: "next blogs for heros",
};

const BlogPage = async () => {
    const blogs = await fetchBlogs()

    return (
        <Container>
            <h3>Blogs</h3>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10'>
                {blogs.slice(0, 20).map((blog, index) => <BlogCard key={index} blog={blog} />)}
            </div>
        </Container>
    );
};

export default BlogPage;

function BlogCard({ blog }) {
    return (
        <div className='border p-4 rounded-md flex flex-col justify-between shadow-lg dark:bg-gray-950 dark:border-gray-800'>
            <div>
                <h3 className='text-xl'>{blog.title}</h3>
                <h3 className='my-2'>{blog.body}</h3>
            </div>
            <div className='mt-2 flex justify-end'>
                <Link href={`/blogs/${blog.id}`}><Btn size='sm'><span>Show detail</span></Btn></Link>
            </div>
        </div>
    )
}



