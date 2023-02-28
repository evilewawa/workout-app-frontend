import {createSelector, createEntityAdapter} from "@reduxjs/toolkit"
import {apiSlice} from "../../app/api/apiSlice"

// this is the same for any other schema

const workoutsAdapter = createEntityAdapter({
    // sortComparer: figure out how to sort by date, 
    // tho it should alr be doing that but the date should be descending order
})
const initialState = workoutsAdapter.getInitialState()
export const workoutsApiSlice = apiSlice.injectEndpoints({
    endpoints:builder => ({
        getWorkouts:builder.query({
            query:() => "/workouts",
            validateStatus: (response, result) => {
                return response.validateStatus===200 && !result.isError
            },

            //in seconds, default is 60s
            keepUnusedDataFor:5,
            transformResponse:responseData => {
                const loadedWorkouts = responseData.map(workout => {
                    // normalized data stuff is looking for .id not ._id
                    workout.id = workout._id
                    return workout
                })
                return workoutsAdapter.setAll(initialState, loadedWorkouts)
            },
            providesTags:(result, error, arg) => {
                if (result?.ids){
                    return [
                        {type:"Workout", id:"LIST"},
                        ...result.ids.map(id => ({type:"Workout", id}))
                    ]
                }else return [{type:"Workout", id: "LIST"}]
            }
        }),
        getExerciseNames:builder.query({
            query:()=>"/workouts/getWorkoutNames",
            validateStatus: (response, result) => {
                return response.validateStatus===200 && !result.isError
            },

            //in seconds, default is 60s
            // keepUnusedDataFor:5,
            // data:return(data)
            // transformResponse:responseData => {
            //     const loadedWorkouts = responseData.map(workout => {
            //         // normalized data stuff is looking for .id not ._id
            //         workout.id = workout._id
            //         return workout
            //     })
            //     return workoutsAdapter.setAll(initialState, loadedWorkouts)
            // },
            // providesTags:(result, error, arg) => {
            //     if (result?.ids){
            //         return [
            //             {type:"Workout", id:"LIST"},
            //             ...result.ids.map(id => ({type:"Workout", id}))
            //         ]
            //     }else return [{type:"Workout", id: "LIST"}]
            // }
        }),
        addNewExercise: builder.mutation({
            query: workoutData => ({
                url: "/workouts",
                method:"POST",
                body: {
                    ...workoutData
                }
            })
        }),
        getWorkoutsByUserID :builder.query({
            query : (userID) => `/workouts/${userID}`,
            validateStatus: (response, result) => {
                return response.validateStatus===200 && !result.isError
            },
        }),
        getWorkoutsByUserIDAndName:builder.query({
            query : (userID, exercise_name) => `workouts/${userID}/${exercise_name}`,
            validateStatus: (response, result) => {
                return response.validateStatus===200 && !result.isError
            },
        })

    }),
})

export const {
    useGetWorkoutsQuery,
    useGetExerciseNamesQuery,
    useAddNewExerciseMutation,    
    useGetWorkoutsByUserIDQuery,
    useGetWorkoutsByUserIDAndNameQuery
} = workoutsApiSlice

// returns query result object
export const selectWorkoutsResult = workoutsApiSlice.endpoints.getWorkouts.select()

// creates memoized? selector
const selectWorkoutsData = createSelector(
    selectWorkoutsResult, workoutsResult => workoutsResult.data // normalized state object with ids and entities
)
//getSelectors creates selectors and renames to aliases using destructuring
export const {
    selectAll:selectAllWorkouts,
    selectById:selectWorkoutsById,
    selectIds: selectWorkoutIds,
} = workoutsAdapter.getSelectors(state => selectWorkoutsData(state) ?? initialState)