import React, { useState, useEffect } from "react";
import { GeneralContext } from "./utils";
import Filter from "./Filter";
import Counter from "./Counter";
import Map from "./Map";
import { getStates, getCases } from "../api/api";
import { state_ref, town_ref, prefecture_ref, district_ref } from "./utils";
import Table from "./Table";
import Graph from "./Graph";
import { strings, colors } from "../assets/labels";
import logo from '../assets/ic_launcher.png'
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import Card from "./Card";

const styles = {
  dark: {
    backgroundColor: '#393939',
    color: 'white'

  },

  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

function App() {
  const [context, setContex] = useState({ cases: [], markers: [], zoom: 5, entity: -1, dark: localStorage.dark === 'true'});

  useEffect(() => {
    getStates().then(s => getCases().then(cases => setContex({ ...context, cases, states: s, markers: s })));
  }, []);

  function count(places, flag) {
    return places.map(e => e[flag]).reduce((sum, current) => sum + current, 0);
  }

  function contextUpdater(val) { setContex({ ...context, ...val }) }

  const style = context.dark ? styles.dark : styles.light

  return (
    <GeneralContext.Provider value={{ context: context, setContext: contextUpdater }}>
      <div className="d-flex container-fluid 100vh" style={style}>
        <div className="container mt-4" style={style}>
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-around align-items-center">
              <div className="d-flex flex-1 col-xs-12 flex-row theme-switch-wrapper">
                <img alt="Night Mode" src="https://img.utdstc.com/icons/dark-mode-android.png:225" width="25" height="25" />
                <label className="theme-switch m-2" for="checkbox">
                  <input checked={context.dark} type="checkbox" id="checkbox" onClick={() => {
                    localStorage.setItem('dark', !context.dark )
                    setContex({ ...context, dark: !context.dark })
                    }} />
                  <div className="slider round"></div>
                </label>
                <img alt="Light Mode" src="https://www.pngrepo.com/png/83726/170/sun.png" width="25" height="25" />
              </div>
              <div>
              </div>
              <div className="d-flex flex-1">
                <div className="d-flex col-xs-12 flex-row theme-switch-wrapper">
                  <img className="m-4" src="https://images.vexels.com/media/users/3/164028/isolated/preview/c1606dcf82a8fad6d1fa8711c8a1b8ef-france-flag-language-icon-circle-by-vexels.png" alt="logo" width="30" height="30" />
                  <label className="theme-switch m-2" for="checkbox2">
                    <input  type="checkbox" id="checkbox2" />
                    <div className="slider round" style={{backgroundColoe : 'dodgerblue'}}></div>
                  </label>
                  <img src="https://cdn.countryflags.com/thumbs/morocco/flag-round-250.png" className="m-4" alt="logo" width="30" height="30" />

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex mt-3  text-center flex-column" style={{ border: '1px solid black' }}>
              <span className="p-3" style={{ fontSize: "2rem" }}>{strings['title']}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-row flex-wrap justify-content-around mt-4 mb-4">
              <div className="col-md-3 col-xs-12 mt-3">
                <Counter
                  label={strings['suspected_count']}
                  value={count(context.markers, "suspected_count")}
                  color={colors["warning"]}
                />
              </div>
              <div className="col-md-3 col-xs-12 mt-3">
                <Counter
                  label={strings['confirmed_count']}
                  value={count(context.markers, "confirmed_count")}
                  color={colors["primary"]}
                />
              </div>
              <div className="col-md-3 col-xs-10 mt-3">

                <Counter
                  label={strings['dead_count']}
                  value={count(context.markers, "dead_count")}
                  color={colors["danger"]}
                />
              </div>
              <div className="col-md-3 col-xs-10 mt-3">
                <Counter
                  label={strings["recovered_count"]}
                  value={count(context.markers, "recovered_count")}
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
              <Table />
            </div>
          </div>
          <div className="row">
          <div className="col-12 d-flex mt-5 mb-5  text-center flex-column" style={{ border: '1px solid black' }}>
              <span className="p-3" style={{ fontSize: "2rem" }}>{strings['title_prediction']}</span>
            </div>
          <div className="col-12">
              <Card label='التوقعات بخصوص الايام المقبلة' styled={{height : 350}} />
            </div>
         </div>  
        </div>
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
