import "./style.css";

function Featured(props){
    return (
        <div className="featured">
            <img src={props.url} alt={props.new} />
            <div>
                <p className="title">{props.title}</p>
                <p className="info">{props.info}</p>
            </div>
        </div>
    );
}

export default Featured;