import React from 'react'
import {FaTrash} from 'react-icons/fa'

const TestingCSS = () => {
    return (
        <div>
            <section className="section-center">
      <h3>Contact Form Information</h3>

      <div className="contact-container">
      <div className="flex-it">
      <article className="contact-item">
          <p className="name">Name</p>
          <p className="email">Email</p>
          <p className="phone">Phone</p>
          <p className="message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </article>   
      <div className="btn-container">
            <button type="button" className="delete-btn"><FaTrash></FaTrash></button>
          </div> 
      </div>
          
      <article className="contact-item">
          <p className="name">Name</p>
          <p className="email">Email</p>
          <p className="phone">Phone</p>
          <p className="message">Message</p>
          <div className="btn-container">
            <button type="button" className="delete-btn"><FaTrash></FaTrash></button>
          </div>
      </article>
      <article className="contact-item">
          <p className="name">Name</p>
          <p className="email">Email</p>
          <p className="phone">Phone</p>
          <p className="message">Message</p>
          <div className="btn-container">
            <button type="button" className="delete-btn"><FaTrash></FaTrash></button>
          </div>
      </article>
      </div>
    </section>
        </div>
    )
}

export default TestingCSS
