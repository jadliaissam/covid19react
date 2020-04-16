const host = "https://covid19platform.herokuapp.com"


export function getStats(entity){
  return fetch(`${host}/api/serve`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
}


export function getStates() {
    return fetch(`${host}/api/states`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getPrefectures(state) {
    return fetch(
      `${host}/api/prefectures?prefecture_state__pk=${state}`
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getTowns(prov) {
    return fetch(`${host}/api/towns?town_prefecture__pk=${prov}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getDistricts(town) {
    return fetch(
      `${host}/api/districts?district_town__pk=${town}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }

  export function getDistrict(dis) {
    return fetch(
      `${host}/api/districts?pk=${dis}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getCases(params) {
    if (!params)
      return fetch(`${host}/api/cases`).then(res => res.json());
    const { state, prefecture, town, district } = params;
    let query = "/?";
    if (state !== "0") query += `case_state__code=${state}`;
    if (prefecture !== "0") query += `&case_prefecture__code=${prefecture}`;
    if (town !== "0") query += `&case_town__code=${town}`;
    if (district !== "0") query += `&case_district__code=${town}`;
    return fetch(`http://localhost:8000/api/cases${query}`).then(res =>
      res.json()
    );
  }

  export function getAllSummary(){
    return fetch(`${host}/api/summary`).then(res => res.json());
  }
  

  export function getAllStateSummary(){
    return fetch(`${host}/api/statesummary`).then(res => res.json());
  }

  export function getPredictions(){
    return fetch(`${host}/api/predictions`).then(res => res.json());
  }