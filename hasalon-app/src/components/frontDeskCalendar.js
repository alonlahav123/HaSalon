import React from 'react';
import Iframe from 'react-iframe'

function frontDeskCalendar() {
    return(
        <Iframe className='calendar' src="https://calendar.google.com/calendar/b/1/embed?height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FJerusalem&amp;src=NzJxaXJqa2VzZHQ3am5qc3JicHI2NGRma2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233366CC&amp;showTz=1&amp;showCalendars=1&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;showNav=0&amp;showTitle=1&amp;mode=WEEK" style="border:solid 1px #777" width="650" height="500" frameborder="0" scrolling="no"></Iframe>
    );
};

export default frontDeskCalendar;