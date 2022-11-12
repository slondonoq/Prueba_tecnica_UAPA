import '../styles/componentStyles/Button.css';
import play from '../imgs/play.svg'

const Button = ({ 
    type="default",
    additional_classes,
    htmlType,
    text,
    arialabel
}) => {
    return(
        <button 
            type={htmlType} 
            className={`button ${type} ${additional_classes || ''}`}
            aria-label={arialabel}
        >
            {
                type === 'video' ?
                <img alt="Play" src={play}/>
                :text || ''
            }
        </button>
    );
}

export default Button;