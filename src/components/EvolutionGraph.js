import React, { useContext, useState, useEffect } from 'react'
import { getStrings, colors } from '../assets/labels'
import { GeneralContext, ThemeContext, LangContext } from './utils'
import Card from './Card'
import ReactApexChart from 'react-apexcharts'
import { getAllSummary } from '../api/api'

export default function EvolutionGraph({ height, xlabels, series }) {
    const { context, setContext } = useContext(GeneralContext)
    const { themcon } = useContext(ThemeContext)
    const { langcon } = useContext(LangContext)
    const [state, setState] = useState({ series: { a: [], b: [] }, names: [] })
    const strings = getStrings(langcon)

    const mode = themcon ? 'dark' : 'light'
    const background = themcon ? 'black' : 'white'

    useEffect(() => {
        getAllSummary().then(d => {
            setState({
                series: {
                    a: [{ name: strings['recovered_count'], data: d.map(e => e.recovered_count) },
                    { name: strings['dead_count'], data: d.map(e => e.dead_count) }],
                    b: [
                        { name: strings['confirmed_count'], data: d.map(e => e.confirmed_count) },
                        { name: strings['excluded_count'], data: d.map(e => e.excluded_count) }
                    ]
                },
                names: d.map(e => e.pub_date)
            })
        })
    }, [])

    return (
        <Card label={strings['label_evolution']} stylec={{ height: height }}>
            <div id="chart-line">
                <ReactApexChart options={{
                    colors: [colors['danger'], colors['success']],
                    theme: { mode },
                    legend: { markers: { offsetY: 15 }, position: 'top', horizontalAlign: 'center', offsetY: 10, itemMargin: { vertical: 10 } },
                    chart: {
                        id: 'fb', group: 'social', type: 'line',
                        height: height, fontFamily: 'El Messiri', background
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: state.names
                    },
                    colors: [colors['success'], colors["danger"]],
                    yaxis: { labels: { minWidth: 40 } }
                }}
                    series={state.series.a}
                    type="line" height={height} />
            </div>
            <div id="chart-line">
                <ReactApexChart options={{
                    theme: { mode },
                    legend: { markers: { offsetY: -15 }, horizontalAlign: 'center', offsetY: 10, itemMargin: { vertical: 10 } },
                    chart: {
                        id: 'tw', group: 'social2', type: 'line', height: height,
                        fontFamily: 'El Messiri', background
                    },
                    colors: [colors['primary'], colors['warning']],
                    xaxis: { type: 'datetime', categories: state.names },
                    yaxis: { labels: { minWidth: 40 } }
                }}
                    series={state.series.b}
                    type="line" height={height} />
            </div>
        </Card>
    )
}