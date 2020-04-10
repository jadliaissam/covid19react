import React, { useState, useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import { GeneralContext } from "./utils";
import { strings, colors } from "../assets/labels";
import Card from './Card'
export default function Graph() {
  const { context } = useContext(GeneralContext);
  const [state, setState] = useState({
    options: {
      theme: { mode: context.dark ? 'dark' : 'light' },
      chart: {
        id: "apexchart-example",
        stacked: true,
        fontFamily : 'El Messiri'
      },
      xaxis: { categories: [] }
    },
    series: []
  });

  useEffect(() => {
    const names = context.markers.map(e => e.name);
    const confirmed_values = context.markers.map(e => e.confirmed_count);
    const suspected_values = context.markers.map(e => e.suspected_count);
    const recovered_values = context.markers.map(e => e.recovered_count);
    const dead_values = context.markers.map(e => e.dead_count);
    setState({
      options: {
        colors: [colors['warning'], colors['primary'], colors['danger'], colors['success']],
        theme: { mode: context.dark ? 'dark' : 'light' },
        plotOptions: {
          bar: {
            horizontal: false,
            stacked: true,
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
        },
        chart: {
          id: "apexchart-example",
          fontFamily : 'El Messiri',
          background: context.dark ? 'black' : 'white'
        },
        responsive: [
          {
            breakpoint: 4096,
            options: {
              chart: {
                width: '100%',
                height: '100%'
              },
              labels: {
                rotate: 90
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
                height: 500
              },
              labels: {
                rotate: 90
              }
            }
          }],
        xaxis: {
          categories: names,
          labels: {
            rotate: 90
          }
        }
      },
      series: [
        {
          name: strings['confirmed_count'],
          data: confirmed_values
        },
        {
          name: strings['suspected_count'],
          data: suspected_values
        },
        {
          name: strings['dead_count'],
          data: dead_values
        },
        {
          name: strings['recovered_count'],
          data: recovered_values
        }
      ]
    });
  }, [context.markers, context.dark]);

  return (
    <Card label={strings['label_graph']} styleB={{minHeight:500}}>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        style={{ height: '100%', width: '100%'}}
      />
    </Card>
  );
}