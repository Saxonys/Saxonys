// Sets a cookie with a name then logs it in the browser console. the cookie will expire after 7 days.
function setStandardCookie() {
document.cookie = "visitorName=Guest" + "; expires=" + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
  const visitorName = getCookie('visitorName');
  console.log("Welcome back, " + visitorName + "!");
}

// This gets the cookie (taken off website)
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// loads the javascript below after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("page loaded fully");

  // Get the blog id
  const blogSection = document.getElementById('blog');
  if (blogSection) {
    // add blog 1
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<strong>Example Blog</strong><br><span class="blog-excerpt">Inserts on page loadup</span><br><a href="">Read More</a>`;
    blogSection.querySelector('ul').appendChild(newEntry);
    // add blog 2
    const newEntry2 = document.createElement('li');
    newEntry2.innerHTML = `<strong>Another Blog</strong><br><span class=blog-excerpt>Wow, another blog!</span><br><a href="">Read More</a>`;
    blogSection.querySelector('ul').appendChild(newEntry2);
  }

  // Get secretMessage id then run this code if clicked
  const button = document.getElementById('secretMessage');
  if (button) {
    button.addEventListener('click', () => {
      const visitorName = getCookie('visitorName');
      alert('Hello ' + visitorName + '! You found the easter egg!');
    });
  }

  setStandardCookie();
});
  