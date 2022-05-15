class Footer extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <footer id = 'main-footer' class = 'di-3 py-2'>
    <div class='container footer-container'>
      <div>
        <img src='https://techoptimum-5.siddharthdugg.repl.co/img/logo.png' alt='logo'>
       
   <br>
<h2>Newsletter</h2>
<p>Recieve weekly emails from Tech Optimum!</p>
        <form name='Subscriptions' method='POST' data-netlify='true'>
          <input type='email' name='emailvar'placeholder='Email:' required>
          <button type='submit' class = 'btn btn-primary'>Subscribe Now!</button>   
        </form>

      </div>
      <div>
        <h3>About</h3>
        <ul class = 'list'>
          <li><a href='./community.html'>Community</a></li>
          <li><a href='/partners.html'>Partners</a></li>
          <li><a href='/about.html'>About</a></li>
          <li><a href='/contact.html'>Contact us</a>
        <li><a href='/join-leadership.html'>Join our Team</a>
</li>
        </ul>
      </div>
        
      <div>
        <h3>Miscellaneous</h3>
        <ul class = 'list'>
          <li><a href='/join.html'>Become a Member</a></li>
          <li><a href='https://dashboard.techoptimum.org.html'>Workshops</a></li>
          <li><a href='/contact.html'>Blog</a></li>
          <li><a href='https://discord.gg/w7cymgdRBH'>Join our Community</a></li>
        </ul>
      </div>

     <div>
        <h3>Find us on</h3>
        <ul class = 'list'>
          <li><a href='https://www.instagram.com/techoptimum_/'>Instagram</a></li>
          <li><a href='https://twitter.com/TechOptimumHQ'>Twitter</a></li>
          <li><a href='https://www.linkedin.com/company/78818978'>LinkedIn</a></li>
          <li><a href='https://github.com/TechOptimum'>Github</a></li>
        </ul>
      </div>
        
      <div>
        <h2>Become a member now!</h2>
        <p>Come check us out, see what we do. You might enjoy it!</p>
        <a href='./coming-soon.html' class='btn btn-primary'>Join Now</a>
      </div>
      <div>
        <p>
          Copyright Tech Optimum &copy; 2022, All Rights reserved.  Made with ♥️ by the Tech Optimum team.
        </p>
      </div>
    </div>
  </footer>`
      
  }
}
class Header extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <nav id="main-nav">
    <div class="container">
      <img src="https://techoptimum-5.siddharthdugg.repl.co/img/logo.png" alt="Tech Optimum Logo" class="logo">
      <ul>
        <li><a href="index.html">Home</a></li>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">About</a>
          <div class="dropdown-content">
            <a href="./about.html">About</a>
            <a href="./community.html">Community</a>
            <a href="./partners.html">Partners</a>
            <a href="./join-leadership.html">Join Leadership</a>
          </div>
        </li>
        <li><a href="join.html" >Join</a></li>
        <li><a href="hackathon.html">Hackathons</a></li>
        

         <li><a href="./coming-soon.html">Dashboard</a></li>
        <li><a href="contact.html">Contact</a></li>
        
      </ul>
    </div>
  </nav>
    `
  }
}
customElements.define('header-comp',Header);
customElements.define('footer-comp',Footer);

