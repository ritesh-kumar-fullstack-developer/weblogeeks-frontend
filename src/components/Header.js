export default function Header() {
  return (
    <header class="site-header">
        <div class="container nav-wrap">
        <a href="#home" class="logo" aria-label="WEBLOGEEKS Home">
            <span class="logo-mark">W</span>
            <span class="logo-text">
            <strong>WEBLOGEEKS</strong>
            <small>WEB BLOG GEEKS</small>
            </span>
        </a>

        <nav class="main-nav" aria-label="Main navigation">
            <a href="#home" class="active">Home</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" class="btn btn-primary nav-btn">Get In Touch</a>

        <button class="menu-toggle" aria-label="Open navigation">
            <span></span><span></span><span></span>
        </button>
        </div>
    </header>
  );
}