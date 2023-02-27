import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://maaz-workout-app-api.onrender.com"}),
    tagTypes:["Workouts"],
    endpoints:builder => ({})
})