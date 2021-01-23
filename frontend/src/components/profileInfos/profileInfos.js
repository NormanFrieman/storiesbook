import "./style.css";

function ProfileInfos(props){
    return (
        <div className="profileInfos">
            <div className="setupInfos">
                <p className="title">Post</p>
                <p className="info">{props.posts}</p>
            </div>
            <div className="setupInfos">
                <p className="title">Followers</p>
                <p className="info">{props.followers}</p>
            </div>
            <div className="setupInfos">
                <p className="title">Following</p>
                <p className="info">{props.following}</p>
            </div>
        </div>
    );
}

export default ProfileInfos;