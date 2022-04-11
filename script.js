class Footer extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <footer id = 'main-footer' class = 'py-2'>
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
          <li><a href='https://dashboard.techoptimum.org/'>Community</a></li>
          <li><a href='/about.html#test'>Partners</a></li>
          <li><a href='/about.html'>About</a></li>
          <li><a href='/contact.html'>Contact us</a>
        <li><a href='/contact.html'>Join our Team</a>
</li>
        </ul>
      </div>
        
      <div>
        <h3>Miscellaneous</h3>
        <ul class = 'list'>
          <li><a href='/join.html'>Become a Member</a></li>
          <li><a href='/about.html'>Workshops</a></li>
          <li><a href='/contact.html'>Blog</a></li>
          <li><a href='/contact.html'>Join our Slack</a></li>
        </ul>
      </div>

     <div>
        <h3>Social Media</h3>
        <ul class = 'list'>
          <li><a href='/join.html'>Instagram</a></li>
          <li><a href='/about.html'>Twitter</a></li>
          <li><a href='/contact.html'>LinkedIn</a></li>
          <li><a href='/contact.html'>Github</a></li>
        </ul>
      </div>
        
      <div>
        <h2>Become a member now!</h2>
        <p>Come check us out, see what we do. You might enjoy it!</p>
        <a href='#' class='btn btn-primary'>Join Now</a>
      </div>
      <div>
        <p>
          Copyright Tech Optimum &copy; 2022, All Rights reserved.  Made with ♥️ by the <span style='color:orange;'>Tech Optimum</span> team.
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
        
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Social</a>
          <div class="social-links-navbar"class="dropdown-content">
             <a class="social-button"href="http://facebook.com.br" target = 'blank'><i class="fab fa-linkedin fa-2x"></i>&zwnj; </a>
            <a class="social-button"href="http://facebook.com.br" target = 'blank'><i class="fab fa-github fa-2x"></i>&zwnj; </a>
            <a class="social-button"href="http://facebook.com.br" target = 'blank'><i class="fab fa-twitter fa-2x"></i>&zwnj; </a>
            <a class="social-button"href="http://facebook.com.br" target = 'blank'><i class="fab fa-instagram fa-2x"></i>&zwnj; </a>
          </div>
        </li>
         <li><a href="#">Dashboard</a></li>
        <li><a href="contact.html">Contact</a></li>

        <li><a href="calendar.html"><i class="fa fa-fw fa-calendar"></i> </a></li>
     
        
      </ul>
    </div>
  </nav>
    `
  }
}
customElements.define('header-comp',Header);
customElements.define('footer-comp',Footer);

