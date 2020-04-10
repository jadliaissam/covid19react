import React, { createContext } from "react";

export let GeneralContext = createContext();

export const state_ref = React.createRef(null);
export const town_ref = React.createRef(null);
export const prefecture_ref = React.createRef(null);
export const district_ref = React.createRef(null);

const all_columns = [
  {
    name: "Région",
    selector: "case_state"
  },
  {
    name: "Prefecture",
    selector: "case_prefecture"
  },
  {
    name: "Ville",
    selector: "case_town"
  },

  {
    name: "Quartier",
    selector: "case_district"
  },
  {
    name: "Etat",
    selector: "state"
  },
  {
    name: "Date",
    selector: "case_date"
  }
];

export const states_column = all_columns.slice(0, 9);
export const prefectures_column = all_columns.slice(1, 9);
export const towns_column = all_columns.slice(2, 8);
export const districts_column = all_columns.slice(3, 8);


export function getCenter(data){
    if(!data || data.length === 0 ) return [33, -7]
    var num_coords = data.length;
    var X = 0.0;
    var Y = 0.0;
    var Z = 0.0;

    for(let i=0; i<num_coords; i++){
        var lat = data[i].lat * Math.PI / 180;
        var lon = Number(data[i].long) * Math.PI / 180;
        var a = Math.cos(lat) * Math.cos(lon);
        var b = Math.cos(lat) * Math.sin(lon);
        var c = Math.sin(lat);

        X += a;
        Y += b;
        Z += c;
    }

    X /= num_coords;
    Y /= num_coords;
    Z /= num_coords;

    lon = Math.atan2(Y, X);
    var hyp = Math.sqrt(X * X + Y * Y);
    lat = Math.atan2(Z, hyp);

    var finalLat = lat * 180 / Math.PI;
    var finalLng =  lon * 180 / Math.PI; 
    
    return [finalLat, finalLng]
}
