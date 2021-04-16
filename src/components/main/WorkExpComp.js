export const WorkExpComp = (props) => {
    let otherExp = "";

    if(props.other){
        otherExp = <h5 className="col-12">Other</h5>
    }

    return (
        <div className="row">
            {otherExp}
            <div className="col-12 col-sm-8 col-lg-8">
                <p className="bold">{props.name}</p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 text-end">
                {props.date}
            </div>
            <div className="col-12">
                <p className="bold">{props.title}</p>
            </div>
            <p className="description">
                {props.description}
            </p>
        </div>
    );
}