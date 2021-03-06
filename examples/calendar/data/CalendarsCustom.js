/*!
 * Extensible 1.6.1
 * Copyright(c) Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.define('Extensible.example.calendar.data.CalendarsCustom', {
    statics: {
        getData: function() {
            return {
                "calendars":[{
                    "cal_id"    : "C1",
                    "cal_title" : "Home",
                    "cal_color" : 2
                },{
                    "cal_id"    : "C2",
                    "cal_title" : "Work",
                    "cal_color" : 22
                },{
                    "cal_id"    : "C3",
                    "cal_title" : "School",
                    "cal_color" : 7
                },{
                    "cal_id"    : "C4",
                    "cal_title" : "Sports",
                    "cal_color" : 26
                }]
            };
        }
    }
});
