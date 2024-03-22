document.addEventListener('DOMContentLoaded', function () {
    var saveBtn = document.getElementById('saveBtn');
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');

    displayNotes();

    saveBtn.addEventListener('click', function () {
        var noteText = noteInput.value.trim();
        if (noteText !== '') {
            var notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            displayNotes();
            noteInput.value = '';
        }
    });

    function displayNotes() {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        noteList.innerHTML = '';
        notes.forEach(function (note, index) {
            var li = document.createElement('li');
            li.textContent = note;
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function () {
                deleteNote(index);
            });
            li.appendChild(deleteBtn);
            noteList.appendChild(li);
        });
    }

    function deleteNote(index) {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }
});
