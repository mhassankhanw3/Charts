import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Charts() {
  const [state, setstate] = useState();
  useEffect(() => {
    setstate({
      //   series: [44, 55, 41, 17, 15],
      //   options: {
      //     chart: {
      //       type: "donut",
      //     },
      //     responsive: [
      //       {
      //         breakpoint: 480,
      //         options: {
      //           chart: {
      //             width: 200,
      //           },
      //           legend: {
      //             position: "bottom",
      //           },
      //         },
      //       },
      //     ],
      //   },

      series: [75],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Percent"],
      },

      //   series: [
      //     {
      //       name: "High - 2013",
      //       data: [28, 29, 33, 36, 32, 32, 33],
      //     },
      //     {
      //       name: "Low - 2013",
      //       data: [12, 11, 14, 18, 17, 13, 13],
      //     },
      //   ],
      //   options: {
      //     chart: {
      //       height: 350,
      //       type: "bubble",
      //       dropShadow: {
      //         enabled: false,
      //         color: "#000",
      //         top: 18,
      //         left: 7,
      //         blur: 10,
      //         opacity: 0.2,
      //       },
      //       toolbar: {
      //         show: false,
      //       },
      //     },
      //     colors: ["#dc2626", "#34d399"],
      //     dataLabels: {
      //       enabled: true,
      //     },
      //     stroke: {
      //       curve: "smooth",
      //     },
      //     title: {
      //       text: "Average High & Low Temperature",
      //       align: "left",
      //     },
      //     grid: {
      //       borderColor: "#e7e7e7",
      //       row: {
      //         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //         opacity: 0.5,
      //       },
      //     },
      //     markers: {
      //       size: 1,
      //     },
      //     xaxis: {
      //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      //       title: {
      //         text: "Month",
      //       },
      //     },
      //     yaxis: {
      //       title: {
      //         text: "Temperature",
      //       },
      //       min: 5,
      //       max: 40,
      //     },
      //     legend: {
      //       position: "top",
      //       horizontalAlign: "right",
      //       floating: true,
      //       offsetY: -25,
      //       offsetX: -5,
      //     },
      //   },
    });
  }, []);

  useEffect(() => {
    console.log(state, "state");
  }, [state]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state?.options}
          series={state?.series}
          type="radialBar"
          width={"100%"}
          height={350}
        />
      </div>
      {/* <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height="300"
            /> */}
      {/* <Chart
        options={state?.options}
        series={state?.series}
        type="bar"
        height="500"
        width="100%"
      /> */}
    </div>
  );
}
