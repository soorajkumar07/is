const express = require('express');
 const app=express();


const mysql = require('mysql');

const cors=require('cors');


app.use(cors())

app.use(express.json());


// database connection


const db=mysql.createConnection({

 user: "fbdro",
  host: "10.125.20.10",
  password: "fbdro",
  database: "his_db_29023023",
})


// putting the information


app.post("/enter",(req, res) => {

    const MRD=req.body.MRD   
    let query="INSERT INTO bill (patient_id) VALUE(?)"

    db.query(query,[MRDNum],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("result entered")
        }
    })

})



// under ip care getting the data from the db
app.get("/ipcare",(req,res)=>{
    let query=`select a.patient_id,v.visit_code,a.status,a.status_date_time,gm.description,pm.full_name,a.visit_id,a.last_modified_by,hu.user_name,bm.bed_no,wm.name from admission a
    left join general_master gm on
    a.status=gm.value
    left join patient_master pm on
    a.patient_id=pm.mrd_number
    left join his_user hu on 
    a.last_modified_by=hu.user_login
    left join bed_occupancy bo on 
    a.patient_id=bo.patient_id 
    left join bed_master bm  on 
    bo.bed_id=bm.id
    left join ward_master  wm on 
    bm.ward_id=wm.id
    inner join visit v on
    a.visit_id=v.id
    where gm.description='UNDER IP CARE' and category like 'IP_PATIENT_STATUS_SEARCH_OPTION%'`
    
    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

// marked for discharge getting the data from the db

app.get("/Markedfordischarge",(req,res)=>{
 let query=`select a.patient_id,v.visit_code,a.status,a.status_date_time,gm.description,pm.full_name,a.visit_id,a.last_modified_by,hu.user_name,bm.bed_no,wm.name from admission a
    left join general_master gm on
    a.status=gm.value
    left join patient_master pm on
    a.patient_id=pm.mrd_number
    left join his_user hu on 
    a.last_modified_by=hu.user_login
    left join bed_occupancy bo on 
    a.patient_id=bo.patient_id 
    left join bed_master bm  on 
    bo.bed_id=bm.id
    left join ward_master  wm on 
    bm.ward_id=wm.id
    inner join visit v on
    a.visit_id=v.id
    where gm.description='MARKED FOR DISCHARGE' and category like 'IP_PATIENT_STATUS_SEARCH_OPTION%'`

    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
   // send for billing getting the data from the db
app.get("/sendforbilling",(req,res)=>{
    let query=`select a.patient_id,v.visit_code,a.status,a.status_date_time,gm.description,pm.full_name,a.visit_id,a.last_modified_by,hu.user_name,bm.bed_no,wm.name from admission a
       left join general_master gm on
       a.status=gm.value
       left join patient_master pm on
       a.patient_id=pm.mrd_number
       left join his_user hu on 
       a.last_modified_by=hu.user_login
       left join bed_occupancy bo on 
       a.patient_id=bo.patient_id 
       left join bed_master bm  on 
       bo.bed_id=bm.id
       left join ward_master  wm on 
       bm.ward_id=wm.id
       inner join visit v on
       a.visit_id=v.id
       where gm.description='SEND FOR BILLING' and category like 'IP_PATIENT_STATUS_SEARCH_OPTION%'`
   
       db.query(query,(err,result)=>{
           if(err){
               console.log(err)
           }else{
               res.send(result)
           }
       })
   })



   // discharge approved getting the data from the db
app.get("/dischargeApproved",(req,res)=>{
    let query=`select a.patient_id,v.visit_code,a.status,a.status_date_time,gm.description,pm.full_name,a.visit_id,a.last_modified_by,hu.user_name,bm.bed_no,wm.name from admission a
       left join general_master gm on
       a.status=gm.value
       left join patient_master pm on
       a.patient_id=pm.mrd_number
       left join his_user hu on 
       a.last_modified_by=hu.user_login
       left join bed_occupancy bo on 
       a.patient_id=bo.patient_id 
       left join bed_master bm  on 
       bo.bed_id=bm.id
       left join ward_master  wm on 
       bm.ward_id=wm.id
       inner join visit v on
       a.visit_id=v.id
       where gm.description='DISCHARGE APPROVED' and category like 'IP_PATIENT_STATUS_SEARCH_OPTION%'`
   
       db.query(query,(err,result)=>{
           if(err){
               console.log(err)
           }else{
               res.send(result)
           }
       })
   })


   // Admittion getting the data from the db
app.get("/admission",(req,res)=>{
    let query=`select a.patient_id,v.visit_code,a.status,a.status_date_time,gm.description,pm.full_name,a.visit_id,a.last_modified_by,hu.user_name,bm.bed_no,wm.name from admission a
       left join general_master gm on
       a.status=gm.value
       left join patient_master pm on
       a.patient_id=pm.mrd_number
       left join his_user hu on 
       a.last_modified_by=hu.user_login
       left join bed_occupancy bo on 
       a.patient_id=bo.patient_id 
       left join bed_master bm  on 
       bo.bed_id=bm.id
       left join ward_master  wm on 
       bm.ward_id=wm.id
       inner join visit v on
       a.visit_id=v.id
       where gm.description='ADMITTED' and category like 'IP_PATIENT_STATUS_SEARCH_OPTION%'`
   
       db.query(query,(err,result)=>{
           if(err){
               console.log(err)
           }else{
               res.send(result)
           }
       })
   })


app.listen(9001,()=>{
    console.log("listening ")
})
