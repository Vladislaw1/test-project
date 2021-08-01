import './App.css';
import FormAddBike from "./client/components/FormAddBike";
import Statistic from "./client/components/Statistic";
import BikesList from "./client/components/BikesList";
import Header from "./client/components/Header";
import Footer from "./client/components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <div style={{display:"flex"}}>
                <div style={{width:"100%",padding:"9px",borderRight:"1px solid #C4C4C4"}}>
                    <BikesList/>
                </div>
                <div style={{width:"100%"}}>
                    <FormAddBike/>
                    <Statistic/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
