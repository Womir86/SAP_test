sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'WomirCrudVC/fioriuserlist/test/integration/FirstJourney',
		'WomirCrudVC/fioriuserlist/test/integration/pages/UserList',
		'WomirCrudVC/fioriuserlist/test/integration/pages/UserObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserList, UserObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('WomirCrudVC/fioriuserlist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserList: UserList,
					onTheUserObjectPage: UserObjectPage
                }
            },
            opaJourney.run
        );
    }
);