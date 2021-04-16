import './Education.css';

export const EduComp = (props) => {
    return (
        <div className="container boxUnderline">
            <div className="row">
                <div className="col-8">
                    {props.name}
                </div>
                <div className="col-4 text-end">
                    {props.year}
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    {props.description}
                </div>
                <div className="col-4 text-end">
                    {props.location}
                </div>
            </div>
        </div>
    );
}