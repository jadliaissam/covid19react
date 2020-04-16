import React from 'react'


export let GeneralContext = React.createContext()

export const states = [{
  name: 'Grand Casablanca',
  code: 'GC',
  center: {
    lat: 32,
    long: -7
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Tanger-Tetouan',
  code: 'dGC',
  center: {
    lat: 34,
    long: -5
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Marrakech ',
  code: 'GCs',
  center: {
    lat: 30,
    long: -5
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
}]


export const towns = [{
  name: 'Casablanca',
  code: 'GC',
  center: {
    lat: 31,
    long: -8
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Settat',
  code: 'GC',
  center: {
    lat: 30,
    long: -5
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Berrchid',
  code: 'GC',
  center: {
    lat: 32,
    long: -7
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
}]


export const prefectures = [{
  name: 'Ben Msick',
  code: 'GC',
  center: {
    lat: 30,
    long: -6
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Casa Anfa',
  code: 'GC',
  center: {
    lat: 33,
    long: -5
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'El Oulfa',
  code: 'GC',
  center: {
    lat: 31,
    long: -6
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
}]


export const districts = [{
  name: 'Sidi Othman',
  code: 'GC',
  center: {
    lat: 33,
    long: -7
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Sebata',
  code: 'GC',
  center: {
    lat: 33,
    long: -7
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
},
{
  name: 'Moulay Rachid',
  code: 'GC',
  center: {
    lat: 33,
    long: -7
  },
  confirmed_count: 565,
  excluded: 1000,
  dead_count: 100,
  recoovered_count: 4950
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
    field: 'excluded',
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

export const states_column = all_columns.slice(0, 8)
export const towns_column = all_columns.slice(1, 8)
export const prefectures_column = all_columns.slice(2, 8)
export const districts_column = all_columns.slice(3, 8)

export const data_cases = [{ "excluded": 0, "confirmed": 1, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-02 00:00:00", "created_at": "2020-03-02 00:00:00" }, { "excluded": 0, "confirmed": 1, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-03 00:00:00", "created_at": "2020-03-03 00:00:00" }, { "excluded": 0, "confirmed": 2, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-04 00:00:00", "created_at": "2020-03-04 00:00:00" }, { "excluded": 0, "confirmed": 2, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-05 00:00:00", "created_at": "2020-03-05 00:00:00" }, { "excluded": 0, "confirmed": 2, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-06 00:00:00", "created_at": "2020-03-06 00:00:00" }, { "excluded": 0, "confirmed": 2, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-07 00:00:00", "created_at": "2020-03-07 00:00:00" }, { "excluded": 0, "confirmed": 2, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-08 00:00:00", "created_at": "2020-03-08 00:00:00" }, { "excluded": 0, "confirmed": 3, "recovered": 0, "deaths": 0, "grave": 0, "pub_date": "2020-03-09 00:00:00", "created_at": "2020-03-09 00:00:00" }, { "excluded": 0, "confirmed": 3, "recovered": 0, "deaths": 1, "grave": 0, "pub_date": "2020-03-10 00:00:00", "created_at": "2020-03-10 00:00:00" }, { "excluded": 0, "confirmed": 6, "recovered": 0, "deaths": 1, "grave": 0, "pub_date": "2020-03-11 00:00:00", "created_at": "2020-03-11 00:00:00" }, { "excluded": 0, "confirmed": 6, "recovered": 0, "deaths": 1, "grave": 0, "pub_date": "2020-03-12 00:00:00", "created_at": "2020-03-12 00:00:00" }, { "excluded": 0, "confirmed": 8, "recovered": 1, "deaths": 1, "grave": 0, "pub_date": "2020-03-13 00:00:00", "created_at": "2020-03-13 00:00:00" }, { "excluded": 0, "confirmed": 18, "recovered": 1, "deaths": 1, "grave": 0, "pub_date": "2020-03-14 00:00:00", "created_at": "2020-03-14 00:00:00" }, { "excluded": 0, "confirmed": 28, "recovered": 1, "deaths": 1, "grave": 0, "pub_date": "2020-03-15 00:00:00", "created_at": "2020-03-15 00:00:00" }, { "excluded": 0, "confirmed": 37, "recovered": 1, "deaths": 1, "grave": 0, "pub_date": "2020-03-16 00:00:00", "created_at": "2020-03-16 00:00:00" }, { "excluded": 183, "confirmed": 44, "recovered": 1, "deaths": 2, "grave": 0, "pub_date": "2020-03-17 21:13:39", "created_at": "2020-03-17 21:13:39" }, { "excluded": 263, "confirmed": 54, "recovered": 1, "deaths": 2, "grave": 0, "pub_date": "2020-03-18 10:38:07", "created_at": "2020-03-18 10:38:07" }, { "excluded": 307, "confirmed": 63, "recovered": 2, "deaths": 2, "grave": 0, "pub_date": "2020-03-19 10:34:11", "created_at": "2020-03-19 10:34:11" }, { "excluded": 385, "confirmed": 79, "recovered": 2, "deaths": 3, "grave": 0, "pub_date": "2020-03-20 10:23:03", "created_at": "2020-03-20 10:23:03" }, { "excluded": 441, "confirmed": 96, "recovered": 3, "deaths": 3, "grave": 0, "pub_date": "2020-03-21 01:02:31", "created_at": "2020-03-21 01:02:31" }, { "excluded": 512, "confirmed": 115, "recovered": 3, "deaths": 4, "grave": 0, "pub_date": "2020-03-22 11:04:36", "created_at": "2020-03-22 11:04:36" }, { "excluded": 643, "confirmed": 143, "recovered": 5, "deaths": 4, "grave": 0, "pub_date": "2020-03-23 11:08:14", "created_at": "2020-03-23 11:08:14" }, { "excluded": 685, "confirmed": 170, "recovered": 6, "deaths": 5, "grave": 0, "pub_date": "2020-03-24 18:13:12", "created_at": "2020-03-24 18:13:12" }, { "excluded": 740, "confirmed": 225, "recovered": 7, "deaths": 6, "grave": 0, "pub_date": "2020-03-25 12:27:37", "created_at": "2020-03-25 12:27:37" }, { "excluded": 931, "confirmed": 275, "recovered": 8, "deaths": 10, "grave": 0, "pub_date": "2020-03-26 18:11:07", "created_at": "2020-03-26 18:11:07" }, { "excluded": 931, "confirmed": 333, "recovered": 11, "deaths": 21, "grave": 0, "pub_date": "2020-03-27 18:09:31", "created_at": "2020-03-27 18:09:31" }, { "excluded": 1574, "confirmed": 359, "recovered": 11, "deaths": 24, "grave": 0, "pub_date": "2020-03-28 21:35:04", "created_at": "2020-03-28 09:35:04" }, { "excluded": 1794, "confirmed": 463, "recovered": 13, "deaths": 26, "grave": 0, "pub_date": "2020-03-29 21:00:00", "created_at": "2020-03-29 18:10:00" }, { "excluded": 2195, "confirmed": 534, "recovered": 14, "deaths": 33, "grave": 0, "pub_date": "2020-03-30 21:00:00", "created_at": "2020-03-30 08:35:25" }, { "excluded": 2462, "confirmed": 602, "recovered": 24, "deaths": 36, "grave": 0, "pub_date": "2020-03-31 21:00:00", "created_at": "2020-03-31 09:25:46" }, { "excluded": 2653, "confirmed": 642, "recovered": 26, "deaths": 37, "grave": 18, "pub_date": "2020-04-01 18:00:00", "created_at": "2020-04-01 08:47:46" }, { "excluded": 2815, "confirmed": 691, "recovered": 30, "deaths": 44, "grave": 0, "pub_date": "2020-04-02 18:00:00", "created_at": "2020-04-02 00:03:19" }, { "excluded": 3062, "confirmed": 761, "recovered": 56, "deaths": 47, "grave": 0, "pub_date": "2020-04-03 18:00:00", "created_at": "2020-04-02 21:25:02" }, { "excluded": 3304, "confirmed": 883, "recovered": 65, "deaths": 58, "grave": 0, "pub_date": "2020-04-04 18:00:00", "created_at": "2020-04-03 22:12:53" }, { "excluded": 3589, "confirmed": 990, "recovered": 71, "deaths": 69, "grave": 0, "pub_date": "2020-04-05 18:00:00", "created_at": "2020-04-04 21:28:18" }, { "excluded": 3984, "confirmed": 1120, "recovered": 81, "deaths": 80, "grave": 0, "pub_date": "2020-04-06 18:00:00", "created_at": "2020-04-05 21:22:01" }, { "excluded": 4131, "confirmed": 1184, "recovered": 93, "deaths": 90, "grave": 0, "pub_date": "2020-04-07 18:00:00", "created_at": "2020-04-07 09:23:40" }, { "excluded": 4477, "confirmed": 1275, "recovered": 97, "deaths": 93, "grave": 0, "pub_date": "2020-04-08 18:00:00", "created_at": "2020-04-08 11:56:10" }, { "excluded": 5009, "confirmed": 1374, "recovered": 109, "deaths": 97, "grave": 0, "pub_date": "2020-04-09 18:00:00", "created_at": "2020-04-09 10:42:26" }, { "excluded": 5791, "confirmed": 1448, "recovered": 122, "deaths": 107, "grave": 0, "pub_date": "2020-04-10 18:00:00", "created_at": "2020-04-10 10:17:13" }]


export const data_pred = {
  actual : [{ "excluded": 3984, "confirmed": 1120, "recovered": 81, "deaths": 80, "grave": 0, "pub_date": "2020-04-06 18:00:00", "created_at": "2020-04-05 21:22:01" }, { "excluded": 4131, "confirmed": 1184, "recovered": 93, "deaths": 90, "grave": 0, "pub_date": "2020-04-07 18:00:00", "created_at": "2020-04-07 09:23:40" }, { "excluded": 4477, "confirmed": 1275, "recovered": 97, "deaths": 93, "grave": 0, "pub_date": "2020-04-08 18:00:00", "created_at": "2020-04-08 11:56:10" }, { "excluded": 5009, "confirmed": 1374, "recovered": 109, "deaths": 97, "grave": 0, "pub_date": "2020-04-09 18:00:00", "created_at": "2020-04-09 10:42:26" }, { "excluded": 5791, "confirmed": 1448, "recovered": 122, "deaths": 107, "grave": 0, "pub_date": "2020-04-10 18:00:00", "created_at": "2020-04-10 10:17:13" }],
  predicted : [{ "excluded": 3984, "confirmed": 1120, "recovered": 81, "deaths": 80, "grave": 0, "pub_date": "2020-04-11 18:00:00", "created_at": "2020-04-05 21:22:01" }, { "excluded": 4131, "confirmed": 1184, "recovered": 93, "deaths": 90, "grave": 0, "pub_date": "2020-04-12 18:00:00", "created_at": "2020-04-07 09:23:40" }, { "excluded": 4477, "confirmed": 1275, "recovered": 97, "deaths": 93, "grave": 0, "pub_date": "2020-04-13 18:00:00", "created_at": "2020-04-08 11:56:10" }, { "excluded": 5009, "confirmed": 1374, "recovered": 109, "deaths": 97, "grave": 0, "pub_date": "2020-04-14 18:00:00", "created_at": "2020-04-09 10:42:26" }]
} 
