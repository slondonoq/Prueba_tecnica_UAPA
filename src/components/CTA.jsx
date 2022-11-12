import '../styles/componentStyles/CTA.css'
import Button from './Button';

const CTA = () => {
    return (
        <div className="cta">
            <h1>The best products start with figma</h1>
            <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
            <Button
                text={'Try For Free'}
            />
        </div>
    );
}

export default CTA;