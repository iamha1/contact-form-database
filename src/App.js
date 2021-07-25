import React, { useEffect, useState } from "react";
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from "./ebconfig"
import {ImSpinner} from 'react-icons/im'
import {FaTrash} from 'react-icons/fa'

export default function App() {
  return (
    <>
    <EasybaseProvider ebconfig={ebconfig}>
      <Example />
    </EasybaseProvider>
    </>
  );
}

function Example() {
  const { db, useReturn } = useEasybase();
  const [alert, setAlert] = useState({show:false, msg:'',type:''});

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item has been removed');
  }

  const { frame, loading } = useReturn(() => db('CONTACTFORM')
    .return()                           // Select query
    .limit(50));                         // Limit how many items are shown

  if (loading) return <ImSpinner />
  return (
    <>
    <section className="section-center">
    {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      <h3>Contact Form Information</h3>

      <div className="contact-container">
        {frame.map(ele => <Card {...ele} removeItem={removeItem}/>)}
      </div>
    </section>
    </>
  )
}

function Card({ name, email, phone, message, _key, removeItem }){
  const { db } = useEasybase();

  const handleDelete = async () => {
    await db('CONTACTFORM').delete().where({ _key }).one();
    removeItem();
  }

  return (
    <div>
      <article key={_key} className="contact-item">
          <p className="name">{name}</p>
          <p className="email">{email}</p>
          <p className="phone">{phone}</p>
          <p className="message">{message}</p>
      </article>
      <div className="btn-container">
          <button onClick={handleDelete} type="button" className="delete-btn"><FaTrash></FaTrash></button>
      </div>
    </div>
  )
}

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      }, 3000)
      return () => clearTimeout(timeout)
  }, [list, removeAlert])
return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
)
}
