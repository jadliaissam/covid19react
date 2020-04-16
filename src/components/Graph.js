import React, { useState, useContext, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ThemeContext, LangContext, GeneralContext } from "./utils";
import { colors, getStrings } from "../assets/labels";
import Card from './Card'
export default function Graph() {
  const { themcon } = useContext(ThemeContext);
  const { langcon } = useContext(LangContext);
  const { context } = useContext(GeneralContext);
  const strings = getStrings(langcon)
  const mode = themcon ? 'dark' : 'light'
  const [state, setState] = useState({
    options: {
      chart: { id: "apexchart-example", stacked: true, fontFamily: 'El Messiri' },
      xaxis: { categories: [] } },
    series: []
  });

  useEffect(() => {
    const names = langcon ? context.markers.map(e => e.name) :  context.markers.map(e => e.label);
    const confirmed_values = context.markers.map(e => e.confirmed_count);
    setState({
      options: {
        colors: [colors['warning'], colors['primary'], colors['danger'], colors['success']],
        theme: { mode } ,
        plotOptions: { bar: { horizontal: false, stacked: true } },
        legend: { markers : {offsetY : 15}, position: 'top', horizontalAlign: 'center', offsetY : 10, itemMargin : { vertical : 10 }},
        chart: { id: "apexchart-example", fontFamily: 'El Messiri', background: themcon ? 'black' : 'white' },
        xaxis: { categories: names,
          labels: { rotate: langcon ? 90 : -90 }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 500
              },
              labels: {
                rotate: 90
              }
            }
          }],
      },
      series: [
        {
          name: strings['confirmed_count'],
          data: confirmed_values
        },
      ]
    });
  }, [context.markers, themcon, langcon]);

  return (
    <Card label={strings['label_graph']} styleB={{ minHeight: 550, maxHeight: 600 }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={500}
        style={{ height: '100%', width: '90%' }}
      />
    </Card>
  );
}