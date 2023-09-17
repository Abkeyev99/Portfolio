import {createSlice} from "@reduxjs/toolkit";
import adminQueue_project from "../assets/social-network.jpg";
import queueFront_project from '../assets/todolist1.png'


export interface PortfolioDataType {
    id: number
    image: any
    title: string
    github: string
    demo: string
}

export interface PortfolioOtherInfoType {
    title: string
    name: string
    github: string
    liveDemo: string
}

export interface PortfolioType {
    otherInfo: PortfolioOtherInfoType
    portfolioData: PortfolioDataType[]
}

const initialState: PortfolioType = {
    otherInfo: {
        title: "My Recent Work",
        name: "Portfolio",
        github: "GitHub",
        liveDemo: "Live Demo"
    },
    portfolioData: [
        {
            id: 1,
            image: queueFront_project,
            title: 'Todolist React',
            github: 'https://github.com/Abkeyev99/Todolist',
            demo: 'https://dribbble.com/shots/20281973-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },
        {
            id: 2,
            image: adminQueue_project,
            title: 'Social-Network',
            github: 'https://github.com/Abkeyev99/Social-Network',
            demo: 'https://dribbble.com/shots/20282089-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },

    ]
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {}
})

export default portfolioSlice.reducer