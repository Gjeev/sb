import './css/body.css';
import Map from "./Map";
import Panel from './Panel';


export default function Body() {
    
    return (
        <>
            <div className="main-content">
                <Panel></Panel>
                <div className='right-body'>
                <Map></Map>
                </div>    
                
            </div>
        </>
    );
}