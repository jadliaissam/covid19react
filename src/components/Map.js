import React, { useContext } from "react";
import { ReactBingmaps } from "react-bingmaps";
import { GeneralContext, getCenter } from "./utils";
import nomap from "../assets/globe.gif"
import { strings } from "../assets/labels";
import Card from './Card'
import '../index.css'

function Map() {
  const { context } = useContext(GeneralContext);
  const style = context.dark ? styles.modes.dark : styles.modes.light

  let marks = context.markers.map(elt => {
    return {
      location: [elt.center.lat, elt.center.long],
      addHandler: "mouseover",
      infoboxOption: {
        description: '<div class="customInfobox" style="width:75px; height:75px; background-color: black">lkslk</div>',
      },
      pushPinOption: { title: elt.name }
    };
  });


  const noData = (
    <div className="d-flex flex-1 justify-content-center flex-column align-items-center" style={{ width: "100%" }}>
      <img src={nomap} alt="No Data" style={{ filter: context.dark ? 'invert(100%)' : 'invert(0%)' }} />
      <p className="m-4">{strings['label_no_data']}</p>
    </div>
  );

  return (
    <Card label={strings['label_map']} styleB={{ minHeight: 600, height : 600 }}>

      <div
        className="d-flex flex-1 justify-content-center flex-column align-items-center"
        style={{ minheight: 350, width: "100%", height: '100%' }}
      >
        {
          context.markers.length === 0 ? noData : (
            <ReactBingmaps
              bingmapKey="ApWTHGjkpi0zS43VC__qPzzoSlEA-hLb6Ci0y1a6ehEy37hMH4WwMvyiBcmdksdH"
              center={getCenter(marks)}
              zoom={context.zoom}
              infoboxesWithPushPins={marks}
              style={{ flex: 1, minHeight: 300, minWidth: 300 }}
            />
          )}
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
