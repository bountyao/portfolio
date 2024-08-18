import './styles/common-information-container.css'

function PageBlock({children, variant}) {

    return (
        <div className={`pageblock ${variant}`}>
            {children}
        </div>
    );
}

export default PageBlock;