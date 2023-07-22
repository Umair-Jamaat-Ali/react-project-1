import proImage from '../../assets/imgs/image-2.jpg.png';
function Profile() {
    return (
        <div className="title-div" style={{ margin: "10px", width: "400px", }}>
            <h5 >Space Walking</h5>
            <div style={{ display: 'flex' }}>
                <img src={proImage} alt="author-img" />
                <p style={{ paddingLeft: "10px" }}>Animakid</p>
            </div>
        </div>
    )
}

export default Profile;