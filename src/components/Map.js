import React, { useContext, useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import { GeneralContext, getCenter, ThemeContext, LangContext } from "./utils";
import nomap from "../assets/globe.gif"
import Card from './Card'
import '../index.css'
import { getStrings, colors } from "../assets/labels";

function Map() {
  const { context, setContext } = useContext(GeneralContext);
  const { langcon } = useContext(LangContext);
  const { themcon } = useContext(ThemeContext);
  const [show, setShow] = useState(true)
  const [center, setCenter] = useState([47, -10.5])
  let strings = getStrings(langcon)

  let marks = context.markers.filter(e => e.center).map(elt => {
    return {
      location: [elt.center.lat, elt.center.long],
      addHandler: "mouseover",
      infoboxOption: {
        description: `<span style="color : ${colors['primary']}">${strings['confirmed_count']}:${elt.confirmed_count}</span>, 
        <span style="color : ${colors['warning']}">${strings['excluded_count']}:${elt.excluded_count}</span>,
        <span style="color : ${colors['danger']}">${strings['dead_count']}:${elt.dead_count}</span>,
        <span style="color : ${colors['success']}">${strings['recovered_count']}:${elt.recovered_count}</span>,`,
      },
      pushPinOption: { title: langcon ? elt.name : elt.label, text: "" + elt.confirmed_count, color: 'black' }
    };
  });

  const noData = (
    <div className="d-flex flex-1 justify-content-center flex-column align-items-center" style={{ width: "100%" }}>
      <img src={nomap} alt="No Data" style={{ filter: themcon ? 'invert(100%)' : 'invert(0%)' }} />
      <p className="m-4">{strings['label_no_data']}</p>
    </div>
  );

  useEffect(()=>{
    setShow(false)
    setCenter(getCenter(marks))
    setShow(true)
  }, [])

  return (
    <Card label={strings['label_map']} styleB={{ minHeight: 600, height: 600 }}>
      <div
        className="d-flex flex-1 justify-content-center flex-column align-items-center"
        style={{ minheight: 350, width: "100%", height: '100%' }} >
        {
          context.markers.length === 0 ? noData :  show ? (
            <ReactBingmaps
              bingmapKey="ApWTHGjkpi0zS43VC__qPzzoSlEA-hLb6Ci0y1a6ehEy37hMH4WwMvyiBcmdksdH"
              center={center}
              zoom={5} //{context.zoom} 
              infoboxesWithPushPins={marks}
              mapTypeId={themcon ? 'grayscale' : 'canvasLight'}
              style={{ flex: 1, minHeight: 300, minWidth: 300 }}
            />
          ) : 'Loading' }
      </div>

    </Card>
  );
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
      header: {
        backgroundColor: "#232932",
        color: "white",
      },
      card: {
        borderColor: '#232932',
      }
    },

    light: {
      backgroundColor: 'white',
      color: 'black',
      header: {
        backgroundColor: "black",
      },
      card: {
        borderColor: 'black',
      }
    }
  }
}

export default Map;
