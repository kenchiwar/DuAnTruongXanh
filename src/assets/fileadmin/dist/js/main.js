$(function() {
    $("#example1").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
    });
});

const verificationInputs = document.querySelectorAll('.verificationInput');
verificationInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const currentInput = event.target;
        if (currentInput.value.length === 1) {
            if (index < verificationInputs.length - 1) {
                verificationInputs[index + 1].focus();
            } else {
                verificationInputs[index].blur();
            }
        } else if (currentInput.value.length === 0 && index > 0) {
            verificationInputs[index - 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
            verificationInputs[index - 1].focus();
        }
    });
});

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

function toasts({
    title = '',
    message = '',
    type = 'info',
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
            toast.classList.add('alert-warning');
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


function showSuccess() {
    toasts({
        title: 'Success!',
        message: 'You should check in on some of those fields below.',
        type: 'success',
        duration: 2000,
    });
};

function showWarning() {
    toasts({
        title: 'Warning!',
        message: 'You should check in on some of those fields below.',
        type: 'warning',
        duration: 3000,
    });
};