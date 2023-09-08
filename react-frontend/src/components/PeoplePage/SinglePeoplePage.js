import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Checkbox } from 'primereact/checkbox';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';

const SinglePeoplePage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("people")
            .get(urlParams.singlePeopleId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "People", type: "error", message: error.message || "Failed get people" });
            });
    }, []);

    const goBack = () => {
        history.replace("/people");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">People</h3>
                </div>
                <p>people/{urlParams.singlePeopleId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">age</label>
                    <p className="m-0" >{data?.age}</p>
                    <label className="text-sm">Male</label>
                    <Checkbox checked={_entity?.{data?.male}} onChange={ (e) => setValByKey("{data?.male}", e.checked)}  ></Checkbox>
                    <label className="text-sm">Female</label>
                    <Checkbox checked={_entity?.{data?.female}} onChange={ (e) => setValByKey("{data?.female}", e.checked)}  ></Checkbox>
                    <label className="text-sm">birthday</label>
                    <Calendar dateFormat="dd/mm/yy hh:mm" placeholder={"dd/mm/yy hh:mm"} value={_entity?.{data?.birthday}} onChange={ (e) => setValByKey("{data?.birthday}", e.target.value)} showTime ></Calendar> */}
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SinglePeoplePage);
