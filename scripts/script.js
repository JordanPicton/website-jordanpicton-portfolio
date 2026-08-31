// Temp Comment - Scroll Indicator
// When the user scrolls the page, execute scrollFunction
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("jsBar").style.width = scrolled + "%";
}

// Fetch GitHub Update Date, used in the footer.
let updatedElement = document.getElementById('web-update');

fetch('https://api.github.com/repos/JordanPicton/website-jordanpicton-portfolio/branches/main').then(response => response.json()).then(data => {
    const dateObj = new Date(data.commit.commit.committer.date);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    updatedElement.textContent = formattedDate;
})
    .catch(error => {
        console.log('Error', error);
        updatedElement.textContent = 'Unknown';
    });