import Container from '@/components/common/Container';
import { fetchBlog } from '@/services/blogApi';
import { Headland_One } from 'next/font/google';
import { Exo_2 } from 'next/font/google';

const font = Exo_2({ weight: ['400'], subsets: ['latin'] })
// const font = Headland_One({ weight: ['400'], subsets: ['latin'] })

export async function generateMetadata({ params }) {
    const blogData = await fetchBlog(params.blogId)

    return {
        title: blogData?.title,
        description: blogData?.body,
        keywords: blogData?.body?.split(' '),
    }
}

const BlogDetailPage = async ({ params }) => {
    console.log(params.blogId);

    const blog = await fetchBlog(params.blogId)

    return (
        <div className={`${font.className}`}>
            <Container>
                <div className='bg-gradient-to-r dark:from-blue-400 from-blue-600 dark:to-rose-400 to-rose-600 text-transparent bg-clip-text'>
                    <h3 className="text-center text-3xl font-semibold ">{blog?.title}</h3>
                </div>
                <br />
                <div>
                    <p className='text-xl font-semibold mb-1'>{blog?.description || blog?.body}</p>
                    <p>{blog?.blog || blog?.body}</p>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetailPage;