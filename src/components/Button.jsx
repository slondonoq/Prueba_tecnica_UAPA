import '../styles/componentStyles/Button.css';

const Button = ({ 
    type="default",
    additional_classes,
    htmlType,
    text
}) => {
    return(
        <button
            type={htmlType} 
            className={`button ${type} ${additional_classes}`}
        >
            {text || ''}
        </button>
    );
}

export default Button;