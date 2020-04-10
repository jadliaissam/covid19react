export function getStates() {
    return fetch("http://localhost:8000/api/states")
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getPrefectures(state) {
    return fetch(
      "http://localhost:8000/api/prefectures?prefecture_state__pk=" + state
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getTowns(prov) {
    return fetch("http://localhost:8000/api/towns?town_prefecture__pk=" + prov)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getDistricts(town) {
    return fetch(
      "http://localhost:8000/api/districts?district_town__pk=" + town
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }

  export function getDistrict(dis) {
    return fetch(
      "http://localhost:8000/api/districts?pk=" + dis
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  
  export function getCases(params) {
    if (!params)
      return fetch(`http://localhost:8000/api/cases`).then(res => res.json());
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
  