import React from 'react';
import './App.css';
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {Header} from "./components/Header/Header";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Nav} from "./components/Nav/Nav";
import {Services} from "./components/Services/Services";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Footer} from "./components/Footer/Footer";
import {useSelector} from "react-redux";
import {TestimonialsDataType} from "./store/testimonialsSlice";
import {useAppSelector} from "./hooks/typed-react-redux-hooks";

export function App() {
    const testimonialsData = useSelector<any, TestimonialsDataType[]>(state => state.testimonials.testimonialsData)
    const {portfolioData, otherInfo} = useAppSelector(state => state.portfolio)
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio portfolioData={portfolioData}
                       otherInfo={otherInfo}/>
            <Testimonials testimonialsData={testimonialsData}/>
            <Contact/>
            <Footer/>
        </div>
    );
}

