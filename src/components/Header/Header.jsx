import profile from '../../assets/image/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between'>
            <h1 className="text-3xl font-bold  ">
                Knowledge Cafe
            </h1>
            <img src={profile} alt='Profile of ppl'></img>
        </header>
    );
};

export default Header;