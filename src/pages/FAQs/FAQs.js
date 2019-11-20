import React from 'react';
import './FAQs.css';

const Faqs = () => {
  return (
    <div className="bg-black no-img-page">
      <div className="faqs-content">
        <div className="page-title">
          FAQS
        </div>
        <div className="page-description">
          <div className="items">
            <p className="list-item-label">ARE MY TICKETS VERIFIED?</p>
            <ul>
              <li className="list-item-desc">Absolutely! Fevo’s tickets come straight from the artists, teams or venues themselves, so your tickets are guaranteed, every time.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">WHAT IF I DID NOT RECEIVE MY CONFIRMATION EMAIL?</p>
            <ul>
              <li className="list-item-desc">If you did not receive your confirmation email, please be sure to check your spam/junk folder just in case. If it is not there, we are happy to resend it again.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">WHAT IF I HAVE ENTERED AN INCORRECT EMAIL ADDRESS OR NEED TO UPDATE IT?</p>
            <ul>
              <li className="list-item-desc">Once tickets have been sent out, your email address will need to be updated through ticket office directly.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">WHY CAN I ONLY SELECT A SPECIFIC NUMBER OF TICKETS?</p>
            <ul>
              <li className="list-item-desc">This is because there are a limited amount of tickets available consecutively. For example, if you wish to purchase 2 tickets and you’re only allowed to select 1, this means there are only single seats scattered around the venue. There are no consecutive seats available together.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">CAN YOU RESEND MY TICKETS?</p>
            <ul>
              <li className="list-item-desc">Yes, if for some reason you did not receive your tickets or accidentally deleted them, we can send them again. If an email address was entered incorrectly at checkout, it will need to be updated on the account before tickets can be resent.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">WHEN WILL I RECEIVE MY TICKETS?</p>
            <ul>
              <li className="list-item-desc">Tickets are sent out 24 hours before the event. For a limited number of offers, they will be sent out instantly after purchase.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">HOW WILL MY TICKETS ARRIVE?</p>
            <ul>
              <li className="list-item-desc">You will find fulfillment details at the bottom of the transaction drawer when you are purchasing your ticket(s). This information will also be included in your confirmation email. Please note, that if your tickets are held at Will Call, you will need to bring a valid ID.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">DO I NEED TO PRINT MY TICKETS?</p>
            <ul>
              <li className="list-item-desc">Sometimes! Be sure to pay close attention to the instructions on your ticket confirmation email! That information will tell you exactly how your tickets need to be presented - whether they need to be printed, have an accompanying photo ID, etc</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">MY CONFIRMATION EMAIL SAYS THAT I WILL RECEIVE INSTRUCTIONS TO ACCESS TICKETS THROUGH MY ACCOUNT BUT I DO NOT HAVE ONE, SO HOW CAN I LOGIN?</p>
            <ul>
              <li className="list-item-desc">When tickets are distributed for these events an account is automatically created for you using the email you purchased your tickets with. You will receive an email 1-2 days before the event with your seating assignment and instructions on how to login to the account.<br /><br />It’s a simple process that requires you to use the “forgot password?” tool to create a new one and at that point login with your email.<br /><br />If you have not received an email to reset your password please visit the "contact us" section of the teams account manager for further assistance in resetting your password.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">HOW DO I TRANSFER MY TICKET TO SOMEONE ELSE?</p>
            <ul>
              <li className="list-item-desc">Once logged into your automatically generated account, there will be a transfer button next to your tickets. From there, you may transfer them to friends and family via email.<br /><br />Once logged into your automatically generated account, there will be a transfer button next to your tickets. From there, you may transfer them to friends and family via email.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">HOW DO I TRANSFER MY TICKET TO SOMEONE ELSE?</p>
            <ul>
              <li className="list-item-desc">Upon purchasing a ticket you will receive a confirmation email that includes your personalized invite link. Share this link with your friends on social media, email or any other platform and they can seamlessly join your group by purchasing through this link. In order to be seated together in the same group, friends and family purchasing through your personalized invite link will need to purchase into your original section prior to tickets being sent out.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">IF THE SECTION I PURCHASED IS SOLD OUT, CAN I STILL GROW MY GROUP?</p>
            <ul>
              <li className="list-item-desc">In this instance, we can do our best to facilitate an exchange.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">IF THE SECTION I PURCHASED IS SOLD OUT, CAN I STILL GROW MY GROUP?</p>
            <ul>
              <li className="list-item-desc">All sales are final, unless the event is canceled due to unforeseen circumstances.</li>
            </ul>
          </div>
          <div className="items">
            <p className="list-item-label">HOW LONG WILL IT TAKE FOR MY REFUND TO GO THROUGH?</p>
            <ul>
              <li className="list-item-desc">If a refund is approved, the funds will return back on your card in 3-5 business days once issued.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
