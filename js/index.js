var MAX_LETTERS = 20;
$tasks = $('#tasks');
var $text = $('#newTask').find('input[type="text"]');
var $counter = $('#counter');

$('input[type="button"]').on('click', addTask);

$tasks.on('click', 'span', removeTask);

$text.on('focus', toggleCounter);

$text.on('blur', toggleCounter);

$text.on('keyup', countLetters);

function addTask() {
  if ($.trim($text.val()) !== '') {
    var $task = $('<li>' + $text.val() + '<span><i class="fa fa-times"></i></span></li>');
    addAnimation($task, 'fadeIn');
    $task.appendTo($tasks);
    reset();
  }
}

function removeTask() {
  $(this).closest('li').remove();
}

function toggleCounter() {
  $counter.closest('p').toggle();
}

function countLetters() {
  var $letters = MAX_LETTERS - $text.val().length;
  if ($letters >= 0) {
    $counter.html($letters);
  }
}

function addAnimation(element, animation){
  element.addClass('animated ' + animation);
}

function reset() {
  $text.val('');
  $counter.html(MAX_LETTERS);
}