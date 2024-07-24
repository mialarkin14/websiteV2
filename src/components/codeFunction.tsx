const CodeFunction = ({image, title, description}: {image: string, title:string, description:string}) =>{
    return(
        <>
        <div className="project">
            <img src={image} alt="project-image" style={{width: '300px'}}/>
            <p className="SubHeading1" style={{width: '100%'}}>
                {title}
            </p>
            <p className="SubHeading2" style={{width: '340px'}}>
                {description}
            </p>
        </div>
        </>
    )
}
export default CodeFunction