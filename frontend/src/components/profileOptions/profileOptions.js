import "./style.css";

function ProfileOptions(props){
    return (
        <div className="profileOptions" id={props.activate} >
            <div className="profileFlex">
                <props.feather />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default ProfileOptions;