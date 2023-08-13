import React, { useState } from 'react';

export const TicketWriter = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('InspHire Office');
  const [priority, setPriority] = useState('P4');
  const [formData, setFormData] = useState('');
  const [emailData, setEmailData] = useState('');
  const [formType, setFormType] = useState('Incident');
  const [formTime, setFormTime] = useState('Morning');
  const [module, setModule] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [details, setDetails] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  const handleFormTimeChange = (event) => {
    setFormTime(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let TicketSummary = '';
    if (formType === 'Incident') {
      TicketSummary = `Call received from ${name} at ${company} regarding their ${product} ${module} ${symptoms}.\n\n${name} called into Support on ${phone}.\nTicket assigned as ${priority} priority.`;
    } else if (formType === 'Request') {
      TicketSummary = `Call received from ${name} at ${company} regarding their ${product}, requesting ${details}.\n\n${name} called into Support on ${phone}.\nTicket assigned as ${priority} priority.`;
    }
    setFormData(`${TicketSummary}`);

    let EmailSummary = '';
    if (formTime === 'Morning') {
      EmailSummary = `Good morning ${name},\n\nThis email serves to confirm we spoke over the phone this morning regarding your ${product}.\n\nThis ticket has been assigned to [NAME] & we will be in contact with you shortly regarding any updates.\n\nCurrently, this ticket has been assigned as ${priority} priority.\n\nThank you,\nInspHire Helpdesk.`;
    } else if (formTime === 'Afternoon') {
      EmailSummary = `Good afternoon ${name},\n\nThis email serves to confirm we spoke over the phone this afternoon regarding your ${product}.\n\nThis ticket has been assigned to [NAME] & we will be in contact with you shortly regarding any updates.\n\nCurrently, this ticket has been assigned as ${priority} priority.\n\nThank you,\nInspHire Helpdesk.`;
    }
    setEmailData(`${EmailSummary}`);
  };

  const refreshPage = () => {
    window.location.reload(false);
  }



  return (
    <div>
      <h1 className="head_text">
        Ticket Writer</h1>
        <p1 className="flex justify-center sm:invisible">
          This site is intended to be used on desktop only.
        </p1>
      <div className="py-3 sm:flex justify-items-center">
        <div className="flex justify-center">
      <form>
        <div className="sm:flex justify-start">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} className="formbox" />
        </label>
        <br />
        <label className="sm:px-3">
          Company:
          <input type="text" value={company} onChange={handleCompanyChange} className="formbox" />
        </label>
        <br />
        </div>
        <div className="sm:flex justify-start">
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} className="formbox" />
        </label>
        <br />
        <label className="sm:px-3">
          Product:
          <select value={product} onChange={handleProductChange} className="formbox" >
            <option value="InspHire Office">InspHire Office</option>
            <option value="InspHire Corporate">InspHire Corporate</option>
            <option value="InspHire Mobile">InspHire Mobile</option>
          </select>
        </label>
        </div>
        <br /> 
        <label>
          Type:
          <label>
            <br />
            <input
              type="radio"
              name="formType"
              value="Incident"
              checked={formType === 'Incident'}
              onChange={handleFormTypeChange}
            />
            Incident
          </label>
          <label  className="px-3">
            <input
              type="radio"
              name="formType"
              value="Request"
              checked={formType === 'Request'}
              onChange={handleFormTypeChange}
            />
            Request
          </label>
        </label>
        <br />
        {formType === 'Incident' && (
          <> 
            <label>
              Module:
              <input type="text" value={module} onChange={(e) => setModule(e.target.value)} className="formbox" />
            </label>
            <br />
            <label>
              Symptoms:
              <br />
              <textarea rows="3" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} className="formbox" />
            </label>
            <br />
            </>
        )}
        {formType === 'Request' && (
          <>
            <label>
              Details:
              <br />
              <textarea rows="3" value={details} onChange={(e) => setDetails(e.target.value)}  className="formbox" />
            </label>
            <br />
          </>
        )}
          <div className="sm:flex justify-items-start">
          <label>
          Priority:
          <select value={priority} onChange={handlePriorityChange} className="formbox" >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
            <option value="P4">P4</option>
          </select>
        </label>
        <br />
        <label className="sm:px-3">
          Time:
            <br />
            <input
              type="radio"
              name="formTime"
              value="Morning"
              checked={formTime === 'Morning'}
              onChange={handleFormTimeChange}
            />
            Morning
          </label>
          <label>
            <br />
            <input
              type="radio"
              name="formTime"
              value="Afternoon"
              checked={formTime === 'Afternoon'}
              onChange={handleFormTimeChange}
            />
            Afternoon
          </label>
          </div>
          <br />
          <div className="flex-row space-x-3">
        <button className="_btn" onClick={handleSubmit}>Submit</button>
        <button className="_btn" onClick={refreshPage}>Clear</button>
           </div>
      </form>
      </div>
      <div className="p-3">
      <textarea value={formData} readOnly rows="5" cols="50" className="textbox" placeholder="Quick Ticket"/>
      <br />
      <textarea value={emailData} readOnly rows="13" cols="50" className="textbox" placeholder="Acknowledgement Email"/>
      </div>
      </div>
    </div>
  );
};

export default TicketWriter;
