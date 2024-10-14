function toggleCollapse(collapseId) {
    const collapses = ['meeting-notes-collapse', 'meeting-notes-collapse2'];
    collapses.forEach(id => {
        if (id !== collapseId) {
        $('#' + id).collapse('hide');
        }
    });
    }