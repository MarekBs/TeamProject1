function toggleCollapse(collapseId) {
    const collapses = [  'meeting-notes-collapse',
                         'meeting-notes-collapse2',
                         'meeting-notes-collapse3',
                         'meeting-notes-collapse4',
                         'meeting-notes-collapse5',
                         'meeting-notes-collapse6',
                         'meeting-notes-collapse7',
                         'meeting-notes-collapse8',
                         'meeting-notes-collapse9',
                         'meeting-notes-collapse10',
                         'meeting-notes-collapse11',
                         'meeting-notes-collapse12',
                         'meeting-notes-collapse13',
                         'meeting-notes-collapse14',
                         'meeting-notes-collapse15',
                        ];
    collapses.forEach(id => {
        if (id !== collapseId) {
        $('#' + id).collapse('hide');
        }
    });
    }
