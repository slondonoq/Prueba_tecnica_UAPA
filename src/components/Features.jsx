import '../styles/componentStyles/Features.css';
import shapes from '../imgs/shapes.svg';
import draw from '../imgs/draw.svg';
import brush from '../imgs/brush.svg';
import Button from './Button';

const Features = () => {
    return(
        <section className="features container">
            <div className ="heading">
                <h2>Features</h2>
                <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
            </div>
            <div className="feature_container">
                <div className="feature">
                    <img alt="" src={shapes} />
                    <h3>OpenType features Variable fonts</h3>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
                <div className="feature">
                    <img alt="" src={draw} />
                    <h3>Design with real data</h3>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
                <div className="feature">
                    <img alt="" src={brush} />
                    <h3>Fastest way to take action</h3>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
            </div>
            <div className="video_container">
                <Button 
                    type='video'
                    arialabel={'Play button'}
                />
            </div>
        </section>
    );
}

export default Features;