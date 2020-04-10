import React, { useContext } from "react";
import SelectBox from "./SelectBox";
import { types } from "./Constantes";
import { GeneralContext } from "./utils";
import { getStates, getTowns, getPrefectures, getDistricts, getCases, getDistrict } from "../api/api";
import { strings } from "../assets/labels";
import Card from './Card'

function Filter({ refs }) {
    const { context, setContext } = useContext(GeneralContext);
    const { states, prefectures, towns, districts } = context;
    const [state_ref, prefecture_ref, town_ref, district_ref] = refs;

    const style = context.dark ? styles.modes.dark : styles.modes.light

    function changeHandler(value, entityCode) {
        getCases({
            state: state_ref.current.value, prefecture: prefecture_ref.current.value,
            town: town_ref.current.value, district: district_ref.current.value
        }).then(c => {
            switch (entityCode) {
                case types.STATE:
                    if (value === "0")
                        getStates().then(t => setContext({ zoom: 6, entity: -1, states: t, prefectures: [], towns: [], districts: [], markers: t, cases: c }));
                    else
                        getPrefectures(value).then(t => setContext({ zoom: 8, entity: types.STATE, prefectures: t, towns: [], districts: [], markers: t, cases: c }));
                    break;
                case types.PREFECTURE:
                    if (value === "0")
                        getPrefectures(state_ref.current.value).then(t => setContext({ zoom: 8, entity: types.STATE, prefectures: t, towns: [], districts: [], markers: t, cases: c }));
                    else
                        getTowns(value).then(t => setContext({ zoom: 9, entity: types.PREFECTURE, towns: t, districts: [], markers: t, cases: c }));
                    break;
                case types.TOWN:
                    if (value === "0")
                        getTowns(prefecture_ref.current.value).then(t => setContext({ zoom: 10, entity: types.PREFECTURE, towns: t, districts: [], markers: t, cases: c }));
                    else
                        getDistricts(value).then(t => setContext({ zoom: 11, entity: types.TOWN, districts: t, markers: t, cases: c }));
                    break;
                case types.DISTRICT:
                    if (value === "0")
                        getDistricts(town_ref.current.value).then(t => setContext({ zoom: 10, entity: types.TOWN, districts: t, markers: t, cases: c }));
                    else
                        getDistrict(value).then(t =>
                            setContext({ zoom: 13, entity: types.DISTRICT, markers: t, cases: c }));
                    break;
                default:
                    break;
            }
        });
    }

    return (
        <Card  label={strings['label_filter']}>
              <SelectBox
                    data={states}
                    label={strings['select_state']}
                    defaultVal={strings['all_states']}
                    entityCode={types.STATE}
                    changeHandler={changeHandler}
                    refer={state_ref}
                />

                <SelectBox
                    data={prefectures}
                    label={strings['select_prefecture']}
                    defaultVal={strings['all_prefectures']}
                    entityCode={types.PREFECTURE}
                    changeHandler={changeHandler}
                    refer={prefecture_ref}
                />

                <SelectBox
                    data={towns}
                    label={strings['select_town']}
                    defaultVal={strings['all_towns']}
                    entityCode={types.TOWN}
                    changeHandler={changeHandler}
                    refer={town_ref}
                />

                <SelectBox
                    data={districts}
                    label={strings["select_district"]}
                    defaultVal={strings['all_districts']}
                    entityCode={types.DISTRICT}
                    changeHandler={changeHandler}
                    refer={district_ref}
                />
            </Card>
    )
}

const styles = {
    card: {
        borderWidth: 3,
        borderRadius: 5,
        margin: 10,
        height: 350,
        minWidth: 370
    },
    cardHeader: {
        color: "white",
        textAlign: 'initial'
    },
    modes: {
        dark: {
            backgroundColor: 'black',
            color: 'white',
            header : {
                backgroundColor: "#232932",
                color: "white",
            },
            card : {
                borderColor: '#232932',
           }
        },

        light: {
            backgroundColor: 'white',
            color: 'black',
            header : {
                backgroundColor: "black",
            },
            card : {
                borderColor: 'black',
           }
        }
    }
}

export default Filter;
