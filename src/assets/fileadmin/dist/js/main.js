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