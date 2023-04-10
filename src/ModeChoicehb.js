import React from "react";
import { Form, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Icon from "react-bootstrap-icons";
import json0km from "./json/sample_db_0km.json";
import json5km from "./json/sample_db_5km.json";
import json10km from "./json/sample_db_10km.json";
import json15km from "./json/sample_db_15km.json";
import json20km from "./json/sample_db_20km.json";
import json25km from "./json/sample_db_25km.json";

const ModeChoice = ({ params }) => {
  const getMode4 = (mode4Index) => {
    if (mode4Index == 0) {
      return 3;
    } else if (mode4Index == 1) {
      return 2;
    }
  };

  const getMode5 = (mode5Index) => {
    if (mode5Index == 0) {
      return 5;
    } else if (mode5Index == 1) {
      return 6;
    }
  };

  const { state } = useLocation();
  const { q1Options, q2Options, q1Option, q2Option } = state;
  const jsonFiles = [json0km, json5km, json10km, json15km, json20km, json25km];
  const mode4 = ["Own Car", "Own Two-wheeler"];
  const mode5 = ["Auto", "Ride-hailing Car"];
  const mode4Index = Math.round(Math.random());
  const mode5Index = Math.round(Math.random());
  const crowdJsonData = {
    crowd_json: {
      1: "Many seats available",
      2: "Some seats available",
      3: "All seats occupied; standing space available",
      4: "Fully crowded or packed",
    },
  };
  const crowdJson = crowdJsonData.crowd_json;
  const servtypeJsonData = {
    servtype_json: { 1: "Ordinary", 2: "Express Non-AC", 3: "Express AC" },
  };
  const servtypeJson = servtypeJsonData.servtype_json;
  console.log(jsonFiles);
  console.log(q1Options, q2Options, q1Option, q2Option);
  return (
    <div>
      <Helmet>
        <title>Respondent Travel Profile</title>
      </Helmet>
      <Form className="m-2">
        <Table striped="columns" bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Text>Bus Type 1</Form.Text>
                <Form.Check
                  name="modechoice"
                  type="radio"
                  onClick={() => {}}
                ></Form.Check>
              </th>
              <th>
                <Form.Text>Bus Type 2</Form.Text>
                <Form.Check
                  name="modechoice"
                  type="radio"
                  onClick={() => {}}
                ></Form.Check>
              </th>
              <th>
                <Form.Text>{jsonFiles[q2Option].Data[0].mode_4}</Form.Text>
                <Form.Check
                  name="modechoice"
                  type="radio"
                  onClick={() => {}}
                ></Form.Check>
              </th>
              <th>
                <Form.Text>
                  {q1Option == 2
                    ? jsonFiles[q2Option].Data[0].mode_9
                    : q1Option == 3
                    ? jsonFiles[q2Option].Data[0].mode_8
                    : mode4[mode4Index]}
                </Form.Text>
                <Form.Check
                  name="modechoice"
                  type="radio"
                  onClick={() => {}}
                ></Form.Check>
              </th>
              <th>
                <Form.Text>
                  {q1Option == 5
                    ? jsonFiles[q2Option].Data[0].mode_7
                    : q1Option == 6
                    ? jsonFiles[q2Option].Data[0].mode_5
                    : mode5[mode5Index]}
                </Form.Text>
                <Form.Check
                  name="modechoice"
                  type="radio"
                  onClick={() => {}}
                ></Form.Check>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center" colSpan={5}>
                Total travel time spent while inside the vehicle(s)
              </td>
            </tr>
            <tr>
              <td>{jsonFiles[q2Option].Data[0]["mode_1.ivtt"]} min</td>
              <td>{jsonFiles[q2Option].Data[0]["mode_2.ivtt"]} min</td>
              <td>{jsonFiles[q2Option].Data[0]["mode_4.ivtt"]} min</td>
              <td>
                {q1Option == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.ivtt"]
                  : q1Option == 3
                  ? jsonFiles[q2Option].Data[0]["mode_8.ivtt"]
                  : getMode4(mode4Index) == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.ivtt"]
                  : jsonFiles[q2Option].Data[0]["mode_8.ivtt"]}{" "}
                min
              </td>
              <td>
                {q1Option == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.ivtt"]
                  : q1Option == 6
                  ? jsonFiles[q2Option].Data[0]["mode_5.ivtt"]
                  : getMode5(mode5Index) == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.ivtt"]
                  : jsonFiles[q2Option].Data[0]["mode_5.ivtt"]}{" "}
                min
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={5}>
                Total travel time spent outside vehicle(s)
              </td>
            </tr>
            <tr>
              <td>
                {jsonFiles[q2Option].Data[0]["mode_1.waittime"] +
                  jsonFiles[q2Option].Data[0]["mode_1.walktime"]}{" "}
                min
              </td>
              <td>
                {jsonFiles[q2Option].Data[0]["mode_2.waittime"] +
                  jsonFiles[q2Option].Data[0]["mode_2.walktime"]}{" "}
                min
              </td>
              <td>
                {jsonFiles[q2Option].Data[0]["mode_4.waittime"] +
                  jsonFiles[q2Option].Data[0]["mode_4.walktime"]}{" "}
                min
              </td>
              <td>
                {q1Option == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_9.walktime"]
                  : q1Option == 3
                  ? jsonFiles[q2Option].Data[0]["mode_8.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_8.walktime"]
                  : getMode4(mode4Index) == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_9.walktime"]
                  : jsonFiles[q2Option].Data[0]["mode_8.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_8.walktime"]}{" "}
                min
              </td>
              <td>
                {q1Option == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_7.walktime"]
                  : q1Option == 6
                  ? jsonFiles[q2Option].Data[0]["mode_5.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_5.walktime"]
                  : getMode5(mode5Index) == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_7.walktime"]
                  : jsonFiles[q2Option].Data[0]["mode_5.waittime"] +
                    jsonFiles[q2Option].Data[0]["mode_5.walktime"]}{" "}
                min
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={5}>
                Possible delay due to traffic congestion or other uncertainties
              </td>
            </tr>
            <tr>
              <td>
                ...up to {jsonFiles[q2Option].Data[0]["mode_1.tvariab"]} min
                more
              </td>
              <td>
                ...up to {jsonFiles[q2Option].Data[0]["mode_2.tvariab"]} min
                more
              </td>
              <td>
                ...up to {jsonFiles[q2Option].Data[0]["mode_4.tvariab"]} min
                more
              </td>
              <td>
                ...up to{" "}
                {q1Option == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.tvariab"]
                  : q1Option == 3
                  ? jsonFiles[q2Option].Data[0]["mode_8.tvariab"]
                  : getMode4(mode4Index) == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.tvariab"]
                  : jsonFiles[q2Option].Data[0]["mode_8.tvariab"]}{" "}
                min more
              </td>
              <td>
                ...up to{" "}
                {q1Option == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.tvariab"]
                  : q1Option == 6
                  ? jsonFiles[q2Option].Data[0]["mode_5.tvariab"]
                  : getMode5(mode5Index) == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.tvariab"]
                  : jsonFiles[q2Option].Data[0]["mode_5.tvariab"]}{" "}
                min more
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={5}>
                Total one-way cost of travel
              </td>
            </tr>
            <tr>
              <td>Rs. {jsonFiles[q2Option].Data[0]["mode_1.tcost"]} </td>
              <td>Rs. {jsonFiles[q2Option].Data[0]["mode_2.tcost"]} </td>
              <td>Rs. {jsonFiles[q2Option].Data[0]["mode_4.tcost"]} </td>
              <td>
                Rs.{" "}
                {q1Option == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.tcost"]
                  : q1Option == 3
                  ? jsonFiles[q2Option].Data[0]["mode_8.tcost"]
                  : getMode4(mode4Index) == 2
                  ? jsonFiles[q2Option].Data[0]["mode_9.tcost"]
                  : jsonFiles[q2Option].Data[0]["mode_8.tcost"]}
              </td>
              <td>
                Rs.{" "}
                {q1Option == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.tcost"]
                  : q1Option == 6
                  ? jsonFiles[q2Option].Data[0]["mode_5.tcost"]
                  : getMode5(mode5Index) == 5
                  ? jsonFiles[q2Option].Data[0]["mode_7.tcost"]
                  : jsonFiles[q2Option].Data[0]["mode_5.tcost"]}
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={5}>
                Extent of crowding in the vehicle
              </td>
            </tr>
            <tr>
              <td>{crowdJson[jsonFiles[q2Option].Data[0]["mode_1.crowd"]]}</td>
              <td>{crowdJson[jsonFiles[q2Option].Data[0]["mode_2.crowd"]]}</td>
              <td>{crowdJson[jsonFiles[q2Option].Data[0]["mode_4.crowd"]]}</td>
              <td>
                {q1Option == 2
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_9.crowd"]]
                  : q1Option == 3
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_8.crowd"]]
                  : getMode4(mode4Index) == 2
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_9.crowd"]]
                  : crowdJson[jsonFiles[q2Option].Data[0]["mode_8.crowd"]]}
              </td>
              <td>
                {q1Option == 5
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_7.crowd"]]
                  : q1Option == 6
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_5.crowd"]]
                  : getMode5(mode5Index) == 5
                  ? crowdJson[jsonFiles[q2Option].Data[0]["mode_7.crowd"]]
                  : crowdJson[jsonFiles[q2Option].Data[0]["mode_5.crowd"]]}
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={5}>
                Service type
              </td>
            </tr>
            <tr>
              <td>
                {servtypeJson[jsonFiles[q2Option].Data[0]["mode_1.serv"]]}
              </td>
              <td>
                {servtypeJson[jsonFiles[q2Option].Data[0]["mode_2.serv"]]}
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </div>
  );
};

export default ModeChoice;
