function toggleCollapse(collapseId) {
    const collapses = [  'meeting-notes-collapse',
                         'meeting-notes-collapse2',
                         'meeting-notes-collapse3',
                         'meeting-notes-collapse4',
                         'meeting-notes-collapse5'];
    collapses.forEach(id => {
        if (id !== collapseId) {
        $('#' + id).collapse('hide');
        }
    });
    }