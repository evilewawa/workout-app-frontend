import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://maaz-workout-app-api.onrender.com"}),
    //baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000"}),
    tagTypes:["Workouts"],
    endpoints:builder => ({})
})
