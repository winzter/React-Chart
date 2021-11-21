import axios from "axios";
import { Component } from "react";
import { Bar } from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:[1,2,3],
                datasets:[{
                    label:"Scores",
                    data:[12,30,50],
                    backgroundColor:[
                        'rgba(54, 162, 235, 0.5)'
                    ]
                }]
            }
        }
    }

    setData(data){
        var labels=[]
        for(let i=0;i<data.length;i++){
            labels.push(`${data[i].Scores.substring(0,2)}`,)
        }
        console.log(`${data[0].Scores}`);
        console.log(labels.sort());
        var nlabels = labels.filter((item,index)=>{
            return labels.indexOf(item) === index
        })
        var count = []
        var b = labels.sort()
        var a = nlabels.sort()
        console.log(a);
        for(let i=0;i<a.length;i++){
            var s = 0;
            for(let j=0 ; j<b.length;j++){
                if(a[i] === b[j]){
                    s++;
                }
            }
            count.push(s,)
        }

        console.log(count);

        this.setState({
            chartData:{
                    labels:nlabels.sort(),
                    datasets:[{
                        label:"Scores",
                        data:count,
                        backgroundColor:[
                            'rgba(54, 162, 235, 0.5)'
                        ]
                    }]
                }
        })
    }

    componentDidMount(){
        axios.get("http://localhost:8000/csv")
        .then((res)=>{
            // console.log(res.data);
            this.setData(res.data)
        })
        .catch((Error)=>{
            console.log(Error);
        })
    }

    render(){
        return(
            <div>
                <h3>
                    
                </h3>
                <div style={{width:"50vw",marginLeft:"200px",marginRight:"auto",
                paddingTop:"70px"}}>
                    <Bar data={this.state.chartData}/>
                </div>
            </div>
        )
    }
    
}
export default Chart;