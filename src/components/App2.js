import React, { useState, useEffect } from "react";
import { GeneralContext, LangContext, ThemeContext } from "./utils";
import Filter from "./Filter";
import Counter from "./Counter";
import Map from "./Map";
import { getStates, getCases, getStats } from "../api/api";
import { state_ref, town_ref, prefecture_ref, district_ref } from "./utils";
import Graph from "./Graph";
import { colors, getStrings } from "../assets/labels";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import Card from "./Card";
import Switch from './Switch'
import EvolutionGraph from "./EvolutionGraph";
import PredictionGraph from "./PredictionGraph";

const stats = { confirmed_count: 0, excluded_count: 0, dead_count: 0, recovered_count: 0 }

function App() {
  const [dark, setDark] = useState(localStorage.dark === 'true')
  const [ar, setAr] = useState(localStorage.ar === 'true')
  const [context, setContex] = useState({ stats, cases: [], markers: [], zoom: 5, entity: -1, recenter: false });
  const strings = getStrings(ar)
  const style = dark ? styles.dark : styles.light

  useEffect(() => {
    getStats().then(stats => getStates().then(s => getCases().then(cases => setContex({ ...context, stats, cases, states: s, markers: s }))));
  }, []);

  function count(flag) {
    return context.stats[flag];
  }

  return (
    <ThemeContext.Provider value={{ themcon: dark, setThemCon: (v) => setDark(v) }}>
      <LangContext.Provider value={{ langcon: ar, setLangCon: (v) => setAr(v) }}>
        <GeneralContext.Provider value={{ context: context, setContext: (val) => setContex({ ...context, ...val }) }}>
          <div className="d-flex 100vh" style={style}>
            <div className="container mt-4" style={style}>
              <div>
                <div className="col-12 d-flex flex-wrap flex-row justify-content-between align-items-center">
                  <Switch
                    img1={{ src: 'https://img.utdstc.com/icons/dark-mode-android.png:225', alt: "Dark Mode" }}
                    img2={{ src: 'https://www.pngrepo.com/png/83726/170/sun.png', alt: "Light Mode" }}
                    val='dark'
                  />
                  <Switch
                    img1={{ src: 'https://cdn.countryflags.com/thumbs/morocco/flag-round-250.png', alt: "Arabe" }}
                    img2={{ src: 'https://images.vexels.com/media/users/3/164028/isolated/preview/c1606dcf82a8fad6d1fa8711c8a1b8ef-france-flag-language-icon-circle-by-vexels.png', alt: "Fran" }}
                    val='ar'
                  />
                </div>
              </div>
              <div dir={ar ? "rtl" : "ltr"}>
                <div className="row p-3">
                  <div className="col-12 d-flex mt-3  text-center flex-column" style={{ border: '1px solid', borderRadius: 10, borderColor: dark ? 'white' : 'grey' }}>
                    <span className="p-3" style={{ fontSize: "2rem" }}>{strings['title']}</span>
                  </div>
                </div>
                <div className="row m-2 d-flex justify-content-center align-items-center ">
                  <div className="stage">
                    <a href="#predictions" className="btn p-2 pr-4 pl-4 box bounce-7" style={dark ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: "goldenrod", color: 'white' }}>
                      {strings['label_prediction']}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex flex-row flex-wrap justify-content-around mt-4 mb-4 p-0">
                    <div className="col-md-3 col-xs-12 mt-3">
                      <Counter
                        label={strings['excluded_count']}
                        value={count("excluded_count")}
                        color={colors["warning"]}
                      />
                    </div>
                    <div className="col-md-3 col-xs-12 mt-3">
                      <Counter
                        label={strings['confirmed_count']}
                        value={count("confirmed_count")}
                        color={colors["primary"]}
                      />
                    </div>
                    <div className="col-md-3 col-xs-10 mt-3">
                      <Counter
                        label={strings['dead_count']}
                        value={count("dead_count")}
                        color={colors["danger"]}
                      />
                    </div>
                    <div className="col-md-3 col-xs-10 mt-3">
                      <Counter
                        label={strings["recovered_count"]}
                        value={count("recovered_count")}
                        color={colors["success"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <Filter refs={[state_ref, town_ref, prefecture_ref, district_ref]} />
                    <Graph />
                  </div>
                  <div className="col-xs-12 col-md-6 d-flex flex-column">
                    <Map />
                    <EvolutionGraph height={230} />
                  </div>
                </div>
                <div className="row p-3">
                  <div className="col-12 d-flex mt-4  text-center flex-column" style={{ border: '1px solid', borderRadius: 10, borderColor: dark ? 'white' : 'grey' }}>
                    <span className="p-3" style={{ fontSize: "2rem" }}>{strings['title_prediction']}</span>
                  </div>
                  <div id="predictions" className="col-12">
                    <PredictionGraph height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GeneralContext.Provider >
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}


const styles = {
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


export default App;
