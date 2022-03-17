import Plot from 'react-plotly.js';


function StatsPlot(props) {

   const percents = props.y.map((item) => {
       return item * 100
   })
    const data = [
        {
            x: props.x,
            y: percents,
            type: 'bar',
            width: .7,
            hovertemplate: "%{x}: %{y}%<extra></extra>", 
            marker: {color: ["#0275d8", "#5cb85c", "#5bc0de", "#0275d8", "#5cb85c", "#5bc0de","#0275d8", "#5cb85c", "#5bc0de","#0275d8" ]},
        }
      ]

    return (
        <Plot 
            data={data} 
            layout={{
                autosize: true, 
                title: {
                    text: 'Percent Correct',
                    font: {
                        family: 'Helvetica Neue',
                        size: 26,
                        color: '#262626',
                        }},
                xaxis: {showgrid:false},
                // yaxis: {showgrid:false, tick0:0, dtick:10, nticks:10},
                yaxis: {
                    showgrid:false, 
                    tickvals: [10,20,30,40,50,60,70,80,90,100]
                },
                margin: {pad:10}
            }}
            useResizeHandler
            className="stats-plot"
        />
    )
  }

  export default StatsPlot