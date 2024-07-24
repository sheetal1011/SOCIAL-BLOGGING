import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { Link } from 'react-router-dom';
import './blogger.css';

const BlogExcerpt = ({post, posterId, postId}) => {
    const users = useSelector(selectAllUsers);
    const date =
    post && post.date_posted ? new Date(post.date_posted) : new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  let owner = users.find((user) => user.id === posterId)
  console.log(owner.username)
  return (
    <div className='w-80 shadow-lg '>
        <div className='' height='360px'>
            <img className='object-fill h-48 w-96 rounded-lg' width='100%' height='100%' src={post.image} alt={post.title} loading='lazy' />
        </div>
        <div className=' mb-3'>
            <div className='postedby'>
              <div>
                <p>Posted by: {owner.username}</p>
              </div>
              <div>
                <AccessTimeIcon className='date'/>
                {formattedDate}
              </div>
              </div>
            <h1 className='font-bold'>{post.title}</h1>
            <p>{post.description.substring(0,100)}....</p>
            <div className='text-white text-center mt-3'>
              <Link to={`blog/${postId}`}>
                <button className='continue'> Continue reading</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogExcerpt