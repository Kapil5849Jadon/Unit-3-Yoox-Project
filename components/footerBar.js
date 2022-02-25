function footerBar(){
    return `<div id="footer">
    <div class="newtoYoox">
    <ul>
        <li><h3>NEW TO YOOX</h3></li>
        <li><button></button></li>
        <li>Shopping guide</li>
        <li>iPhone/iPad/Android</li>
        <li>Browse all Designers</li>
        <li>Browse all Categories</li>
    </ul>
    </div>
    <div class="help">
       <ul>
           <li><h3>HELP</h3></li>
           <li><button></button></li>
           <li>Shipping times & costs</li>
           <li>Payments and web security</li>
           <li>Product quality</li>
           <li>Track your order</li>
           <li>Returns & refunds</li>
           <li>FAQs</li>
           <li>Size Guide</li>
       </ul> 
    </div>
    <div class="news">
     <img src="https://cdn.icon-icons.com/icons2/1769/PNG/128/4092561-email-envelope-mail-message-mobile-ui-ui-website_114031.png" alt="">
     <h2>YOOX NEWS</h2>

   <p>Sign up for the newsletter and discover the latest arrivals and promotions</p>
     
       <input type="email" id="mail" placeholder="INSERT YOUR E-MAIL ADDRESS">


   <div id="gender">
       
       <input type="checkbox" id="woman">
       <label for="woman">Woman</label>
      
       <input type="checkbox" id="man">
       <label for="man"> Man</label>
   </div>

   <div class="privacyTerms">
       
       <p>I consent to receive YOOX newsletters via email. For further information, please consult the <b> Privacy Policy</b>.
       </p>
   </div>

   <button onclick="window.location.href='./signIn.html'">SIGN UP</button>

 
       
        
    </div>

    <div class="myoox">
       <ul>
           <li><h3>MYOOX</h3></li>
           <li><button></button></li>
           <li>Login</li>
           <li>My Orders</li>
           <li>My Details</li>
           <li>Dream Box</li>
           <li>Premiere</li>
       </ul>
    </div>

    <div class="about">
       <ul>
           <li><h3>ABOUT US</h3></li>
           <li><button></button></li>
           <li>Company Info</li>
           <li>Press</li>
           <li>Affiliaton</li>
           <li>Careers</li>
       </ul>
    </div>
</div>`
}
export default footerBar;