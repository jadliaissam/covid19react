import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllSummary, getPredictions } from "../api/api";
import { colors, getStrings } from "../assets/labels";
import '../index.css';
import { LangContext, ThemeContext } from "./utils";
import Card from "./Card";
import ua from "apexcharts/dist/locales/ua.json"
import fr from "apexcharts/dist/locales/fr.json"


export default function PredictionGraph({ height }) {
    const [state, setState] = useState({ pred: { dates: [] }, series: { a: [], b: [] }, names: [] })
    const { langcon } = useContext(LangContext)
    const { themcon } = useContext(ThemeContext)
    const strings = getStrings(langcon)
    const background = themcon ? 'black' : 'white'
    const mode = themcon ? 'dark' : 'light'
    const style = themcon ? styles.modes.dark : styles.modes.light
    const charLang = langcon ? ua : fr

    useEffect(() => {
        getAllSummary().then(d => {
            getPredictions().then(pred => {
                const datebefore = moment().subtract(4, 'd')
                setState({
                    pred,
                    series: {
                        a: [
                            {
                                name: strings['pred_recovered_count'],
                                data: [...d.filter(e => datebefore.isBefore(e.pub_date)).map(e => e.recovered_count), ...pred.recovered]
                            },
                            {
                                name: strings['pred_dead_count'],
                                data: [...d.filter(e => datebefore.isBefore(e.pub_date)).map(e => e.dead_count), ...pred.dead]
                            }
                        ],
                        b: [
                            {
                                name: strings['pred_excluded_count'],
                                data: [...d.filter(e => datebefore.isBefore(e.pub_date)).map(e => e.excluded_count), ...pred.excluded]
                            },
                            {
                                name: strings['pred_confirmed_count'],
                                data: [...d.filter(e => datebefore.isBefore(e.pub_date)).map(e => e.confirmed_count), ...pred.confirmed]
                            }
                        ],
                    },
                    names: [...d.map(e => e.pub_date).filter(e => datebefore.isBefore(e)), ...pred.dates]
                })
            })
        })
    }, [langcon])

    function formatDate(d) {
        if (!d) return ""
        const tab = new Date(d).toLocaleDateString().split('/')
        return `${tab[1]}/${tab[0]}/${tab[2]}`
    }

    const cls = "d-flex flex-column  justify-content-around p-2 align-items-around col-md-4 col-xs-12"

    return (
        <Card label={strings['graph_prediction']} stylec={{ minHeight: 350 }}>
            <div className="d-flex flex-column w-100 p-2">
                <div className="d-flex w-100 text-center w-100 m-2">
                    <section className="d-flex flex-column  w-100">
                        <h4 className="h3 mb-3">{strings['label_prediction']}</h4>
                        <h5>{strings['label_duration_prediction']}</h5>
                                <span>{strings['label_start_prediction']}</span>
                                <p>{formatDate(state.pred.dates[0])}</p>
                                <span>{strings['label_end_prediction']}</span>
                                <p>{formatDate(state.pred.dates[state.pred.dates.length - 1])}</p>
                        <div className="d-flex flex-row flex-wrap  w-100">
                            <div className={cls} style={style.jumbotron}>
                                <h5>{strings['label_method_prediction']}</h5>
                                <span>{strings['value_method_prediction']}</span>
                            </div>
                            <div className={cls} style={style.jumbotron}>
                                <h5>{strings['label_soft_prediction']}</h5>
                                <span>{strings['value_soft_prediction']}</span>
                            </div>
                            <div className={cls} style={style.jumbotron}>
                                <h5>{strings['label_credits_prediction']}</h5>
                                <span>{strings['value_credits_prediction']}</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-xs-12 col-md-12">
                    <div id="chart-line">
                        <ReactApexChart options={{
                            colors: [colors['success'], colors['danger']],
                            grid: { show: themcon ? false : true },
                            stroke: { curve: 'smooth', width: 3 },
                            dataLabels: { enabled: true },
                            theme: { mode },
                            legend: { markers: { offsetY: 15 }, position: 'top', horizontalAlign: 'center', offsetY: 10, itemMargin: { vertical: 10 } },
                            chart: { height: height, fontFamily: 'El Messiri', background },
                            xaxis: { type: 'datetime', categories: state.names, tickAmount: 6 },
                            yaxis: { labels: { minWidth: 40 } }
                        }}
                            series={state.series.a}
                            type="line" height={height} />
                        <ReactApexChart options={{
                            colors: [colors['primary'], colors['warning']],
                            grid: { show: themcon ? false : true },
                            stroke: { curve: 'smooth', width: 3 },
                            dataLabels: { enabled: true },
                            theme: { mode },
                            legend: { markers: { offsetY: 15 }, position: 'top', horizontalAlign: 'center', offsetY: 10, itemMargin: { vertical: 10 } },
                            chart: { height: height, fontFamily: 'El Messiri', background, },
                            xaxis: { type: 'datetime', categories: state.names, tickAmount: 6 },
                            yaxis: { labels: { minWidth: 40 } }
                        }}
                            series={state.series.b}
                            type="line" height={height} />
                    </div>
                </div>
            </div>
        </Card>
    )
}


const styles = {
    modes: {
        dark: {
            backgroundColor: 'black',
            color: 'white',
            jumbotron: {
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid grey'
            },

        },

        light: {
            backgroundColor: 'white',
            color: 'black',
            jumbotron: {
                backgroundColor: '#E8E8E8',
                color: 'black',
                borderColor: '1px solid white'
            },
        }
    }
}