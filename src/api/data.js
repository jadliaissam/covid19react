import React from 'react'


export let GeneralContext = React.createContext()

export const states = [{
    name : 'Grand Casablanca',
    code : 'GC',
    center : {
        lat : 32,
        long : -7
    },
    confirmed_count : 565,
    suspected_count : 1000,
    dead_count : 100,
    recoovered_count : 4950
},
{
    name : 'Tanger-Tetouan',
    code : 'dGC',
    center : {
        lat : 34,
        long : -5
    },
    confirmed_count : 565,
    suspected_count : 1000,
    dead_count : 100,
    recoovered_count : 4950
},
{
    name : 'Marrakech ',
    code : 'GCs',
    center : {
        lat : 30,
        long : -5
    },
    confirmed_count : 565,
    suspected_count : 1000,
    dead_count : 100,
    recoovered_count : 4950
}]


export const towns = [{
  name : 'Casablanca',
  code : 'GC',
  center : {
      lat : 31,
      long : -8
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'Settat',
  code : 'GC',
  center : {
      lat : 30,
      long : -5
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'Berrchid',
  code : 'GC',
  center : {
      lat : 32,
      long : -7
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
}]


export const prefectures = [{
  name : 'Ben Msick',
  code : 'GC',
  center : {
      lat : 30,
      long : -6
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'Casa Anfa',
  code : 'GC',
  center : {
      lat : 33,
      long : -5
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'El Oulfa',
  code : 'GC',
  center : {
     lat : 31,
      long : -6
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
}]


export const districts = [{
  name : 'Sidi Othman',
  code : 'GC',
  center : {
      lat : 33,
      long : -7
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'Sebata',
  code : 'GC',
  center : {
      lat : 33,
      long : -7
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
},
{
  name : 'Moulay Rachid',
  code : 'GC',
  center : {
      lat : 33,
      long : -7
  },
  confirmed_count : 565,
  suspected_count : 1000,
  dead_count : 100,
  recoovered_count : 4950
}]

const all_columns = [
    {
      label: 'Région',
      field: 'state',
    },
    {
      label: 'Ville',
      field: 'town',
    },
    {
      label: 'Prefecture',
      field: 'town',
    },
    {
      label: 'Quartier',
      field: 'town',
    },
    {
      label: '# Cas Suspects ',
      field: 'suspected_count',
    },
    {
      label: '# Cas Confirmés ',
      field: 'confirmed_count',
    },
    {
      label: '# Cas Décédés ',
      field: 'dead_count',
    },
    {
      label: '# Cas guéris ',
      field: 'recovered_count',
    }
  ]
  
 export  const states_column = all_columns.slice(0,8)
  export const towns_column = all_columns.slice(1,8)
  export const prefectures_column = all_columns.slice(2,8)
  export const districts_column = all_columns.slice(3,8)
