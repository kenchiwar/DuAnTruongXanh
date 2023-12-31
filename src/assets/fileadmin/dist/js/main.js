//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", smoothScrollToTop);

// Hàm cuộn trang lên đầu với hiệu ứng smooth
function smoothScrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
    }
}
// thong bao trang thai
function toasts({
    title = 'Success!',
    message = '',
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoclosetoast = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('alert');
        if (type == "warning") {
            toast.classList.add('alert-danger');
        } else {
            toast.classList.add('alert-success');
        }
        toast.onclick = function(e) {
            if (e.target.closest('.toast-close')) {
                main.removeChild(toast);
                clearTimeout(autoclosetoast);
            }
        }
        toast.style.animation = 'slideToast ease .3s, fadeout linear 1s ${delay}s forwards';
        toast.innerHTML = `
        <div class="head-toast">

        </div>
        <div class="toast-body">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <div class="toast-close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        main.appendChild(toast);

    }
};


function showSuccess(message, title) {
    if (message === undefined || message.length < 1) {
        message = 'success';
    }
    if (title === undefined || title.length < 1) {
        title = 'Success!';
    }
    toasts({
        title: title,
        message: message,
        type: 'success',
        duration: 2000,

    });
};

function showWarning(message, title) {
    if (message === undefined || message.length < 1) {
        message = 'warning';
    }
    if (title === undefined || title.length < 1) {
        title = 'Warning!';
    }
    toasts({
        title: title,
        message: message,
        type: 'warning',
        duration: 3000,

    });
};

$(function() {

    $('#myTable').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
    });
});