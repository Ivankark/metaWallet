//add info Google Spreadsheets
var $form = $('form#form'),
    url = 'https://script.google.com/macros/s/AKfycbzKhU3DzSBldYEDtj2BF3V6dAIDY_b8RVVsaXOjh8hQOrh9w9A/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
var checkFamily = document.getElementById('checkFamily');
checkFamily.onclick = function () {
if(this.checked) {
	checkFamily.setAttribute('value', 'Да');
}
else {
    checkFamily.setAttribute('value', 'Нет');
}
}

//form__button
var btn = document.getElementById('submit-form');
document.getElementById('check').onclick = function() {
  if (this.checked) {
    btn.removeAttribute('disabled');
    btn.classList.add('button_checkin');
  } else {
    btn.setAttribute('disabled', '');
    btn.classList.remove('button_checkin');
  }
};