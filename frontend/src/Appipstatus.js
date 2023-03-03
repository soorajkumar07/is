import { React, useState } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment";

function App() {
  const [IpCarelist, setIpCarelist] = useState([]);
  const [MarkForDischargelist, setMarkForDischargelist] = useState([]);
  const [SendForBillig, setSendForBilling] = useState([]);
  const [DischargeApproved, setDischargeApproved] = useState([]);
  const [Admission, setAdmission] = useState([]);

  //ip care button click function
  const getIpCare = () => {
    axios
      .get("http://localhost:9001/ipcare")
      .then((Responce) => {
        setIpCarelist(Responce.data);
        setMarkForDischargelist([]);
        setSendForBilling([]);
        setDischargeApproved([]);
        setAdmission([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Markedfordischarge button click function

  const getMarkedfordischarge = () => {
    axios
      .get("http://localhost:9001/Markedfordischarge")
      .then((Responce) => {
        setMarkForDischargelist(Responce.data);
        setIpCarelist([]);
        setSendForBilling([]);
        setDischargeApproved([]);
        setAdmission([]);
        console.log("got the data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //send for billing onclick function
  const getSendforbilling = () => {
    axios
      .get("http://localhost:9001/sendforbilling")
      .then((response) => {
        setSendForBilling(response.data);
        setIpCarelist([]);
        setMarkForDischargelist([]);
        setDischargeApproved([]);
        setAdmission([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DischargeApproved onclick function

  const getDischargeApproved = () => {
    axios
      .get("http://localhost:9001/dischargeApproved")
      .then((responce) => {
        setDischargeApproved(responce.data);
        setIpCarelist([]);
        setSendForBilling([]);
        setMarkForDischargelist([]);
        setAdmission([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //admission onclick function
  const getAdmission = () => {
    axios
      .get("http://localhost:9001/admission")
      .then((responce) => {
        setAdmission(responce.data);
        setIpCarelist([]);
        setSendForBilling([]);
        setDischargeApproved([]);
        setMarkForDischargelist([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Markedfordischarge display in return

  return (
    <div className="App">
      <div className="main3">
        <h3>IP Status Report</h3>

        {/* ip care button */}
        <button className="btn" onClick={getIpCare}>
          IP CARE
        </button>

        {/* MarkForDischarge  button */}
        <button className="btn" onClick={getMarkedfordischarge}>
          MARKED FOR DISCHARGE
        </button>
        {/* send for billing button */}
        <button className="btn" onClick={getSendforbilling}>
          SEND FOR BILLING
        </button>
        {/* discharge approved button */}
        <button className="btn" onClick={getDischargeApproved}>
          DISCHARGE APPROVED
        </button>
        {/* admission button */}
        <button className="btn" onClick={getAdmission}>
          ADMISSION
        </button>
      </div>

      <table className="table" border={5} cellPadding={10}>
        <thead>
          <tr className="tablerow">
            <th>Patient_id</th>
            <th>Patient_Name</th>
            <th>Visit_id</th>
            <th>Visit_code</th>
            <th>Last_Modified_By</th>
            <th>User_Name</th>
            <th>status_date_time</th>
            <th>Status</th>
            <th>Description</th>
            <th>Bed_no</th>
            <th>Ward</th>
          </tr>
        </thead>

        <tbody>
          {/* ip care maping  */}
          {IpCarelist.map((val) => {
            return (
              <tr className="tabrow">
                <td>{val.patient_id}</td>

                <td>{val.full_name}</td>

                <td>{val.visit_id}</td>

                <td>{val.visit_code}</td>

                <td>{val.last_modified_by}</td>

                <td>{val.user_name}</td>

                <td>
                  {moment(val.status_date_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>{val.status}</td>

                <td>{val.description}</td>

                <td>{val.bed_no}</td>

                <td>{val.name}</td>
              </tr>
            );
          })}

          {/* MarkForDischarge maping */}
          {MarkForDischargelist.map((val) => {
            return (
              <tr className="tabrow">
                <td>{val.patient_id}</td>

                <td>{val.full_name}</td>

                <td>{val.visit_id}</td>

                <td>{val.visit_code}</td>

                <td>{val.last_modified_by}</td>

                <td>{val.user_name}</td>

                <td>
                  {moment(val.status_date_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>{val.status}</td>

                <td>{val.description}</td>

                <td>{val.bed_no}</td>

                <td>{val.name}</td>
              </tr>
            );
          })}

          {/* send for billing maping */}
          {SendForBillig.map((val) => {
            return (
              <tr className="tabrow">
                <td>{val.patient_id}</td>

                <td>{val.full_name}</td>

                <td>{val.visit_id}</td>

                <td>{val.visit_code}</td>

                <td>{val.last_modified_by}</td>

                <td>{val.user_name}</td>

                <td>
                  {moment(val.status_date_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>{val.status}</td>

                <td>{val.description}</td>

                <td>{val.bed_no}</td>

                <td>{val.name}</td>
              </tr>
            );
          })}

          {/* discharge approved maping */}
          {DischargeApproved.map((val) => {
            return (
              <tr className="tabrow">
                <td>{val.patient_id}</td>

                <td>{val.full_name}</td>

                <td>{val.visit_id}</td>

                <td>{val.visit_code}</td>

                <td>{val.last_modified_by}</td>

                <td>{val.user_name}</td>

                <td>
                  {moment(val.status_date_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>{val.status}</td>

                <td>{val.description}</td>

                <td>{val.bed_no}</td>

                <td>{val.name}</td>
              </tr>
            );
          })}

          {/* admission maping */}
          {Admission.map((val) => {
            return (
              <tr className="tabrow">
                <td>{val.patient_id}</td>

                <td>{val.full_name}</td>

                <td>{val.visit_id}</td>

                <td>{val.visit_code}</td>

                <td>{val.last_modified_by}</td>

                <td>{val.user_name}</td>

                <td>
                  {moment(val.status_date_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>{val.status}</td>

                <td>{val.description}</td>

                <td>{val.bed_no}</td>

                <td>{val.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
