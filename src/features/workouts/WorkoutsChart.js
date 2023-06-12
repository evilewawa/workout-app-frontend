import { useGetWorkoutsQuery,useGetExerciseNamesQuery, useGetWorkoutsByUserIDAndNameQuery } from "./workoutsApiSlice"
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {Line} from "react-chartjs-2"
import Chart from "chart.js/auto"
import {CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js"
import { useEffect, useState } from "react";
import { selectWorkoutsById } from "./workoutsApiSlice";
import WorkoutChartData from "./workoutChartData";
import Workout from "./Workout";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const WorkoutsCharts = ({exercise_name}) => {
    const {userID} = useParams()
    // const userID = 1
    // const exercise_name = "Benchpress"
    // console.log(exercise_name, typeof(userID))
    const {
        data:workouts,
        //states
        isLoading,
        isSuccess,
        isError,
        error
    // } = useGetWorkoutsByUserIDAndNameQuery(userID, exercise_name)
    } = useGetWorkoutsQuery()
    // console.log(data)
    let content;
    if (isLoading) content = <p>Loading</p>
    if (isError){
        content = <p className ="errmsg">{error?.data?.message}</p>
    }
    let graphData = []

    
    // const setChartData = e => {

    // }
    function LineChart({options, chartData, e_name}){
        // console.log(chartData)
        return (
            <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Progress in {e_name}</h2>
            {/* <p>{chartData}</p> */}
            <Line
              data={chartData}
              options={options
              // }
            }
            />

          </div>
        )
    }

    // useEffect(()=> {
    if (isSuccess){
      // console.log(workouts)
        const {entities} = workouts
        const {ids} = workouts

        const tableContent = ids?.length 
            ?ids.map(workoutId => {
              // entities[workoutId] 
              if (!userID || !exercise_name || exercise_name === "All"){

                if (entities[workoutId].exercise_name === "Benchpress"&& entities[workoutId].userID === 1){
                  const sum = (arr) => {
                    let total = 0
                        for (let i = 0; i < arr.length; i++){
                            total += arr[i]
                        }
                        return total
                    }
                  let workoutDate = new Date(entities[workoutId].createdAt.toString())
                  let workoutDateString = workoutDate.toDateString()
                  let point = {weight: entities[workoutId].weight, sets : entities[workoutId].sets, total: sum(entities[workoutId].sets), date: workoutDateString}
                  return point
                }
              }
              else{
                console.log(exercise_name, userID)
                if (entities[workoutId].exercise_name === exercise_name && entities[workoutId].userID === parseInt(userID)){
                  const sum = (arr) => {
                    let total = 0
                        for (let i = 0; i < arr.length; i++){
                            total += arr[i]
                        }
                        return total
                    }
                  let workoutDate = new Date(entities[workoutId].createdAt.toString())
                  let workoutDateString = workoutDate.toDateString()
                  let point = {weight: entities[workoutId].weight, sets : entities[workoutId].sets, total: sum(entities[workoutId].sets), date: workoutDateString}
                  return point
                }
              }
    }): null
        // console.log(tableContent)

        graphData = []
        for (let i = 0; i < tableContent.length; i ++){
          if (tableContent[i]){
            graphData.push(tableContent[i])
          } 
        }
        // changeData(graphData)
        let graph = {
          labels: graphData.map((data) => data.date), 
          datasets: [
            {
              label: "Total: ",
              data: graphData.map((data) => data.total),
              // color:"white",
              backgroundColor: [
                // "rgba(75,192,192,1)",
                // "red",
                "#ecf0f1",
              //   "#50AF95",
              //   "#f3ba2f",
              //   "#2a71d0"
              ],
              borderColor: "red",
              borderWidth: 2,
              yAxisID:"y"
            },
            {
              label: "Weight: ",
              data: graphData.map((data) => data.weight),
              // color:"white",
              backgroundColor: [
                // "rgba(75,192,192,1)",
                "#ecf0f1",
              //   "#50AF95",
              //   "#f3ba2f",
              //   "#2a71d0"
              ],
              borderColor: "blue",
              borderWidth: 2,
              yAxisID:"y1"
            },
          ]
        }
        const options = {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
            // title: {
            //   display: true,
            //   text: 'Chart.js Line Chart - Multi Axis',
            // },
            legend:{
              labels:{
              color:"#ecf0f1",
            },
          },
          },
          
          scales: {
            y: {
              ticks:{
              color:"#ecf0f1",
              },
              title: {
                color: "#ecf0f1",
                display:true,
                text:"Total Reps of sets"
              },
              type: 'linear' ,
              display: true,
              position: 'left',
              beginAtZero:true,
            },
            y1: {
              ticks:{
                color:"#ecf0f1",
              },
              beginAtZero:true,
              title:{
                color: "#ecf0f1",
                display:true,
                text: "Weight in Lbs"
              },
              type: 'linear',
              display: true,
              position: 'right' ,
              grid: {
                drawOnChartArea: false,
              },
            },
            x:{
              ticks:{
                color:"#ecf0f1",
              }
            }
          },
        };
        content = <LineChart options = {options} chartData = {graph} e_name = {exercise_name? exercise_name : "Benchpress"}/>
    }
  // }, [exercise_name])
    return (
      <div>
        {content}</div>
        // <div>
        // <h1></h1>
        
        // </div>
    )
}
export default WorkoutsCharts