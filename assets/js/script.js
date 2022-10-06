function modal_close() {
    document.querySelectorAll('.modal').forEach(element => element.style.display = 'none');    
}

function modal_callback() {
    document.querySelector('.modal_callback').style.display = 'block';
}

function modal_request_sent() {
    document.querySelectorAll('.modal').forEach(element => element.style.display = 'none');
    document.querySelector('.modal_request_sent').style.display = 'block';
}