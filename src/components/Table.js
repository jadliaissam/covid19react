import React, { useContext, useState, useEffect } from "react";
import {
  states_column,
  towns_column,
  prefectures_column,
  districts_column,
  GeneralContext
} from "./utils";
import { types } from "./Constantes";
import { strings } from "../assets/labels";
import Card from './Card'

export default function Table() {
  const { context } = useContext(GeneralContext);
  const [tab, setTab] = useState({ cols: [], data: [] });

  useEffect(() => {
    switch (context.entity) {
      case -1:
        setTab({ cols: states_column, data: context.cases });
        break;
      case types.STATE:
        setTab({ cols: prefectures_column, data: context.cases });
        break;
      case types.PREFECTURE:
        setTab({ cols: towns_column, data: context.cases });
        break;
      case types.TOWN:
        setTab({ cols: districts_column, data: context.cases });
        break;
      default:
        break;
    }
  }, [context.cases]);

  return (
    
    <Card label={strings['label_table']} styled={{height: 350}}>   
      
    </Card>
  );
}

const styles = {
  card: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
    marginTop : 20,
    minWidth: 370
  },
  cardHeader: {
    backgroundColor: "black",
    color: "white",
    textAlign: 'initial'
  }
}