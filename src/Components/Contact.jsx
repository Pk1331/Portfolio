import React from 'react'

const Contact = () => {
  return (
    <section className="contactsec">
        <h1 className="contitle">Contact</h1>
        <div className="con">
          <div>
           <form action='#'>
                <h3 className="conme">Contact Me 🚀</h3>
                <div className="inputgroup">
                  <input type="text"  placeholder="Enter Your Name" required/>
                </div>
                <div className="inputgroup">
                  <input type="email"  placeholder="Enter Your Email" required/>
                </div>
                <div className="inputgroup">
                  <input type="text"  placeholder="Subject" required/>
                </div>
                <div className="inputgroup">
                  <textarea rows={8} placeholder="Message" required></textarea>
                </div>
                <button onClick={()=>window.open("https://mail.google.com","_blank")}>Submit</button>
           </form>
          </div>
        </div>

    </section>
  )
}

export default Contact