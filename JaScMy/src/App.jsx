import styles from './style'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import FeedbackCard from "./components/FeedbackCard";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Billing from "./components/Billing";

const App = () => (
 
    <div className='bg-primary w-full overflow-hidden'>

<div className={`${styles.paddingX} ${styles.flexCenter} `}>
<div className={`${styles.boxWidth}`}>
    <Navbar/>
</div>
</div>

<div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
        <Hero/>
    </div>
</div>
<div className={`bg-primary  ${styles.paddingX}   ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Clients/>
        <CTA/>
        <Footer/>
    </div>
</div>


    </div>
  
)

export default App
