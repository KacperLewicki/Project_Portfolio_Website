import HeroBanner from "./components/HeroBanner/HeroBanner";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
