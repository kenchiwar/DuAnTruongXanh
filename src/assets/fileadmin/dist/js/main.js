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