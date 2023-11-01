import PropTypes from 'prop-types';
import Bookmarks from '../Bookmarks/Bookmarks';

const Bookmark = ({bookmark,readingTime}) => {
    const {title,reading_time} = bookmark;
    return (
        <div>
            {/* <h3>Spent Total Time: {reading_time}</h3> */}
             <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;