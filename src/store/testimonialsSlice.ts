import {createSlice} from "@reduxjs/toolkit";
import avatar2 from "../assets/photo_2022-12-20_20-51-24.jpg";
import AbzalImg from '../assets/Abzal_image.jpg'

export type TestimonialsDataType = {
    id: number
    name: string
    avatar: string
    review: string
}
const initialState = {
    testimonialsData: [
        {
            id: 1,
            name: 'Abzal Kozhakhmet',
            avatar: AbzalImg,
            review: 'an experienced and talented Fronted Developer working at Jusan Bank'
        },
        {
            id: 2,
            name: 'Aziz Abdimaulenov',
            avatar: avatar2,
            review: 'a Frontend Developer working at TOO Mybuh'
        }
    ] as TestimonialsDataType[]
}

export const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {}
})

export default testimonialsSlice.reducer


