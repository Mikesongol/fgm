let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
function submitPost(parentId) {
    const nameInput = document.getElementById('name-input');
    const postInput = document.getElementById('post-input');
    const forumPosts = document.getElementById('forum-posts');
    if (nameInput.value.trim() !== '' && postInput.value.trim() !== '') {
        const postDiv = document.createElement('div');
        postDiv.className = 'forum-post';
        postDiv.innerHTML = `
            <p><strong>${nameInput.value}</strong>: ${postInput.value}</p>
            <button onclick="submitPost('reply-${parentId}')">Reply</button>
            <div class="replies-container" id="reply-${parentId}">
                <!-- Replies to this post will be dynamically loaded here -->
            </div>
        `;

        forumPosts.appendChild(postDiv);
        nameInput.value = '';
        postInput.value = '';
    } else {
        alert('Both name and post are required.');
    }
}
document.getElementById('volunteer-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const firstName = formData.get('firstName');
    const surName = formData.get('surName');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const alertMessage = `First Name: ${firstName}\nSurName: ${surName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`;
    alert('Form submitted!\n\n' + alertMessage);
    function sendFormDataToServer(formData) {
        fetch('http://127.0.0.1:3000/submit-form', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error sending data to the server:', error);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
});
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newsItem = this.closest('li');
            const description = newsItem.querySelector('.description');

            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                description.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert('Form submitted!\n\n' + alertMessage);
        contactForm.reset();
    });
});
function sendFormDataToServer(formData) {
    fetch('http://127.0.0.1:3000/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const volunteerForm = document.getElementById('volunteer-form');

    volunteerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(volunteerForm);
        const firstName = formData.get('firstName');
        const surName = formData.get('surName');
        const email = formData.get('email');
        const phoneNumber = formData.get('phoneNumber');
        const alertMessage = `First Name: ${firstName}\nSurname: ${surName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`;
        alert('Form submitted!\n\n' + alertMessage);
        volunteerForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newsItem = this.closest('li');
            const description = newsItem.querySelector('.description');

            if (description.classList.contains('expanded')) {
                description.classList.remove('expanded');
                this.textContent = 'Read More';
            } else {
                description.classList.add('expanded');
                this.textContent = 'Read Less';
            }
        });
    });
});

function toggleDarkMode() {
    const bodyElement = document.getElementById('bodyElement');
    bodyElement.classList.toggle('dark-mode');
}
